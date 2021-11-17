// import { useRouter } from 'next/router'
// import { gql, useQuery, useMutation } from "@apollo/client";
// import React from 'react';
// import {
//   Bodywrapper,
//   Mainwrapper,
//   Title,
//   WriterWrapper,
//   Writer,
//   Date,
//   Img,
//   ContentsBox,
//   Contents,
//   Youtube,
//   Like,
//   LikeImg,
//   WriterProfile,
//   Relwrapper,
//   Previous,
//   List,
//   Del,
//   Next


import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container"
import BoardCommentList from "../../../../src/components/units/comment/list/BoardCommentList.container"
import BoardCommentWrite from "../../../../src/components/units/comment/write/BoardCommentWrite.container"


  
  
// from "../../../styles/freeboard";

// const FETCH_BOARDS = gql`
//     query fetchBoard($boardId: ID!){
//         fetchBoard(boardId: $boardId){
//         _id
//         writer
//         title
//         contents
//         createdAt
//         }
//     }
// `;


// const DELETE_BOARD = gql`
// mutation deleteBoard($boardId: ID!){
//   deleteBoard(boardId: $boardId)
// }
// `;

// export default function FreeBoardPage() {
//   const router = useRouter()
//   const [deleteBoard] = useMutation(DELETE_BOARD)

//   const {data} = useQuery(FETCH_BOARDS, {
//       variables: {
//           boardId : router.query.Id
//       }
//   })

//   let create = String(data?.fetchBoard.createdAt)
//   create = create.split("T").join("").split("")
//   let createDate = create.slice(0, 10).join("")
//   let createTime = create.slice(10, 15).join("")
//   // create = createDate + "|" + createTime
//   create = `${createDate}  | ${createTime}`

//   async function onClickDelete(event) {
//     try {
//       await deleteBoard({
//         variables: { boardId : data?.fetchBoard._id},
//         refetchQueries: [{ query: FETCH_BOARDS}]
//       })
//       alert("삭제되었습니다")
//       // router.push(//목록)
//     } catch(error){
//       alert(error.message)
//     }
//   }
  
//   return (
//     <div>
//       <Bodywrapper>
//         <Mainwrapper>
//           <>
//             <Title>{data?.fetchBoard.title}</Title>
//             {/* <Id>{data?.fetchBoard._id}</Id> */}
//             <WriterWrapper>
//               작성자
//               </WriterWrapper>
//             <Date>{create}</Date>
//           </>
//           <ContentsBox>
//           <Img src="../../../images/제주도2.jpeg" />
//           <Contents>
//             {data?.fetchBoard.contents}
//             </Contents>
//           <Youtube
//             src="../../../videos/제주도.mp4"
//             width="640"
//             height="480"
//             controls
//           ></Youtube>
//           <div>
//             <Like><LikeImg src="../../../images/좋아요.png" /></Like>
//           </div>
//           </ContentsBox>
//           <WriterProfile>{data?.fetchBoard.writer}</WriterProfile>
//           <Relwrapper>
//           <Previous>◀︎이전 글</Previous>
//           <List>목록</List>
//           <>
//           <Del onClick={onClickDelete}>삭제</Del>
//           </>
//           <Next>다음 글▶︎</Next>
//           </Relwrapper>
//         </Mainwrapper>
//       </Bodywrapper>
//     </div>
//   );
// }







export default function BoardDetailUI(){



  return (
    //컨테이너랑 인덱스js랑 연결
    //컨테이너에서 프리젠터 연결
    <>
    <BoardDetail />
    <BoardCommentList />
    <BoardCommentWrite />
    </>
  )


}