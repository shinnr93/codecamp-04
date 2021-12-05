export default function ItemDetailUI(props) {
  return (
    <>
      <div>상품명{props.data?.fetchUseditem.name}</div>
      <div>한줄요약{props.data?.fetchUseditem.remarks}</div>
      <div>내용{props.data?.fetchUseditem.contents}</div>
      <div>가격{props.data?.fetchUseditem.price}</div>
    </>
  );
}
