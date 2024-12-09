import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./Duolingo.css";

const othersInterestTemplate = (item) => {
  return (
    <div className="other-gallery-item">
      <Link to={item.route}>
        <Image
          className="other-gallery-image"
          imageClassName="other-gallery-image"
          src={item.src}
          alt={item.title}
        />
      </Link>
    </div>
  );
}

const Duolingo = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Inchequeables" subtitle="Duolingo" />
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

      <img className="posteo-red" alt="duolingo" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDuolingo%2Fthumbnails%2Fgrafica1.jpg&download=1" />
      <img className="posteo-red" alt="duolingo" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDuolingo%2Fthumbnails%2Fgrafica2.jpg&download=1" />

      <p className="soa-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>

      <section className="others">
        <SectionTitle title="otros que te pueden interesar" />
        <div className="others-wrapper">
          <Carousel
            value={allWorks.filter(work => !work.route.includes("duolingo"))}
            numVisible={3}
            numScroll={1}
            itemTemplate={othersInterestTemplate}
          />
        </div>
      </section>

    </section>
  );
};

export default Duolingo;
