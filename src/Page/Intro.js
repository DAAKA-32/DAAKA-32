import React from 'react';
// import '../componentCSS/Intro.css';

const Intro = () => {
    return (
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
                <button>
                    <a href="/src/Page/Home.js">Cliquez ici</a>
                </button>
            </footer>
        </div>
    );
};

export default Intro;
