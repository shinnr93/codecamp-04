export default function ItemNewUI(props) {
  return (
    <>
      상품명:
      <input name="name" type="text" onChange={props.myInputs} />
      한줄요약:
      <input name="remarks" type="text" onChange={props.myInputs} />
      가격:
      <input name="price" type="number" onChange={props.myInputsPrice} />
      내용:
      <input name="contents" type="text" onChange={props.myInputs} />
      <button onClick={props.onClickSubmit}>등록하기</button>
    </>
  );
}
