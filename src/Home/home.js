import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgTelsydayTrio50 from '../Products/productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_1.jpg';
import imgTelsydayTrio25 from '../Products/productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_1.jpg';
import rosu10_1 from '../Products/productimages/antihyp/ROSUFAME 10/ROSUFAME 10_1.jpg';
import rosuf10_1 from '../Products/productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_1.jpg';
import imgTelsydayAMH from '../Products/productimages/antihyp/TELSY DAY AMH/untitle.png';
import imgTelsydayAM from '../Products/productimages/antihyp/TELSYDAY AM/untitled(3).png';
import imgTelsyday40 from '../Products/productimages/antihyp/Telsyday40/untitled (2).png';
import tct40_1 from '../Products/productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_1.jpg';
import imgRosufameGold10 from '../Products/productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_1.jpg';
import imgRosufameCV10 from '../Products/productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_1.jpg';
import imgCalcinivD3 from '../Products/productimages/Calciniv d3/CALCINIV D3_1.jpg';
import coba_1 from '../Products/productimages/neuro/COBASTART/COBASTART_1.jpg';
import coba_xt_1 from '../Products/productimages/neuro/COBASTART XT/COBASTART XT_1.jpg';
import coba_p_1 from '../Products/productimages/neuro/COBASTART P/COBASTART P_1.jpg';
import emcovit from '../Products/productimages/others/emcovit/EMCOVIT GOLD_1.jpg';
import spansave from '../Products/productimages/others/SPANSAVE/SPANSAVE_1.jpg';
import practoglim_m1 from '../Products/productimages/diab/Practoglim_m1/practoglim_m1_1.jpg';
import practoglim_m2 from '../Products/productimages/diab/Practoglim_m2/practoglim_m2_1.jpg';
import practoglim_m2f from '../Products/productimages/diab/practoglim_m2_forte/practoglim_m2f_1.jpg';
import gaba_1 from '../Products/productimages/pain/GABAZEST NT/GABAZEST NT_1.jpg';
import span_dsr_1 from '../Products/productimages/others/Spansave DSR/SPANSAVE DSR_1.jpg';

