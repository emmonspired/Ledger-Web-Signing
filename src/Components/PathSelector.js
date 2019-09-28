import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class PathSelector extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.changePath(event.target.value);
  }

  render(){
    return (
        <Form.Group as={Row}>
          <Form.Label column sm="3">Wallet Type</Form.Label>
          <Col sm="9">
            <Form.Control as="select" onChange={this.handleChange}>
              <option value="44'/0'/0'">Legacy (44'/0'/0')</option>
              <option value="49'/0'/0'">P2SH-Segwit (49'/0'/0')</option>
              <option value="84'/0'/0'">Native Segwit (84'/0'/0')</option>
            </Form.Control>
          </Col>
        </Form.Group>
    )
  }
}

export default PathSelector;
