import { useQuery, useMutation } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST, DELETE_BOARD } from "./BoardList.queries";
import {useRouter} from 'next/router'



export default function BoardList() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS);
  const { data: best } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  function boardDetail(event){
    router.push(`/boards/detail/${event.target.id}`)
  }

  function boardWrite(event){
    router.push(`/boards/new/${event.target.id}`)
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

  return (
    <BoardListUI
      // delete = {onClickDelete}
      data={data}
      best={best}
      boardDetail={boardDetail}
      boardWrite={boardWrite}
      boardDelete={onClickDelete}
    />
  );
}
