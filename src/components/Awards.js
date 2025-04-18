import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Awards = () => {
  const footerRef = useRef(null);
  const footerHeadline1 = useRef(null);
  const footerHeadline2 = useRef(null);
  const footerHeadline3 = useRef(null);
  const footerHeadline4 = useRef(null);
  const footerHeadline5 = useRef(null);
  const footerHeadline6 = useRef(null);
  const footerHeadline7 = useRef(null);
  const footerHeadline8 = useRef(null);

  useGsapFooterHeadline(footerHeadline1, footerRef);
  useGsapFooterHeadline(footerHeadline2, footerRef);
  useGsapFooterHeadline(footerHeadline3, footerRef);
  useGsapFooterHeadline(footerHeadline4, footerRef);
  useGsapFooterHeadline(footerHeadline5, footerRef);
  useGsapFooterHeadline(footerHeadline6, footerRef);
  useGsapFooterHeadline(footerHeadline7, footerRef);
  useGsapFooterHeadline(footerHeadline8, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline1}>Dupla de la week <span>x1</span></h1>
      <p ref={footerHeadline2}>Brother Buenos Aires</p>
      <h1 ref={footerHeadline3}>Finalistas Mundialito de Creatividad</h1>
      <p ref={footerHeadline4}>Brother Buenos Aires</p>
      <h1 ref={footerHeadline5}>Mejor batidor de café</h1>
      <p ref={footerHeadline6}>Julian</p>
      <h1 ref={footerHeadline7}>Mejor gelatina a cualquier hora</h1>
      <p ref={footerHeadline8}>Tristán</p>
    </section>
  );
};

export default Awards;
