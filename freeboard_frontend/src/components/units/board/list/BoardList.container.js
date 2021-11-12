import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";




export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const { data: best } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  return (
    <BoardListUI
      // delete = {onClickDelete}
      data={data}
      best={best}
    />
  );
}
