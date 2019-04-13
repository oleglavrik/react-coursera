import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import { baseUrl } from './../../shared/baseUrl';

function RenderDish({dish}) {
    if(dish != null) {
        return (
            <Card>
                <CardImg src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default RenderDish;