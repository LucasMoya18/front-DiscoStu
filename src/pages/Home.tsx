import Layout from "../components/Layout";
import "./home.css";
import EventCard, { EventCardBody } from "../components/EventCard";
import Pie from "../components/Pie";
import { useEffect, useState } from "react";

function Home() {
  document.body.classList.add("cuerpoHome");

  const [hora, setHora] = useState(48);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (segundos <= 0) {
        setSegundos(59);
        if (minutos == 0) {
          setMinutos(59);
          setHora(hora - 1);
        } else {
          setMinutos(minutos - 1);
        }
      } else {
        setSegundos(segundos - 1);
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, [segundos, minutos, hora]);

  return (
    <>
      <Layout />
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center d-flex img-Dstu">
            <img
              src="/src/assets/imgs/BailaTodaLaNoche.png"
              alt="Dance Palace IMG"
              className="img-fluid my-5"
            />
          </div>
          <div className="col-12 titulo-Home-Eventos text-center">
            <h1 className="">EVENTOS DESTACADOS</h1>
          </div>
          <div className="col-12 col-md-6 justify-content-center align-content-center d-flex mb-5 text-center" key={101}>
            <EventCard imgRoute="/src/assets/imgs/img-eventos/disco101.jpg">
              <EventCardBody
                title="Fiesta Disco Electrónica en Santiago"
                text="Una noche mágica de música electrónica y luces brillantes en Disco Stu en Santiago."
                artistas="David Guetta, Martin Garrix, Armin van Buuren, Steve Aoki"
                subtext="15 de agosto de 2024"
                eventId={101}
              />
            </EventCard>
          </div>
          <div className="col-12 col-md-6 justify-content-center align-content-center d-flex mb-5 text-center" key={102}>
            <EventCard imgRoute="/src/assets/imgs/img-eventos/disco102.jpg">
              <EventCardBody
                title="Rock & Roll Night en Disco Stu Valparaíso"
                text="Una noche de rock & roll épica en Disco Stu Valparaíso con las mejores bandas del género."
                artistas="Foo Fighters, Linkin Park, The Killers, Arctic Monkeys"
                subtext="20 y 21 de septiembre de 2024"
                eventId={102}
              />
            </EventCard>
          </div>
          <div className="col-12 text-light text-center mb-5">
            <h1 className="titulo-home-tiempo">
              Tiempo restante para proximo evento!!!
            </h1>
            <h2 className="home-temporizador">
                {String(hora).padStart(2, '0')}:{String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
            </h2>
          </div>
          <div className="col-12 titulo-Home-Eventos text-center">
            <h1 className="">PROMOCIONES ESPECIALES</h1>
          </div>
          <div className="col-12 col-md-6 justify-content-center align-content-center d-flex mb-5">
            <img
              src="/src/assets/imgs/2x1cine.jpg"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-12 col-md-6 justify-content-center align-content-center d-flex mb-5">
            <img
              src="/src/assets/imgs/PromoCabritas.jpg"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
          
          <div className="col-12">
            <Pie />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
