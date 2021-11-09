import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD } from "./BoardDetail.queries"

export default function BoardDetail(){

    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.myId
        }
    })
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

    // } 좋아요 버튼 눌렀을 때 올라가게 / 더 배우고 해야할 듯




    let like = data?.fetchBoard.likeCount
    let dislike = data?.fetchBoard.dislikeCount

    let create = String(data?.fetchBoard.createdAt)
    create = create.split("T").join("").split("")
    console.log(create)
    let createA = create.slice(0, 10).join("")
    let createB = create.slice(10, 15).join("")
    create = createA + " / " + createB + "(GMT)"

    function previous() {
        // 이전글 버튼 눌렀을 때
        router.push(`/boards/61886ea95d30bc002aa079db`)
    }

    async function next() {
        // 다음글 버튼 눌렀을 때
        router.push(`/boards/61869a985d30bc002aa079aa`)

    }
    return(
        <>
            <BoardDetailUI 
                dataTitle = {data?.fetchBoard.title}
                dataWriter = {data?.fetchBoard.writer}
                dataContents = {data?.fetchBoard.contents}
                dataId = {data?.fetchBoard._id}
                create = {create}
                like = {like}
                dislike = {dislike}
                previous = {previous}
                next = {next}
            />
        </>
    )
} 