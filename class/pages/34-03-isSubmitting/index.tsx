import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const inputsInit = {
  writer: "",
  title: "",
  contents: "",
  password: "",
};

export default function IsSubmittingPage() {
  const {formState} = useForm()
  formState.isSubmitting

  const [isSubmitting, setIsSubitting] = useState(false);
  const [inputs, setInPuts] = useState(inputsInit);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInputs =
    (name: String) => (event: ChangeEvent<HTMLInputElement>) => {
      setInPuts((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };

  async function onClickSubmit() {
    setIsSubitting(true);
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...inputs } },
      });
      console.log(result);
      Modal.confirm({ content: "등록 성공! " });
      // router.push로 result.data.createBoard._id
      setIsSubitting(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      작성자 <input type="text" onChange={onChangeInputs("writer")} />
      <br />
      비밀번호 <input type="password" onChange={onChangeInputs("password")} />
      <br />
      제목 <input type="text" onChange={onChangeInputs("title")} />
      <br />
      내용 <input type="text" onChange={onChangeInputs("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
