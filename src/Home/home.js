import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgTelsydayTrio50 from '../Products/productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_1.jpg';
import imgTelsydayTrio25 from '../Products/productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_1.jpg';
import imgTelsydayAMH from '../Products/productimages/antihyp/TELSY DAY AMH/untitle.png';
import imgTelsydayAM40 from '../Products/productimages/antihyp/TELSYDAY AM/untitled(3).png';
import imgTelsyday40 from '../Products/productimages/antihyp/Telsyday40/untitled (2).png';
import imgRosufameGold10 from '../Products/productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_1.jpg';
import imgRosufameCV10 from '../Products/productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_1.jpg';
import imgCalcinivD3 from '../Products/productimages/Calciniv d3/CALCINIV D3_1.jpg';
import emcovit from '../Products/productimages/emcovit/EMCOVIT GOLD_1.jpg';
import spansave from '../Products/productimages/Spansave/SPANSAVE DSR_1.jpg';
import practoglim_m1 from '../Products/productimages/Practoglim_m1/practoglim_m1_1.jpg';
import practoglim_m2 from '../Products/productimages/Practoglim_m2/practoglim_m2_1.jpg';
import practoglim_m2f from '../Products/productimages/practoglim_m2_forte/practoglim_m2f_1.jpg';
import lab from '../images/products/img3.png';
import img from '../images/products/img1.jpg';

const images = [
  { src: imgTelsydayTrio50, name: 'Telsyday Trio 50' },
  { src: imgTelsydayTrio25, name: 'Telsyday Trio 25' },
  { src: imgTelsydayAMH, name: 'Telsy Day AMH' },
  { src: imgTelsydayAM40, name: 'Telsyday AM' },
  { src: imgTelsyday40, name: 'Telsyday 40' },
  { src: imgRosufameGold10, name: 'Rosufame Gold 10' },
  { src: imgRosufameCV10, name: 'Rosufame CV 10' },
  { src: imgCalcinivD3, name: 'Calciniv D3' },
  { src: emcovit, name: 'Emcovit Gold' },
  { src: spansave, name: 'Spansave DSR' },
  { src: practoglim_m1, name: 'Practoglim M1' },
  { src: practoglim_m2, name: 'Practoglim M2' },
  { src: practoglim_m2f, name: 'Practoglim M2 Forte' },
];

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 576 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: '10px',
      top: '45%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '50%',
    }}
  >
    &#9664;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      right: '10px',
      top: '45%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '50%',
    }}
  >
    &#9654;
  </button>
);

const Home = () => {
  return (
    <div>
      <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5" id="vision">
        <h1>Vision</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-7">
            <p className="text-dark col-11 fs-5 mt-3">
              NIVVIS Pharmaceuticals is committed to fostering a healthier future by providing high-quality medications that empower individuals to manage and overcome illness effectively. Our vision is to be a trusted leader in healthcare, recognized for our dedication to improving health outcomes through innovative and patient-focused solutions.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              We prioritize accessibility and affordability, ensuring our medications reach those who need them most without financial strain. By making essential treatments widely available, we aim to bridge healthcare gaps and promote equitable access to healthcare worldwide.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              Innovation drives our efforts to develop new therapies and enhance existing treatment. Through rigorous research and development, we strive to address unmet medical needs and pioneer advancements in chronic care management. Our goal is to contribute meaningfully to disease prevention, management, and overall well-being.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={lab} height="425" className="rounded d-block" alt="Lab" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-dark fs-5">
            At NIVVIS Pharmaceuticals, ethical principles guide our practices. Our focus remains steadfast on improving patient outcomes, supporting healthcare providers, and making a positive impact on global health.
          </p>
        </div>
      </Container>
      <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5" id="services">
        <h1>Our Services</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-7">
            <p className="text-dark fs-5 mt-2">
              Nivvis Labs is steadfast in its commitment to advancing healthcare, with a primary emphasis on cardiovascular, neurological health, and pain management. Our expansive range of pharmaceutical products is meticulously designed to meet the unique needs of patients across various therapeutic areas. We take pride in our unwavering dedication to delivering high-quality and innovative medicines, making a significant contribution to the global health landscape. Committed to excellence, we constantly strive to make a positive impact on individuals and communities. Nivvis Labs, through continuous research and development, aims to provide transformative solutions, addressing the evolving challenges in healthcare.
            </p>
            <p className="text-dark fs-5 mt-2">
              Our diverse portfolio reflects our dedication to chronic care and therapeutic advancements, positioning us at the forefront of healthcare innovation for a healthier tomorrow.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={img} height="225" className="rounded d-block mt-3 mt-lg-0" alt="Lab" />
          </div>
        </div>
      </Container>
      <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5" id="products">
  <h1>Products</h1>
  <div style={{ position: 'relative' }}>
    <Carousel
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      autoPlay={false}
      autoPlaySpeed={3000}
      customTransition="all .5"
      transitionDuration={500}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {images.map((image, imgIndex) => (
        <div
          key={imgIndex}
          className="text-center"
          style={{
            padding: '30px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            borderRadius: '10px',
            margin: '10px', // Adding margin to create space between items
          }}
        >
          <img
            className="d-block"
            src={image.src}
            alt={image.name}
            style={{
              objectFit: 'contain',
              height: '120px',
              marginBottom: '20px',
              borderRadius: '5px',
            }}
          />
          <h5 style={{color: '#0166B4' }}>{image.name}</h5>
        </div>
      ))}
    </Carousel>
  </div>
</Container>

      <div className="pb-5 mb-5"></div>
    </div>
  );
};

export default Home;
