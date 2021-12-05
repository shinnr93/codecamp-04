import { useMutation, useQuery } from "@apollo/client";
import FreeBoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [mywriter, setMyWriter] = useState("");
  const [mypassword, setPW1] = useState("");
  const [checkwriter, setCheckwriter] = useState("");
  const [checkpw, setCheckpw] = useState("");
  const [checktext, setCheckText] = useState("");
  const [checktitle, setCheckTitle] = useState("");
  const [checkaddress, setCheckAdd] = useState("");
  const [checkaddress2, setCheckAdd2] = useState("");
  const [mytitle, setTitle1] = useState("");
  const [mytext, setText] = useState("");
  const [myadd, setAdd] = useState("");
  const [myadd2, setAdd2] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.BoardId },
  });

  async function edit() {
    console.log(router.query.BoardId);
    const updateVariables = {
      updateBoardInput: {},
      password: mypassword,
      boardId: router.query.BoardId,
    };

    if (mytitle !== "") updateVariables.updateBoardInput.title = mytitle;
    if (mytext !== "") updateVariables.updateBoardInput.contents = mytext;

    const result = await updateBoard({
      variables: updateVariables,
    });
    router.push(`/boards/detail/${router.query.BoardId}`);
  }

  function write(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setCheckwriter("");
    }
  }

  function pw(event) {
    setPW1(event.target.value);
    if (event.target.value !== "") {
      setCheckpw("");
    }
  }

  function head(event) {
    setTitle1(event.target.value);
    if (event.target.value !== "") {
      setCheckTitle("");
    }
  }

  function innertext(event) {
    setText(event.target.value);
    if (event.target.value !== "") {
      setCheckText("");
    }
  }

  function add(event) {
    setAdd(event.target.value);
    if (event.target.value !== "") {
      setCheckAdd("");
    }
  }

  function add2(event) {
    setAdd2(event.target.value);
    if (event.target.value !== "") {
      setCheckAdd("");
    }
  }

  async function join() {
    try {
      if (
        mywriter.length >= 1 &&
        mypassword.length >= 1 &&
        mytitle.length >= 1 &&
        mytext.length >= 1
      ) {
        confirm("게시물을 등록하시겠습니까?");
      }

      if (mywriter === "") {
        setCheckwriter("이름을 적어주세요");
      }
      if (mypassword === "") {
        setCheckpw("비밀번호를 적어주세요");
      }

      if (mytitle === "") {
        setCheckTitle("제목을 적어주세요");
      }

      if (mytext === "") {
        setCheckText("내용을 입력해 주세요");
      }

      if (myadd === "") {
        setCheckAdd("주소를 적어주세요");
      }

      if (myadd2 === "") {
        setCheckAdd2("상세 주소를 적어주세요");
      }

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: mywriter,
            password: mypassword,
            title: mytitle,
            contents: mytext,
          },
        },
      });
      result.data.createBoard._id;
      router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const onClickUpload = () => {};
  useEffect(() => {
    
  }, []);
  return (
    <>
      <FreeBoardWriteUI
        write={write}
        checkwriter={checkwriter}
        pw={pw}
        head={head}
        checkpw={checkpw}
        checktitle={checktitle}
        innertext={innertext}
        checktext={checktext}
        add={add}
        checkaddress={checkaddress}
        add2={add2}
        checkaddress2={checkaddress2}
        join={join}
        edit={edit}
        isEdit={props.isEdit}
        data={data}
        upload={onClickUpload}
      />
    </>
  );
}
