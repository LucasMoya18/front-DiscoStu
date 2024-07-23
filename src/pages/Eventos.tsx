import Layout from "../components/Layout"
import InfoEventos from "../components/InfoEventos";
import Pie from "../components/Pie";
import EventCard, {EventCardBody} from "../components/EventCard";

function Eventos(){
    const eventos = InfoEventos();
    return(

        <>
            <Layout/>
            <div className="container">
                <div className="row">
                    <div className="col-12 div-titulo-eventospag text-center my-5">
                        <h1 className="text-light">EVENTOS</h1>
                    </div>

                    {eventos.map((item)=>{
                        return(
                            <div className="col-12 col-md-6 text-center justify-content-center align-content-center d-flex mb-5" key={item.id}>
                                <EventCard imgRoute={item.img}>
                                    <EventCardBody
                                        title={item.titulo}
                                        text={item.d_resumen}
                                        subtext={item.fecha}
                                        artistas={item.artistas_invitados}
                                        eventId={item.id}
                                    />
                                </EventCard>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Pie/>
        </>
    )
}

export default Eventos