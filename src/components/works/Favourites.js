import SectionTitle from "../SectionTitle";
import Blog from "../Blog";
import { blogsArr } from "./blogs";

const Favourites = () => {
  return (
    <section className="favourites wrapper">
      <SectionTitle title="Example Work" />
      <div className="blogs">
        {blogsArr.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
