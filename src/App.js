import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router , Switch,Link} from 'react-router-dom';
//import 'leaflet/dist/leaflet.css';

//import 'normalize.css';

import Header from './components/Header';
import Home from './components/Home';
import ReactLeafletMap from './components/ReactLeaflet';
import './styles/main.styl';

function App() {
  return (
    <BrowserRouter basename={process.env.BASENAME}>
    <div className="app">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/react-leaflet" component={ReactLeafletMap} />
    </div>
  </BrowserRouter>
  );
}

export default App;
