import { useEffect, useState } from "react";
import "./Navbar1.css";
import { Link, NavLink } from "react-router-dom";

function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [usuario,setUsuario] = useState('');
  const [isAuth, setisAuth] = useState(false);
  
  useEffect(()=>{
    const authStatus = localStorage.getItem('autenticacion');
    const storedUser = localStorage.getItem('usuario');

    setUsuario(storedUser);
    setisAuth(authStatus === 'true');
  },[])

  function handleLogout(){
    setUsuario('');
    setisAuth(false);

    localStorage.removeItem('autenticacion');
    localStorage.removeItem('usuario');

  }
  return (
    <nav className="NavDiv navbar text-center">
      <Link to="/" className="title">
        <img
          src="/src/assets/imgs/DISCORECHARGEEED.png"
          alt=""
          className="img-fluid img-LogoNav"
        />
      </Link>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        {isAuth ? (<>
          <li className="userli">
            <NavLink to="/mis-eventos"> Usuario:  {usuario} </NavLink>
          </li>
        </>): (<> </>)}
        
        <li className="">
          <NavLink to="/eventos">Eventos</NavLink>
        </li>
        <li className="">
          <NavLink to="/galeria">Galeria</NavLink>
        </li>
        <li className="">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="">
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        {isAuth ? (<>
          <li className="">
              <button className="btn botonLogin" onClick={handleLogout}>
                <Link to="/" className="nav-link text-light">
                  Cerrar sesion
                </Link>
              </button>
            </li>
          </>
          ) : (
            <>
            <li className="">
            <button className="btn botonLogin">
              <Link to="/Login" className="nav-link text-light">
                Iniciar Sesion
              </Link>
            </button>
            </li>
            </>
          ) }
      </ul>
    </nav>
  );
}

export default Navbar1;
