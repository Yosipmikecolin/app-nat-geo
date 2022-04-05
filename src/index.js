import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Noticias from "./Views/Noticias";
import Formulario from "./Views/Formulario";
import Articulos from "./Views/Articulos";



ReactDOM.render(



  <React.StrictMode>
    
    <BrowserRouter>
    

    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/noticias' element={<Noticias/>}/>
      <Route path='/sign' element={<Formulario/>}/>
      <Route path="/noticias/:titulo" element={<Articulos/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



