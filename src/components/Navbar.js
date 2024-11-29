import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGsapDownStagger, useGsapUpward } from "../hooks/gsap";

const Navbar = () => {
  const fav = useRef(null);
  const logo = useRef(null);

  const favArr = [fav];

  useGsapDownStagger(favArr, 2.6);
  useGsapUpward(logo, 2.2);

  return (
    <div className="navbar wrapper">
      <Link to="/" className="logo home-link" ref={logo}>
        <h2>HOME</h2>
      </Link>
      <div className="home-link" ref={fav}>
        <p>
          CREATIVE DUPLE
        </p>
        <p>
          BASED IN ARG
        </p>
      </div>
    </div>
  );
};

export default Navbar;
