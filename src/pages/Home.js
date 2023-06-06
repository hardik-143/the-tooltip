import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import How2Use from "../components/home/How2Use";
import Placements from "../components/home/Placements";
import NoAnimation from "../components/home/NoAnimation";
import AlwaysVisible from "../components/home/AlwaysVisible";
import ClickToggle from "../components/home/ClickToggle";
import Size from "../components/home/Size";
import BetterExperienceModal from "../components/Modals/BetterExperienceModal";
import { initTooltip } from "the-tooltip";
import Colored from "../components/home/Colored";
const Home = () => {
  const checkHash = () => {
    if (window.location.hash) {
      let hash = window.location.hash;
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  };
  useEffect(() => {
    initTooltip(document.querySelectorAll("[data-ttooltip]"));
    checkHash();
  }, []);
  return (
    <>
      <BetterExperienceModal />
      <Hero />
      <How2Use sectionId={'howtouse'} />
      <hr />
      <Placements sectionId={'placements'} />
      <hr />
      <Size sectionId={'size'} />
      <hr />
      <NoAnimation sectionId={'noanimation'} />
      <hr />
      <AlwaysVisible sectionId={'alwysvisible'} />
      <hr />
      <ClickToggle sectionId={'toggleonclick'} />
      <hr />
      <Colored sectionId={'colored'} />
    </>
  );
};

export default Home;
