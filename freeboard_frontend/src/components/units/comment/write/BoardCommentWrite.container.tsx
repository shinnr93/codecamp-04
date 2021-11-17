import { useMutation } from "@apollo/client"
import router from "next/router";
import { useState } from "react"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";


export default function BoardCommentWrite(props){
    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myContents, setMyContents] = useState("");
    const [myStar, setMyStar] = useState("");
    
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
    
    function onChangeWriter(event) {
        setMyWriter(event.target.value)
    }

    function onChangePassword(event) {
        setMyPassword(event.target.value)
    }

    function onChangeContents(event) {
        setMyContents(event.target.value)
    }

    function onChangeStar(value: number) {
        setMyStar((value));
    }

    async function onClickWrite(){
        try {
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: myWriter,
                        password: myPassword,
                        contents: myContents,
                        rating: myStar
                    },
                    boardId: String(router.query.BoardId)
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.BoardId}
                    }
                ]
            })
        } catch (error) {
            if (error instanceof Error) alert(error.message)
        }
    }

    async function onClickUpdate() {
        if(!myContents) {
            alert("내용이 수정되지 않았습니다")
            return
        }
        if (!myPassword) {
            alert("비밀번호가 입력되지 않았습니다")
            return
        }

        try {
            if (!props.el?._id) return;
            await updateBoardComment({
                variables: {
                    updateBoardCommentInput: { contents: myContents},
                    password: myPassword,
                    boardCommentId: props.el?._id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.BoardId}
                    }
                ]
            })
        } catch (error) {
            alert(error.message);
          }
        }
        


    return(
        <BoardCommentWriteUI 
            onChangeMyWriter={onChangeWriter}
            onChangeMyPassword={onChangePassword}
            onChangeMyContents={onChangeContents}
            onClickWrite={onClickWrite}
            onClickUpdate={onClickUpdate}
            onChangeStar={onChangeStar}
            isEdit={props.isEdit}
            el={props.el}
            myContents={myContents}
        />
    );
}