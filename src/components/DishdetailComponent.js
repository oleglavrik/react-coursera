import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';



    function RenderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
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

    function RenderComments(comments) {
        const commentsList = comments.map((comment) => {
            return (
                <li key={comment.id} className="list-unstyled">
                    <div className="comment-text">{comment.comment}</div>
                    <div className="comment-meta">
                        -- { comment.author },
                        {" " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </div>
                </li>
            );
        });

        if(comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="comments-list">
                        {commentsList}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        return (
            <div className="container">
                <div className="row">
                    {/* Dish Detail Card */}
                    <div className="col-12 col-md-5 m-1">
                        {props.dish && RenderDish(props.dish)}
                    </div>

                    {/* Dish Comments */}
                    <div className="col-12 col-md-5 m-1">
                        {props.dish && RenderComments(props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    };

export default DishDetail;