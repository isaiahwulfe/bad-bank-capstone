import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './navbar.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import allToolTip from './tooltips/allToolTip.js';
import createToolTip from './tooltips/createToolTip.js';
import depositToolTip from './tooltips/depositToolTip.js';
import homeToolTip from './tooltips/homeToolTip.js';
import loginToolTip from './tooltips/loginToolTip.js';
import withdrawToolTip from './tooltips/withdrawToolTip.js';
  
const Navigation = () => {
  return(
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>BadBank</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={homeToolTip}>
                <Nav.Link href="#/">Home</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={createToolTip}>
                <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={loginToolTip}>
                <Nav.Link href="#/login/">Login</Nav.Link>    
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={depositToolTip}>
                <Nav.Link href="#/deposit/">Deposit</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={withdrawToolTip}>
                <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 25 }} overlay={allToolTip}>
                <Nav.Link href="#/alldata/">All Data</Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navigation;