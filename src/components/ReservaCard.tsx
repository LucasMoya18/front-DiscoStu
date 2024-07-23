import { ReactNode } from "react";
import './ReservaCard.css'
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  imgRoute: string;
}

function ReservaCard(props: Props) {
  document.body.classList.add("cuerpoHome");
  const { children, imgRoute } = props;
  return (
    <>
    <div className="card justify-content-center card-blog-div">
      <div className="row g-0">
        <div className="col-4">
          <img
            src={imgRoute}
            className="img-fluid img-reserva"
          ></img>
        </div>
        <div className="col-8">
          <div className="card-body card-b card-misreservas">{children}</div>
        </div>
      </div>
    </div>
    </>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
  subtext:string;
  eventId: number;
}

export function ReservaCardBody(props: CardBodyProps) {
  const { title, text, subtext } = props;
  return (
    <>
      <h5 className="card-title text-center">{title}</h5>
      <p className="card-text caja-texto-mis-reservas text-center">{text}</p>
      <p className="card-text"><small>De: {subtext}</small></p>
    </>
  );
}
export default ReservaCard;