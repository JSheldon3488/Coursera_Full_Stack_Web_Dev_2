import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(<div></div>);
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const data = comments.map((comment) => {
                const date = new Date(comment.date);
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {months[date.getMonth()]}, {date.getDate()+1}, {date.getFullYear()}</p>
                    </li>
                );
            })

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {data}
                    </ul>
                </div>
            );
        }
        else { return (<div></div>);}

    }
}

export default DishDetail;