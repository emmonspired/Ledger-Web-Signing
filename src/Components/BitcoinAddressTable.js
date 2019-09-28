import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class BitcoinAddressTable extends React.Component {
  constructor(props){
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(){
      this.props.onClick(10);
  }

  render(){
    if(this.props.addressList.length === 0){ return null; }
    return (
        <Jumbotron>
          <p>
            Please select the address you wish to use from the list below:
          </p>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Address</th>
              <th>Path</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.addressList}
          </tbody>
        </Table>
        <Button variant="info" onClick={this.loadMore}>Load more</Button>
        </Jumbotron>
    )
  }
}

export default BitcoinAddressTable;
