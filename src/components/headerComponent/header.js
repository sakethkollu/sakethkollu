import React , {Component}from 'react';


import {
    Link,
  } from 'react-router-dom';

import Title from './title';

class Header extends Component {

  

  render() {
      return (
        <header>
            <div className = "logo">
                LOGO
            </div>
            <Title title = "Saketh Kollu"/>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>

                    <li>
                        <Link to = "/Projects">Projects</Link>
                    </li>

                    <li>
                    <Link to = "/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
      );
  }
}

export default Header;
