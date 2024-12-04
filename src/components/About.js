import SectionTitle from "./SectionTitle";
import Footer from "./Footer";

const About = () => {
  const persons = [
    {
      name: "Tristán O'Shea",
      job: "Redactor",
      img: "https://placehold.co/350x400/0079fa/EEE?font=roboto&text=foto%20de%20tristan",
      linkedin: "https://www.linkedin.com/in/tristán-michael-o-shea-aa5a67225/",
      description: `
        Siempre creí que las palabras tienen un poder único. No solo cuentan historias; conectan, despiertan ideas y, a veces, hasta cambian algo en quien las escucha. Soy Tristán, alguien que disfruta explorarlas, dándoles forma hasta encontrar esa chispa que las hace memorables.

        No me considero ningún poeta, sino un hábil curioso. Cada proyecto me lleva a encontrar lo que hace que una idea diga algo más. Como decía Spinetta, “el talento es el hombre en libertad, nace en cualquier persona que se sienta capaz de volar con sus ideas”.

        — Periodista para el Diario Olé 2023 - 2024
        — Content Writer para Jampp 2024 - actualidad
      `,
    },
    {
      name: "Julian Di Tullio",
      job: "Director de arte",
      img: "https://placehold.co/350x400/0079fa/EEE?font=roboto&text=foto%20de%20julian",
      linkedin: "https://www.linkedin.com/in/julián-di-tullio-1325551b7/",
      description: `
        Para mí, cada proyecto es un espacio de experimentación, donde las ideas toman forma gracias a la combinación justa de creatividad, técnica y una mezcla de referencia recolectadas a lo largo de mis 24 años. Mi nombre es Julian, una persona curiosa que siempre esta en la búsqueda de nuevas herramientas y tendencias.

        No se trata solo de hacer cosas lindas, sino transmitir un mensaje y darle un valor agregado a eso.

        — Diseñador freelance 2020-2023
        — Diseñador multimedia para T3H 2023-actualidad
      `,
    },
  ]

  return (
    <>
      <section className="about wrapper">
        <SectionTitle title="tristán&julian" />
        <p className="about-description"></p>
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
