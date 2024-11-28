import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4842487/pexels-photo-4842487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Arcade playtime for 90's kids",
    category: "Arcade Games",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "No signal - no transmission",
    category: "TV",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/12668238/pexels-photo-12668238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Retro Closures",
    category: "Boombox",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/12204293/pexels-photo-12204293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "Vinyl Record",
  },
];

const Work = () => {
  return (
    <section className="work">
      <SectionTitle title="Work" needMargin={true} />
      <div className="work-wrapper">
        {images.map((image) => (
          <WorkItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Work;
