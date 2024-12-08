import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";

const images = [
  {
    id: 1,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2Fmaradona.jpg&download=1",
    title: "Mil vidas - TyC Sports",
    category: "Records",
  },
  {
    id: 2,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2Fmessi.jpg&download=1",
    title: "Messi - chicos.net",
    category: "TV Shows",
  },
  {
    id: 3,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2Fabuela.jpg&download=1",
    title: "Lo aprendí en TikTok",
    category: "Boombox",
  },
  {
    id: 4,
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2Fflybondi.jpg&download=1",
    title: "Flybondi Argentina",
    category: "Records",
  },
];

const ResumeWork = () => {
  return (
    <section className="work">
      <div className="work-wrapper">
        {images.map((image) => (
          <WorkItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default ResumeWork;
