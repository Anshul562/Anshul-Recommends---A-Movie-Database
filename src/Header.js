import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./css/header.css";

function Header(){
    const [userInput, setUserInput] = useState('')
    const inputchangehandler = (event) => {
        setUserInput(event.target.value)
    }
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>50){
                handleShow(true);
            }else handleShow(false);
    });
},[]);

  
    return (
        <>
        <nav className={show?'navbar navbar-expand-lg navbar-dark':'navbar trans'}>

            <div className="container-fluid">
                <div className="nav_logo">
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="../" className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/movie-home/" className="nav-link" aria-current="page" >Movies</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/tv-home/"className="nav-link" aria-current="page" >TV</a>
                        </li>
                        <li className="nav-item">
                            <a href="/anime-home/"className="nav-link" aria-current="page" >Anime</a>
                        </li>
                    </ul>
                    <form action={"/search/q/movie/"+userInput+"/"+userInput} className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                        aria-label="search" onChange={inputchangehandler} value = {userInput}/>
                
                        <Link to={"/search/q/movie/"+userInput+"/"+userInput}><div className="btn btn-outline-success" id="btnclick" >Search</div></Link>
                    </form>
                </div>
            </div>
        </nav>
        
        </>
        
    )
}
export default Header