import React from "react";
import CodeBlock from "../CodeBlock";
const How2Use = () => {
  return (
    <section>
      <h3 className="section-title">How to use</h3>
      <div className="section-content">
        <p className="section-secondary-title">
          Import css and js files using CDN:
        </p>
        <CodeBlock
          text={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hardik-143/plugin/the-tooltip/css/the-tooltip.css" />`}
          allowCopy={true}
        />
        <CodeBlock
          text={`<script src="https://cdn.jsdelivr.net/gh/hardik-143/plugin/the-tooltip/js/the-tooltip.js"></script>`}
          allowCopy={true}
        />
        <div className="section-secondary-title">
          there's no need to initialize the-tooltip, it will automatically by
          itself.
        </div>
      </div>
      {/* <div className="section-content pt-3">
        <p className="section-secondary-title">
          If you are using npm, install the-tooltip using npm:
        </p>
        <CodeBlock text={`npm i the-tooltip --save`} allowCopy={true} />
        <p className="section-secondary-title">
          Import css file in your index.js file:
        </p>
        <CodeBlock
          text={`import "the-tooltip/css/the-tooltip.css";`}
          allowCopy={true}
        />
        <p className="section-secondary-title">
          Import initTooltip function in your index.js file:
        </p>
        <CodeBlock
          text={`import { initTooltip } from "the-tooltip";`}
          allowCopy={true}
        />
        <p className="section-secondary-title">
          Initialize the-tooltip using initTooltip function:
        </p>
        <CodeBlock
          text={`initTooltip(document.querySelectorAll("[data-ttooltip]"));`}
          allowCopy={true}
        />
      </div> */}
      <hr />
      <div className="section-secondary-title">
        you must have <span className="tag bordered">data-ttooltip</span>{" "}
        attribute on the element to which you want to add tooltip. <br />
      </div>
      <div className="section-secondary-title m-0">
        Add content of tooltip using{" "}
        <span className="tag bordered">data-ttooltip-text</span> attribute.{" "}
        <br />
      </div>
    </section>
  );
};

export default How2Use;
