import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";


class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(JSON.stringify(props));
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.Name}</Card.Title>
                    <Card.Subtitle>AERC: {this.state.Ratings.AERC} | Cards: {this.state.Ratings.Cards} | SAS: {this.state.Ratings.SAS}</Card.Subtitle>
                    <br></br>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.state.House1}</ListGroup.Item>
                        <ListGroup.Item>{this.state.House2}</ListGroup.Item>
                        <ListGroup.Item>{this.state.House3}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default Deck;