import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(comments) {
        const commentsList = comments.map((comment) => {
            let date = new Date(Date.parse(comment.date));
            return (
                <li key={comment.id}>
                    <div className="comment-text">{comment.comment}</div>
                    <div className="comment-meta">
                        -- { comment.author }, { date.toLocaleString("en-US", {year: 'numeric', month: 'short', day: 'numeric'}) }
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

    render() {
        return (
            <div className="row">
                {/* Dish Detail Card */}
                <div className="col-12 col-md-5 m-1">
                    {this.props.dish && this.renderDish(this.props.dish) }
                </div>

                {/* Dish Comments */}
                <div className="col-12 col-md-5 m-1">
                    {this.props.dish && this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;