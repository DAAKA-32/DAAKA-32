import React, { useEffect } from 'react';
import '../componentCSS/Home.css';
import By from '../components/By';
import Navbar from '../components/Navbar';

function Home() {
  useEffect(() => {
    let blocs = document.querySelectorAll('.bloc');
    let headers = document.querySelectorAll('header');
    //let sidebars = document.querySelectorAll('.sidebar');
    let navbars = document.querySelectorAll('.navbar');
  
    blocs.forEach((bloc) => {
      bloc.addEventListener('mouseover', () => {
        // Réinitialisez les styles de tous les blocs
        blocs.forEach((otherBloc) => {
          otherBloc.style.background = '#444';
          otherBloc.style.opacity = '1';
          let h3 = otherBloc.querySelector('h3');
          let h4 = otherBloc.querySelector('h4');
          let h5 = otherBloc.querySelector('h5');
          if (h3 && h4 && h5) {
            // h3.style.background = '#e64a2e';
            h3.style.color = '#e64a2e';
            h4.style.background = '#555';
            h5.style.background = '#555';
          }
        });
  
        // Change le style des headers
        headers.forEach((header) => {
          let h4s = header.querySelector('h4');
          if (h4s) {
            h4s.style.background = 'grey';
            h4s.style.color = '#e64a2e';
          }
        });
        
        navbars.forEach((navbar) => {
          let h2 = navbar.querySelectorAll('.navbar h2');
          h2.forEach((h2) => {
            h2.style.color = '#e64a2e'
          });
        });
        // Activez tous les li dans les sidebars
        // sidebars.forEach((sidebar) => {
        //   let h1 = sidebar.querySelectorAll('.sidebar h1');
        //   h1.forEach((h1) => {
        //     h1.style.color = '#e64a2e'
        //   })
        //   let lis = sidebar.querySelectorAll('li');
        //   lis.forEach((li) => {
        //     li.style.background = 'grey';
        //   });
        // });
      });
  
      bloc.addEventListener('mouseout', () => {
        // Réinitialisez les styles de tous les blocs
        blocs.forEach((otherBloc) => {
          otherBloc.style.background = '#333';
          let h3 = otherBloc.querySelector('h3');
          let h4 = otherBloc.querySelector('h4');
          let h5 = otherBloc.querySelector('h5');
          if (h3 && h4 && h5) {
            h3.style.color = 'white';
            h4.style.background = '#e64a2e';
            h5.style.background = '#e64a2e';
          }
        });
  
        // Réinitialisez le style des headers
        headers.forEach((header) => {
          let h4s = header.querySelector('h4');
          if (h4s) {
            h4s.style.background = '#e64a2e';
            h4s.style.color = 'white';
          }
        });
        
        navbars.forEach((navbar) => {
          let h2 = navbar.querySelectorAll('.navbar h2');
          h2.forEach((h2) => {
            h2.style.color = 'white';
          });
        });
        // Réinitialisez le style des li dans les sidebars
        // sidebars.forEach((sidebar) => {
        //   let h1 = sidebar.querySelectorAll('.sidebar h1');
        //   h1.forEach((h1) => {
        //     h1.style.color = 'white';
        //     h1.style.background = '#333';
        //     h1.style.borderRadius = '30px'
        //   })
        //   let lis = sidebar.querySelectorAll('li');
        //   lis.forEach((li) => {
        //     li.style.background = '#e64a2e';
        //   });
        // });
      });
    });
  }, []);
    return (
    <div>
      
      {/* //useEffect pour couleur selon la Page */}
      <By/> 
 

      <div className="container">
        
      <Navbar />


        {/* <div className="sidebar">
          <div className="logo">
            <h1>P-film</h1>
          </div>
          <ul className="nav">
            <li><button><h2>Aceuil</h2></button></li>
            <li><button><h2>Films</h2></button></li>
            <li><button><h2>Séries</h2></button></li>
            <li><button><h2>Ma liste</h2></button></li>
            <li><button><h2>Tendance</h2></button></li>
            <li><button><h2>Contact</h2></button></li>
          </ul>
        </div> */}

        <div className="bloc">
          <h3>Hunger Games (Intégrale)✨</h3>
          <img src="https://i.pinimg.com/564x/9c/3c/79/9c3c798792b1bf7cab32afbf8ae765ce.jpg" alt="Hunger Games" />
          <h4>Torrent: OUI</h4><br />
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, iste?</h5>
        </div>

        <div className="bloc">
          <h3>Very Bad Trip</h3>
          <img src="https://fr.web.img4.acsta.net/medias/nmedia/18/70/03/08/19109117.jpg" alt="Very Bad Trip" />
          <h4>Torrent: OUI</h4>
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, omnis.</h5>
        </div>

        <div className="bloc">
          <h3>Projet X</h3>
          <img src="https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUAyaHD4meMg_HepilmwigYgbRFgwSA2pwZxgB/jpg" alt="Projet X" />
          <h4>Torrent: OUI</h4>
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, placeat!</h5>
        </div>

        <div className="bloc">
          <h3>Parasite</h3>
          <img src="https://japoncinema.com/wp-content/uploads/2020/03/81n5eExCJLL._AC_SL1500_.jpg" alt="Parasite" />
          <h4>Torrent: OUI</h4>
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, placeat!</h5>
        </div>

        <div className="bloc">
          <h3>Hunger Games (Intégrale)✨</h3>
          <img src="https://i.pinimg.com/564x/9c/3c/79/9c3c798792b1bf7cab32afbf8ae765ce.jpg" alt="Hunger Games" />
          <h4>Torrent: OUI</h4><br />
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, iste?</h5>
        </div>
        <div className="bloc">
          <h3>Hunger Games (Intégrale)✨</h3>
          <img src="https://i.pinimg.com/564x/9c/3c/79/9c3c798792b1bf7cab32afbf8ae765ce.jpg" alt="Hunger Games" />
          <h4>Torrent: OUI</h4><br />
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, iste?</h5>
        </div>
        <div className="bloc">
          <h3>Hunger Games (Intégrale)✨</h3>
          <img src="https://i.pinimg.com/564x/9c/3c/79/9c3c798792b1bf7cab32afbf8ae765ce.jpg" alt="Hunger Games" />
          <h4>Torrent: OUI</h4><br />
          <h5>Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, iste?</h5>
        </div>
        {/* Vous pouvez répéter les blocs avec des données différentes ici */}
      </div>
    </div>
  );
}

export default Home;
