import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


class Menu extends Component {

   


    render(){
        
        const x = [1,2,3,4];
        const pictures = [];
        
        pictures.push(<img src={process.env.PUBLIC_URL + '/pictures/perso'+x[0]+'.png'} width="124" height="124" alt="logo" />)

        return (

            

            <header className="App-header">

                {pictures}

                <p>
                    Choix du personnage ! 
                </p>
                <Link to="/">
                    
                    <Button variant="contained" color="primary">
                        Retournez à l'accueil !
                    </Button>

                </Link>

            </header>
                  
        )

    };


}

export default Menu