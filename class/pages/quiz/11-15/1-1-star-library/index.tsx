import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState("");

  function handleChange(value: Number) {
    setValue(value);
  }
  function abc() {
    alert(value);
  }

  return (
    <>
      <span>
        <Rate onChange={handleChange} onClick={abc} value={value} />
      </span>
      <div>{value}점</div>
    </>
  );
}
