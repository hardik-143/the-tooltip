import React from "react";
import CodeDemo from "../CodeDemo";

const Colored = ({ sectionId }) => {
  const arr = [
    "blue",
    "red",
    "lime",
    "indigo",
    "yellow",
    "orange",
    "cyan",
    "silver",
    "gray",
    "maroon",
    "olive",
    "green",
    "purple",
    "pink",
    "teal",
    "black",
    "white",
  ];
  return (
    <>
      <section>
        <span id={sectionId}></span>
        <a href={`#${sectionId}`} className="section-title">
          # Colored
        </a>
        <p className="section-secondary-title">
          For Colored tooltip, you can use{" "}
          <span className="tag bordered">data-ttooltip-color</span> attribute.{" "}
          <br />
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
          {arr.splice(0, 4).map((item, index) => {
            let htmlContent = `<button data-ttooltip data-ttooltip-text="${item} tooltip" data-ttooltip-color="${item}">${item} tooltip</button>`;
            return <CodeDemo key={index} htmlContent={htmlContent} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Colored;
