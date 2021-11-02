export default function HelloLetPage() {

    function zzz() {
        document.getElementById("qqq").innerText = "반갑습니다"
    }


  return (
    <>
      <div id="qqq">안녕하세요</div>
      <button onClick={zzz}>버튼클릭</button>
    </>
  );
}
// 화면 바꾸는 코드 따로 작성