import { useState } from "react";

export default function RandomNumber() {
  function zzz() {
    const token = Number(
      String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    );
    document.getElementById("qqq").innerText = token;
  }

  return (
    <div>
      <div id="qqq">000000</div>
      <button onClick={zzz}>인증번호전송</button>
    </div>
  );
}
