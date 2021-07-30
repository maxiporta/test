import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ListadoLibro from './listadolibro';

export default function ListarGeneros() {

    const [ genero, setGenero ] = useState([])


    const url = 'http://localhost:3000/categoria/';

    const fetchData = async() => {
        const respuesta = await axios.get(url);
        if (respuesta.status === 200) {
          setGenero(respuesta.data);
        }
      };
  
      useEffect(() => {
          fetchData();
        },);

const ListaLibros = ({categoria_id}) => {
    const librosFiltrados = ListadoLibro.filter((libro) => libro.categoria_id === categoria_id)
    
    if(librosFiltrados.length === 0){
        return(
            <p>Esta categoría no tiene libros asociados</p>
        )
    }
    else{
        return(
            librosFiltrados.map((libro) =>(
                <li key={libro.ID} className=''>
                    Título: {libro.nombre} 
                </li>
            )) 
        )
    }
} 

return(

)
}
