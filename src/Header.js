import React from 'react'
import './Header.css'
import { Nav,Container, Button, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <div className='overall'>
          <div className='sec'>
            <Navbar bg="primary" className='w-100' expand="md">
              <Container>
                <Navbar.Brand href="#">KD kudi</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About Us</Nav.Link>
                    <Nav.Link href="#action2">How It Works</Nav.Link>
                    <Nav.Link href="#action2">Affiliate</Nav.Link>
                    <Nav.Link href="#action2">Coupon Vendor</Nav.Link>
                    <Nav.Link href="#action2">FAQs</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </Nav>
                    <Button variant="primary">Login</Button>
                    <Button variant="warning">Get started</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
    )
}

export default Header
