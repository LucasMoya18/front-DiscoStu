import { ReactNode,useState,useEffect } from "react";
import "./EventCard.css";
import './BlogCard.css'

interface Props {
  children: ReactNode;
  imgRoute: string;
}

function BlogCard(props: Props) {
  const { children, imgRoute } = props;
  const [usuario,setUsuario] = useState('');
  const [isAuth, setisAuth] = useState(false);
  const [textoComentario,setComentario] = useState('');
  const [comentarios, setComentarios] = useState<string[]>([]);
  
  useEffect(()=>{
    const authStatus = localStorage.getItem('autenticacion');
    const storedUser = localStorage.getItem('usuario');
    setUsuario(storedUser);
    setisAuth(authStatus === 'true');
  },[])



  function handleComentar(){
    const comentario = `${usuario}: ${textoComentario}`
    setComentarios([...comentarios, comentario]);
  }



  return (
    <>
    <div className="card justify-content-center card-blog-div">
      <div className="row g-0">
        <div className="col-12 col-lg-4">
          <img
            src={imgRoute}
            className={isAuth ? "img-fluid img-card-blog" : "img-fluid img-card-blog img-com-noLog"}
          ></img>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body card-b">{children}</div>
        </div>

        {isAuth ? (<><div className="col-12 card-comentarios-div justify-content-center">
          <div className="caja-comentarios">
            <div className="comentarios">
              {comentarios.map((comentario, index) => (
                    <p key={index}>{comentario}</p>
                  ))}
            </div>
            <div className="input-group mb-3 input-comentario">
              <input type="text" className="form-control" placeholder="Comentario" aria-describedby="button-addon2" onChange={(e)=> {setComentario(e.target.value)}}/>
              <button className="btn btn-comentar" type="button" id="button-addon2" onClick={handleComentar}>Enviar</button>
            </div>
          </div>
        </div></>) : (<></>)}
        
      </div>
    </div>

    
    </>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
  subtext: string;
}

export function BlogCardBody(props: CardBodyProps) {
  const { title, text, subtext } = props;
  return (
    <>
      <h5 className="card-title text-center card-b-Title">{title}</h5>
      <p className="card-text">{text}</p>
      <p className="card-text">
        <small>{subtext}</small>
      </p>
    </>
  );
}
export default BlogCard;
