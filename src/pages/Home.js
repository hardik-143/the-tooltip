import React from "react";
import Hero from "../components/home/Hero";
import How2Use from "../components/home/How2Use";
import Placements from "../components/home/Placements";
import NoAnimation from "../components/home/NoAnimation";
import AlwaysVisible from "../components/home/AlwaysVisible";
import ClickToggle from "../components/home/ClickToggle";
import Size from "../components/home/Size";
import BetterExperienceModal from "../components/Modals/BetterExperienceModal";

const Home = () => {
  return (
    <>
      <BetterExperienceModal />
      <Hero />
      <How2Use />
      <hr />
      <Placements />
      <hr />
      <Size />
      <hr />
      <NoAnimation />
      <hr />
      <AlwaysVisible />
      <hr />
      <ClickToggle />
    </>
  );
};

export default Home;
