import { useState } from "react";

export default function CounterStatePage() {
  const [qqq, setQqq] = useState(0);

  function zzz() {
    setQqq(qqq + 1);
  }

  return (
    <div>
      <div>{qqq}</div>
      <button onClick={zzz}>카운터증가</button>
    </div>
  );
}
