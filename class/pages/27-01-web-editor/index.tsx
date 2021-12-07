// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})

export default function WebEditorPage() {
  function handleChange(value: string) {
    console.log(value);
  }

//   if (process.browser) {
//     console.log("아임 브라우저");
//   } else {
//     console.log("아엠 프론트엔드 서버");
//   }

  return (
    <>
      작성자 <input type="text" />
      <br />
      비밀번호 <input type="password" />
      <br />
      제목 <input type="text" />
      <br />
      내용 <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
}
