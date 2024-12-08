import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./StreetsOfArg.css";

const galleries = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fbondi1.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Fbondi1.jpg&download=1",
    alt: "bondi1"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Fparada.jpg&download=1",
    alt: "parada"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada2.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Fparada2.jpg&download=1",
    alt: "parada2"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada3.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Fparada3.jpg&download=1",
    alt: "parada3"
  },
];


const galleriesTwo = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito1.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Ftito1.jpg&download=1",
    alt: "tito1"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito2.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Ftito2.jpg&download=1",
    alt: "tito2"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito3.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Ftito3.jpg&download=1",
    alt: "tito3"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito4.png&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fthumbnalis%2Ftito4.jpg&download=1",
    alt: "tito4"
  },
];

const galleryTemplate = (image) => {
  return (
    <div className="gallery-item">
      <Image
        className="gallery-image"
        imageClassName="gallery-image"
        src={image.thumbnail}
        zoomSrc={image.src}
        alt={image.alt}
        preview
      />
    </div>
  );
}

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


const StreetsOfArg = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="streets of argentina" subtitle="Flybondi" />
      <p className="soa-title">Contexto</p>
      <p className="soa-description">
        Flybondi, <b>la aerolínea más argentina</b>, que democratizó los vuelos dentro del país, ahora <b>abre sus alas a nuevos destinos internacionales</b>, países que tienen el mismo nombre de calles que recorren a diario los argentinos.
      </p>
      <br />
      <p className="soa-title">Idea</p>
      <p className="soa-description">
        Usamos cada calle como un medio para comunicar que ahora no solo el 24 te deja en EEUU o el 120 en Canadá y así con muchas otras; transformando los recorridos diarios en <b>nuevos destinos</b>.
      </p>
      <p className="soa-description">
        Además para este gran lanzamiento <b>enviamos a choferes</b> que llevan años recorriendo estos  países dentro de Argentina en Bondi para generar ruido y contenido en las redes.
        Y con un micro documental contamos la historia de Tito, el del 24, que tras 13 años pasando por la calle Estados Unidos, finalmente pudo recorrer el verdadero, dejando el bondi estacionado.
      </p>

      <video width="100%" height="auto" controls lazy="true">
        <source src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fflybondi.mp4&fmode=open" type="video/mp4" />
      </video>

      <div className="grid-container">
        {
          galleries.map((gallery, index) => (
            <div className={`grid-item item${index + 1}`} key={index}>
              <Image
                className="grid-image"
                imageClassName="grid-image"
                src={gallery.thumbnail}
                zoomSrc={gallery.src}
                alt={gallery.alt}
                preview
              />
            </div>
          ))
        }
      </div>

      <img
        className="instagram-phone"
        alt="Streets of Argentina"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fposteos.jpg&download=1"
      />

      <Carousel
        value={galleriesTwo}
        numVisible={galleriesTwo.length}
        numScroll={1}
        itemTemplate={galleryTemplate}
        showNavigators={false}
        showIndicators={false}
      />

      <img
        className="gif-streets"
        alt="Streets of Argentina"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fcierre.gif&mode=grid&download=1"
      />

      <p className="soa-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>

      <section className="others">
        <SectionTitle title="otros que te pueden interesar" />
        <div className="others-wrapper">
          <Carousel
            className="carrousel-margin"
            value={allWorks.filter(work => !work.route.includes("streets-of-argentina"))}
            numVisible={3}
            numScroll={1}
            itemTemplate={othersInterestTemplate}
          />
        </div>
      </section>

    </section>
  );
};

export default StreetsOfArg;
