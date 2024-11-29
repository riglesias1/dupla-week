import { useRef } from "react";
import { Link } from 'react-router-dom'
import {
  useGsapDownStagger,
  useGsapShutterUnveil,
  useGsapAppear
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const shutter3 = useRef(null);
  const shutter4 = useRef(null);

  const liArr = [li1, li2, li3];

  useGsapDownStagger(liArr, 1.5);
  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.15, heroRef);
  useGsapShutterUnveil(shutter3, 0.3, heroRef);
  useGsapShutterUnveil(shutter4, 0.45, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <ul className="links">
        <li ref={li1}>
          <Link to="work">Work</Link>
        </li>
        <li ref={li2}>
          <Link to="about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <h1 className="title">
        <span className="ethereal">
          Tristán<span ref={shutter1}></span>
        </span>
        <span className="andperator">
          &<span ref={shutter2}></span>
        </span>
        <span className="canvas">
          Julian<span ref={shutter3}></span>
        </span>
        <span className="trademark">
          ®<span ref={shutter4}></span>
        </span>
      </h1>
    </section>
  );
};

export default Hero;
