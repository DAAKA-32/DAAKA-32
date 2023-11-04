import React from 'react';
import { Link } from 'react-router-dom';
// import '../componentCSS/Intro.css'; 

const Intro = () => {
    return (
        <div>
            <div className="container">
                <header>
                    <h1>Bienvenue sur P-film</h1>
                    <p>Le site des meilleurs films à voir entre amis !</p>
                </header>
                <main>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmgOovGYnR3piBGJCFChBHtvyKCUSFRBzKg&usqp=CAU" alt="cinéma"/>
                </main>
                <footer>
                    <h2>Prêt à découvrir des mystères cinématographiques ?</h2>
                    <br />
                    <h4>La liste est longue...</h4>
                    
                    {/* Ajout du bouton de redirection vers une autre page */}
                    <Link to="../Page/Home.js">Aller à une autre page</Link>
                </footer>
            </div>
        </div>
    );
};

export default Intro;



// {/* <button>
//                     <a href="../Page/Home.js">Cliquez ici</a>
//                 </button> */
