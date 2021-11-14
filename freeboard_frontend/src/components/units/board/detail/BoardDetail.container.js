import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.BoardId,
    },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD)
  // const [likeBoard] = useMutation(LIKE_BOARD)

  // async function likePlus(){

  //     // try {
  //         const likeResult = await likeBoard({
  //             // variables: {
  //             //     boardId
  //             // }
  //         })
  //         router.
  //         console.log(likeResult)
  //     // } catch(error){
  //     //     alert("오류")
  //     // }

  // }

  let like = data?.fetchBoard.likeCount;

  let create = String(data?.fetchBoard.createdAt);
  create = create.split("T").join("").split("");
  let createA = create.slice(0, 10).join("");
  let createB = create.slice(10, 15).join("");
  create = createA + " / " + createB + "(GMT)";

  function previous() {
    // 이전글 버튼 눌렀을 때
    router.push(`/boards/61886ea95d30bc002aa079db`);
  }

  function next() {
    // 다음글 버튼 눌렀을 때
    router.push(`/boards/61869a985d30bc002aa079aa`);
  }

  function list() {
    router.push(`/boards/list`);
  }

  function edit() {
    router.push(`/boards/detail/${router.query.BoardId}/edit`)
  }

  function onClickDelete() {
    try {
      deleteBoard({
        variables: {
          boardId: data?.fetchBoard._id,
        },
      });
      alert("삭제되었습니다")
      router.push(`/boards/list`)
    } catch (error) {
      alert(error.message);
    }
  }

  function likeButton(){
    likeBoard({
      variables: {
        boardId: data?.fetchBoard._id
      },
      refetchQueries: [
        {query: FETCH_BOARD, variables:{boardId: data?.fetchBoard._id}}
      ]
    })

  }

  return (
    <>
      <BoardDetailUI
        dataTitle={data?.fetchBoard.title}
        dataWriter={data?.fetchBoard.writer}
        dataContents={data?.fetchBoard.contents}
        dataId={data?.fetchBoard._id}
        create={create}
        like={like}
        previous={previous}
        next={next}
        list={list}
        delete={onClickDelete}
        edit={edit}
        likeButton={likeButton}
      />
    </>
  );
}
