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
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.Name}</Card.Title>
                    <Card.Subtitle>{this.state.House1} | {this.state.House2} | {this.state.House3}</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item>AERC: {this.state.Ratings.AERC}</ListGroup.Item>
                        <ListGroup.Item>Cards: {this.state.Ratings.Cards}</ListGroup.Item>
                        <ListGroup.Item>Consistency: {this.state.Ratings.Consistency}</ListGroup.Item>
                        <ListGroup.Item>SAS: {this.state.Ratings.SAS}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default Deck;