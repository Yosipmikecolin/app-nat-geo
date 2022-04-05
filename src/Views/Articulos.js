import { useParams } from "react-router-dom";

function Articulos(){


    const {titulo} = useParams();

    return(

        <h1>{titulo}</h1>
    ) 

}


export default Articulos;