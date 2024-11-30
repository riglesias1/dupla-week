import { useRef } from "react";
import {
  useGsapDownStagger,
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
  useGsapAppear(shutter1, 0, heroRef);
  useGsapAppear(shutter2, 0.15, heroRef);
  useGsapAppear(shutter3, 0.3, heroRef);
  useGsapAppear(shutter4, 0.45, heroRef);

  const style = `
    body {
      background-color: black;
      transition: background-color 0.5s;
    }
    .home-link {
      color: white;
    }
  `

  return (
    <section className="hero wrapper" ref={heroRef}>
      <style>{style}</style>
      <ul className="connect-links">
        <li ref={li1}>
          <h2>(LET'S CONNECT)</h2>
        </li>
        <li ref={li2}>
          <a href="mailto:ditulliojulian@gmail.com">
            ditulliojulian@gmail.com
          </a>
          <div className="connect-linkedin scaleup">
            <a href="https://www.linkedin.com/in/juli%C3%A1n-di-tullio-1325551b7" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </li>
        <li ref={li3}>
          <a href="mailto:tristanoshea@gmail.com">
            tristanoshea@gmail.com
          </a>
          <div className="connect-linkedin scaleup">
            <a href="https://twitter.com/CristianMielu" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </li>
      </ul>
      <h1 className="title">
        <span className="ethereal" ref={shutter1}>
          Tristán
        </span>
        <span className="andperator" ref={shutter3}>
          &
        </span>
        <span className="canvas" ref={shutter2}>
          Julian
        </span>
        <span className="trademark" ref={shutter4}>
          ®
        </span>
      </h1>
    </section>
  );
};

export default Hero;
