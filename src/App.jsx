import Header from "./components/header";
import InfoCard from "./components/infoCard";
import Navbar from "./components/navbar";
import PopularTravel from "./components/popularTravel";
import "font-awesome/css/font-awesome.min.css";
import StylingPlaces from "./components/stylingPlaces";
import TrandingEvent from "./components/trandingEvent";
import OurTraveler from "./components/ourTraveler";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <InfoCard />
      <PopularTravel />
      <StylingPlaces />
      {/* <TrandingEvent /> */}
      <OurTraveler />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
