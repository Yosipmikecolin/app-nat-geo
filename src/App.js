import styled from 'styled-components';
import Play from "./Img/play.png";
import Mapa from "./Img/mapa.png";
import Flecha from "./Img/flecha.png"
import 'animate.css';
import {useEffect, useState} from 'react';
import Articulo1 from './Components/Secion1';
import Articulo2 from './Components/Secion2';
import Articulo3 from './Components/Secion3';
import Articulo4 from './Components/Secion4';
import Articulo5 from './Components/Secion5';
import './App.css';
import { Fragment } from 'react/cjs/react.development';
import Imagen1 from "./Img/imagen1.jpg";
import Imagen2 from "./Img/imagen2.jpg";
import Imagen3 from "./Img/imagen3.jpg";
import Imagen4 from "./Img/imagen4.jpg";
import Imagen5 from "./Img/imagen5.jpg";

function App() {



  const data = [
    {
        "_id": "61f85566551e5cdcb0ab03da",
        "titulo": "Spurfowl cuello rojo",
        "subtitulo": "SPECIES OF AMERICA",
        "descripcion": "Ligeramente más pequeño que un pollo doméstico. El macho de colores brillantes es inconfundible con densas manchas blancas, mientras que la hembra es más monótona de color marrón en general. Esta es un ave de los hábitats de bosques rocosos y de matorral en la península india y se encuentra principalmente en parejas o en pequeños grupos. Las aves son generalmente tímidas y no muy vocales a diferencia de otros miembros de la familia. Cuando se les molesta, se escabullen a través de la maleza y rara vez se acercan al ala. Da un fuerte y rápidamente repetido \"chur, chur, chur\" y el macho también da un burbujeante y desplumado \"chugak\" cuando se enrojece.",
        "imagen": Imagen1,
        "estado": "NT",
        "nombre_cientifico": "Galloperdix spadicea",
        "reino": "Animalia",
        "clase": "Aves",
        "familia": "Phasianidae",
        "orden": "Galliformes"
    },
    {
        "_id": "61f855b0551e5cdcb0ab03dc",
        "titulo": "Zorro gris",
        "subtitulo": "SPECIES OF AMERICA",
        "descripcion": "Astucia, inteligencia y agilidad definen a este escurridizo animal. Pertenece a la familia de los cánidos y suelen tener un tamaño pequeño. Su carácter independiente y solitario no ha permitido que hayan sido domesticados, sin embargo en ocasiones son muy útiles para acabar con ciertas plagas en las plantaciones de fruta. En cambio, se han convertido en una especie invasora por ejemplo en Australia, donde fueron introducidos de manera artificial y se han convertido en los responsables de la extinción de otras especies.",
        "imagen": Imagen2,
        "estado": "LC",
        "clase": "Mammalia",
        "familia": "Canidae",
        "nombre_cientifico": "Urocyon cinereoargenteus",
        "orden": "Carnivora",
        "reino": "Animalia"
    },
    {
        "_id": "61f855de551e5cdcb0ab03de",
        "titulo": "Elefante africano",
        "subtitulo": "SPECIES OF AFRICA",
        "descripcion": "El elefante africano de sabana es un mamífero proboscideo de la familia de los elefántidos.​ Es el mayor mamífero terrestre que existe en la actualidad. Se trata de una de las tres últimas especies de proboscídeos que sobreviven hoy en día, siendo las otras el elefante africano de bosque y el elefante asiático.",
        "imagen": Imagen3,
        "estado": "CR",
        "clase": "Mammalia",
        "familia": "Elephantidae",
        "nombre_cientifico": "Loxodonta africana",
        "orden": "Proboscidea",
        "reino": "Animalia"
    },
    {
        "_id": "61f85604551e5cdcb0ab03e0",
        "titulo": "Iguana verde",
        "subtitulo": "SPECIES OF AFRICA",
        "descripcion": "La iguana verde, también conocida como iguana común es una especie de la familia Iguanidae. ​ Es un gran lagarto arbóreo. Mide hasta 2 m de longitud de cabeza a cola. Los machos alcanzan entre 30 y 40 cm de longitud hocico-cloaca, las hembras cerca de 10 cm; cola extremadamente larga y algo aplanada lateralmente. ",
        "imagen": Imagen4,
        "estado": "VU",
        "clase": "Sauropsida",
        "familia": "guanidae",
        "nombre_cientifico": "Iguana",
        "orden": "Squamata",
        "reino": "Animalia"
    },
    {
        "_id": "61f85630551e5cdcb0ab03e2",
        "titulo": "Martín pescador",
        "subtitulo": "SPECIES OF ASIA",
        "descripcion": "Presente en casi todos los ríos y humedales de la Península hasta hace relativamente poco tiempo, el martín pescador es una de las especies más damnificadas por el deterioro experimentado por las aguas dulces de nuestro país durante las últimas décadas. De espectacular plumaje y vuelo rapidísimo, este coraciforme necesita taludes arenosos para excavar su nido, así como una abundante población de pequeños peces, larvas de insectos acuáticos y anfibios para alimentarse.",
        "imagen": Imagen5,
        "estado": "NT",
        "clase": "Aves",
        "familia": "Alcedinidae",
        "nombre_cientifico": "Alcedo atthis",
        "orden": "Coraciiformes",
        "reino": "Animalia"
    }
]


  //CLASE DE MOSTRAR
  const [ClassAnimation,SetClassAnimation] = useState("animate__animated animate__fadeInDown");
  const [alto,SetAlto] = useState({secion1:"0px;",secion2:"0px;",secion3:"0px;",secion4:"0px;",secion5:"0px;"});
  const [numero,SetNumero] = useState(1);
  const [item,SetItem] = useState(0);
  const estados = [

    {id:1,
     estado:"EX"
    },
    {id:2,
      estado:"EW"
    },
    {id:3,
      estado:"CR"
    },
    {id:4,
      estado:"EN"
    },
    {id:5,
      estado:"VU"
    },
    {id:6,
      estado:"NT"
    },
    {id:7,
      estado:"LC"
    }

  ]


  

  //MUESTRA EL ARTICULO CORRESPODIENTE
  function MostrarArticulo(){

    if(numero === 1){
      SetAlto({...alto,secion1:"100%;"});
    }else if(numero === 2){
      SetAlto({...alto,secion2:"100%;"});
    }else if(numero === 3){

      SetAlto({...numero,secion3:"100%;"});
    }else if(numero === 4){
      SetAlto({...numero,secion4:"100%;"});
    }else if(numero === 5){
      SetAlto({...numero,secion5:"100%;"});
    }

  }


  
  useEffect(()=>{
    Colorear1();
    },[])
  




  //ACTIVACION DEL INDICE DEL SLIDER
  const [item1,SetItem1] = useState(false);
  const [item2,SetItem2] = useState(false);
  const [item3,SetItem3] = useState(false);
  const [item4,SetItem4] = useState(false);
  const [item5,SetItem5] = useState(false);


  function Colorear1(){
    SetItem1(true);
    SetItem2(false);
    SetItem3(false);
    SetItem4(false);
    SetItem5(false);
  }

  function Colorear2(){
    SetItem1(false);
    SetItem2(true);
    SetItem3(false);
    SetItem4(false);
    SetItem5(false);
  }

  function Colorear3(){
    SetItem1(false);
    SetItem2(false);
    SetItem3(true);
    SetItem4(false);
    SetItem5(false);
  }

  function Colorear4(){
    SetItem1(false);
    SetItem2(false);
    SetItem3(false);
    SetItem4(true);
    SetItem5(false);
  }


  function Colorear5(){
    SetItem1(false);
    SetItem2(false);
    SetItem3(false);
    SetItem4(false);
    SetItem5(true);
  }
 
  


  function OcultarArticulo(){
    SetAlto("0px;")
  }


 




  //CAMBIA LA INFORMACION CUANDO DEMOS CLICK AL ITEM ESPECIFICO
   function CambiarInformacion(e){
   
    const secion = e.target.getAttribute("data-secion");

    //ITEM-1//
    if(secion === "1"){
    SetClassAnimation("animate__animated animate__fadeOutDown");
    setTimeout(() => { 
    SetClassAnimation("animate__animated animate__fadeInDown");
    SetItem(0);
    }, 1000);

     
     //ITEM-2//
    }else if(secion === "2"){
    SetClassAnimation("animate__animated animate__fadeOutDown"); 
    setTimeout(() => {   
    SetClassAnimation("animate__animated animate__fadeInDown");
    SetItem(1); 
    }, 1000);


    //ITEM-3//
    }else if(secion === "3"){
    SetClassAnimation("animate__animated animate__fadeOutDown");
    setTimeout(() => {  
    SetClassAnimation("animate__animated animate__fadeInDown");
    SetItem(2);
    }, 1000);


    //ITEM-4//
    }else if(secion === "4"){
    SetClassAnimation("animate__animated animate__fadeOutDown");
    setTimeout(() => {   
    SetClassAnimation("animate__animated animate__fadeInDown");
    SetItem(3);
    }, 1000);


    //ITEM-5//
    }else if(secion === "5"){
    SetClassAnimation("animate__animated animate__fadeOutDown");
    setTimeout(() => {   
    SetClassAnimation("animate__animated animate__fadeInDown");
    SetItem(4);  
    }, 1000);
   }}



  return (
    
   <Container>
    
     
     <Fragment>
     <Controler onClick={OcultarArticulo}>
     <Item data-secion="1" onClick={(e)=>{CambiarInformacion(e);Colorear1();SetNumero(1)}} active={item1}/>
     <Item data-secion="2" onClick={(e)=>{CambiarInformacion(e);Colorear2();SetNumero(2)}} active={item2}/>
     <Item data-secion="3" onClick={(e)=>{CambiarInformacion(e);Colorear3();SetNumero(3)}} active={item3}/>
     <Item data-secion="4" onClick={(e)=>{CambiarInformacion(e);Colorear4();SetNumero(4)}} active={item4}/>
     <Item data-secion="5" onClick={(e)=>{CambiarInformacion(e);Colorear5();SetNumero(5)}} active={item5}/>
     </Controler>
  
     <Secion fondo={data[item].imagen}>
     
     <SectionInfo>
     <h3 className={ClassAnimation}>{data[item].subtitulo}</h3>
     <br/>
     <h1 className={ClassAnimation}>{data[item].titulo}</h1>
     <br/>
     <p className={ClassAnimation}>{data[item].descripcion}</p>
     <CajaBoton className={ClassAnimation}>
     <BtnVideo><img src={Play} width={20}  alt='play'></img></BtnVideo>
     <p>Watch video</p>
     </CajaBoton>
     </SectionInfo>
  
     <ContainerSpecie>
     <Caja1>
     <CajaMapa>
     <h4 className={ClassAnimation}>Territorio de hábitat</h4>
     <img src={Mapa} width={200} alt='territory'></img>
     </CajaMapa>
     <CajaStado>
     <h4 className={ClassAnimation}>Nombre del cientifico</h4>
     <p className={ClassAnimation}>{data[item].nombre_cientifico}</p>
     <br></br>
     <h4 className={ClassAnimation}>Estado de conservación</h4>
     <CajaEstado>
       {

          estados.map((dato)=>{
           
              if(dato.estado === data[item].estado){

                return <Estado key={dato.id} className={ClassAnimation}  selecion={true} mover>{dato.estado}</Estado>
              }else{

                return <Estado key={dato.id} className={ClassAnimation}  mover>{dato.estado}</Estado>
              }
              

          })
        
      }
     </CajaEstado>
      </CajaStado>
      </Caja1>
      <Caja2>
      <Info>
      <h4 className={ClassAnimation}>Mas informacion</h4>
      <p className={ClassAnimation}>Descripción y características de los ejemplares..</p>
      <img className={ClassAnimation} src={Flecha} width={40} alt='Mas informacion' onClick={MostrarArticulo}></img>
      </Info>
      </Caja2>
      </ContainerSpecie>
      <Articulo1 alto={alto.secion1} SetAlto={SetAlto}/>
      <Articulo2 alto={alto.secion2} SetAlto={SetAlto}/>
      <Articulo3 alto={alto.secion3} SetAlto={SetAlto}/>
      <Articulo4 alto={alto.secion4} SetAlto={SetAlto}/>
      <Articulo5 alto={alto.secion5} SetAlto={SetAlto}/>
      </Secion>
      </Fragment>
        

   
    
    </Container>

   
  );
}



