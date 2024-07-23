import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";





function Login() {
  document.body.classList.add('cuerpoLog');
  const [usuario, setUsuario] = useState('');
  const [passw, setPassw] = useState("");
  const [textoErr,SetTextoErr] = useState("");
  const { autenticacion, setAutenticacion } = useState(false);
  const navigate = useNavigate();

  

  function clearP(){
    SetTextoErr('');
  }
  
  function handleLogin() {
    if (usuario == ''|| passw == ''){
      SetTextoErr('Error, datos invalidos');
      setInterval(clearP,5000);
    }else{
      localStorage.setItem('autenticacion','true');
      localStorage.setItem('usuario',usuario)
      navigate('/home');
      document.body.classList.remove('cuerpoLog');
    }
  }

  return (
    <div className="contenido-login align-content-center align-items-center justify-content-center"> 
      <div className="formDiv">
        <form className="formulario">
          <div className="text-center">
            <h1 className="titulo">Iniciar sesion</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="UserInput" className="form-label">
              Usuario:
            </label>
            <input
              type="text"
              className="form-control log-inputs"
              id="UserInput"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PasswordImput" className="form-label">
              Contraseña:
            </label>
            <input 
              type="password" 
              className="form-control log-inputs" 
              id="PasswordImput" 
              onChange={(e) => setPassw(e.target.value)}
            />
          </div>
          <div className="divtextoErr">
            <p className="ErrP">{ textoErr }</p>
          </div>
          <div className="justify-content text-center">
            <input
              type="button"
              value="Aceptar"
              className="btn boton-acept "
              onClick={handleLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
