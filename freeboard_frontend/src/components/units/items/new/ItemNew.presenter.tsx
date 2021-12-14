import { Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ItemNewUI(props) {
  const [isOpen, setIsOpen] = useState(false);
  function onClickAddressButton() {
    setIsOpen(true);
  }
  function onToggleModal() {
    setIsOpen(false);
  }

  function onHandleComplete(data) {
    console.log(data);
    // setZoneCode(data.zonecode);
    // setAddress(data.address);
    setIsOpen(false);
  }
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
      <button onClick={props.onClickSubmit}>등록하기</button>
    </>
  );
}
