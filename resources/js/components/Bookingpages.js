import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Booking from './BookingPages/Booking';
import Client from './BookingPages/Client';
import Recap from './BookingPages/Recap';

export default class BookingPages extends Component {
    state = {
        // ALL values to be passed to the Recap component
        // values to be passed to the booking component
        origin: "",
        destination: "",
        directions: { origin: null, destination: null },
        xfrDate: "",
        xfrTime: "",

        // values to be passed to the client component
        firstName: "",
        lastName: "",
        cellPhone: "",
        email: "",
        numAdults: "",
        numChildren: "",
        xfrNotes: "",

        // Controls what component to render
        currentPage: 0
    }

    handleInputChange = event => {
        console.log(event);
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAutocompleteSelect = (data) => {
        console.log({ data });

        this.handleInputChange({ target: { name: data.name, value: data.address }});

        this.setState({
            directions: { ...this.state.directions, [data.name]: data.coordinates },
        });
    }

    handleNextPageLoad = event => {
        event.preventDefault();
        // console.log("'I've been clicked")
        this.setState({ [name]: this.state.currentPage++ })
    }

    handlePreviousPageLoad = event => {
        event.preventDefault();
        // console.log("I've been clicked")
        this.setState({ [name]: this.state.currentPage-- })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`Form Value: ${this.state.inputvalue}`)
    }

    render() {
        const steps = [
            <Booking
                origin={this.state.origin}
                destination={this.state.destination}
                directions={this.state.directions}
                xfrDate={this.state.xfrDate}
                xfrTime={this.state.xfrTime}
                handleInputChange={this.handleInputChange}
                handleNextPageLoad={this.handleNextPageLoad}
                handleAutocompleteSelect={this.handleAutocompleteSelect}
            />,
            <Client
                origin={this.state.origin}
                destination={this.state.destination}
                xfrDate={this.state.xfrDate}
                xfrTime={this.state.xfrTime}
                firstName={this.state.firstName}
                lasttName={this.state.lastName}
                cellPhone={this.state.cellPhone}
                email={this.state.email}
                numAdults={this.state.numAdults}
                numChildren={this.state.numChildren}
                xfrNotes={this.state.xfrNotes}
                handleInputChange={this.handleInputChange}
                handlePreviousPageLoad={this.handlePreviousPageLoad}
                handleNextPageLoad={this.handleNextPageLoad}
            />,
            <Recap
                origin={this.state.origin}
            />
        ];

        return steps[this.state.currentPage];
    }
}

if (document.getElementById('booking-pages')) {
    ReactDOM.render(<BookingPages />, document.getElementById('booking-pages'));
}
