import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// 원래는 _id만이었는데 writer, title, contents 다 받아야해
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 매개변수자리는 어떤걸로 해도 상관없지만 안 헷갈리게 보드아이디로 해줌
  // 키밸류가 같으면 생략가능해져서 variables에 보드아이디 생략해줌
  const onClickDelete = (boardId: string) => () => {
    // 사용방법 간단- 먼저 delete보드 요청
    // 원래는 리패치로 보이게 했는데, 매번 그러면 매번 리패치해야되는 불편이 생기니 update함수 사용, 그럼 바로바로 보이게 해준다고 함
    // cache에는 패치로 받은 많은 데이터들이 저장되어 있음, {data}에는 기다렸다가 받은 결과(response)(응답데이터)라고 보면 됨
    deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard; // 삭제된 게시글 ID (플레이그라운드로 확인해주!)

        cache.modify({
          fields: {
            // 목록으로 불러온 패치보드를 수정할 거임
            // 아폴로에선 현재까지 받은 값(기존값)을 prev로 줌
            // prev는 그냥은 못건드려서 readField로 건드려줌
            fetchBoards: (prev, { readField }) => {
              // 원두say
              // 1. 기존의 fetchBoards 10개에서 방금 삭제한 ID를 제외한 9개를 만들기
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards 데이터를 돌려줌

              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // 기존값 10개에서 삭제된걸(1개) 빼면 리패치없이 9개를 띄울 수 있음(삭제된걸 필터링해)
              // 삭제된 게시글 아닌(!==) 게시글만 불러오게 됨 -> 삭제가 안된 9개만 담게 되는거
              // el._id로 바로 다이렉트 접근이 안돼서, readfield 활용해줘야 함

              return { ...newFetchBoards };
              // return 변화될 데이터 - fetchBoards ->얘도 캐시스테이트야
              // 배열이나 객체 리턴할땐 얕은복사로 넘기는거 습관화하기
            },
          },
        });
      },
    });
  };

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "나리",
          password: "123",
          title: "제목이당",
          contents: "내용@@",
        },
      },
      // { data }는 등록하고(요청하고) 받은 응답데이터(response)야
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 이 부분을 통해서 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개로 돌려주게 됨

              // ...prev -> 기존꺼 10개, data.createBoard -> 최근꺼
              // 둘의 순서를 바꾸면 최근게시글이 위로 올라옴
              return [...prev, data.createBoard];
              // return 변경될 데이터 - fetchBoards
            },
          },
        });
      },
    });
  }

  // 목록 10개 불러와서 삭제하고 반영된걸 리패치,, 하는게 아니라 바로 보여주는걸 하려고 함!!
  // 1. 먼저 목록을 불러온다(유즈쿼리 써서)
  // 2. 구조분해할당으로 데이터를 불러온다
  // 3. 맵옆에 el에 빨간줄 뜨는건 위에서 타입을 지정해줌 픽 어쩌고
  return (
    <>
      {data?.fetchBoards.map((el) => (
        // 여기가 목록이 됨
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
