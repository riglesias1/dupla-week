import { useRef, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import SectionTitle from "./SectionTitle";
import { useGsapDownStagger } from "../hooks/gsap";
import { allWorks } from "./works/works.js";
import gsap from "gsap";

const ExtendedWork = () => {
  const navigate = useNavigate();

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const li6 = useRef(null);
  const liArr = useMemo(() => [li1, li2, li3, li4, li5, li6], []);
  useGsapDownStagger(liArr, 0.5);

  useEffect(() => {
    liArr.forEach((li) => {
      const el = li.current;
      gsap.set(el, { scale: 1, rotate: 0 });

      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 0.95, rotate: 3, duration: 0.5, ease: "power2.out" });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out" });
      });
    });
  }, [liArr]);

  const handleOnClick = (e) => {
    const image = e.target;
    const id = allWorks.findIndex((img) => img.src === image.src);
    const route = allWorks[id].route;

    navigate(route);
  }

  return (
    <section>
      <SectionTitle title="Work" />
      <div className="extended-work-wrapper">
        {allWorks.map((image) => (
          <div key={image.id} className="extended-work-item" ref={liArr[image.id]}>
            <img src={image.src} alt={image.title} onClick={handleOnClick} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtendedWork;
