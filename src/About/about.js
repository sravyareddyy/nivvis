import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import img4 from '../images/products/img4.jpg';
import nivvis from '../images/products/names.png';
const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div>
      {/* Hero Section
      <Container fluid className="bg-primary text-white text-center py-5">
        <h1>About Us</h1>
        <p className="lead">Learn more about our mission and vision.</p>
        <Button variant="light" href="#contact-form">Contact Us</Button>
      </Container> */}

      {/* About Section */}
      <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5 mb-3">
        <Row className="d-flex flex-column flex-lg-row align-items-center">
          <Col lg={7}>
            <h2>About Us</h2>
            <p className='text-dark col-11 fs-5 mt-3'>
            <img src={nivvis} height="20" width="160" className="mb-1" alt="Nivvis" /> dedicated to advancing global health, offers high-quality, affordable medications with a focus on chronic care. Our mission encompasses research, development, and transformative solutions.
              Nivvis Labs is dedicated to enhancing global health through:
              <ul>
                <li>Holistic healthcare solutions integrating research, development, and innovation.</li>
                <li>Affordable, high-quality medications, particularly targeting chronic care.</li>
                <li>Addressing healthcare challenges in emerging economies.</li>
                <li>Adapting to the ever-evolving healthcare landscape for a sustainable impact.</li>
              </ul>
            </p>
          </Col>
          <Col lg={5} className="mt-4 mt-lg-0">
            <img src={img4} alt="About us" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Contact Form */}
      <Container className="p-5 bg-light rounded" id="contact-form">
        <h2>Contact Us</h2>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" name="email" placeholder="Email id" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Control type="text" name="phone" placeholder="Phone no." required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Control type="text" name="subject" placeholder="Subject" required onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col lg={6}>
            <Card className="text-center mb-4">
              <Card.Body>
                <FaEnvelope size={40} className="mb-3" />
                <Card.Title>Email</Card.Title>
                <Card.Text>nivvislabs2021@gmail.com</Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center mb-4">
              <Card.Body>
                <FaMapMarkerAlt size={40} className="mb-3" />
                <Card.Title>Address</Card.Title>
                <Card.Text>R/o.205, Floor GRD, Sunder Kamala Nagar, Laxmibai Kelkar marg, Shastri gully, Manav Seva Singh, Sion, Mumbai-400022</Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <FaPhone size={40} className="mb-3" />
                <Card.Title>Phone</Card.Title>
                <Card.Text>+91 1234567890</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Map Section */}
      <Container fluid className="p-5">
        <h2 className="text-center">Our Location</h2>
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019810025419!2d-122.08424968468162!3d37.4220659798224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5c8f3e89%3A0x2d69ed6e9b4b4d7a!2sGoogleplex!5e0!3m2!1sen!2sus!4v1636400858301!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </Container>


    </div>
  );
};

export default About;
