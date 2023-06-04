import React from "react";
import CodeDemo from "../CodeDemo";
const AlwaysVisible = () => {
  let htmlContent = `<button data-ttooltip data-ttooltip-visible data-ttooltip-text="Always Visible Tooltip" data-ttooltip-pos="top">Hover Here!!</button>`;
  return (
    <>
      <section>
        <h3 className="section-title">Always Visible</h3>
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