const Container = styled.div`
height:100vh;
display:flex;
`;

const Controler = styled.div`
  width:60px;
  background-color:#f28624;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  @media (max-width:1186px){

    width:50px;

  }
`;

const Item = styled.button`
width:10px;
height:10px;
border:none;
border-radius:100%;
background-color:white;
margin:10px 0px;
opacity:0.5;
cursor:pointer;
transition:500ms ease;
opacity:${props=> props.active && "1;"}



`;


const Secion = styled.section`
  width:100%;
  transition:1s ease all;
  position:relative;
  background-image:url(${props => props.fondo && props.fondo }) !important;
  background-size:cover;
  background-position:center;
  overflow-x:hidden;

  @media (max-width:1186px){

    display:flex;
    flex-direction:column;
  }

`;






const SectionInfo = styled.section`

width:700px;
padding:40px;
padding-left:100px;
margin-top:30px;
color:white;



h1{
  font-size:100px;
  line-height:100px;
  
}

h3{
  font-size:25px;
}


@media (max-width:1186px){
  
  margin-top:0px;
  
h1{
  font-size:80px;
  line-height:100px;
  
}
}

@media (max-width:850px){
  margin-top:70px;
}



@media(max-width:754px){

  width:100%;
  text-align:center;
  padding:0px;

  p{

    font-size:14px;
    margin:0px 30px;
  }

  h3{
    font-size:20px;
    font-weigth:100px;
  }
}

@media (max-width:450px){

  padding:0px;
  h1{
    font-size:50px;
    line-height:50px;
    
  }



}
`;


