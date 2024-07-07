import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ backgroundColor: '#0166B4', color: 'white', padding: '20px 0 0 0' }}>
    <Container>
      <Row className="justify-content-center"> {/* Added justify-content-center class */}
        <Col md={10}> {/* Adjusted column size for better centering */}
          <Row>
            <Col md={4} className="mb-2 fs-5">
              <h5>Address</h5>
              <p>R/o.205, Floor GRD, Sunder Kamala Nagar, Laxmibai Kelkar marg,
                 Shastri gully, Manav Seva Singh, Sion, Mumbai-400022</p>
            </Col>
            <Col md={4} className="mb-2">
              <h5>Information Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-white fs-5" style={{ textDecoration: 'none' }}>About Us</Link></li>
                <li><Link to="/product" className="text-white fs-5" style={{ textDecoration: 'none' }}>Products</Link></li>
                <li><Link to="/about" className="text-white fs-5" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
              </ul>
            </Col>
            <Col md={4} className="mb-2">
              <h5>Socials</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" style={{ textDecoration: 'none' }}>Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" style={{ textDecoration: 'none' }}>Twitter</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" style={{ textDecoration: 'none' }}>LinkedIn</a></li>
                <li><a href="mailto:pittaimp17@gmail.com" className="text-white fs-5" style={{ textDecoration: 'none' }}>Email</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-1 fs-5 justify-content-center"> {/* Added justify-content-center class */}
        <Col md={10}>
          <p className="text-center">&copy; {new Date().getFullYear()} NIVVIS Pharmaceuticals. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
