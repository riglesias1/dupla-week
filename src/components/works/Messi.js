import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionTitle from "../SectionTitle";
import { Link } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import { Image } from 'primereact/image';
import { allWorks } from "./works.js";
import "./Messi.css";


const galleries = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fvp1.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2Fvp1.jpg&download=1",
    alt: "messi1"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fvp2.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2Fvp2.jpg&download=1",
    alt: "messi2"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fvp3.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2Fvp3.jpg&download=1",
    alt: "messi3"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fvp4.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2Fvp4.jpg&download=1",
    alt: "messi4"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fvp5.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2Fvp5.jpg&download=1",
    alt: "messi5"
  },
];


const galleriesTwo = [
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2F1.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2F1.jpg&download=1",
    alt: "aposta1"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2F2.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2F2.jpg&download=1",
    alt: "aposta2"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2F3.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2F3.jpg&download=1",
    alt: "aposta3"
  },
  {
    src: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2F4.jpg&download=1",
    thumbnail: "https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fthumbnails%2F4.jpg&download=1",
    alt: "aposta4"
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

const Messi = () => (
  <ReactFullpage
    licenseKey='qp%pf3P$n8'
    scrollingSpeed={1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <section className="wrapper">
              <SectionTitle title="Apostá en vos" subtitle="Chicos.net" />
              <p className="mess-title">Contexto</p>
              <p className="mess-description">
                Flybondi, <b>la aerolínea más argentina</b>, que democratizó los vuelos dentro del país, ahora <b>abre sus alas a nuevos destinos internacionales</b>, países que tienen el mismo nombre de calles que recorren a diario los argentinos.
              </p>
              <br />
              <p className="mess-title">Idea</p>
              <p className="mess-description">
                Usamos cada calle como un medio para comunicar que ahora no solo el 24 te deja en EEUU o el 120 en Canadá y así con muchas otras; transformando los recorridos diarios en <b>nuevos destinos</b>.
              </p>
              <p className="mess-description">
                Además para este gran lanzamiento <b>enviamos a choferes</b> que llevan años recorriendo estos  países dentro de Argentina en Bondi para generar ruido y contenido en las redes.
              </p>
            </section>
          </div>
          <div className="section">
            <section className="wrapper" style={{ paddingBottom: 0 }}>
              <video width="100%" height="auto" controls lazy="true" style={{ maxHeight: "77svh" }}>
                <source src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FAposta%2Fcaso.mp4&fmode=open" type="video/mp4" />
              </video>
            </section>
          </div>
          <div className="section">
            <section className="wrapper">
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
            </section>
          </div>
          <div className="section">
            <section className="wrapper">
              <Carousel
                value={galleriesTwo}
                numVisible={galleriesTwo.length}
                numScroll={1}
                itemTemplate={galleryTemplate}
                showNavigators={false}
                showIndicators={false}
              />


              <p className="mess-footer">
                Proyecto para taller de redacción en Brother Buenos Aires.
              </p>
            </section>
          </div>
          <div className="section">
            <section style={{ overflow: "hidden", height: "100svh" }}>
              <section className="others" style={{ margin: "3rem -5vw -11vw", height: "100svh" }}>
                <h6 className="section-title" style={{ fontSize: "3rem", padding: 0 }}>
                  otros que te pueden interesar
                </h6>
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
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Messi;
