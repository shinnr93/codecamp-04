import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
  }
  `
  
export default function DynamicProductReadPage(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number : Number(router.query.myNumber) }
    })

    // console.log(data) //자바스크립트 주석


    return(
        <>
        <div>나의 게시물 번호: {router.query.myNumber}</div>
        <div>작성자: {data?.fetchBoard.writer}</div>
        <div>제목: {data?.fetchBoard.title}</div> 
        <div>내용: {data?.fetchBoard.contents}</div>
        <button onClick={()=> router.push(`/08-06-boards/${router.query.myNumber}/edit`)}>수정하기로 이동</button>
        </>
    )

}

//작성자만 바꾸고 싶은데 작성자만 바꾸면 나머지 값들이 빈 값으로 바뀌게 되는 문제있음
//->이건 1111수업에 배움 (9강 2차업데이트)
//화면에 보이게 하는건 default value 가 있는데 이렇게 해도 안 됨
//이유랑 원리도 1111수업에 배움
