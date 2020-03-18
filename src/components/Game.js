import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


class Game extends Component {


    render(){
        
        
        return (

            <header className="App-header">
                <img src={process.env.PUBLIC_URL + 'logo192.png'} className="App-logo" alt="logo" />

                <p>
                    Commençons à jouer ! 
                </p>

                <Link to="/menu">
                    
                    <Button variant="contained" color="primary">
                        Choisir un personnage !
                    </Button>

                </Link>
                <Link to="/">
                    
                    <Button variant="contained" color="secondary">
                        Retournez à l'accueil !
                    </Button>

                </Link>

            </header>
                  
        )

    };


}

export default Game