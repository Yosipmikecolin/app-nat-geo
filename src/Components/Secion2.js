import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Back from "../Img/back.png";
import Mapa from "../Img/mapa.png";

function Secion2({alto,SetAlto}){


    const [datos,SetDatos] = useState([]);
    const [especies,SetEspecies] = useState([]);
    const estados = [{id:1,estado:"EX"},{id:2,estado:"EW"},{id:3,estado:"CR"},{id:4,estado:"EN"},{id:5,estado:"VU"},{id:6,estado:"NT"},{id:7,estado:"LC"}]

    async function GetData(){
    await fetch("https://api-nat-7zfo3ro34-yosipmikecolin.vercel.app/especies/articulo2")
    .then(res1 => res1.json())
    .then(res2 => SetDatos(res2))
    .catch(e => console.log(e))

    }

    async function GetEspecies(){
        await fetch("https://api-nat-7zfo3ro34-yosipmikecolin.vercel.app/especies")
        .then(res1 => res1.json())
        .then(res2 => SetEspecies(res2[1]))
        .catch(e => console.log(e))
    
        }


    useEffect(()=>{
    GetData();
    GetEspecies();
    },[]);



    function OcultarArticulo(){
        SetAlto({...alto,secion2:"0px;"})
        }

      
    return(

        <Secion alto={alto}>
         <Menu>
                <img src={Back} width={30} alt="Back" onClick={OcultarArticulo}></img>
                <span>Back</span>
            </Menu>
        

        <Articulo>
          <Columna1>
          <Caja1>
          <h3>Territorio de hábitat</h3>
          <img src={Mapa} width={300} alt='territory'></img>
          <h3>Estado de conservación</h3>
          <CajaEstado>
          {estados.map((item)=>{
            if(item.estado === especies.estado){
            return <Estado key={item.estado} fondo>{item.estado}</Estado>
            }else{
            return <Estado key={item.estado} >{item.estado}</Estado>
            }})}
          </CajaEstado>
          <h3>Reino</h3>
          <p>{especies.reino}</p>
          <h3>Clase</h3>
          <p>{especies.clase}</p>
          <h3>Orden</h3>
          <p>{especies.orden}</p>
          <h3>Familia</h3>
          <p>{especies.familia}</p>
            </Caja1>
          
          </Columna1>
          <Columna2>
            {datos.map((item)=>{

                return (
                <Fragment key={item._id}>
                <h1>{item.titulo}</h1>
                <p>{item.descripcion}</p>
                <br></br>
                </Fragment>
                
                )

            })}
         
          </Columna2>
          <Columna3>

            {datos.map((item)=>{

                return <img key={item._id} src={item.imagen} width={400} alt={item.alt}></img>

            })}
          </Columna3>
        </Articulo>

        </Secion>
        
    );


}

const Secion = styled.section`

background-color:white;
transition:700ms ease all;
position:fixed;
overflow-x:hidden;
bottom:0;
height:${props => props.alto ? props.alto : "0px;"} 


`;



const Menu = styled.div`
display:flex;
align-items:center;
padding:30px;
font-size:20px;

span{
    margin:0px 10px;
}

img{
    cursor:pointer;
}

`;

const Articulo = styled.main`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows:auto;
width:100%;
grid-template-areas: 'colum1 colum2 colum3';



@media (max-width:1190px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:auto;
    grid-template-areas: 'colum2 colum2 colum3 colum3'
                    
                         'colum1 colum1 colum1 colum1'

}

@media (max-width:1009px){

    grid-template-columns:1fr;
    grid-template-areas: 'colum2'
    'colum3'
    'colum1'

}

`;

const Columna1 = styled.div`
grid-area:colum1;
`;




const Columna2 = styled.div`
grid-area:colum2;
padding:20px;
display:flex;
width:100%;
flex-direction:column;
font-size:18px;

h1{
    font-weight:700;
    font-size:30px;
   
}

`;


const Columna3 = styled.div`
grid-area:colum3;
padding:20px;

img{
    margin-top:50px;
}

@media (max-width:1190px){

   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;

   img{
    margin:auto;
   }
}
@media (max-width:1009px){

    img{
        margin-top:50px;
        width:100%;
    }
}


}
`;

const Caja1 = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
text-align:center;
img{
    margin:auto;
}

h3{
    font-weight:200;
    color:#f28624;
    margin-top:25px;
}`;


const CajaEstado = styled.div`
display:flex;
justify-content:center;

`;


const Estado = styled.div`

@media (max-width:500px){
    width:25px;
    height:25px;
    font-size:10px;
}
cursor:pointer;
transition:1s ease;
width:35px;
height:35px;
border:solid 2px #000;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
margin:30px 5px;
background-color:${props=> props.fondo && "#f28624;"}
color:${props=> props.fondo && "white;"}



`;

export default Secion2;


