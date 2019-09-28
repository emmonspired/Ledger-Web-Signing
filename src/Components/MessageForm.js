import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.onSubmit(event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
              <Form.Label column sm="3">Message</Form.Label>
              <Col sm="9">
                <Form.Control as="textarea" rows="3" value={this.props.value} onChange={this.handleChange} />
              </Col>
          </Form.Group>
          <Button variant="primary" type="submit" value="submit">Sign Now</Button>
        </Form>
      </Jumbotron>



      //<form onSubmit={this.handleSubmit}>
    //    <label>
  //        Message:
//          <input type="text" value={this.props.value} onChange={this.handleChange} />
        //</label>
        //<input type="submit" value="Submit" />
      //</form>
    )
  }
}

export default MessageForm;
