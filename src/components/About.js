import SectionTitle from "./SectionTitle";
import Footer from "./Footer";

const About = () => {
  const persons = [
    {
      name: "Tristán O'Shea",
      job: "Redactor",
      img: "https://placehold.co/350x400/0079fa/EEE?font=roboto&text=foto%20de%20tristan",
      linkedin: "https://www.linkedin.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor in elit porttitor commodo. Sed feugiat, nisl at viverra consectetur, augue odio fringilla lacus, quis lacinia urna metus nec quam. Donec ut massa non nunc cursus fermentum.",
    },
    {
      name: "Julian Di Tullio",
      job: "Backend Developer",
      img: "https://placehold.co/350x400/0079fa/EEE?font=roboto&text=foto%20de%20julian",
      linkedin: "https://www.linkedin.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor in elit porttitor commodo. Sed feugiat, nisl at viverra consectetur, augue odio fringilla lacus, quis lacinia urna metus nec quam. Donec ut massa non nunc cursus fermentum.",
    },
  ]

  return (
    <>
      <section className="about wrapper">
        <SectionTitle title="tristán&julian" />
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          dolor in elit porttitor commodo. Sed feugiat, nisl at viverra
          consectetur, augue odio fringilla lacus, quis lacinia urna metus nec
          quam. Donec ut massa non nunc cursus fermentum.
        </p>
        <section className="persons">
          <p className="about-sub">(MEET US)</p>
          {persons.map((person, index) => (
            <div className="person" key={index}>
              <img src={person.img} alt={person.name} />
              <div className="info-person">
                <div className="line">
                  <h3>{person.name}</h3>
                  <p className="role">{person.job}</p>
                  <p className="description">{person.description}</p>
                </div>
                <div className="social">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
          <p className="about-sub">(AWARDS)</p>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
