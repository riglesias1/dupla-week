import SectionTitle from "../SectionTitle";
import Blog from "../Blog";
import { blogsArr } from "./blogs";

const Favourites = ({ minHeight }) => {
  return (
    <section
      className="favourites wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
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
