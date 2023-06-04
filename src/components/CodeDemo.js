import React from "react";
import CodeBlock from "./CodeBlock";

const CodeDemo = ({ htmlContent }) => {
  return (
    <div className="code-demo-wrapper">
      <CodeBlock text={htmlContent} allowCopy={true} />
      <div
        className="demo"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default CodeDemo;
