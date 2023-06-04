import React, { useEffect } from "react";
import { initTooltip } from "the-tooltip";
import CodeDemo from "../CodeDemo";
const NoAnimation = () => {
  let htmlContent = `<button data-ttooltip data-ttooltip-blunt data-ttooltip-text="Tooltip without Animation" data-ttooltip-pos="top">Hover Here!!</button>`;
  useEffect(() => {
    initTooltip(document.querySelectorAll("[data-ttooltip]"));
  }, []);
  return (
    <>
      <section>
        <h3 className="section-title">No Animation</h3>
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
