import { useRef } from "react";
import {
  useGsapContactLeftShutter,
  useGsapContactRightShutter,
} from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const Contact = ({ minHeight = false }) => {
  const contactRef = useRef(null);
  const contactLeftShutter = useRef(null);
  const contactRightShutter = useRef(null);

  useGsapContactLeftShutter(contactLeftShutter, contactRef);
  useGsapContactRightShutter(contactRightShutter, contactRef);

  return (
    <section
      className="contact wrapper"
      ref={contactRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Contact" />
      <div className="contact-wrapper">
        <div className="contact-left">
          <span>Flybondi</span>
          <img
            src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=flybondi.jpg&download=1"
            alt="Flybondi Argentina"
          />
          <span className="left-shutter" ref={contactLeftShutter}></span>
        </div>
        <div className="contact-right">
          <span>Lo aprendí en TikTok</span>
          <img
            src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=abuela.jpg&download=1"
            alt="Abuela siendo DJ"
          />
          <span className="right-shutter" ref={contactRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
