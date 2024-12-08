import SectionTitle from "./SectionTitle";
import Awards from "./Awards";

const About = () => {
  return (
    <>
      <section className="about wrapper">
        <SectionTitle title="tristán&julian" />
        <p className="about-description"></p>
        <section className="persons">
          <p className="about-sub">(MEET US)</p>
          <div className="person">
            <img src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=About%2Fperfil-tristan.jpg&download=1" alt="Tristán O'Shea" />
            <div className="info-person">
              <div className="line">
                <h3>Tristán O'Shea</h3>
                <p className="role">Redactor</p>
                <p className="description"><br />
                  Siempre creí que las palabras tienen un poder único. No solo cuentan historias; conectan, despiertan ideas y, a veces, hasta cambian algo en quien las escucha. Soy Tristán, alguien que disfruta explorarlas, dándoles forma hasta encontrar esa chispa que las hace memorables.<br />
                  <br />
                  No me considero ningún poeta, sino un hábil curioso. Cada proyecto me lleva a encontrar lo que hace que una idea diga algo más. Como decía Spinetta, “el talento es el hombre en libertad, nace en cualquier persona que se sienta capaz de volar con sus ideas”.<br />
                  <br />
                  Periodista para el Diario Olé <b>2023 - 2024</b><br />
                  Content Writer para Jampp <b>2024 - Actualidad</b><br />
                </p>
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/tristán-michael-o-shea-aa5a67225/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="person">
            <img src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=About%2Fperfil-julian.jpg&download=1" alt="Julian Di Tullio" />
              <div className="info-person">
                <div className="line">
                <h3>Julian Di Tullio</h3>
                <p className="role">Director de arte</p>
                <p className="description"><br />
                  Para mí, cada proyecto es un espacio de experimentación, donde las ideas toman forma gracias a la combinación justa de creatividad, técnica y una mezcla de referencia recolectadas a lo largo de mis 24 años. Mi nombre es Julian, una persona curiosa que siempre esta en la búsqueda de nuevas herramientas y tendencias.<br />
                  <br />
                  No se trata solo de hacer cosas lindas, sino transmitir un mensaje y darle un valor agregado a eso.<br />
                  <br />
                  Diseñador freelance <b>2020 - 2023</b><br />
                  Diseñador multimedia para T3H <b>2023 - Actualidad</b><br />
                </p>
                </div>
                <div className="social">
                  <a
                  href="https://www.linkedin.com/in/julián-di-tullio-1325551b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
          </div>
          <p className="about-sub">(AWARDS)</p>
        </section>
        <Awards />
      </section>
    </>
  );
};

export default About;
