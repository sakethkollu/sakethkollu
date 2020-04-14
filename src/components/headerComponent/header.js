import React, { Component } from 'react';

import {
    Link,
    NavLink
} from 'react-router-dom';

import { Button, Nav} from 'react-bootstrap';

import Title from './title';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo">
                    LOGO
            </div>
                <Title title="Saketh Kollu" />
                
                
                    <Nav className = "navBox" justify variant="tabs" defaultActiveKey="/">
                        
                        <Nav.Item className = "navItem">
                            <Nav.Link href="#/">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem">
                            <Nav.Link href="#/Projects">Projects</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem">
                            <Nav.Link href="#/Contact">Contact</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem" disabled>
                            <Nav.Link href="#/1">1</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem" disabled>
                            <Nav.Link href="#/2">2</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem" disabled>
                            <Nav.Link href="#/3">3</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem">
                            <Nav.Link href="https://github.com/sakethkollu">Github</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem">
                            <Nav.Link href="https://www.linkedin.com/in/sakethkollu/">Linkedin</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className = "navItem" disabled>
                            <Nav.Link href="#/SocialMedia">Social Media</Nav.Link>
                        </Nav.Item>

                    </Nav>
                
               


               
            </header>
        );
    }
}

export default Header;
