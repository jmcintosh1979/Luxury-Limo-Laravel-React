import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import './Booking.css';
import Map from '../Map';

class Confirmation extends Component {
    render() {
        return (
            <Container>
              <Jumbotron>
                <Row>
                    <Col>
                        <h1 id='confirmNum'>Confirmation #: {this.props.confirmationNum}</h1>

                        <hr />
                    </Col>
                    
                </Row>

                <Row>
                     <Col>
      
                        <h2>  Reservation Details:   </h2>
                        <hr />
                        <h4>  Name: {this.props.firstName} {this.props.lastName}  </h4> 
                        <h4>  Email:  {this.props.email}    </h4>
                        <h4>  Cell Phone: {this.props.cellPhone}  </h4>
                        <h4>  Notes: {this.props.xfrNotes} </h4>
                        <hr />
                        <h4>   Vehicle:   </h4> 
                        <h4>   Adults: {this.props.numAdults}   </h4>
                        <h4>   Kids: {this.props.numChildren}  </h4>
                        <h4>    Luggage:   </h4>
                        
                        <hr />
        
                   
                  </Col>
      
                  <Col>
                      <Map origin={this.props.directions.origin} destination={this.props.directions.destination} />
                        <br />
                        <h4>   Origin:  {this.props.origin} </h4> 
                        <h4>  Destination:  {this.props.destination} </h4>
                        <hr />
                        <h4>  Pickup Date: {this.props.xfrDate}  </h4>
                        <h4>   Pickup Time: {this.props.xfrTime}   </h4>
                  </Col>
                  
                </Row>
      
        
              </Jumbotron>
            </Container>
        );
    };
};

export default Confirmation;