import SectionTitle from "../SectionTitle";
import "./Duolingo.css";

const Duolingo = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Inchequeables" />
      <p className="soa-title">Insight</p>
      <p className="soa-description">
        Mentir en los CV es una práctica común, pero el inglés es el idioma más solicitado en búsquedas laborales y el más fácil de verificar. Las mentiras sobre experiencia pueden pasar desapercibidas; el nivel del idioma, no.

      </p>
      <br />
      <p className="soa-title">Idea</p>
      <p className="soa-description">
        Creamos gráficas que exponen las mentiras comunes en los CV de forma directa y clara, posicionando a Duolingo como la solución ideal para aprender y certificar.
      </p>
      <br />

      <img className="posteo-red" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDuolingo%2Fgrafica1.jpg&download=1" />
      <img className="posteo-red" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDuolingo%2Fgrafica2.jpg&download=1" />

      <p className="soa-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>
    </section>
  );
};

export default Duolingo;
