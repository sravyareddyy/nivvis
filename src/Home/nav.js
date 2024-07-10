import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import main from '../images/products/mn.jpg';
import smallLogo from '../images/products/logo.jpg';
import name from '../images/products/name.jpg';
import top from '../images/products/img13.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkColor = scrolled ? '#0166B4' : '#fff';
  const fontSize = scrolled ? 'fs-5' : 'fs-6';

  return (
    <>
      <Navbar.Brand className={`mx-auto ${scrolled ? 'd-none' : 'd-block'}`}>
        <Link to="/">
          <img
            src={main}
            height="120"
            className="rounded mx-auto d-block"
            alt="Logo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </Navbar.Brand>
      <Navbar
        className={`p-2 mb-0 ${scrolled ? 'fixed-top bg-white shadow-sm' : ''}`}
        style={{ backgroundColor: scrolled ? '#fff' : '#0166B4', transition: 'background-color 0.3s, box-shadow 0.3s' }}
        expand="lg"
      >
        <Container>
          <div className="d-flex w-100 align-items-center">
            {scrolled && (
              <Navbar.Brand href="#" className="d-flex align-items-center me-auto">
                <img
                  src={smallLogo}
                  height="30"
                  className="rounded"
                  alt="Small Logo"
                />
                <img 
                  src={name}
                  height="10"
                  className="rounded mt-0 ms-2"
                  alt="name"
                />
              </Navbar.Brand>
            )}
            <Navbar.Toggle aria-controls="offcanvas-navbar-nav" className="ms-auto d-lg-none" onClick={() => setShowOffcanvas(true)} />
            <div className={`d-none d-lg-flex ${scrolled ? 'justify-content-end' : 'justify-content-center w-100'}`}>
              <Nav className={`${scrolled ? 'd-flex align-items-center' : ''}`}>
                <Nav.Link 
                  as={Link} 
                  to="/" 
                  className={`mx-3 ${fontSize}`} 
                  style={{ color: linkColor }}
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  href='/#vision' 
                  className={`mx-3 ${fontSize}`} 
                  style={{ color: linkColor }}
                >
                  Vision
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/product" 
                  className={`mx-3 ${fontSize}`} 
                  style={{ color: linkColor }}
                >
                  Products
                </Nav.Link>
                <Nav.Link 
                  as={Link} 
                  to="/about" 
                  className={`mx-3 ${fontSize}`} 
                  style={{ color: linkColor }}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
      {location.pathname === '/' && (
        <div className="top-image-container position-relative" style={{ overflow: 'hidden' }}>
          <img src={top} alt="Top" className="w-100" style={{ maxHeight: '470px' }} />
          <div className="position-absolute text-white text-center w-100" style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}>
            <p className="fs-3 text-info fw-bold">
              <strong className="fw-bold text-primary">Providing Trusted,</strong><br />
              Effective, <br />
              and Secure Therapeutic Care.<br />
            </p>
          </div>
        </div>
      )}
      <Offcanvas className='align-items-center' 
          show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end"
          style={{ maxWidth: '45%' }}>
        <Offcanvas.Header className='ms-2' closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShowOffcanvas(false)} className={fontSize} style={{ color: '#0166B4' }}>Home</Nav.Link>
            <Nav.Link href="/#vision" onClick={() => setShowOffcanvas(false)} className={fontSize} style={{ color: '#0166B4' }}>Vision</Nav.Link>
            <Nav.Link as={Link} to="/product" onClick={() => setShowOffcanvas(false)} className={fontSize} style={{ color: '#0166B4' }}>Products</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setShowOffcanvas(false)} className={fontSize} style={{ color: '#0166B4' }}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
