import styled from "styled-components";
import Imagen from "../Img/fondo-form.jpg";
import {Link} from "react-router-dom";
import Flecha from "../Img/back.png";
import { useState } from "react";

function Formulario(){

    const [usuario,SetUsuario] = useState({username:"",email:"",password:"", password2:""});
    const [message,SetMessage] = useState("");
    const [message1,SetMessage1] = useState("");

    async function RegistrarUsuario(e){

        e.preventDefault();
        if(!usuario.username || !usuario.email || !usuario.password || !usuario.password2){

            SetMessage("Todos los valores deben estar llenos")

        }else if(usuario.password !== usuario.password2){

            SetMessage("Las contraseñas con coinciden")
           
        }else{

            await fetch("https://api-natgeo.vercel.app/auth-register",{method:"POST",body:JSON.stringify(usuario),headers:{"Content-Type":"application/json"}})
            .then(res => res.json())
            .then(data => {data.message ? SetMessage(data.message) : localStorage.setItem("token",data.token);SetUsuario({username:"",email:"",password:"", password2:""});SetMessage("");SetMessage1("Usuario registrado con exito")})
            .catch(e => console.log(e.message))
            
        }
    }


    function ObtenerDatosUsuario(e){

        const {name,value} = e.target;
        SetUsuario({...usuario,[name]:value});

    }


    return(

      
        <Container>
           <Caja>
           <Fondo/>
           <Form onSubmit={RegistrarUsuario}>
            <Atras><Link to="/"><img src={Flecha} width="100%" alt="atras"/> </Link></Atras>
            <h1>Configura tu cuenta central</h1>
            <h3>Este panel de registro es especialmente para crear un administrador</h3>
            <input type="text" placeholder="Username" value={usuario.username} name="username" className="inputs"onChange={ObtenerDatosUsuario} />
            <input type="email" placeholder="Email"  value={usuario.email} name="email" className="inputs" onChange={ObtenerDatosUsuario}/>
            <input type="password" placeholder="Password" value={usuario.password} name="password" className="inputs" onChange={ObtenerDatosUsuario}/>
            <input type="password" placeholder="Confirm Password"  value={usuario.password2} name="password2" className="inputs" onChange={ObtenerDatosUsuario}/>
            <p className="message">{message}</p>
            <p className="message-exito">{message1}</p>
            <div className="caja-check">
            <input type="checkbox" className="inputs-check"/>
            <span>Acepto las politicas y condiciones del sitio web.</span>
            </div>
            
            <Boton type="submit">Registarse</Boton>
           </Form>
           </Caja>
        </Container>
       
    );


}


const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
                  
`;

const Caja = styled.div`
width:80%;
height:80%;
display:grid;
background:#323232;
grid-template-columns: 1fr 2fr;
grid-template-rows:auto;
grid-template-areas: "caja-1 caja-2";
border-radius:10px;
 


`;


const Fondo = styled.div`
background-image:url(${Imagen});
background-position:center;
background-size:cover;
grid-area:caja-1;
border-radius:10px 0px 0px 10px;
`;



const Form = styled.form`

grid-area:caja-2;
padding:40px;
position:relative;

h1{
    font-size:40px;
    color:#f28624;
}

.inputs{
    width:70%;
    padding:15px;
    font-size:18px;
    outline:none;
    border:none;
    border-radius:5px;
    border: 2px solid  #9A9483;
    background:none;
    color:white;
    transition:300ms ease;
    margin-top:30px;
    display:blocK;
}


.message{

    color:#B33030;
    margin-top:10px;
}

.message-exito{

    color:#8BDB81;
    margin-top:10px;
}

.caja-check{
    display:flex;
    margin-top:30px;


    input{
        width:20px;
        height:20px;
        outline:none;
    }

    span{
        color:white;
        margin-left:10px;
    }
}

.inputs:focus{
    border-color:#f28624;
}

`;

const Boton = styled.button`
background-color:#f28624;
margin-top:30px;
padding:15px 30px;
font-size:18px;
border:none;
border-radius:5px;
cursor:pointer;
transition:500ms ease;


&:hover{
    background-color:orange;
}
`;

const Atras = styled.div`
position:absolute;
top:20px;
right:20px;
width:50px;
height:50px;
`;


export default Formulario;