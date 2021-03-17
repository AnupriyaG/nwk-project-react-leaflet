import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
//import GenIcon from 'react-icons/go';

import './Header.styl';

class Home extends PureComponent {

  render() {
    return (
      <header className="header">
        <Link to="/" className="header__claim">
          
          <span className="header__title">Making Maps With Reacts</span>
        </Link>
      </header>
    );
  }
}

export default Home;