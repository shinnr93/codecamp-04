import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  const onClickCallback = () => {
    const ccc = new XMLHttpRequest();
    ccc.open("get", `http://numbersapi.com/random?min=1&max=200`);
    ccc.send();
    ccc.addEventListener("load", (res: any) => {
      // get 다 끝나면 실행
      const num = res.target.response.split(" ")[0];
      const aaa = new XMLHttpRequest();
      aaa.open("get", `http://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        const aaa2 = new XMLHttpRequest();
        aaa2.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        aaa2.send();
        aaa2.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setMyCallback(result);
        });
      });
    });
  };
  // promise chaning
  /* new Promise((resolve, reject) => {
      외부에 요청하기 또는 비동기 작업하기
      if(성공) resolve()
      if(실패) reject()
  }) */

  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const result = res.data;
        setMyPromise(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    setMyAsyncAwait(res3.data);
  };

  return (
    <>
      <h1>콜백과 친구들</h1>
      <div>
        결과:
        {myCallback.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickCallback}>callback 요청하기</button>
      <div>
        결과:
        {myPromise.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickPromise}>promise 요청하기</button>
      <div>
        결과:
        {myAsyncAwait.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickAsyncAwait}>async await 요청하기</button>
    </>
  );
}