const CajaBoton = styled.div`
display:flex;
align-items:center;
margin-top:20px;

p{
  margin-left:20px;
}

@media (max-width:754px){

  justify-content:center;
}
`;

const BtnVideo = styled.button`

width:50px;
height:50px;
background-color:#f28624;
border:none;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;

@media (max-width:610px){

  width:30px;
  height:30px;

  img{

    width:10px;
  }
}
`;


const ContainerSpecie = styled.div`

width:100%;
position:absolute;
bottom:0px;
height:200px;
display:flex;

@media (max-width:1186px){
  flex-direction:column;
  height:auto;
  justify-content:center;
  position:relative;
  
}

`;

const Caja1 = styled.div`
width:50%;
height:100%;
display:flex;



@media (max-width:1186px){
  width:100%;
 padding-top:40px;
}


@media (max-width:584px){
  height:auto;

  img{
    width:150px;
    margin:auto;
  }

}

@media (max-width:512px){
  flex-direction:column;
  
}
`;


const CajaMapa = styled.div`
  
  width:600px;
  text-align:center;

  h4{
    color:#f28624;
    font-size:14px;
    font-weight:100;
  }

  @media (max-width:512px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
   
    
  }



`;

const CajaStado = styled.div`
width:100%;
color:white;
font-size:14px;
h4{
  color:#f28624;
  font-weight:100;
}


@media (max-width:758px){
  text-align:center;
}

`;

const CajaEstado = styled.div`
display:flex;
flex-wrap: wrap;
margin-top:20px;

@media(max-width:764px){
  justify-content:center;
}


`;

const Estado = styled.div`

@media (max-width:502px){

  width:25px;
  height:25px;
  font-size:10px;
}

cursor:pointer;
transition:1s ease;
width:35px;
height:35px;
border:solid 2px #fff;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
margin-left:${props => props.mover && "10px;"}
background-color:${props => props.selecion && "#f28624"}

`;


const Caja2 = styled.div`
width:50%;
display:flex;
justify-content:flex-end;


@media (max-width:1186px){
  width:100%;
  flex-direction:column;
}
`;


const Info = styled.div`
text-align:start;

h4{
  color:#f28624;
  font-size:14px;
  font-weight:100;
  
}

p{
  width:80%;
  color:white;
}

img{
  cursor:pointer;
}

@media (max-width:1186px){
 padding:0px;
  text-align:center;

  p{
    width:100%;
  }

}

@media (max-width:500px){
  padding:20px;
}

`;




export default App;
