import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactPage from "./pages/contactPage";
import Travels from "./pages/travels";
import Login from "./pages/login";

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
        <BrowserRouter>
          <Navbar />
          <Toaster position="top-center" reverseOrder={false} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/travels" element={<Travels />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
