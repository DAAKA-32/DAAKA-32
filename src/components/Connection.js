import React from 'react';
import '../componentCSS/Connection.css';

const Connection = () => {
    return (
        <div>

            <h2>Connexion</h2>
            
        <form>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} required />
          <br /><br />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
          <br /><br />
          <button type="button" onClick={this.handleLogin}>Se connecter</button>
        </form>
            
        </div>
    );
};

export default Connection;