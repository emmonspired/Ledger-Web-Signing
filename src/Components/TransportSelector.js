import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class TransportSelector extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.changeTransport(event.target.value);
  }

  render(){
    return (
      <Form.Group as={Row}>
        <Form.Label column sm="3">Transport Method</Form.Label>
        <Col sm="9">
          <Form.Control as ="select" onChange={this.handleChange}>
            <option value="webauthn">WebAuthN</option>
            <option value="u2f">U2F</option>
            <option value="webusb">WebUSB</option>
          </Form.Control>
        </Col>
      </Form.Group>
    )
  }
}

export default TransportSelector;
