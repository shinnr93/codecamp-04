import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    //     const board = collection(getFirestore(firebaseApp), "board");
    //     await addDoc(board, {
    //       writer: "나리",
    //       title: "제목",
    //       contents: "내용",
    //     });
    //   }

    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      seller: "영희",
      name: "카메라",
      contents: "내용",
    });
  }

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 연습 페이지입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
