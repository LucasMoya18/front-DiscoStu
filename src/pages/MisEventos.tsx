import { useEffect, useState } from "react";
import Layout from "../components/Layout"
import Pie from "../components/Pie"
import { Container } from "react-bootstrap"
import './MisEventos.css'
import ReservaCard, { ReservaCardBody } from "../components/ReservaCard";
import { InfoEventosFiltrado } from "../components/InfoEventos";

function MisEventos(){
    document.body.classList.add("cuerpoHome");
    const [reserva, setReservas] = useState([])
    const [usuario,setUsuario] = useState('');
    const [isAuth, setisAuth] = useState(false);


    useEffect(()=>{
        const authStatus = localStorage.getItem('autenticacion');
        const storedUser = localStorage.getItem('usuario');

        setUsuario(storedUser);
        setisAuth(authStatus === 'true');

        const reservasExistentes = localStorage.getItem('reservas')
        setReservas(JSON.parse(reservasExistentes))
    },[])

    function printReservas(){
        console.log(reserva)
    }

    const reservaFiltrado = reserva.filter(item=>
    (usuario ? item.usuario === usuario : true)
    )
    const detallesUsuario = reservaFiltrado.length > 0 ? reservaFiltrado[0] : null;
    let imgData;

    return(
        <>
            <Layout/>
                <Container>
                    <div className="row">

                        <div className="col-0 col-md-2"></div>
                        <div className="col-12 col-md-8 text-light text-center my-5 titulo-evento-especifico">
                            <h1>DETALLES USUARIO</h1>
                        </div>
                        <div className="col-0 col-md-2"></div>

                        <div className="text-center my-5 titulo-evento-especifico">
                            <h2 className="text-light" onClick={printReservas}>Mis reservas</h2>
                        </div>
                        <div className="misReservasDiv">
                            {detallesUsuario ?(
                              detallesUsuario.reservas.map((item,index)=>{
                                imgData = InfoEventosFiltrado(parseInt(item.evento));
                                return(
                                    <>  
                                        <div className="my-5">
                                            <ReservaCard imgRoute={imgData.img}>
                                                <ReservaCardBody title={imgData.titulo} text={imgData.d_resumen} subtext={item.rut} eventId={101}/>
                                            </ReservaCard>
                                        </div>
                                    </>
                                )
                              })): (<></>)}
                        </div>
                    </div>
                </Container>
            <Pie/>
        </>
        
    )
}

export default MisEventos