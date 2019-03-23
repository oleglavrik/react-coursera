import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import RenderDish from './extra/RenderDishComponent';
import RenderComments from './extra/RenderCommentsComponent';
import {Link} from "react-router-dom";

    const DishDetail = (props) => {
        if(props.dish != null && props.comments != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                            <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );
        }
    };

export default DishDetail;