import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Form, Card, ButtonGroup, InputGroup } from "react-bootstrap";
import "./Booking.css";
import Vehicles from "../../Vehicles.json";
import VehicleCard from "./../VehicleCard";
import axios from 'axios';

class Client extends Component {

  state = {
     Vehicles: [],
  };
  
  componentDidMount() {
      axios.get()
      .then (res => {
          const Vehicles = res.data;
          this.setState ({ Vehicles });
      })
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          
        {/* Vehice Images */}
          <Row> 
          {this.state.Vehicles.map(Vehicles => (
          <VehicleCard

            id={Vehicles.id}
            name={Vehicles.name}
            image={Vehicles.image}
            description={Vehicles.description}
            capacity={Vehicles.capacity}
            quantity={Vehicles.quantity}
          />
          
        ))}

          </Row>

          <br />
          <hr />
          <br />

          {/* Client Information */}
          <Row>
            <Col>
              <Form>
                <Form.Group as={Col} controlId="formGridOrigin">
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control
                    value={this.props.origin}
                    readOnly
                    style={{ color: "black" }}                  
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDestination">
                  <Form.Label>Drop Off Location</Form.Label>
                  <Form.Control 
                    value={this.props.destination}
                    readOnly                  
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formGridXfrDate">
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control 
                    value={this.props.xfrDate}
                    readOnly                  
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formGridXfrTime">
                  <Form.Label>Pickup Time</Form.Label>
                  <Form.Control 
                    value={this.props.xfrTime}
                    readOnly                  
                  />
                </Form.Group>

              </Form>
            </Col>

            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="firstName"                      
                      placeholder="First Name"
                      value={this.props.firstName}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="lastName"
                      placeholder="Last Name" 
                      value={this.props.lastName}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                                
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      name="email"                    
                      placeholder="Email"
                      value={this.props.email}
                      onChange={this.props.handleInputChange}
                    />
                  </InputGroup>
                </Form.Group>
                
                <Form.Group controlId="formGridCellPhone">
                  <Form.Label>Cell Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="cellPhone"                    
                    placeholder="Cell Phone"
                    value={this.props.cellPhone}
                    onChange={this.props.handleInputChange}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="formGridAdults">
                    <Form.Label>Number of Adults</Form.Label>
                    <Form.Control
                      type="text"
                      name="numAdults"                    
                      placeholder="Adults"
                      value={this.props.numAdults}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="formGridChildren">
                    <Form.Label>Number of Children</Form.Label>
                    <Form.Control
                      type="text"
                      name="numChildren"                    
                      placeholder="Childen"
                      value={this.props.numChildren}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridNotes">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows="5"
                      name="xfrNotes"                    
                      placeholder="Comments"
                      value={this.props.xfrNotes}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Button
                  variant="primary" 
                  name="currentPage"
                  type="submit"
                  value="submit"
                  onClick={this.props.handleNextPageLoad}
                  style={{ margin: "10px" }}
                >
                  Book it!
                </Button>

                <Button 
                  variant="primary" 
                  name="currentPage"
                  type="submit"
                  value="submit"
                  onClick={this.props.handlePreviousPageLoad}
                  style={{ margin: "10px" }}
                >
                  Back
                </Button>

              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Client;



