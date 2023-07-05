import { useEffect, useState } from "react";
import dinho from "../assets/img/dinho.jpg";
import {getImages} from "./getImages";

export const Prueba1 = () =>{
    const [count,setCount] = useState(0);
    const [dinhoGifs, setDinhoGifs] = useState('');

    useEffect(()=>{
        getImages().then((data)=>setDinhoGifs(data));
    },[])
    
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            <main>
                <section className="galery">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {
                                dinhoGifs==''
                                ?null
                                :dinhoGifs.map(({images,id,title})=>(
                                    <div className="col-12 col-sm-6 col-md-4  mt-5 d-flex justify-content-center" key={id}>
                                        <div className="card">
                                            <img src={images['original']['url']} className="card-img-top" alt={title}/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            {/* <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img1"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Ronaldinho</h5>
                                        <p className="card-text">{count}</p>
                                        <div className="counter d-flex justify-content-center">
                                            <button 
                                                className="btn btn-secondary mx-3"
                                                onClick={()=>setCount(count+1)}
                                            >
                                                +
                                            </button>
                                            <button 
                                                className="btn btn-secondary"
                                                onClick={()=>setCount(count-1)}
                                                >
                                                    -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img2"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ronaldinho</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img3"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ronaldinho</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img4"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ronaldinho</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img5"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ronaldinho</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                                <div className="card">
                                    <img src={dinho} className="card-img-top" alt="img6"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ronaldinho</h5>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}