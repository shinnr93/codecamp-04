import { useQuery } from "@apollo/client"
import router from "next/router"
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"

export default function BoardCommentList() {


const {data} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId : router.query.BoardId}
})
    return(
        <>
        {data?.fetchBoardComments.map((el)=> (
            // eslint-disable-next-line react/jsx-key
            <div>
                작성자 : {el?.writer}
                내용 : {el?.contents}
                작성날짜 : {el?.createdAt}
                좋아요 : {el?.rating}
            </div>
        )
        )}
    </>
        )
}