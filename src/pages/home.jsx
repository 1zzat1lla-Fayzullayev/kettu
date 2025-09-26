import React from "react";
import Header from "../components/header";
import InfoCard from "../components/infoCard";
import PopularTravel from "../components/popularTravel";
import StylingPlaces from "../components/stylingPlaces";
import OurTraveler from "../components/ourTraveler";
import Contact from "../components/contact";

function Home() {
  return (
    <>
      <Header />
      <InfoCard />
      <PopularTravel />
      <StylingPlaces />
      <OurTraveler />
      <Contact />
    </>
  );
}

export default Home;
