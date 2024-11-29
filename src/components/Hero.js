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
  const andperatorRef = useRef(null);
  const trademarkRef = useRef(null);

  const liArr = [li1, li2, li3];

  useGsapDownStagger(liArr, 1.5);
  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapAppear(andperatorRef, 1.2, heroRef);
  useGsapAppear(trademarkRef, 1.2, heroRef);

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
        <span className="andperator" ref={andperatorRef}>
          &
        </span>
        <span className="canvas">
          Julian<span ref={shutter2}></span>
        </span>
        <span className="trademark" ref={trademarkRef}>
          ®
        </span>
      </h1>
    </section>
  );
};

export default Hero;
