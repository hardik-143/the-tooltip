import React from "react";
import CodeDemo from "../CodeDemo";
const TriggerTooltip = ({ sectionId }) => {
  const arr = [
    {
        name: "click",
        description: "Tooltip will be shown when click on the element.",
        title: "click Here !!",
    },
    {
        name: "contextmenu",
        description: "Tooltip will be shown when right click on the element.",
        title: "Right Click !!",
    },
  ];
  return (
    <>
      <section>
        <span id={sectionId}></span>
        <a href={`#${sectionId}`} className="section-title">
          # Trigger Tooltip
        </a>
        <p className="section-secondary-title">
          To change the trigger event of the tooltip, you can use the{" "}
          <span className="tag bordered">data-ttooltip-trigger</span> attribute.
          <br />
          It can have following values: <br />
        </p>
        <div className="tags-wrapper mb-2">
          {arr.map((item, index) => {
            return (
              <span key={index} className="tag tag-small tag-blue">
                {item.name}
              </span>
            );
          })}
        </div>
        <p className="section-secondary-title">
          <span className="note-text">Note:</span> the default trigger event is{" "}
          <span className="tag bordered">hover</span>.
        </p>
        <div className="section-wrapper">
          {arr.map((item, index) => {
            let htmlContent = `<button data-ttooltip data-ttooltip-text="${item.name} Tooltip" data-ttooltip-pos="top" data-ttooltip-trigger="${item.name}">${item.title} tooltip</button>`;
            return <CodeDemo key={index} htmlContent={htmlContent} />;
          })}
        </div>
      </section>
    </>
  );
};

export default TriggerTooltip;
