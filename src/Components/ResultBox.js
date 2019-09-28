import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

class ResultBox extends React.Component {
  constructor(props){
    super(props);

    this.generateSignature = this.generateSignature.bind(this);
  }

  generateSignature(){
    let response = this.props.signature;
    let v = response['v'] + 27 + 4;
    let signature = Buffer.from(v.toString(16) + response['r'] + response['s'], 'hex').toString('base64');
    return signature;
  }

  render(){
    return (
      <Jumbotron>
        <p>Signature: {this.generateSignature()}</p>
      </Jumbotron>

    )
  }
}

export default ResultBox;
