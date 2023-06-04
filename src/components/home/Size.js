import React, { Fragment, useEffect } from "react";
import { initTooltip } from "the-tooltip";
import CodeDemo from "../CodeDemo";

const Size = () => {
  const arr = ["small", "medium", "large", "fit"];
  useEffect(() => {
    initTooltip(document.querySelectorAll("[data-ttooltip]"));
  }, []);
  return (
    <Fragment>
      <section>
        <h3 className="section-title">Size</h3>
        <p className="section-secondary-title">
            For Size of tooltip, you can use{" "}
          <span className="tag bordered">data-ttooltip-size</span>{" "}
          attribute. <br />
          It can have following values: <br />
        </p>
        <div className="tags-wrapper mb-2">
          {arr.map((item, index) => {
            return (
              <span key={index} className="tag tag-small tag-blue">
                {item}
              </span>
            );
          })}
        </div>
        <div className="section-wrapper">
          {arr.map((item, index) => {
            let htmlContent = `<button data-ttooltip data-ttooltip-text="${item}" data-ttooltip-pos="top" data-ttooltip-size="${item}">${item} tooltip</button>`;
            return <CodeDemo key={index} htmlContent={htmlContent} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Size;
