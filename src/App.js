import React from 'react';
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import TransportWebAuthn from "@ledgerhq/hw-transport-webauthn";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import BTC from "@ledgerhq/hw-app-btc";
import * as bip32 from 'bip32';
import { BIP32Interface } from 'bip32';

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


import './App.css';

import MessageForm from './Components/MessageForm';
import BitcoinAddress from './Components/BitcoinAddress';
import BitcoinAddressTable from './Components/BitcoinAddressTable';
import TransportSelector from './Components/TransportSelector';
import PathSelector from './Components/PathSelector';
import ResultBox from './Components/ResultBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlePathSelection = this.handlePathSelection.bind(this);
    this.changeTransport = this.changeTransport.bind(this);
    this.fetchAddresses = this.fetchAddresses.bind(this);
    this.initialize = this.initialize.bind(this);
    this.changePath = this.changePath.bind(this);
    this.clearAddresses = this.clearAddresses.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.signMessage = this.signMessage.bind(this);


    this.state = {
      addresses: [],
      basePath: "44'/0'/0'",
      publicKey: "",
      selectedPath: null,
      transportMethod: null,
      btc: null,
      index: 0,
      message: "",
      signature: null,
      error: null
    };
  }

  async componentDidMount() {
    this.changeTransport("webauthn");
  }

  changePath(newPath){
    this.setState({
      basePath: newPath
    }, () => { this.clearAddresses(); });
  }

  clearAddresses(){
    this.setState({
      addresses: [],
      index: 0
    })
  }

  updateMessage(newMessage){
    this.setState({
      message: newMessage
    })
  }

  async signMessage(message){
    try {
      let result = await this.state.btc.signMessageNew(this.state.selectedPath, Buffer.from(this.state.message).toString("hex"));
      console.log(result);
      this.setState({
        signature: result
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  }

  async changeTransport(method){
    switch(method){
      case "u2f":
      this.setState({
        transportMethod: await TransportU2F.create(),
      }, () => {
        this.setState({
          btc: new BTC(this.state.transportMethod)
        }, () => { this.clearAddresses(); })
      });
        break;
      case "webauthn":
      this.setState({
        transportMethod: await TransportWebAuthn.create(),
      }, () => {
        this.setState({
          btc: new BTC(this.state.transportMethod)
        }, () => { this.clearAddresses(); })
      });
        break;
      case "webusb":
      this.setState({
        transportMethod: await TransportWebUSB.create(),
      }, () => {
        this.setState({
          btc: new BTC(this.state.transportMethod)
        }, () => { this.clearAddresses(); })
      });
        break;
      default:
        break;
    }
  }

handlePathSelection(path){
    this.setState({
    selectedPath: path
  });
}

async initialize(){
  let response = await this.state.btc.getWalletPublicKey(this.state.basePath);
  this.setState({
    publicKey: response
  }, () => {
    this.fetchAddresses(10);
  });
}

async fetchAddresses(amount){
  let node: BIP32Interface = bip32.fromPublicKey(Buffer.from(
  this.compressPublicKey(this.state.publicKey), 'hex'),
  new Buffer.from(this.state.publicKey.chainCode, 'hex'));

  let childKey = "";
  let path = "";
  let child = null;
  let addressesCopy = Array.from(this.state.addresses);
  let tempIndex = this.state.index;

  for(let i = 0; i < amount; i++){
    path = this.state.basePath + "/0/" + tempIndex;
    child = node.derivePath("0/" + tempIndex);
    childKey = Buffer.from(child.publicKey).toString('hex');
    addressesCopy.push(<BitcoinAddress key={path}
                    pubKey={childKey}
                    path={path}
                    balance={0}
                    isSelected={this.state.selectedPath === path ? true : false}
                    onSelect={this.handlePathSelection}
                    />);
    tempIndex++;
  }
  this.setState({
    index: tempIndex,
    addresses: addressesCopy
  });
}

compressPublicKey(publicKey){
let suffix = parseInt(publicKey.publicKey.charAt(129), 16) % 2 === 0 ? "02" : "03";
let compressedKey = suffix + publicKey.publicKey.substring(2, 66);
return compressedKey;
}

render(){
  let addressTable = null;
  let messageForm = null;
  let settings = null;
  let resultBox = null;

  if(this.state.addresses.length === 0){
    settings =
    <Jumbotron>
      <PathSelector changePath={this.changePath} />
      <TransportSelector changeTransport={this.changeTransport} />
      <Button variant="primary" onClick={this.initialize}>Start</Button>
    </Jumbotron>
  }

  if(this.state.addresses.length > 0 && !this.state.selectedPath){
    addressTable = <BitcoinAddressTable addressList={this.state.addresses} onClick={this.fetchAddresses}/>
  }

  if(this.state.selectedPath && !this.state.signature){
    messageForm = <MessageForm value={this.state.message} onChange={this.updateMessage} onSubmit={this.signMessage} />
  }

  if(this.state.signature){
    resultBox = <ResultBox signature={this.state.signature}/>;
  }
  return (
    <Container className="App">
      <Jumbotron>
        <h1>Leger Signing Tool</h1>
      </Jumbotron>
          {settings}
          {addressTable}
          {messageForm}
          {resultBox}
    </Container>

  );
}
}

export default App;
