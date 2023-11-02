import React, { useEffect } from 'react';
import '../componentCSS/Home.css';
import By from '../components/By';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

function Home() {
  useEffect(() => {
    let blocs = document.querySelectorAll('.bloc');
    let headers = document.querySelectorAll('header');
    let navbars = document.querySelectorAll('.navbar');
  
    blocs.forEach((bloc) => {
      bloc.addEventListener('mouseover', () => {
        blocs.forEach((otherBloc) => {
          otherBloc.style.background = '#444';
          otherBloc.style.opacity = '1';
          let h3 = otherBloc.querySelector('h3');
          let h4 = otherBloc.querySelector('h4');
          let h5 = otherBloc.querySelector('h5');
          if (h3 && h4 && h5) {
            h3.style.color = '#e64a2e';
            h4.style.background = '#555';
            h5.style.background = '#555';
          }
        });
  
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
      });
  
      bloc.addEventListener('mouseout', () => {
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
      });
    });
  }, []);
    return (
    <div>
      <Logo />
      {/* //useEffect pour couleur selon la Page */}
      <By/> 
 

      <div className="container">
        
      <Navbar />

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
      </div>
    </div>
  );
}

export default Home;


// import React, { useState } from 'react';
// import '../componentCSS/Home.css';
// import By from '../components/By';
// import Navbar from '../components/Navbar';
// import Logo from '../components/Logo';

// function Home() {
//   const [blocStyles, setBlocStyles] = useState({
//     background: '#333',
//     opacity: '',
//     h3: { color: 'white' },
//     h4: { background: '#e64a2e' },
//     h5: { background: '#e64a2e' },
//   });

//   const [navbarColor, setNavbarColor] = useState('white'); // État pour la couleur de la navbar
//   const [byColor, setByColor] = useState('white'); // État pour la couleur de "By"

//   const handleMouseOver = () => {
//     setBlocStyles((prevStyles) => ({
//       ...prevStyles,
//       background: '#444',
//       opacity: '1',
//       h3: { color: '#e64a2e' },
//       h4: { background: '#555' },
//       h5: { background: '#555' },
//     }));
//     setNavbarColor('blue'); // Changer la couleur de la navbar en bleu
//     setByColor('blue'); // Changer la couleur de "By" en bleu
//   };

//   const handleMouseOut = () => {
//     setBlocStyles((prevStyles) => ({
//       ...prevStyles,
//       background: '#333',
//       h3: { color: 'white' },
//       h4: { background: '#e64a2e' },
//       h5: { background: '#e64a2e' },
//     }));
//     setNavbarColor('white'); // Réinitialiser la couleur de la navbar en blanc
//     setByColor('white'); // Réinitialiser la couleur de "By" en blanc
//   };

//   return (
//     <div>
//       <Logo />
//       <Navbar color={navbarColor} /> {/* Passer la couleur de la navbar en tant que prop */}
//       <By color={byColor} /> {/* Passer la couleur de "By" en tant que prop */}
//       <div className="container">
//         {Array.from({ length: 7 }, (_, i) => (
//           <div
//             key={i}
//             className="bloc"
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//             style={{
//               backgroundColor: blocStyles.background,
//               opacity: blocStyles.opacity,
//             }}
//           >
//             <h3 style={{ color: blocStyles.h3.color }}>Hunger Games (Intégrale)✨</h3>
//             <img
//               src="https://i.pinimg.com/564x/9c/3c/79/9c3c798792b1bf7cab32afbf8ae765ce.jpg"
//               alt="Hunger Games"
//             />
//             <h4 style={{ background: blocStyles.h4.background }}>Torrent: OUI</h4>
//             <br />
//             <h5 style={{ background: blocStyles.h5.background }}>
//               Résumé: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, iste?
//             </h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
