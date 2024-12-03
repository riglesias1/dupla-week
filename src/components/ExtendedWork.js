import { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SectionTitle from "./SectionTitle";
import { useGsapDownStagger } from "../hooks/gsap";
import gsap from "gsap";


const images = [
  {
    id: 0,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=flybondi.jpg&download=1",
    route: "flybondi",
  },
  {
    id: 1,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=abuela.jpg&download=1",
    route: "tiktok",
  },
  {
    id: 2,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=maradona.jpg&download=1",
    route: "maradona",
  },
  {
    id: 3,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=messi.jpg&download=1",
    route: "messi",
  },
  {
    id: 4,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=pelea.jpg&download=1",
    route: "boxeo",
  },
];

const ExtendedWork = () => {
  const navigate = useNavigate();

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const liArr = [li1, li2, li3, li4, li5];

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
    const id = images.findIndex((img) => img.src === image.src);
    const route = images[id].route;

    navigate(`/work/${route}`);
  }

  return (
    <section className="work">
      <SectionTitle title="Work" />
      <div className="extended-work-wrapper">
        {images.map((image) => (
          <div key={image.id} className="extended-work-item" ref={liArr[image.id]}>
            <img src={image.src} alt={image.title} onClick={handleOnClick} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtendedWork;
