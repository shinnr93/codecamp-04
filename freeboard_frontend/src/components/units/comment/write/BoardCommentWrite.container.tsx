// import { useMutation } from "@apollo/client"
// import router from "next/router";
// import { useState } from "react"
// import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
// import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
// import BoardCommentWriteUI from "./BoardCommentWrite.presenter";


// export default function BoardCommentWrite(props){
//     const [myWriter, setMyWriter] = useState("");
//     const [myPassword, setMyPassword] = useState("");
//     const [myContents, setMyContents] = useState("");
//     const [myStar, setMyStar] = useState("");
    
//     const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
//     const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
    
//     function onChangeWriter(event) {
//         setMyWriter(event.target.value)
//     }

//     function onChangePassword(event) {
//         setMyPassword(event.target.value)
//     }

//     function onChangeContents(event) {
//         setMyContents(event.target.value)
//     }

//     function onChangeStar(value: number) {
//         setMyStar((value));
//     }

//     async function onClickWrite(){
//         try {
//             await createBoardComment({
//                 variables: {
//                     createBoardCommentInput: {
//                         writer: myWriter,
//                         password: myPassword,
//                         contents: myContents,
//                         rating: myStar
//                     },
//                     boardId: String(router.query.BoardId)
//                 },
//                 refetchQueries: [
//                     {
//                         query: FETCH_BOARD_COMMENTS,
//                         variables: { boardId: router.query.BoardId}
//                     }
//                 ]
//             })
//         } catch (error) {
//             if (error instanceof Error) alert(error.message)
//         }
//     }

//     async function onClickUpdate() {
//         if(!myContents) {
//             alert("내용이 수정되지 않았습니다")
//             return
//         }
//         if (!myPassword) {
//             alert("비밀번호가 입력되지 않았습니다")
//             return
//         }

//         try {
//             if (!props.el?._id) return;
//             await updateBoardComment({
//                 variables: {
//                     updateBoardCommentInput: { contents: myContents},
//                     password: myPassword,
//                     boardCommentId: props.el?._id
//                 },
//                 refetchQueries: [
//                     {
//                         query: FETCH_BOARD_COMMENTS,
//                         variables: { boardId: router.query.BoardId}
//                     }
//                 ]
//             })
//         } catch (error) {
//             alert(error.message);
//           }
//         }
        


//     return(
//         <BoardCommentWriteUI 
//             onChangeMyWriter={onChangeWriter}
//             onChangeMyPassword={onChangePassword}
//             onChangeMyContents={onChangeContents}
//             onClickWrite={onClickWrite}
//             onClickUpdate={onClickUpdate}
//             onChangeStar={onChangeStar}
//             isEdit={props.isEdit}
//             el={props.el}
//             myContents={myContents}
//         />
//     );
// }

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myStar, setMyStar] = useState(0);

  const [createBoardComment] =
    useMutation<
      Pick<IMutation, "createBoardComment">,
      IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] =
    useMutation<
      Pick<IMutation, "updateBoardComment">,
      IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setMyContents(event.target.value);
  }

  function onChangeStar(value: number) {
    setMyStar(value);
  }

  async function onClickWrite() {
      console.log(myWriter)
      console.log(myPassword)
      console.log(myContents)
      console.log(myStar)
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: myStar,
          },
          boardId: router.query.BoardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  async function onClickUpdate() {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!myPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    console.log(myContents)
    console.log(props.el?._id)
    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: myContents },
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContents={onChangeMyContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onChangeStar={onChangeStar}
      isEdit={props.isEdit}
      el={props.el}
      myContents={myContents}
    />
  );
}
