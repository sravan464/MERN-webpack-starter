import React, { Component } from 'react';
import {
  Navbar, NavbarToggler, NavbarBrand, Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <h5>FORGE PSO</h5>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
