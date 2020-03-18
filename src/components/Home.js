import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Home extends Component {


    render(){
        
        
        return (
            
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + 'logo192.png'} className="App-logo" alt="logo" />

                <p>
                    Bienvenu sur Ghost Slayer ! 
                </p>
                <Link to="/play">
                    
                    <Button variant="contained" color="primary">
                        Lancez une partie
                    </Button>

                </Link>

            </header>

        )

    };


}

export default Home