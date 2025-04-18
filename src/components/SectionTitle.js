import { useRef } from "react";
import { useGsapLeftWalking } from "../hooks/gsap";

const SectionTitle = ({ title, subtitle = null, styleProps = [] }) => {
  const secTitle = useRef(null);
  const subTitle = useRef(null);

  useGsapLeftWalking(secTitle);
  useGsapLeftWalking(subTitle);

  const optionalMarginStyles = {
    margin: "0 5vw",
    ...styleProps,
  };

  return (
    <>
      <h6 className="section-title" style={optionalMarginStyles} ref={secTitle}>
        {title}
        {subtitle && <span className="section-subtitle" ref={subTitle}>{subtitle}</span>}
      </h6>
    </>
  );
};

export default SectionTitle;
