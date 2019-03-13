import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

import {Navbar} from "reactstrap";
import {NavbarBrand} from "reactstrap";
import { DISHES } from "./shared/dishes";

class App extends Component {

    constructor(props) {
        super(props);

        // set dishes in to state
        this.state = {
            dishes: DISHES
        };
    }

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
                <Menu dishes={this.state.dishes} />
            </div>
        );
    }
}

export default App;
