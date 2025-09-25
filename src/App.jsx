import { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/header"));
const InfoCard = lazy(() => import("./components/infoCard"));
const Navbar = lazy(() => import("./components/navbar"));
const PopularTravel = lazy(() => import("./components/popularTravel"));
const StylingPlaces = lazy(() => import("./components/stylingPlaces"));
const OurTraveler = lazy(() => import("./components/ourTraveler"));
const Contact = lazy(() => import("./components/contact"));
const Footer = lazy(() => import("./components/footer"));

function App() {
  return (
    <>
      
      <Suspense fallback={<div className="text-center py-10 flex justify-center items-center min-h-screen"><div className="loader"></div></div>}>
        <Navbar />
        <Header />
        <InfoCard />
        <PopularTravel />
        <StylingPlaces />
        <OurTraveler />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
