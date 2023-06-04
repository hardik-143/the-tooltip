import React from "react";
import CodeDemo from "../CodeDemo";
const ClickToggle = () => {
  let htmlContent = `<button data-ttooltip data-ttooltip-text="Click to toggle Toogle Tooltip" data-ttooltip-pos="top" data-ttooltip-toggle="click">Click Here!!</button>`;
  return (
    <>
      <section>
        <a href="#toggleonclick" className="section-title"># Toggle on click</a>
        <p className="section-secondary-title">
          To show tooltip on click, use
          <span className="tag bordered">data-ttooltip-toggle</span> attribute
          with value <span className="tag tag-blue">click</span>.
          <br />
        </p>
        <div className="section-wrapper">
          <CodeDemo htmlContent={htmlContent} />
        </div>
      </section>
    </>
  );
};

export default ClickToggle;
