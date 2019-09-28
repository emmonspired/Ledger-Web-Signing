import React from 'react';
import * as bitcoinjs from 'bitcoinjs-lib';
const request = require("request");
class BitcoinAddress extends React.Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.pubKeyToAddress = this.pubKeyToAddress.bind(this);
    this.fetchBalance = this.fetchBalance.bind(this);

    this.state = {
      balance: "loading...",
      address: this.pubKeyToAddress()
    }
  }

  fetchBalance(){
    let options = { method: 'GET', url: 'https://blockchain.info/q/addressbalance/' + this.state.address};
    let newBalance = 0;
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      newBalance = body / 100000000;
    });
    this.setState({
      balance: newBalance
    })

  }

  componentDidMount(){
    this.fetchBalance();
  }

  pubKeyToAddress(){
    let hex = this.props.pubKey.replace(/^0x/, "");
    let b = Buffer.from(hex, "hex");
    let keyPair = bitcoinjs.ECPair.fromPublicKey(b);
    let response;
    switch(this.props.path.substring(0, 3)){
      case "44'":
        response = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });
        return response.address;
      case "84'":
        response = bitcoinjs.payments.p2wpkh({ pubkey: keyPair.publicKey });
        return response.address;
      case "49'":
        response = bitcoinjs.payments.p2sh({
          redeem: bitcoinjs.payments.p2wpkh({ pubkey: keyPair.publicKey }),
        });
        return response.address;
      default:
        break;
    }
  }

  handleSelect(){
    this.props.onSelect(this.props.path);
  }

  render() {
    return (
      <tr onClick={this.handleSelect}>
        <td>
          {this.state.address}
        </td>
        <td>
          {this.props.path}
        </td>
        <td>
          {this.state.balance}
        </td>
      </tr>
    )
  }
}

export default BitcoinAddress;
