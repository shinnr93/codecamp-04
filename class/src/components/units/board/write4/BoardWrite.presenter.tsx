import { ChangeEvent } from "react";
import { MyInput, MyButton } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from './BoardWrite.types'


export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log(props.data);
  return (
    <>
           작성자: <MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer} /><br />
            제목: <MyInput type="text" onChange={props.bbb} defaultValue={props.data?.fetchBoard.title}/><br />
            내용: <MyInput type="text" onChange={props.ccc} defaultValue={props.data?.fetchBoard.contents}/><br />
            {/* <MyButton onClick={props.ggg ? props.xxx : props.zzz} qqq={props.qqq}>게시물 {props.ggg ? "수정" : "등록"}하기!!!</MyButton> */}

            {!props.ggg && <MyButton onClick={props.zzz} qqq={props.qqq}>게시물 등록하기</MyButton>}
            {props.ggg && <MyButton onClick={props.xxx} qqq={props.qqq}>게시물 수정하기</MyButton>}
    </>
  );
}

//true는 꼭해야하는데 false는 안해도 되ㄴ다는드ㅅ,,.?

//XML => Extensible Markup Language
//HTML => Hyper Text Markup Language
