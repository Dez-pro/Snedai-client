import React from "react";
import Headercitizen from "../components/Headercitizen";
import Herocitizen from "../components/Herocitizen";
import Featurescitizen from "../components/Featurescitizen";
import Footercitizen from "../components/Footercitizen";
import Intro from "../components/CitizenIntro";


const Citizenhome = () => {
  return (
    <div className="bg-gray-50">
      <Headercitizen />
      <Herocitizen />
      <Intro />
      <Featurescitizen /> 
      <Footercitizen />
    </div>
  );
};

export default Citizenhome;