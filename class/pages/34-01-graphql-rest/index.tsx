import axios from "axios";

export default function GraphqlRestPage() {
  async function onClickSubmit() {
    const result = await axios.post(
        "https://backend04.codebootcamp.co.kr/graphql",
    {
        query: `
        mutation createBoard {
            createBoard(
                createBoardInput: {
                    writer: "나리",
                    password: "123",
                    title: "제목일듯",
                    contents: "내용"
                }
            ) {
                _id
                writer
            }
        
        }
        `
    });
    console.log(result)
  }

  return <button onClick={onClickSubmit}>등록하기</button>;
}
