import { Modal } from "antd";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemNewUI(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("")
  function onClickAddressButton() {
    setIsOpen(true);
  }
  function onToggleModal() {
    setIsOpen(false);
  }

  function onHandleComplete(data) {
    console.log("나리", data);
    setMyAddress(data?.address)
    // setZoneCode(data.zonecode);
    // setAddress(data.address);
    setIsOpen(false);
  }

  //
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=837627d13badc16987d2445b88e8bed4&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          myAddress,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">직거래 장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  });

  //
  return (
    <>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onHandleComplete} />
        </Modal>
      )}
      상품명:
      <input name="name" type="text" onChange={props.myInputs} />
      한줄요약:
      <input name="remarks" type="text" onChange={props.myInputs} />
      가격:
      <input name="price" type="number" onChange={props.myInputsPrice} />
      내용:
      <input name="contents" type="text" onChange={props.myInputs} />
      주소:
      <button onClick={onClickAddressButton}>우편번호 검색</button>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <button onClick={props.onClickSubmit}>등록하기</button>
    </>
  );
}
