import React from "react";
import CodeDemo from "../CodeDemo";
const NoAnimation = ({ sectionId }) => {
  let htmlContent = `<button data-ttooltip data-ttooltip-blunt data-ttooltip-text="Tooltip without Animation" data-ttooltip-pos="top">Hover Here!!</button>`;
  return (
    <>
      <section>
        <span id={sectionId}></span>
        <a href={`#${sectionId}`} className="section-title">
          # No Animation
        </a>
        <p className="section-secondary-title">
          To disable animation, you can use
          <span className="tag bordered">
            data-ttooltip-blunt
          </span> attribute. <br />
        </p>
        <div className="section-wrapper">
          <CodeDemo htmlContent={htmlContent} />
        </div>
      </section>
    </>
  );
};

export default NoAnimation;
