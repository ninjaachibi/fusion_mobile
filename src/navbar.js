import React, { Component } from 'react';
import './navbar.css';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class NavBar extends Component{

render(){
  return(

<Navbar inverse collapseOnSelect className="NavBar">
  <Navbar.Header>
    <Navbar.Brand>
      <a className="white" href="#brand">Golden Express</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem className="white" eventKey={1} href="#">
        Categories
      </NavItem>
      <NavItem className="white" eventKey={2} href="#">
        All Groceries
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem className="white" eventKey={1} href="#">
        Shopping Cart
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  )}

}
export default NavBar;