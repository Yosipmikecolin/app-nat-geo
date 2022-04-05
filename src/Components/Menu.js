import {Link, Route, Routes} from "react-router-dom";
import Logo from "../Img/logo.png";
import styled from "styled-components";
import { Fragment } from "react";
import App from "../App";


function Menu(){


    return(

<Fragment>
        <header>
        <Nav>
        <Link to="/"> <img src={Logo} width={100} alt='logo'></img></Link>
        <ul>
        <li><Link to="/">Species</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/lections">Lections</Link></li>
        <li><Link to="/sign">Sign</Link></li>
        </ul>
     </Nav>

        </header>



        <Routes>

            <Route path="/" element={<App/>}/>
            <Route path="/locations" element={<h1>jaja</h1>}/>
            <Route path="/sign" element={<h2>Login</h2>}/>

        </Routes>
        
</Fragment>

    );

}

const Nav = styled.nav`
width:100%;
display: flex;
justify-content:space-between;
align-items:center;
padding:20px;
position:fixed;
z-index:3;
background:red;
font-size:18px;
width:97%;
right:0;
position:absolute;
margin-bottom:50px;



ul > li{
  display:inline-block;
  margin:0px 40px 0px 0px;
}

a{
  color: white;
}

@media (max-width:850px){
  display:none;
}

`;
export default Menu;