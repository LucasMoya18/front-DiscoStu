import Layout from "../components/Layout";
import "./Contacto.css";
import Pie from '../components/Pie';
import Swal from 'sweetalert2'
function Contacto() {
  document.body.classList.add("cuerpoHome");
  
  
  function handleAlerta(evento){
    evento.preventDefault();
    Swal.fire({
      title: "Estas seguro de enviar el mensaje?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, enviar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Enviado!",
          text: "El mensaje ha sido enviado.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
      <Layout />
      <div className="contacto container">
        <div className="row">
          <div className="col-12">
            <h1 className="titulocont text-center my-5">Contactanos!</h1>
          </div>
          <div className="container col-12 col-xl-6">
            <form className="formulario-Cont">
              <div className="mb-2">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input type="Texto" className="form-control" id="nombre" />
              </div>
              <div className="my-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="my-2">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input type="Texto" className="form-control" id="asunto" />
              </div>
              <div className="my-2">
                <label htmlFor="textooo" className="form-label mb-4">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  name=""
                  id="textooo"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <button className="btn btn-primary" onClick={handleAlerta}>Enviar</button>
              
            </form>
            
          </div>
          <div className="col-12 col-xl-6 mt-3 mapa">
            <iframe
              className="mapaUbicacion"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1177.0553571302112!2d-70.66179314734086!3d-33.44369687542515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a93f630c19%3A0xc1680441da8a20aa!2sINACAP%20Santiago%20Centro!5e0!3m2!1ses-419!2scl!4v1717170790059!5m2!1ses-419!2scl"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <Pie/>
      </div>
    </>
  );
}

export default Contacto;
