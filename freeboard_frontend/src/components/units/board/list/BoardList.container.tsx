import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";
import {useRouter} from 'next/router'



export default function BoardList() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS);
  const { data: best } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  function boardDetail(event){
    router.push(`/boards/detail/${event.target.id}`)
  }

  return (
    <BoardListUI
      // delete = {onClickDelete}
      data={data}
      best={best}
      boardDetail={boardDetail}
    />
  );
}
