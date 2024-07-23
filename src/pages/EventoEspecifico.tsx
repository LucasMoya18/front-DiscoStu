import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import Pie from "../components/Pie"
import { InfoEventosFiltrado } from "../components/InfoEventos";
import './EventoEspecifico.css'
import { Container } from 'react-bootstrap'
import { useState,useEffect } from "react";
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';

function EventoEspecifico(){
    document.body.classList.add("cuerpoHome");
    interface Reserva {
        rut: string;
        evento: string;
    }

    interface UsuarioReserva {
        usuario: string;
        reservas: Reserva[];
    }

    const [ formReservaDesplegado, setFormReserva ] = useState(false);
    const { eventoId } = useParams();
    const detalleEvento = InfoEventosFiltrado(parseInt(eventoId))
    const [ correo,setCorreo ] = useState('')
    const [ rut,setRut ] = useState('')
    const [ error,setError ] = useState(false)

    const [usuario,setUsuario] = useState('');
    const [isAuth, setisAuth] = useState(false);

    const [ reservas, setReservas ] = useState<UsuarioReserva[]>([]);


    useEffect(()=>{
        const authStatus = localStorage.getItem('autenticacion');
        const storedUser = localStorage.getItem('usuario');
        setUsuario(storedUser);
        setisAuth(authStatus === 'true');

    },[])

    function obtenerReservas(){
        const reservasJSON = localStorage.getItem('reservas');
        if (reservasJSON) {
        return JSON.parse(reservasJSON) as UsuarioReserva[];
        } else {
            return [];
        }
    }


    useEffect(() => {
        const reservasObtenidas : UsuarioReserva[] = obtenerReservas()
        setReservas(reservasObtenidas);
        

    }, []);

    function guardarReservas(reservas: UsuarioReserva[]){
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }

    function agregarReserva(usuario: string, nuevaReserva: Reserva){
        setReservas((prevReservas: UsuarioReserva[]) => {
            const usuarioExiste = prevReservas.some(r => r.usuario === usuario);
      
            let nuevasReservas: UsuarioReserva[];
            if (usuarioExiste) {
              nuevasReservas = prevReservas.map(r =>
                r.usuario === usuario
                  ? { ...r, reservas: [...r.reservas, nuevaReserva] }
                  : r
              );
            } else {
              nuevasReservas = [...prevReservas, { usuario, reservas: [nuevaReserva] }];
            }
      
            guardarReservas(nuevasReservas);
      
            return nuevasReservas;
          });
      }


    
    function handleValidacion(evento){
        evento.preventDefault();

        if (correo.includes('@') && (correo.includes('.com') || correo.includes('.cl')) && rut.length == 10 && rut[8] == '-'){
            handleAlerta();
        }else{

            setError(true);

            setTimeout(()=>{
                setError(false);
            },600)
        }
    }

    function handleAlerta(){
        Swal.fire({
          title: "Quieres reservar el evento?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Reservar!",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            agregarReserva(usuario, {rut:rut , evento: eventoId })
            Swal.fire({
              title: "Reservado!",
              text: "El evento ha sido reservado",
              icon: "success"
            });
            setFormReserva(false);
          }
        });
      }





    return(
        <>  
            <Layout/>
            {detalleEvento ? (
                <>
                <div className="div-adelante">
                <Container>
                    {isAuth ? (<div className={formReservaDesplegado ? "formReservaDiv open align-items-center" : "formReservaDiv align-items-center"}>
                        <CloseIcon onClick={()=> setFormReserva(false)}/>
                        <div className={error ? 'reserva error-div-form' : 'reserva'}>
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Direccion Correo:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setCorreo(e.target.value)}/>
                                <div id="emailHelp" className="form-text">Nunca compartiremos tus datos con nadie.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Rut" className="form-label">Rut:</label>
                                <input type="text" className="form-control" id="Rut" onChange={(e)=> setRut(e.target.value)}/>
                            </div>
                            <button className="btn btn-primary" onClick={handleValidacion}>Aceptar</button>
                        </form>
                        </div>    
                    </div>) : (
                        <>
                        <div className={formReservaDesplegado ? "formReservaDiv open align-items-center" : "formReservaDiv align-items-center"}>
                            <CloseIcon onClick={()=> setFormReserva(false)}/>
                            <div className="reserva">
                                <h1>Usuario sin sesion activa</h1>
                            </div>
                        </div></>)}
                    <div className="row">
                        <div className="col-0 col-md-2"></div>
                        <div className="col-12 col-md-8 text-light text-center my-5 titulo-evento-especifico">
                            <h1>{detalleEvento.titulo}</h1>
                        </div>
                        <div className="col-0 col-md-2"></div>



                        <div className="col-12 text-center my-5 justify-content-center align-content-center">
                            <img src={detalleEvento.img} className="img-fluid img-evento-detalle" />
                        </div>



                        <div className="col-12 text-light  my-3 descripcion-evento-especifico">
                            <p className="text-center">{detalleEvento.descripcion}</p>
                        </div>

                        

                        <div className="col-0 col-md-4"></div>
                        <div className="col-12 col-md-4 text-light my-5 titulo-evento-especifico">
                            <h1 className="text-center">Artistas:</h1>
                        </div>
                        <div className="col-0 col-md-4"></div>



                        <div className="col-12 my-3 text-light text-center descripcion-evento-especifico">
                            <p>{detalleEvento.artistas_invitados}</p>
                        </div>

                        <div className="col-12 align-content-center text-center">
                            <button className="btn btn-primary btn-reserva" onClick={()=>setFormReserva(true)}>Reservar</button>
                        </div>


                        <div className="col-6 ratio ratio-16x9 my-5">
                            <iframe src={detalleEvento.yt_url} title={detalleEvento.titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>


                    </div>
                
                </Container>
            <Pie/>
            </div>
            </>) : 
            (<><h1 className="text-center text-light my-5">ERROR 404 - EVENTO NO ENCONTRADO</h1></>)}
        </>
    )
}

export default EventoEspecifico