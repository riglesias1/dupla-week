import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const minHeight = true;
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About minHeight={minHeight} />} />
        <Route path="contact" element={<Contact minHeight={minHeight} />} />
        <Route
          path="favourites"
          element={<Favourites minHeight={minHeight} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
