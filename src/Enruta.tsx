
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import Eventos from './pages/Eventos';
import EventoEspecifico from './pages/EventoEspecifico';
import ScrollArriba from './components/ScrollArriba';
import MisEventos from './pages/MisEventos';



function Enruta () {
    return (
        <Router>
            <ScrollArriba/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />}/> 
                <Route path="/eventos" element={<Eventos />}/> 
                <Route path='/eventos/:eventoId' element={<EventoEspecifico/>}/>
                <Route path="/mis-eventos" element={<MisEventos />}/>
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/contacto" element={<Contacto />}/> 
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>

        
    );
}

export default Enruta;