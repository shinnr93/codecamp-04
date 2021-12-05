import { v4 as uuidv4 } from "uuid";

export default function ItemsListUI(props) {
  return (
    <>
      {/* <div>상품목록</div>
        <div>상품명 : {props.data.fetchUseditems.name}</div>
        <div>가격</div>
    <div>한줄요약</div> */}
      <div>상품목록</div>
      {props.data?.fetchUseditems.map((el) => (
        <div key={uuidv4}>
          <div onClick={props.onClickDetail} id={el._id}>상품명: {el.name}</div>
          <div>가격: {el.price}</div>
          <div>한줄요약 : {el.remarks}</div>
        </div>
      ))}
    </>
  );
}
