import { useState } from "react";
import ReactDom from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function CopyPage() {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const onChangeInput = (value) => {
    setValue(value);
    setCopied(false);
  };
  return (
    <div>
      <input value={value} onChange={onChangeInput} />

      <CopyToClipboard text={value} onCopy={() => setValue({ copied: true })}>
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>

      <CopyToClipboard text={value} onCopy={() => setValue({ copied: true })}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
}
