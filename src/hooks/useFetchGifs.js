import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // Los useEffect NO PUEDEN SER async
    useEffect( () => {
        getGifs( category ).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        });
    }, [category]);
    // Arreglo de dependecias
    // Si se envía arreglo vacio, la instruccion anterior, sólo se ejecuta una vez
    // Lo que se ponga adentro, es lo que considerará cuando cambie, volvieron a reproducir el useEffect


    return state; 

}
