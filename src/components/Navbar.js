import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGsapDownStagger, useGsapUpward } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const fav = useRef(null);
  const logo = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [fav];

  useGsapDownStagger(liArr, 1.5);
  useGsapDownStagger(favArr, 2.6);
  useGsapUpward(logo, 2.2);


  const location = useLocation()

  useEffect(() => {
    const idLocation = location.pathname.replace('/', '')

    if (idLocation && document.getElementById(idLocation)) {
      setTimeout(() => {
        const element = document.getElementById(idLocation)
        element.scrollIntoView({ behavior: 'smooth' })
      }, 250)
    }
  }, [location.pathname])

  return (
    <div className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="work">Work</Link>
        </li>
        <li ref={li3}>
          <Link to="about">About</Link>
        </li>
      </ul>
      <div className="logo" ref={logo}>
        <Link to="/">
          <h2>Inmemorial</h2>
        </Link>
      </div>
      <div className="favourite-link" ref={fav}>
        <p>
          <Link to="favourites">CREATIVE DUPLE</Link>
        </p>
        <p>
          <Link to="favourites">BASED IN ARG</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
