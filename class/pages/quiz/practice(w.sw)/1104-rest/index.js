import axios from "axios";

export default function RestGetPage() {
  async function req() {
    const result = await axios.get("http://koreanjson.com/users");
    console.log(result);
    console.log(result.data[3].name);
  }

  return (
    <>
      <button onClick={req}>REST-API 요청하기</button>
    </>
  );
}
