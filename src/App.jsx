import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

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
      <Suspense
        fallback={
          <div className="text-center py-10 flex justify-center items-center min-h-screen">
            <div className="loader"></div>
          </div>
        }
      >
        <Navbar />
        <Header />
        <InfoCard />
        <PopularTravel />
        <StylingPlaces />
        <OurTraveler />
        <Contact />
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </>
  );
}

export default App;
