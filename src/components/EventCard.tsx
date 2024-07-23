import { ReactNode } from "react";
import './EventCard.css'
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  imgRoute: string;
}

function EventCard(props: Props) {
  document.body.classList.add("cuerpoHome");
  const { children, imgRoute } = props;
  return (
    <div className="card justify-content-center card-div bg-transparent">
    <img src={imgRoute} className="card-img-top img-fluid img-card" alt="..."></img>
      <div className="card-body card-b">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
  subtext: string;
  artistas:string;
  eventId: number;
}

export function EventCardBody(props: CardBodyProps) {
  const { title, text, subtext,eventId, artistas } = props;
  const navegar = useNavigate();

  function verMasEvento(){
    navegar(`/eventos/${eventId}`)
  }
  return (
    <>
      <h5 className="card-title text-center card-b-Title">{title}</h5>
      <p className="card-text">{text}</p>
      <p className="card-text">Artistas : {artistas}</p>
      <p className="card-text"><small>{subtext}</small></p>
      <button className="btn btn-card text-light" onClick={verMasEvento}>Ver más</button>
    </>
  );
}
export default EventCard;