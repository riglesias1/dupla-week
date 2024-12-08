import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./El10.css";

const galleries = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F1.gif&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fthumbnails%2F1.gif&download=1",
    alt: "el10"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F2.gif&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fthumbnails%2F2.gif&download=1",
    alt: "el10"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F3.gif&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fthumbnails%2F3.gif&download=1",
    alt: "el10"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F4.gif&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fthumbnails%2F4.gif&download=1",
    alt: "el10"
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


const El10 = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="diego" />
      <SectionTitle title="dieguito" styleProps={
        {
          marginTop: "-6rem",
          marginBottom: "-6rem"
        }
      } />
      <SectionTitle title="diegote" subtitle="TyC Sports" />
      <p className="el10-description">
        Este video homenaje, creado para un especial de TyC Sports, conmemora los cuatro años desde la partida de Diego Maradona, un ícono que trascendió el fútbol para convertirse en un símbolo eterno de pasión. Desde su magia en el potrero hasta su legado celestial, esta pieza lo celebra como héroe y como hombre, invitándonos a buscarlo, como siempre, entre las estrellas.
      </p>
      <br />

      <video width="100%" height="auto" controls lazy="true">
        <source src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fdiego.mp4&fmode=open" type="video/mp4" />
      </video>

      <Carousel
        value={galleries}
        numVisible={galleries.length}
        numScroll={1}
        itemTemplate={galleryTemplate}
        showNavigators={false}
        showIndicators={false}
      />

      <img className="footer-firma" alt="firma" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fcierre.gif&mode=grid&download=1" />

      <p className="el10-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>

      <section className="others">
        <SectionTitle title="otros que te pueden interesar" />
        <div className="others-wrapper">
          <Carousel
            className="carrousel-margin"
            value={allWorks.filter(work => !work.route.includes("el-10"))}
            numVisible={3}
            numScroll={1}
            itemTemplate={othersInterestTemplate}
          />
        </div>
      </section>

    </section>
  );
};

export default El10;
