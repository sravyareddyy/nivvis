import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ backgroundColor: 'white', color: 'black', padding: '20px 0 0 0' }}>
    <Container className='card mb-2 p-2'>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row>
            <Col md={4} className="mb-2 fs-5 mt-2 text-center text-md-left">
              <h5 style={{ color: '#0166B4' }}>Address</h5>
              <p className='text-dark'>
                R/o.205, Floor GRD, Sunder Kamala Nagar, Laxmibai Kelkar marg,
                Shastri gully, Manav Seva Singh, Sion, Mumbai-400022
              </p>
            </Col>
            <Col md={4} className="mb-2 mt-2 text-center text-md-left">
              <h5 style={{ color: '#0166B4' }}>Information Links</h5>
              <ul className="text-dark list-unstyled">
                <li>
                  <Link to="/" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Vision</Link>
                </li>
                <li>
                  <Link to="/product" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Products</Link>
                </li>
                <li>
                  <Link to="/about" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="mb-2 mt-2 text-center text-md-left">
              <h5 style={{ color: '#0166B4' }}>Socials</h5>
              <ul className="text-dark list-unstyled">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Facebook</a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5" style={{ textDecoration: 'none' }}>LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:pittaimp17@gmail.com" className="text-dark fs-5" style={{ textDecoration: 'none' }}>Email</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Row className="mt-1 fs-5 justify-content-center">
      <Col md={10}>
        <p className="text-center">&copy; {new Date().getFullYear()} NIVVIS Pharmaceuticals. All rights reserved.</p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
