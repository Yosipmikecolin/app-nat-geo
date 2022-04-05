import styled from "styled-components";
import {Link,NavLink,useNavigate} from "react-router-dom";
import Logo from "../Img/logo.png";
import { Fragment } from "react";
import Articulos from "./Articulos";


function Locations(){


  const navegacion = useNavigate();

  function MostrarNoticia(titulo){
    const url = titulo.replaceAll(" ","-");
    navegacion("/noticias/"+url.toLowerCase())

  }


  const data = [

    {
      id:1,
      titulo:"Una leona adopta cachorros huérfanos",
      imagen:"https://images.unsplash.com/photo-1509870355929-2aff33c0b71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    },


    {
      id:2,
      titulo:"Cocodrilos en “Los Jardines de la Reina” de Cuba",
      imagen:"https://images.unsplash.com/photo-1586832169141-4da0f336c570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    },


    {
      id:3,
      titulo:"Los 12 descubrimientos más fascinantes del reino animal de 2021",
      imagen:"https://images.unsplash.com/photo-1517472195107-3ed40a7c4d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    },


    {
      id:4,
      titulo:"Debido al cambio climático, muchas aves del Amazonas se están encogiendo",
      imagen:"https://images.unsplash.com/photo-1587483123858-d383b9e2afd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    },

    {
      id:5,
      titulo:"Criatura marina cautivadora se desliza por el agua",
      imagen:"https://images.unsplash.com/photo-1508711570938-357de49d6b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    },

    {
      id:6,
      titulo:"Es cierto: las anguilas eléctricas pueden saltar del agua para atacar",
      imagen:"https://images.unsplash.com/photo-1632807423974-86722c63e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800"
    }

  ];


return(
    <Fragment>
      
    <header>
     <Menu>
     <Link to="/"> <img src={Logo} width={100} alt='logo'></img></Link>
     <ul>
     <li><NavLink to="/">Species</NavLink></li>
     <li><NavLink to="/noticias">Noticias</NavLink></li>
     <li><NavLink to="/viajes">Viajes</NavLink></li>
     <li><NavLink to="/cultura">Cultura</NavLink></li>
     </ul>
     </Menu>
     </header>

     <Container>

        
        {data.map((item)=>{

            return <Caja key={item.id}>
            <img src={item.imagen} width="100%" height="60%" alt="deforestacion"></img>
            <Parrafo>
            <p onClick={()=>{MostrarNoticia(item.titulo)}}>{item.titulo}</p>
            </Parrafo>
            
          </Caja>          


        })}

    

     </Container>



     <Articulos></Articulos>
     </Fragment>
);

}


const Menu = styled.nav`
width:100%;
display: flex;
justify-content:space-between;
align-items:center;
padding:20px;
font-size:18px;
background:#0F0E0E;




ul > li{
  display:inline-block;
  margin:0px 40px 0px 0px;
}

a{
  color: white;
  background:none;
}

a.active{

    color:#f28624;
    font-weight:700;
}

@media (max-width:850px){
  display:none;
}

`;


const Container = styled.section`
width:80%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:50px;
padding:40px;
margin:auto;

@media (max-width:500px){

  width:100%;
}


`;


const Caja = styled.div`
width:450px;
height:330px;
display:flex;
flex-direction:column;
overflow:hidden;

img{
  object-fit:cover;
}
`;


const Parrafo = styled.div`

width:100%;
height:100%;
background-color:black;
color:white;
padding:20px 10px 0px 20px;
border-bottom:5px solid #f28624;
cursor:pointer;

@media (max-width:500px){

  h1{

    font-size:20px;
  }
}


`;

export default Locations