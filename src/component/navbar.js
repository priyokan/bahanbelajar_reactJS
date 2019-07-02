import React,{Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

class Navku extends Component{
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Coba cobi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">            
                        <Nav className="mr-auto">
                        <LinkContainer to={'/tabel'}>
                            <Nav.Link>table</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/form'}>
                            <Nav.Link to="/form">form</Nav.Link>
                        </LinkContainer>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>           
                </Navbar.Collapse>
            </Navbar>  
        )
    }
}
export default Navku;