import React, { Component } from 'react';
import axios from 'axios';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = () => {
    axios
      .get('/api/message')
      .then((response) => {
        this.setState({ message: response.data });
      })
      .catch((err) => {
        console.log('err : ', err);
      });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h5>welcome to FORGE </h5>
        <h6>
Message from Back End :
          {message}
          {' '}

        </h6>
        <button type="button" onClick={this.clickHandler} className="btn btn-outline-success">
          Click here to test the backend functionality
        </button>
      </div>
    );
  }
}

export default HomePage;
