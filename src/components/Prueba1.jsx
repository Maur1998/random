import { useEffect, useState } from "react";
import dinho from "../assets/img/dinho.jpg";
import { Navbar } from "./Navbar";
import { Galery } from "./Galery";
import {getImages} from "./getImages";

export const Prueba1 = () =>{
    const [count,setCount] = useState(0);
    const [dinhoGifs, setDinhoGifs] = useState('');

    useEffect(()=>{
        getImages().then((data)=>setDinhoGifs(data));
    },[])
    
    return(
        <>
            <Navbar/>
            <Galery 
                dinhoGifs={dinhoGifs}
            />
        </>
    );
}