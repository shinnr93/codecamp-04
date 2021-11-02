//let 활용법

export default function HelloLetPage() {
  function hhh() {
    document.getElementById("qqq").innerText = "반갑습니다";
  }

  return (
    <>
      <button id="qqq" onClick={hhh}>
        안녕하세요
      </button>
    </>
  );
}
