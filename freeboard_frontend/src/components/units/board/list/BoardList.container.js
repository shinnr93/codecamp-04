import { useQuery } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"




export default function BoardList(){

const { data } = useQuery(FETCH_BOARDS)




    return(
        <BoardListUI 
        // delete = {onClickDelete}
        data = {data}
        />

    )



}