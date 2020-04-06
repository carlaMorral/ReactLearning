import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        console.log("Rendering dish")
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        console.log("Rendering comments")
        const c = comments.map((comment) => {
            return(
                <li key={comment.id}>
                    {comment.comment}<br></br><br></br>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                    <br></br><br></br> 
                </li>
            )
        })

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {c}
                </ul>
            </div>
        )
    }

    render(){
        if(this.props.selectedDish==null){
            return <div></div>
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.selectedDish)}
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        }
    }
}

export default Dishdetail;