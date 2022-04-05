import { useEffect, useState } from "react/cjs/react.development";

 function ObtenerDatos(){
    const [data,SetData] = useState([]);
    const [cargarndo,SetCargando] = useState(false);
      
  useEffect(()=>{

    var http = new XMLHttpRequest();
    http.onload = async function(){
  
      const res = this.responseText;
      const response = await JSON.parse(res);
      SetData(response);
      SetCargando(true);
  
    }
  
    http.open("GET","https://api-natgeo.vercel.app/especies");
    http.send();

  },[]);

console.log(data)
  return [data,cargarndo];

}


export default ObtenerDatos;