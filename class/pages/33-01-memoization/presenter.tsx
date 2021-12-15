import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다");

  return (
    <>
      <div>===========</div>
      <div>여긴 프리젠터~</div>
      <div>===========</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
