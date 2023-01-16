import React, { useState } from 'react';
import logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarText} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar' fixed="top" expand="lg">
        <NavbarBrand className="app-title" href="/"><img src={logo} alt="header logo" /><NavbarText className="app-tagline" style={{color: "pink", fontStyle: "italic", fontSize: ".7rem"}}>The only dating app for pet lovers!</NavbarText></NavbarBrand>
        <NavbarToggler className="nav-toggle me-2" style={{color: "#d7d7d7"}} onClick={toggle}><FontAwesomeIcon icon={faBars} /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem className='nav-item'>
              <NavLink style={{color: "#d7d7d7"}} href="">Profile</NavLink>
            </NavItem>                  
            <NavItem className='nav-item'>
              <NavLink style={{color: "#d7d7d7"}} href="https://github.com/eonflower">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
    </div>
  );
}
