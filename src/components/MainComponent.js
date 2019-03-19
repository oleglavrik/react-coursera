import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import {Navbar} from "reactstrap";
import {NavbarBrand} from "reactstrap";
import { DISHES } from "./../shared/dishes";

class Main extends Component {

    constructor(props) {
        super(props);

        // set dishes in to state
        this.state = {
            dishes: DISHES,
            selectedDish : null
        };
    }

    onDishSelect(dishId) {
        this.setState({selectedDish : dishId});
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail  dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;
