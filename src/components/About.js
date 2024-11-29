import SectionTitle from "./SectionTitle";
import Footer from "./Footer";

const About = ({ minHeight }) => {
  return (
    <>
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
        dolor in elit porttitor commodo. Sed feugiat, nisl at viverra
        consectetur, augue odio fringilla lacus, quis lacinia urna metus nec
        quam. Donec ut massa non nunc cursus fermentum.
      </p>
      <p>
        Integer luctus, est nec interdum faucibus, lorem nisi sollicitudin eros,
        nec malesuada ligula elit ac lorem. Fusce et ante sit amet libero
        pharetra tristique. Nunc vulputate, sapien at porttitor feugiat, justo
        dui interdum ipsum, et interdum velit felis a magna.
      </p>
    </section>
      <Footer />
    </>
  );
};

export default About;
