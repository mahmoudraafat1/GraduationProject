import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import property from "../artifacts/property.json";
import getWeb3 from "../getWeb3";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { DrizzleProvider } from 'drizzle-react';
import { Spinner } from 'react-bootstrap'
import {
  LoadingContainer,
  AccountData,
  ContractData,
  ContractForm
} from 'drizzle-react-components'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import "../card.css";


const drizzleOptions = {
  contracts: [property]
}


var row = [];
var countarr = [];
var userarr = [];
var reqsarr = [];
var propertyOwner = [];
// var requested = false;

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      propertyInstance: undefined,
      account: null,
      web3: null,
      count: 0,
      requested: false,
    }
  }

  requestproperty = (seller_address, property_id) => async () => {

    console.log(seller_address);
    console.log(property_id);
    // this.setState({requested: true});
    // requested = true;
    await this.state.propertyInstance.methods.requestproperty(
      seller_address,
      property_id
    ).send({
      from: this.state.account,
      gas: 2100000
    }).then(response => {
      this.props.history.push("#");
    });

    //Reload
    window.location.reload(false);

  }

  componentDidMount = async () => {
    //For refreshing page only once
    if (!window.location.hash) {
      console.log(window.location.hash);
      window.location = window.location + '#loaded';
      window.location.reload();
    }

    try {
      //Get network provider and web3 instance
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = property.networks[networkId];
      const instance = new web3.eth.Contract(
        property.abi,
        deployedNetwork && deployedNetwork.address,
      );

      this.setState({ propertyInstance: instance, web3: web3, account: accounts[0] });

      const currentAddress = await web3.currentProvider.selectedAddress;
      console.log(currentAddress);
      var registered = await this.state.propertyInstance.methods.isBuyer(currentAddress).call();
      console.log(registered);
      this.setState({ registered: registered });
      var count = await this.state.propertyInstance.methods.getpropertysCount().call();
      count = parseInt(count);
      console.log(typeof (count));
      console.log(count);
      var verified = await this.state.propertyInstance.methods.isVerified(currentAddress).call();
      console.log(verified);

      // var countbuyer = await this.state.propertyInstance.methods.getBuyersCount().call();
      // var countseller = await this.state.propertyInstance.methods.getSellersCount().call();
      // userarr.push(<p>{countseller.toString()}</p>);

      // countarr.push(<p>{count.toString()}</p>);
      countarr.push(<ContractData contract="property" method="getpropertysCount" />);
      userarr.push(<ContractData contract="property" method="getSellersCount" />);
      reqsarr.push(<ContractData contract="property" method="getRequestsCount" />);

      var rowsArea = [];
      var rowsCity = [];
      var rowsState = [];
      var rowsPrice = [];
      var rowsPID = [];
      var rowsSurvey = [];


      var dict = {}
      for (var i = 1; i < count + 1; i++) {
        var address = await this.state.propertyInstance.methods.getpropertyOwner(i).call();
        dict[i] = address;
      }

      console.log(dict[1]);

      for (var i = 1; i < count + 1; i++) {
        rowsArea.push(<ContractData contract="property" method="getArea" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
        rowsCity.push(<ContractData contract="property" method="getCity" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
        rowsState.push(<ContractData contract="property" method="getState" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
        rowsPrice.push(<ContractData contract="property" method="getPrice" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
        rowsPID.push(<ContractData contract="property" method="getPID" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
        rowsSurvey.push(<ContractData contract="property" method="getSurveyNumber" methodArgs={[i, { from: "0xa42A8B478E5e010609725C2d5A8fe6c0C4A939cB" }]} />);
      }

      for (var i = 0; i < count; i++) {
        var requested = await this.state.propertyInstance.methods.isRequested(i + 1).call();
        // console.log(requested);

        row.push(<tr><td>{i + 1}</td><td>{rowsArea[i]}</td><td>{rowsCity[i]}</td><td>{rowsState[i]}</td><td>{rowsPrice[i]}</td><td>{rowsPID[i]}</td><td>{rowsSurvey[i]}</td>
          <td>
            <Button onClick={this.requestproperty(dict[i + 1], i + 1)} disabled={!verified || requested} className="button-vote">
              Request property
            </Button>
          </td>
        </tr>)
      }
      console.log(row);




    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };



  render() {
    if (!this.state.web3) {
      return (
        <div>
          <div>
            <h1>
              <Spinner animation="border" variant="primary" />
            </h1>
          </div>

        </div>
      );
    }

    if (!this.state.registered) {
      return (
        <div className="content">
          <div>
            <Row>
              <Col xs="6">
                <Card className="card-chart">
                  <CardBody>
                    <h1>
                      You are not verified to view this page
                                        </h1>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>

        </div>
      );
    }

    return (
      <>
        <div className="content">
        <DrizzleProvider options={drizzleOptions}>
            <LoadingContainer>
              <div className="main-section">
                <Row>
                  <Col lg="4">
                    <div class="dashbord dashbord-skyblue">
                      <div class="icon-section">
                        <i class="fa fa-users" aria-hidden="true"></i><br />
                        <medium>Total Sellers</medium><br />
                       <p> {userarr} </p>
                      </div>
                      <div class="detail-section"><br />
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div class="dashbord dashbord-orange">
                      <div class="icon-section">
                        <i class="fa fa-propertymark" aria-hidden="true"></i><br />
                        <medium>Registered propertys Count</medium><br />
                        <p>{countarr}</p>
                      </div>
                      <div class="detail-section"><br />
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div class="dashbord dashbord-blue">
                      <div class="icon-section">
                        <i class="fa fa-bell" aria-hidden="true"></i><br />
                        <medium>Total Requests</medium><br />
                        <p>{reqsarr}</p>
                      </div>
                      <div class="detail-section">
                        <br />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </LoadingContainer>
          </DrizzleProvider>
                    <Row>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <h5 className="title">Profile</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">

                    <Button href="/admin/buyerProfile" className="btn-fill" color="primary">
                      View Profile
                </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <h5 className="title">Owned propertys</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">

                    <Button href="/admin/Ownedpropertys" className="btn-fill" color="primary">
                      View Your propertys
                </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <h5 className="title">Make Payments for Approved property Requests</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">

                    <Button href="/admin/MakePayment" className="btn-fill" color="primary">
                      Make Payment
                </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <DrizzleProvider options={drizzleOptions}>
            <LoadingContainer>
              <Row>
                <Col lg="12" md="12">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">propertys Info</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="tablesorter" responsive color="black">
                        <thead className="text-primary">
                          <tr>
                            <th>#</th>
                            <th>Area</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Price</th>
                            <th>Property PID</th>
                            <th>Survey Number</th>
                            <th>Request property</th>
                          </tr>
                        </thead>
                        <tbody>
                          {row}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </LoadingContainer>
          </DrizzleProvider>
        </div>
      </>

    );
  }
}


export default Dashboard;
