import React from "react";
import CodeDemo from "../CodeDemo";
const AlwaysVisible = () => {
  let htmlContent = `<button data-ttooltip data-ttooltip-visible data-ttooltip-text="Always Visible Tooltip" data-ttooltip-pos="top">Hover Here!!</button>`;
  return (
    <>
      <section>
        <a href="#alwaysvisible" className="section-title"># Always Visible</a>
        <p className="section-secondary-title">
          Use
          <span className="tag bordered">data-ttooltip-visible</span> attribute
          to make tooltip always visible.
          <br />
        </p>
        <div className="section-wrapper">
          <CodeDemo htmlContent={htmlContent} />
        </div>
      </section>
    </>
  );
};

export default AlwaysVisible;
