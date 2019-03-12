import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

import {Navbar} from "reactstrap";
import {NavbarBrand} from "reactstrap";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Brand name
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu />
            </div>
        );
    }
}

export default App;
