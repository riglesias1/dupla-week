import SectionTitle from "../SectionTitle";
import "./StreetsOfArg.css";

const StreetsOfArg = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="streets of argentina" />
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

      <iframe
        src="https://archivos.dots.com.ar/wl/?id=svy6jl8Wr9evHVcJdbOkum1OD3jA2yHM&fmode=open"
        height="700"
        style={{ border: "none", width: "100%", marginTop: "4rem" }}
        allowFullScreen
        title="Streets of Argentina"
      ></iframe>

      <div className="gallery">

        <div className="gallery-item">
          <img className="gallery-image" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fbondi1.jpg&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada.png&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada2.jpg&download=1" />
        </div>

        <div className="gallery-item">
          <img className="gallery-image" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fparada3.png&download=1" />
        </div>

      </div>

      <img className="posteo-red" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fposteos.jpg&download=1" />

      <div className="gallery-line">
        <div className="gallery-item-line">
          <img className="gallery-image-line" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito1.png&download=1" />
        </div>
        <div className="gallery-item-line">
          <img className="gallery-image-line" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito2.png&download=1" />
        </div>
        <div className="gallery-item-line">
          <img className="gallery-image-line" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito3.png&download=1" />
        </div>
        <div className="gallery-item-line">
          <img className="gallery-image-line" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Ftito4.png&download=1" />
        </div>
      </div>

      <img className="posteo-red" src="https://archivos.dots.com.ar/wl/?id=eh46iwnUqSwE06PrxQZEzkBKVMCHcOIh&path=Works%2FFlybondi%2Fcierre.gif&mode=grid&download=1" />

      <p className="soa-footer">
        Proyecto para taller de redacción en Brother Buenos Aires.
      </p>





    </section>
  );
};

export default StreetsOfArg;
