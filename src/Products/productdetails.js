// src/Products/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import tTrio50_1 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_1.jpg';
import tTrio50_2 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_2.jpg';
import tTrio50_3 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_3.jpg';
import tTrio50_4 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_4.jpg';
import tTrio50_5 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_5.jpg';

import tTrio25_1 from './productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_1.jpg';
import tTrio25_2 from './productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_2.jpg';
import tTrio25_3 from './productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_3.jpg';
import tTrio25_4 from './productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_4.jpg';
import tTrio25_5 from './productimages/antihyp/TELSYDAY TRIO 25/TELSYDAY TRIO 25_5.jpg';

import tamh_1 from './productimages/antihyp/TELSY DAY AMH/TELSYDAY AMH_1.jpg';
import tamh_2 from './productimages/antihyp/TELSY DAY AMH/TELSYDAY AMH_2.jpg';
import tamh_3 from './productimages/antihyp/TELSY DAY AMH/TELSYDAY AMH_3.jpg';
import tamh_4 from './productimages/antihyp/TELSY DAY AMH/TELSYDAY AMH_4.jpg';
import tamh_5 from './productimages/antihyp/TELSY DAY AMH/TELSYDAY AMH_5.jpg';

import tam40_1 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_1.jpg';//ask whether am and am40 are same or no
import tam40_2 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_2.jpg';
import tam40_3 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_3.jpg';
import tam40_4 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_4.jpg';
import tam40_5 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_5.jpg';

import t40_1 from './productimages/antihyp/Telsyday40/TELSYDAY 40_1.jpg';
import t40_2 from './productimages/antihyp/Telsyday40/TELSYDAY 40_2.jpg';
import t40_3 from './productimages/antihyp/Telsyday40/TELSYDAY 40_3.jpg';
import t40_4 from './productimages/antihyp/Telsyday40/TELSYDAY 40_4.jpg';
import t40_5 from './productimages/antihyp/Telsyday40/TELSYDAY 40_5.jpg';

import rosugold10_1 from './productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_1.jpg';
import rosugold10_2 from './productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_2.jpg';
import rosugold10_3 from './productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_3.jpg';
import rosugold10_4 from './productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_4.jpg';
import rosugold10_5 from './productimages/antihyp/ROSUFAME_GOLD_10/ROSUFAME GOLD 10_5.jpg';

import rosucv10_1 from './productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_1.jpg';
import rosucv10_2 from './productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_2.jpg';
import rosucv10_3 from './productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_3.jpg';
import rosucv10_4 from './productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_4.jpg';
import rosucv10_5 from './productimages/antihyp/Rosufame_cv_10/ROSUFAME CV 10_5.jpg';

import calcind3_1 from './productimages/Calciniv d3/CALCINIV D3_1.jpg';
import calcind3_2 from './productimages/Calciniv d3/CALCINIV D3_2.jpg';
import calcind3_3 from './productimages/Calciniv d3/CALCINIV D3_3.jpg';
import calcind3_4 from './productimages/Calciniv d3/CALCINIV D3_4.jpg';
import calcind3_5 from './productimages/Calciniv d3/CALCINIV D3_5.jpg';

// Map product names to their image arrays
const productImages = {
  'TELSYDAY TRIO 50': [tTrio50_1, tTrio50_2, tTrio50_3, tTrio50_4, tTrio50_5],
  'TELSYDAY TRIO 25': [tTrio25_1, tTrio25_2, tTrio25_3, tTrio25_4, tTrio25_5],
  'TELSYDAY AMH':[tamh_1,tamh_2,tamh_3,tamh_4,tamh_5], 
  'TELSYDAY AM 40':[tam40_1,tam40_2,tam40_3,tam40_4,tam40_5],
  'TELSYDAY 40':[t40_1,t40_2,t40_3,t40_4,t40_5],
  'ROSUFAME GOLD 10':[rosugold10_1,rosugold10_2,rosugold10_3,rosugold10_4,rosugold10_5],
  'ROSUFAME CV 10' :[rosucv10_1,rosucv10_2,rosucv10_3,rosucv10_4,rosucv10_5],
  'CALCINIV D3':[calcind3_1,calcind3_2,calcind3_3,calcind3_4,calcind3_5],
  // Add other products similarly
};

function ProductDetails() {
  const { productName } = useParams();
  const images = productImages[productName] || [];
  const hasImages = images.length > 0;

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ ...arrowStyles, left: '10px' }} onClick={onClick}>
        <div className="arrow-circle">
          <i className="fa fa-chevron-left fa-lg" style={{ color: 'white' }}></i>
        </div>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ ...arrowStyles, right: '10px' }} onClick={onClick}>
        <div className="arrow-circle">
          <i className="fa fa-chevron-right fa-lg" style={{ color: 'white' }}></i>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Details</h1>
      <p className="text-center text-dark fs-5 mt-2">{productName}</p>
      {hasImages ? (
        <Slider {...settings} className="text-center">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                style={{ maxWidth: '80%', maxHeight: '300px', margin: '0 auto' }}
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Images not available</p>
      )}
    <div className="pb-5 mb-5"></div>
    </div>
  );
}

export default ProductDetails;
