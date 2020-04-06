import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
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

    const Dishdetail = (props) => {
        if(props.selectedDish==null){
            return <div></div>
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.selectedDish}/>
                        <RenderComments comments={props.selectedDish.comments}/>
                    </div>
                </div>
            );
        }
    }
    

export default Dishdetail;