import {  useState } from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import Layout from "../components/Layout";
import Pie from "../components/Pie";
import "./Galeria.css";

function Galeria() {
  document.body.classList.add("cuerpoHome");
  const imgData = [
    {
      id: 1,
      imgSrc: "/src/assets/imgs/Galeria/1.png",
      year: "2021",
      tipoEvento: "Electronica",
    },
    {
      id: 2,
      imgSrc: "/src/assets/imgs/Galeria/2.jpg",
      year: "2018",
      tipoEvento: "Electronica",
    },
    {
      id: 3,
      imgSrc: "/src/assets/imgs/Galeria/3.jpg",
      year: "2021",
      tipoEvento: "DJ",
    },
    {
      id: 4,
      imgSrc: "/src/assets/imgs/Galeria/4.jpg",
      year: "2020",
      tipoEvento: "Rock Latino",
    },
    {
      id: 5,
      imgSrc: "/src/assets/imgs/Galeria/5.jpeg",
      year: "2020",
      tipoEvento: "Rock Latino",
    },
    {
      id: 6,
      imgSrc: "/src/assets/imgs/Galeria/6.webp",
      year: "2020",
      tipoEvento: "Rock Latino",
    },
    {
      id: 7,
      imgSrc: "/src/assets/imgs/Galeria/7.webp",
      year: "2022",
      tipoEvento: "Disco",
    },
    {
      id: 8,
      imgSrc: "/src/assets/imgs/Galeria/8.jpg",
      year: "2024",
      tipoEvento: "Electronica",
    },
    {
      id: 9,
      imgSrc: "/src/assets/imgs/Galeria/9.jpg",
      year: "2024",
      tipoEvento: "Rock",
    },
    {
      id: 10,
      imgSrc: "/src/assets/imgs/Galeria/10.jpg",
      year: "2024",
      tipoEvento: "Rock",
    },
    {
      id: 11,
      imgSrc: "/src/assets/imgs/Galeria/11.jpg",
      year: "2014",
      tipoEvento: "Rock",
    },
    {
      id: 12,
      imgSrc: "/src/assets/imgs/Galeria/12.jpeg",
      year: "2011",
      tipoEvento: "Disco",
    },
    {
      id: 13,
      imgSrc: "/src/assets/imgs/Galeria/13.jpeg",
      year: "2010",
      tipoEvento: "Disco",
    }
  ];

  const [modelo, setModelo] = useState(false);
  const [plantilla, setPlantilla] = useState("");
  const listaYears: string[] = [];
  const listaTipoEvento: string[] = [];
  imgData.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  const [filtro1,setFiltro1] = useState('');
  const [filtro2,setFiltro2] = useState('');

  function getImg(imgSrc: string) {
    setPlantilla(imgSrc);
    setModelo(true);
  }
     
  function handleFiltro1(evento) {
    setFiltro1(evento.target.value !== 'Año' ? evento.target.value : '');
  }

  function handleFiltro2(evento) {
    setFiltro2(evento.target.value !== 'Tipo evento' ? evento.target.value : '');
  }

  const imgDataFiltrado = imgData.filter(item => 
    (filtro1 ? item.year === filtro1 : true) &&
    (filtro2 ? item.tipoEvento === filtro2 : true)
  );



  return (
    <>
      <Layout />
      <div className={modelo ? "zoom open" : "zoom"}>
        <img src={plantilla} />
        <CloseFullscreenIcon onClick={() => setModelo(false)} />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="titulo-galeria text-center text-light"> Galeria</h1>
          </div>
        </div>
      </div>

      <div className="container mb-5 divFiltros">
        <div className="row">

          <div className="col-0 col-lg-2"></div>

          <div className="col-6 col-lg-4">
            <select
              className="form-select"
              id="filtroYear"
              onChange={handleFiltro1}
            >

              <option>Año</option>

              { imgData.map((item,index)=>{
                if (listaYears.includes(item.year)){
                  return null;
                }else{
                  listaYears.push(item.year);
                  return(
                    <option value={item.year} key={index}>{item.year}</option>
                  )
                }
                
              })}
            </select>
          </div>

          <div className="col-6 col-lg-4">
            <select
              className="form-select"
              id="selectTipoEvento"
              onChange={handleFiltro2}

            >
              <option>Tipo evento</option>
              { imgData.map((item,index)=>{
                if (listaTipoEvento.includes(item.tipoEvento)){
                  return null;
                }else{
                  listaTipoEvento.push(item.tipoEvento);
                  return(
                    <option value={item.tipoEvento} key={index}>{item.tipoEvento}</option>
                  )
                }
                
              })}
            </select>
          </div>

          <div className="col-0 col-lg-2"></div>

        </div>
      </div>
      

      <div className="frame-galeria">
        <div className="galeria">
          {imgDataFiltrado.map((item, index) => {
            return (
              <div
                className="fotos"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} />
              </div>
            );
          })}
        </div>
      </div>

      <Pie />
    </>
  );
}

export default Galeria;