import lab from '../images/products/image.jpg';
import img from '../images/products/img1.jpg';
// import back from '../images/products/img11.jpg';
import nivvis from '../images/products/names.png';
import labb from '../images/products/img6.jpg';
const images = [
  { src: imgTelsydayTrio50, name: 'Telsyday Trio 50' },
  { src: imgTelsydayTrio25, name: 'Telsyday Trio 25' },
  { src: imgTelsydayAMH, name: 'Telsyday AMH' },
  { src: imgTelsydayAM, name: 'Telsyday AM' },
  { src:tct40_1,name: 'Telsyday CT 40'},
  { src: imgTelsyday40, name: 'Telsyday 40' },
  { src: imgRosufameGold10, name: 'Rosufame Gold 10' },
  { src: imgRosufameCV10, name: 'Rosufame CV 10' },
  { src:rosu10_1, name:'Rosufame 10'},
  { src:rosuf10_1, name:'Rosufame F 10'},
  { src:coba_1, name:'Cobastart'},
  { src:coba_p_1, name:'Cobastart P'},
  { src:coba_xt_1, name:'Cobastart XT'},
  { src: imgCalcinivD3, name: 'Calciniv D3' },
  { src: emcovit, name: 'Emcovit Gold' },
  { src: spansave, name: 'Spansave' },
  {src:span_dsr_1,name:'Spansave DSR'},
  { src:gaba_1, name:'Gabazest NT'},
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
              <img src={nivvis} height="20" width="160" className="mb-1" alt="Nivvis" /> is committed to fostering a healthier future by providing high-quality medications that empower individuals to manage and overcome illness effectively. Our vision is to be a trusted leader in healthcare, recognized for our dedication to improving health outcomes through innovative and patient-focused solutions.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              We prioritize accessibility and affordability, ensuring our medications reach those who need them most without financial strain. By making essential treatments widely available, we aim to bridge healthcare gaps and promote equitable access to healthcare worldwide.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              Innovation drives our efforts to develop new therapies and enhance existing treatment. Through rigorous research and development, we strive to address unmet medical needs and pioneer advancements in chronic care management. Our goal is to contribute meaningfully to disease prevention, management, and overall well-being.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={lab} height="425" width="400" className="rounded d-block" alt="Lab" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-dark fs-5">
            At NIVVIS Pharmaceuticals, ethical principles guide our practices. Our focus remains steadfast on improving patient outcomes, supporting healthcare providers, and making a positive impact on global health.
          </p>
        </div>
      </Container>
      {/* <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5" id="vision" style={{ backgroundImage: `url(${labb})`, backgroundSize: 'cover' }}>
        <h1>Vision</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-7">
            <p className="text-dark col-11 fs-5 mt-3">
              <img src={nivvis} height="20" width="90" className="mb-1" alt="Nivvis" /> Pharmaceuticals is committed to fostering a healthier future by providing high-quality medications that empower individuals to manage and overcome illness effectively. Our vision is to be a trusted leader in healthcare, recognized for our dedication to improving health outcomes through innovative and patient-focused solutions.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              We prioritize accessibility and affordability, ensuring our medications reach those who need them most without financial strain. By making essential treatments widely available, we aim to bridge healthcare gaps and promote equitable access to healthcare worldwide.
            </p>
            <p className="text-dark col-11 fs-5 mt-2">
              Innovation drives our efforts to develop new therapies and enhance existing treatment. Through rigorous research and development, we strive to address unmet medical needs and pioneer advancements in chronic care management. Our goal is to contribute meaningfully to disease prevention, management, and overall well-being.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={lab} height="425" width="400" className="rounded d-block" alt="Lab" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-dark fs-5">
            At NIVVIS Pharmaceuticals, ethical principles guide our practices. Our focus remains steadfast on improving patient outcomes, supporting healthcare providers, and making a positive impact on global health.
          </p>
        </div>
      </Container> */}
      <Container className="scrollspy-example bg-body-tertiary p-3 rounded-2 mt-5" id="services">
        <h1>Our Services</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-7">
            <p className="text-dark fs-5 mt-2">
            <img src={nivvis} height="20" width="160" className="mb-1" alt="Nivvis" /> is steadfast in its commitment to advancing healthcare, with a primary emphasis on cardiovascular, neurological health, and pain management. Our expansive range of pharmaceutical products is meticulously designed to meet the unique needs of patients across various therapeutic areas. We take pride in our unwavering dedication to delivering high-quality and innovative medicines, making a significant contribution to the global health landscape. Committed to excellence, we constantly strive to make a positive impact on individuals and communities. Nivvis Labs, through continuous research and development, aims to provide transformative solutions, addressing the evolving challenges in healthcare.
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
      <Container className="scrollspy-example bg-info p-3 rounded-2 mt-5" style={{ backgroundImage: `url(${labb})`, backgroundSize: 'cover',}} id="products">
        <h1 className='text-white'>Products</h1>
        <div style={{ position: 'relative' }}>
          <Carousel
            responsive={responsive}
            ssr
            infinite
            keyBoardControl
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            transitionDuration={500}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="text-center"
                style={{
                  padding: '20px',
                  margin: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  backgroundColor:'rgba(0,0,0,0.5)',
                  // backgroundImage: `url(${back})`, // Setting background image here
                  backgroundSize: 'cover',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    className="d-block"
                    src={image.src}
                    alt={image.name}
                    style={{
                      objectFit: 'contain',
                      height: '130px',
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#42C249',
                    width: '70%',
                    padding: '10px 20px',
                    marginTop:'0px',
                    borderRadius: '5px',
                  }}
                >
                  <h5 style={{ color: 'white', margin: '0' ,fontSize :'1.4rem'}}>{image.name}</h5>
                </div>
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
