import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import Menu from './components/Menu';


function App() {
  return (

    

    <div className="App">
      


      <Router>
        

        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/play" component={Game} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
        
        
      </Router>
    </div>
  );
}

export default App;

