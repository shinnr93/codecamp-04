import { useQuery } from "@apollo/client";
import router from "next/router";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardId },
  });
  return (
    <>
      <BoardCommentListUI 
        data = {data}
      />
    </>
  );
}
