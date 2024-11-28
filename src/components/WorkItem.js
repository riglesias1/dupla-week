import { useRef } from "react";
import {
  useGsapWorkImg,
  useGsapWorkTitle,
  useGsapWorkCategory,
} from "../hooks/gsap";

const WorkItem = ({ src, title, category }) => {
  const workImg = useRef(null);
  const workTitle = useRef(null);
  const workCategory = useRef(null);

  useGsapWorkImg(workImg);
  useGsapWorkTitle(workTitle, workImg);
  useGsapWorkCategory(workCategory, workImg);

  return (
    <div className="work-item">
      <h1 className="work-item-title" ref={workTitle}>
        {title}
      </h1>
      <p className="work-item-category" ref={workCategory}>
        {category}
      </p>
      <div
        ref={workImg}
        style={{ backgroundImage: `url(${src})` }}
        className="work-item-image"
      ></div>
    </div>
  );
};

export default WorkItem;
