import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ExtendedWork from "./components/ExtendedWork";
import Favourites from "./components/works/Favourites";
import NotFound from "./components/NotFound";

const App = () => {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<ExtendedWork />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* WORKS */}
        <Route path="work/flybondi" element={<Favourites />} />
        <Route path="work/tiktok" element={<Favourites />} />
        <Route path="work/maradona" element={<Favourites />} />
        <Route path="work/messi" element={<Favourites />} />
        <Route path="work/boxeo" element={<Favourites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
