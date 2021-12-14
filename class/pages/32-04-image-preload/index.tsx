import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [myLoadedImage, setMyLoadedImage] = useState();
  const [loaded, setLoaded] = useState(false)
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLoadedImage(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(myLoadedImage);
  }

  function onClickButton2(){
      setMyLoadedImage(true)
  }

  return (
    <>
      <h1>안녕하세요 사이트에 오신 것을 환영합니다</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주가</button>
      ====================================================
      {loaded && <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />}
      <button onClick={onClickButton2}>이미지 불러오기</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
}
