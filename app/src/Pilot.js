import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";


class Pilot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: JSON.parse(JSON.stringify(props)),
            ViewState: "DISPLAY"
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let data = {};
        data[e.target.name] = e.target.value;
        this.setState({
            Data: data
        });
    }

    handleEditClick() {
        this.setState({
            ViewState: "EDIT"
        });
    }

    handleCancel() {
        this.setState({
            ViewState: "DISPLAY"
        });
    }

    handleSaveClick() {
        console.log(this.state);
        this.setState({
            ViewState: "DISPLAY"
        });
    }

    render() {
        switch (this.state.ViewState) {
            case "DISPLAY":
                return <Badge onClick={this.handleEditClick}>{this.state.Data.Name}</Badge>;
            case "EDIT":
                return (
                    <Form>
                        <Form.Group controlId="formEditPilot">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="clownshoes" name="Name" onChange={this.handleInputChange}></Form.Control>
                        </Form.Group>
                        <Button onClick={this.handleSaveClick}>Save</Button>
                        <Button onClick={this.handleCancel}>Cancel</Button>
                    </Form>
                );
            default:
                return <div>Unknown ViewState</div>;
        }
    }
}

export default Pilot;