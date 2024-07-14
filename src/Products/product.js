import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaHeartbeat, FaBrain, FaPills, FaVial, FaSyringe, FaCapsules } from 'react-icons/fa';
import pro from '../images/products/img11.jpg';
const Products = () => {
  const productNames1 = [
    'TELSYDAY TRIO 50', 'TELSYDAY TRIO 25', 'TELSYDAY CT 40',
    'TELSYDAY AMH', 'TELSYDAY AM', 'TELSYDAY 40',
    'ROSUFAME GOLD 10', 'ROSUFAME F 10', 'ROSUFAME CV 10',
    'ROSUFAME 10'
  ];

  const productNames2 = [
    { category: 'NEUROPATHIC PAIN', icon: FaBrain, products: ['COBASTART', 'COBASTART XT', 'COBASTART P'] },
    { category: 'PAIN MANAGEMENT', icon: FaPills, products: ['GABAZEST NT'] },
    { category: 'CALCIUM & VITAMIN DEFICIENCY', icon: FaVial, products: ['CALCINIV D3'] },
    { category: 'DIABETES', icon: FaSyringe, products: ['PRACTOGLIM M1', 'PRACTOGLIM M2', 'PRACTOGLIM M2 FORTE'] },
    { category: 'OTHERS', icon: FaCapsules, products: ['EMCOVIT', 'SPANSAVE', 'SPANSAVE DSR'] }
  ];

  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const renderProductColumns = (products) => {
    const productChunks = chunkArray(products, 3);
    return (
      
      <Row className="mb-3">
        {productChunks.map((chunk, index) => (
          <Col key={index} className="d-flex flex-column gap-2 mb-2">
            {chunk.map(product => (
              <Link
                to={`/product/${encodeURIComponent(product)}`}
                key={product}
                className="text-decoration-none text-primary"
                style={{ fontSize: '1.2rem', whiteSpace: 'nowrap' }} // Adjust font size and prevent wrapping
              >
                {product}
              </Link>
            ))}
          </Col>
        ))}
      </Row>
    );
  };

  const renderCategoryCard = (category) => (
    <Card className="p-4 mb-4 border-0 shadow-sm" key={category.category}>
      <Card.Body>
        <Row>
          <Col md={3}>
            <Card.Title className="d-flex align-items-center mb-3">
              {category.category}
              <category.icon size={30} className="text-primary ms-2 me-2 d-md-none d-lg-flex" /> {/* Adjust icon alignment */}
            </Card.Title>
          </Col>
          <Col md={9} className="ps-4">
            {renderProductColumns(category.products)}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-5">
       <Container fluid className="text-white text-center ps-2 mb-3"
        style={{
         
          backgroundImage: `url(${pro})`,
          height: '230px', // Adjust the height as needed
          width: '100%', // Ensure the image takes full width
          maxWidth: '1200px',
          borderRadius: '10px',
          display: 'flex', // Flexbox for centering text
          alignItems: 'center', // Center vertically
          justifyContent: 'center', // Center horizontally
          backgroundPosition: '-50px 0'
           // Ensure the image is contained within the container
        }} >
        <h1 className='text-dark mt-2'>Our Products</h1>
      </Container>
      {/* <h1 className="mb-5 text-center">Our Products</h1> */}
      <Card className="p-4 mb-4 border-0 shadow-sm mt-3">
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Title className="d-flex align-items-center mb-2">
                ANTI HYPERTENSION & LIPIDS
                <FaHeartbeat size={40} className="text-danger ms-2 me-2" />
              </Card.Title>
            </Col>
            <Col md={9} className="ps-4">
              {renderProductColumns(productNames1)}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {productNames2.map(category => renderCategoryCard(category))}
      <div className="pb-5 mb-5"></div>
    </Container>
  );
};

export default Products;
