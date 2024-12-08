import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ExtendedWork from "./components/ExtendedWork";
import StreetsOfArg from "./components/works/StreetsOfArg";
import El10 from "./components/works/El10";
import Duolingo from "./components/works/Duolingo";
import Messi from "./components/works/Messi";

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
        <Route path="work/streets-of-argentina" element={<StreetsOfArg />} />
        <Route path="work/el-10" element={<El10 />} />
        <Route path="work/duolingo" element={<Duolingo />} />
        <Route path="work/messi" element={<Messi />} />
        <Route path="work/tiktok" element={<StreetsOfArg />} />
        <Route path="work/spotify" element={<StreetsOfArg />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
