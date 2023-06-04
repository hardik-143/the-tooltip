import React, { Fragment, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
const CodeBlock = (data) => {
  const { text, allowCopy } = data;
  const [isCopied, setisCopied] = useState(false);
  const copyText = () => {
    if (!allowCopy) return;
    navigator.clipboard.writeText(text);
    setisCopied(true);
    setTimeout(() => {
      setisCopied(false);
    }, 2000);
  };
  return (
    <Fragment>
      <div className="code-block">
        <pre>
          <code>{text}</code>
        </pre>
        {allowCopy && (
          <button className="copy-btn" onClick={() => copyText()}>
            {isCopied ? <AiOutlineCheckCircle /> : <MdContentCopy />}
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default CodeBlock;
