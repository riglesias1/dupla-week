import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./Spotify.css";

const galleries = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fvp1.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fthumbnails%2Fvp1.jpg&download=1",
    alt: "spotify1"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fvp2.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fthumbnails%2Fvp2.jpg&download=1",
    alt: "spotify2"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fvp3.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fthumbnails%2Fvp3.jpg&download=1",
    alt: "spotify3"
  },
];

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

const ContextHighlight = ({ text }) => {
  return <span className="context-wrapper">{text}</span>;
};

const Spotify = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="La Melodia de la Protesta" subtitle="Spotify + Amnistía internacional" />
      <p className="tiktok-title">Contexto</p>
      <p className="tiktok-description">
        Mucha gente de entre 18 y 29 años, en su mayoría, no ve la protesta como un derecho humano esencial. El problema es que esta audiencia nunca fue silenciada. Nunca le quitaron su derecho a expresarse. Y uno no sabe lo que tiene hasta que lo pierde. Sin embargo, protestan día a día sin darse cuenta.
      </p>
      <p className="tiktok-title">Insight</p>
      <p className="tiktok-description">
        La música siempre ha sido una herramienta clave de protesta. Hoy, protestamos por entradas caras o shows cancelados, pero antes, la música era la única vía para alzar la voz contra la opresión. En muchos países, los gobiernos silenciaron a las sociedades y prohibieron su derecho a expresarse.
      </p>
      <p className="tiktok-title">Acción</p>
      <p className="tiktok-description">
        Inspirados en el Wrapped de Spotify, enviamos notificaciones push con rankings absurdos de artistas populares. Esto provocó una oleada de indignación en redes, donde los usuarios protestaron masivamente. Las interacciones fueron rastreadas por una IA en la landing de Amnistía y, al llegar a 50.000, revelamos el spot final de la campaña para despertar la misma indignación que sienten ante otras injusticias en su vida diaria. A la par, realizamos vías públicas que reforzaron el mensaje, recordando a todos que su voz es fundamental para la lucha por los derechos humanos.
      </p>

      <br />

      <video width="100%" height="auto" controls lazy="true">
        <source src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FSpotify%2Fcasospoty.mp4&fmode=open" type="video/mp4" />
      </video>

      <div className="grid-container-spotify">
        {
          galleries.map((gallery, index) => (
            <div className={`grid-item-spotify item${index + 1}`} key={index}>
              <Image
                className="grid-image-spotify"
                imageClassName="grid-image-spotify"
                src={gallery.thumbnail}
                zoomSrc={gallery.src}
                alt={gallery.alt}
                preview
              />
            </div>
          ))
        }
      </div>

      <p className="tiktok-footer withoutmargin">
        <b>Dirección de arte: </b> Di Tullio Julián - Szapiro Carolina - Zeiler Yesica
      </p>

      <p className="tiktok-footer withoutmargin">
        <b> Redacción: </b> O'Shea Tristán
      </p>

      <p className="tiktok-footer">
        Proyecto para creatividad integral en Brother Buenos Aires.
      </p>

      <section className="others">
        <SectionTitle title="otros que te pueden interesar" />
        <div className="others-wrapper">
          <Carousel
            value={allWorks.filter(work => !work.route.includes("spotify"))}
            numVisible={3}
            numScroll={1}
            itemTemplate={othersInterestTemplate}
          />
        </div>
      </section>

    </section>
  );
};

export default Spotify;
