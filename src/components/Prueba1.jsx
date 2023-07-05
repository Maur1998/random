import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Galery } from "./Galery";
import {getImages} from "./getImages";

export const Prueba1 = () =>{
    const [input,setInput] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [dinhoGifs, setDinhoGifs] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        setSearchValue(input)
    }

    useEffect(()=>{
        getImages(searchValue).then((data)=>setDinhoGifs(data));
    },[searchValue])


    return(
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Form */}
            <div className="row mt-5 text-start">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <input 
                            className="input mx-4" 
                            type="text"
                            placeholder="Ingresa el GIF que buscas" 
                            name="input"
                            value={input}
                            onChange={event=>setInput(event.target.value)}
                        />
                        <button 
                            className="btn btn-outline-success"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>

            {/* Gif Galery */}
            <Galery 
                dinhoGifs={dinhoGifs}
                searchValue={searchValue}
            />
        </>
    );
}