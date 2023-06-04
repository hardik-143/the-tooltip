import React, { useEffect } from "react";
import anime from "animejs";
const Hero = () => {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".title-wrapper .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".title-wrapper .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 1000,
      delay: (el, i) => 50 * i,
    });
  }, []);
  return (
    <>
      <div className="hero">
        <h1 className="title-wrapper">
          <span className="text-wrapper">
            <span className="letters">The Tooltip</span>
          </span>
        </h1>
        <p className="description">
          <b>the-tooltip</b> lets you add tooltips to your website with ease. <br /> It is a
          very lightweight library with no dependencies and very easy to use.
        </p>
        <hr />
      </div>
    </>
  );
};

export default Hero;
