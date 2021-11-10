import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "나리", title: "제목", contents: "내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationBoardPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [Writer, setWriter] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  async function req() {
    const result = await createBoard();
    console.log(result);
  }

  return (
    <>
      작성자
      <input type="text" onChange={onChangeWriter} />
      <br />
      제목
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용
      <input type="text" onChange={onChangeContent} />
      <br />
      <button onClick={req}>GRAPHQL-API 요청하기</button>
    </>
  );
}
