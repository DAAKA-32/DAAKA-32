import React, { useEffect } from 'react';
import '../componentCSS/Navbar.css'
import '../components/Connection';
import Connection from '../components/Connection';
const Navbar = () => {

    // let container = document.querySelector('.container'); 
    // let navbar = document.querySelector('.navbar')
    
    // container.addEventListener('scroll', () =>{
    //   if(container.scrollTop >= 100) {
    //     // navbar.style.position = 'fixed';
    //     navbar.classList.add('navbarsFixed');
    //     // navbar.style.position = 'absolute';
    //   } else {
    //     // navbar.style.position = 'absolute';
    //     navbar.classList.remove('navbarsFixed');
    //     // navbar.style.position = 'fixed';
    //   }
    // })
    useEffect(() => {
     let container = document.querySelector('.container'); 
     let navbar = document.querySelector('.navbar')
    
    container.addEventListener('scroll', () =>{
      if(container.scrollTop >= 100) {
        // navbar.style.position = 'fixed';
        navbar.classList.add('navbarsFixed');
        // navbar.style.position = 'absolute';
      } else {
        // navbar.style.position = 'absolute';
        navbar.classList.remove('navbarsFixed');
        // navbar.style.position = 'fixed';
      }
    })
    }, []);
    return (
        <div className="navbar">
          <ul>
            <li><button><h2>Accueil</h2></button></li>
            <li><button><h2>Films</h2></button></li>
            <li><button><h2>Séries</h2></button></li>
            <li><button><h2>Ma liste</h2></button></li>
            <li><button><h2>Tendance</h2></button></li>
            <li><button><h2>Contact</h2></button></li>
            <Connection />
          </ul>
        </div>
    );
};

export default Navbar;