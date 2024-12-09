import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./Tiktok.css";

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


const Tiktok = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Lo aprendí en TikTok" subtitle="Tiktok" />
      <p className="tiktok-title">Contexto</p>
      <p className="tiktok-description">
        TikTok tiene 1.690 millones de usuarios, pero mucha gente no se la descarga porque cree que el contenido es una pérdida de su tiempo. La perciben como un espacio de contenido superficial, desconectado de lo que realmente los apasiona.
      </p>
      <p className="tiktok-title">Observación</p>
      <p className="tiktok-description">
        Sin importar tu edad, género o cuán inusuales sean tus intereses, TikTok es un lugar donde podés aprender a potenciar tus pasiones. La plataforma ofrece contenido educativo que permite llevar tus habilidades al siguiente nivel.
      </p>
      <p className="tiktok-title">Ejecución</p>
      <p className="tiktok-description">
        "Lo Aprendí en TikTok" es una campaña gráfica que muestra a personas realizando actividades inesperadas, acompañado de una cifra de videos disponibles sobre el tema. Así, transformamos la percepción de la plataforma, resaltando que en TikTok cualquier pasión puede encontrar su espacio.
      </p>

      <img
        className="instagram-phone-tiktok"
        alt="Tiktok"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FTiktok%2Fvp.jpg&download=1"
      />

      <img
        className="instagram-phone-tiktok"
        alt="Tiktok2"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FTiktok%2Fvp2.jpg&download=1"
      />

      <img
        className="instagram-phone-tiktok"
        alt="Tiktok3"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FTiktok%2Fvp3.jpg&download=1"
      />

      <img
        className="instagram-phone-tiktok"
        alt="Tiktok footer1"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FTiktok%2Ffooter1.jpg&download=1"
      />

      <img
        className="instagram-phone-tiktok"
        alt="Tiktok footer2"
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FTiktok%2Ffooter2.jpg&download=1"
      />

      <p className="soa-footer">
        Proyecto para creatividad integral en Brother Buenos Aires.
      </p>

      <section className="others">
        <SectionTitle title="otros que te pueden interesar" />
        <div className="others-wrapper">
          <Carousel
            value={allWorks.filter(work => !work.route.includes("tiktok"))}
            numVisible={3}
            numScroll={1}
            itemTemplate={othersInterestTemplate}
          />
        </div>
      </section>

    </section>
  );
};

export default Tiktok;
