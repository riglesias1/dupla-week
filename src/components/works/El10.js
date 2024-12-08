import SectionTitle from "../SectionTitle";
import "./El10.css";

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
      <SectionTitle title="diegote" subtitle="subtitle" />
      <p className="el10-description">
        Este video homenaje, creado para un especial de TyC Sports, conmemora los cuatro años desde la partida de Diego Maradona, un ícono que trascendió el fútbol para convertirse en un símbolo eterno de pasión. Desde su magia en el potrero hasta su legado celestial, esta pieza lo celebra como héroe y como hombre, invitándonos a buscarlo, como siempre, entre las estrellas.
      </p>
      <br />

      <iframe
        src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fdiego.mp4&fmode=open"
        height="700"
        style={{ border: "none", width: "100%", marginTop: "4rem" }}
        allowFullScreen
        title="Streets of Argentina"
      ></iframe>

      <div className="gallery">

        <div className="gallery-item">
          <img className="gallery-image" alt="el10" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F1.gif&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" alt="el10" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F2.gif&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" alt="el10" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F3.gif&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" alt="el10" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2F4.gif&download=1" />
        </div>

      </div>

      <img className="footer-firma" alt="firma" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FDiego%2Fcierre.gif&mode=grid&download=1" />

      <p className="el10-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>





    </section>
  );
};

export default El10;
