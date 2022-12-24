import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Container, Navbar, Nav } from "react-bootstrap";

export default function BlogNavbar() {
    return (
        
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand className="site-title" href="#">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="navbar-nav" >MENU <FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
            <Navbar.Collapse className="collapse" id="navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#post">SAMPLE POST</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse> 
            </Container>
        </Navbar>
    )
}