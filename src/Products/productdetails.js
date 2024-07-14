import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing images
import tTrio50_1 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_1.jpg';
import tTrio50_2 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_2.jpg';
import tTrio50_3 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_3.jpg';
import tTrio50_4 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_4.jpg';
import tTrio50_5 from './productimages/antihyp/Telsy day trio 50/TELSYDAY TRIO 50_5.jpg';

import rosu10_1 from './productimages/antihyp/ROSUFAME 10/ROSUFAME 10_1.jpg';
import rosu10_2 from './productimages/antihyp/ROSUFAME 10/ROSUFAME 10_2.jpg';
import rosu10_3 from './productimages/antihyp/ROSUFAME 10/ROSUFAME 10_3.jpg';
import rosu10_4 from './productimages/antihyp/ROSUFAME 10/ROSUFAME 10_4.jpg';
import rosu10_5 from './productimages/antihyp/ROSUFAME 10/ROSUFAME 10_5.jpg';

import rosuf10_1 from './productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_1.jpg';
import rosuf10_2 from './productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_2.jpg';
import rosuf10_3 from './productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_3.jpg';
import rosuf10_4 from './productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_4.jpg';
import rosuf10_5 from './productimages/antihyp/ROSUFAME F 10/ROSUFAME F 10_5.jpg';

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

import tam_1 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_1.jpg'; //ask whether am and am40 are same or no
import tam_2 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_2.jpg';
import tam_3 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_3.jpg';
import tam_4 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_4.jpg';
import tam_5 from './productimages/antihyp/TELSYDAY AM/TELSYDAY AM_5.jpg';

import t40_1 from './productimages/antihyp/Telsyday40/TELSYDAY 40_1.jpg';
import t40_2 from './productimages/antihyp/Telsyday40/TELSYDAY 40_2.jpg';
import t40_3 from './productimages/antihyp/Telsyday40/TELSYDAY 40_3.jpg';
import t40_4 from './productimages/antihyp/Telsyday40/TELSYDAY 40_4.jpg';
import t40_5 from './productimages/antihyp/Telsyday40/TELSYDAY 40_5.jpg';

import tct40_1 from './productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_1.jpg';
import tct40_2 from './productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_2.jpg';
import tct40_3 from './productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_3.jpg';
import tct40_4 from './productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_4.jpg';
import tct40_5 from './productimages/antihyp/TELSYDAY CT 40/TELSYDAY CT 40_5.jpg';

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

import coba_1 from './productimages/neuro/COBASTART/COBASTART_1.jpg';
import coba_2 from './productimages/neuro/COBASTART/COBASTART_2.jpg';
import coba_3 from './productimages/neuro/COBASTART/COBASTART_3.jpg';
import coba_4 from './productimages/neuro/COBASTART/COBASTART_4.jpg';
import coba_5 from './productimages/neuro/COBASTART/COBASTART_5.jpg';

import coba_xt_1 from './productimages/neuro/COBASTART XT/COBASTART XT_1.jpg';
import coba_xt_2 from './productimages/neuro/COBASTART XT/COBASTART XT_2.jpg';
import coba_xt_3 from './productimages/neuro/COBASTART XT/COBASTART XT_3.jpg';
import coba_xt_4 from './productimages/neuro/COBASTART XT/COBASTART XT_4.jpg';
import coba_xt_5 from './productimages/neuro/COBASTART XT/COBASTART XT_5.jpg';

import coba_p_1 from './productimages/neuro/COBASTART P/COBASTART P_1.jpg';
import coba_p_2 from './productimages/neuro/COBASTART P/COBASTART P_2.jpg';
import coba_p_3 from './productimages/neuro/COBASTART P/COBASTART P_3.jpg';
import coba_p_4 from './productimages/neuro/COBASTART P/COBASTART P_4.jpg';
import coba_p_5 from './productimages/neuro/COBASTART P/COBASTART P_5.jpg';

import gaba_1 from './productimages/pain/GABAZEST NT/GABAZEST NT_1.jpg';
import gaba_2 from './productimages/pain/GABAZEST NT/GABAZEST NT_2.jpg';
import gaba_3 from './productimages/pain/GABAZEST NT/GABAZEST NT_3.jpg';
import gaba_4 from './productimages/pain/GABAZEST NT/GABAZEST NT_4.jpg';
import gaba_5 from './productimages/pain/GABAZEST NT/GABAZEST NT_5.jpg';

import practo_m1_1 from './productimages/diab/Practoglim_m1/practoglim_m1_1.jpg';
import practo_m1_2 from './productimages/diab/Practoglim_m1/practoglim_m1_2.jpg';
import practo_m1_3 from './productimages/diab/Practoglim_m1/practoglim_m1_3.jpg';
import practo_m1_4 from './productimages/diab/Practoglim_m1/practoglim_m1_4.jpg';
import practo_m1_5 from './productimages/diab/Practoglim_m1/practoglim_m1_5.jpg';

import practo_m2_1 from './productimages/diab/Practoglim_m2/practoglim_m2_1.jpg';
import practo_m2_2 from './productimages/diab/Practoglim_m2/practoglim_m2_2.jpg';
import practo_m2_3 from './productimages/diab/Practoglim_m2/practoglim_m2_3.jpg';
import practo_m2_4 from './productimages/diab/Practoglim_m2/practoglim_m2_4.jpg';
import practo_m2_5 from './productimages/diab/Practoglim_m2/practoglim_m2_5.jpg';

import practo_m2f_1 from './productimages/diab/practoglim_m2_forte/practoglim_m2f_1.jpg';
import practo_m2f_2 from './productimages/diab/practoglim_m2_forte/practoglim_m2f_2.jpg';
import practo_m2f_3 from './productimages/diab/practoglim_m2_forte/practoglim_m2f_3.jpg';
import practo_m2f_4 from './productimages/diab/practoglim_m2_forte/practoglim_m2f_4.jpg';
import practo_m2f_5 from './productimages/diab/practoglim_m2_forte/practoglim_m2f_5.jpg';

import emcovit_1 from './productimages/others/emcovit/EMCOVIT GOLD_1.jpg';
import emcovit_2 from './productimages/others/emcovit/EMCOVIT GOLD_2.jpg';
import emcovit_3 from './productimages/others/emcovit/EMCOVIT GOLD_3.jpg';
import emcovit_4 from './productimages/others/emcovit/EMCOVIT GOLD_4.jpg';
import emcovit_5 from './productimages/others/emcovit/EMCOVIT GOLD_5.jpg';

import span_1 from './productimages/others/SPANSAVE/SPANSAVE_1.jpg';
import span_2 from './productimages/others/SPANSAVE/SPANSAVE_2.jpg';
import span_3 from './productimages/others/SPANSAVE/SPANSAVE_3.jpg';
import span_4 from './productimages/others/SPANSAVE/SPANSAVE_4.jpg';
import span_5 from './productimages/others/SPANSAVE/SPANSAVE_5.jpg';

import span_dsr_1 from './productimages/others/Spansave DSR/SPANSAVE DSR_1.jpg';
import span_dsr_2 from './productimages/others/Spansave DSR/SPANSAVE DSR_2.jpg';
import span_dsr_3 from './productimages/others/Spansave DSR/SPANSAVE DSR_3.jpg';
import span_dsr_4 from './productimages/others/Spansave DSR/SPANSAVE DSR_4.jpg';
import span_dsr_5 from './productimages/others/Spansave DSR/SPANSAVE DSR_5.jpg';
// Map product names to their image arrays
const productImages = {
  'TELSYDAY TRIO 50': [tTrio50_1, tTrio50_2, tTrio50_3, tTrio50_4, tTrio50_5],
  'TELSYDAY TRIO 25': [tTrio25_1, tTrio25_2, tTrio25_3, tTrio25_4, tTrio25_5],
  'TELSYDAY AMH': [tamh_1, tamh_2, tamh_3, tamh_4, tamh_5],
  'TELSYDAY AM': [tam_1, tam_2, tam_3, tam_4, tam_5],
  'TELSYDAY CT 40':[tct40_1,tct40_2,tct40_3,tct40_4,tct40_5],
  'TELSYDAY 40': [t40_1, t40_2, t40_3, t40_4, t40_5],
  'ROSUFAME GOLD 10': [rosugold10_1, rosugold10_2, rosugold10_3, rosugold10_4, rosugold10_5],
  'ROSUFAME CV 10': [rosucv10_1, rosucv10_2, rosucv10_3, rosucv10_4, rosucv10_5],
  'CALCINIV D3': [calcind3_1, calcind3_2, calcind3_3, calcind3_4, calcind3_5],
  'ROSUFAME 10':[rosu10_1,rosu10_2,rosu10_3,rosu10_4,rosu10_5],
  'ROSUFAME F 10':[rosuf10_1,rosuf10_2,rosuf10_3,rosuf10_4,rosuf10_5],
  'COBASTART':[coba_1,coba_2,coba_3,coba_4,coba_5],
  'COBASTART XT':[coba_xt_1,coba_xt_2,coba_xt_3,coba_xt_4,coba_xt_5],
  'COBASTART P':[coba_p_1,coba_p_2,coba_p_3,coba_p_4,coba_p_5],
  'GABAZEST NT':[gaba_1,gaba_2,gaba_3,gaba_4,gaba_5],
  'PRACTOGLIM M1':[practo_m1_1,practo_m1_2,practo_m1_3,practo_m1_4,practo_m1_5],
  'PRACTOGLIM M2':[practo_m2_1,practo_m2_2,practo_m2_3,practo_m2_4,practo_m2_5],
  'PRACTOGLIM M2 FORTE':[practo_m2f_1,practo_m2f_2,practo_m2f_3,practo_m2f_4,practo_m2f_5],
  'EMCOVIT':[emcovit_1,emcovit_2,emcovit_3,emcovit_4,emcovit_5],
  'SPANSAVE':[span_1,span_2,span_3,span_4,span_5],
  'SPANSAVE DSR':[span_dsr_1,span_dsr_2,span_dsr_3,span_dsr_4,span_dsr_5]
  // Add other products similarly
};
const productInfo = {
  'TELSYDAY TRIO 50': {
    description: "Telsyday-Trio 50 Tablet ER is a combination of medicines used to treat hypertension (high blood pressure) when a single medication is not effective. It helps in reducing high blood pressure, thus reducing the chances of heart attack and stroke in the future.",
    uses: "Hypertension (high blood pressure)",
    // Add other product details
  },
  'TELSYDAY TRIO 25': {
    description: "Telsyday-Trio 25 Tablet ER is a combination of medicines used to treat hypertension (high blood pressure) when a single medication is not effective. It helps to lower high blood pressure thus reduces chances of future heart attack and stroke.",
    uses: "Hypertension (high blood pressure)",
    // Add other product details
  },
  'TELSYDAY CT 40': {
    description: "Telsyday-CT 40 Tablet is a combination of two medicines namely Telmisartan and chlorthalidone.It helps to control high blood pressure. Lowering blood pressure helps to reduce your risk of having a heart attack or a stroke in the future.",
    uses: "Hypertension (high blood pressure)",
    // Add other product details
  },
  'TELSYDAY AMH': {
    description: "Telsyday AMH Tablet is a combination of medicines used to treat hypertension (high blood pressure) when a single medication is not effective. It helps to lower high blood pressure thus reduces chances of future heart attack and stroke.",
    uses: "Hypertension (high blood pressure)",
    // Add other product details
  },
  'TELSYDAY AM': {
    description: "Telsyday AM Tablet contains two medicines, both of which help to control high blood pressure. It lowers the blood pressure by relaxing the blood vessels and making it easier for your heart to pump blood around your body. This will reduce your risk of having a heart attack or a stroke.",
    uses: "Hypertension (high blood pressure)",
    // Add other product details
  },
  'TELSYDAY 40': {
    description: "Telsyday 40 Tablet is a medicine used to treat high blood pressure and heart failure. Lowering blood pressure helps to prevent future heart attacks and strokes. This medicine is also effective in preserving kidney function in patients with diabetes.Telsyday 40 Tablet can be prescribed either alone or in combination with other medicines.",
    uses: "Treatment of Hypertension (high blood pressure),Treatment of Heart failure,Prevention of heart attack and stroke",
    // Add other product details
  },
  'ROSUFAME GOLD 10': {
    description: "Rosufame Gold 10 Capsule is used for prevention of heart attack, stroke and treatment of peripheral vascular disease. It is a combination of medicines that prevent clot formation in the blood vessels. It also helps to reduce increased cholesterol and triglycerides levels.",
    uses: "Prevention of Heart attack,Treatment of Peripheral vascular disease,Prevention of Stroke",
    // Add other product details
  },
  'ROSUFAME F 10': {
    description: "Rosufame F 10 Tablet is a combination of two lipids (fat) lowering medicines. It is used to lower the levels of lipids known as cholesterol and triglycerides in the blood when lifestyle changes (eg. low-fat diet) on their own have failed. This medicine helps to reduce the risk of heart disease.",
    uses: "Prevention of Heart attack,Treatment of High cholesterol",
    // Add other product details
  },
  'ROSUFAME CV 10': {
    description: "Rosufame CV 10 Capsule is a combination of two medicines used to prevent heart attack, angina, and stroke. This medicine reduces the bad cholesterol (LDL) and triglycerides (fats) levels. Moreover, it also decreases the formation of harmful blood clots.",
    uses: "Prevention of Heart attack,Prevention of Angina (heart-related chest pain),Prevention of Stroke)",
    // Add other product details
  },
  'ROSUFAME 10': {
    description: "Rosufame 10 Tablet belongs to a group of medicines called statins. It is used to lower cholesterol and reduce the risk of heart disease. Cholesterol is a fatty substance that builds up in your blood vessels and causes narrowing, which may lead to a heart attack or stroke.",
    uses: "Treatment of High cholesterol,Prevention of heart attack and stroke",
    // Add other product details
  },
  'COBASTART': {
    description: "Cobastart Softgel Capsule offers a comprehensive range of health benefits. Methylcobalamin supports nerve health and energy production, while alpha lipoic acid acts as a potent antioxidant, protecting cells from damage. Benfotiamine helps in nerve function and glucose metabolism, complemented by pyridoxine HCL's role in nerve health and mood regulation. Biotin promotes healthy hair, skin, and nails, and folic acid supports cardiovascular health and DNA synthesis. Chromium regulates blood sugar levels, promoting overall metabolic health. ",
    uses: "Promotes nerve health,Supports cardiovascular functions,Boosts energy levels and strengthens metabolism,Protects the cells from damage",
    // Add other product details
  },
  'COBASTART XT': {
    description: "Cobastart-XT Tablet designed to kickstart your day with vitality. Formulated with Calcium carbonate, Vitamin D3, Methylcobalamin, L-Methylfolate, and Pyridoxal 5-Phosphate, this tablet offers a comprehensive blend of key ingredients for optimal health. It helps in promoting strong bones and teeth, supporting nerve health and function, helping in red blood cell formation, and contributing to overall energy production.",
    uses: "Bone health support,Nerve function maintenance,Red blood cell formation,Energy production",
    // Add other product details
  },
  'COBASTART P': {
    description: "Cobastart P Tablet SR is a prescription medicine used for the treatment of neuropathic pain. It decreases pain by modulating calcium channel activity of the nerve cells. This medicine also protects nerve fibers and heal damaged nerve cells.",
    uses:"Treatment of Neuropathic pain",
    // Add other product details
  },
  'GABAZEST NT': {
    description: "Gabazest NT Tablet is a combination medicine used to treat long-lasting (chronic) pain caused by nerve damage due to diabetes, shingles or spinal cord injury. It reduces pain and its associated symptoms such as mood changes, sleep problems, and tiredness. I",
    uses: "Treatment of Neuropathic pain",
    // Add other product details
  },
  'CALCINIV D3': {
    description: "Calciniv D3 Tablet offers a simple yet effective solution for maintaining optimal bone health. Formulated with a precise blend of Calcium carbonate and Vitamin D3, it provides essential nutrients necessary for strong bones and teeth. Regular intake of Calciniv D3 supports bone density and strength, reducing the risk of minor bone issues. It helps in calcium absorption, ensuring efficient utilisation by the body for overall skeletal health.",
    uses: "Maintains optimal bone density,Supports strong bones and healthy teeth,Good for overall skeletal health",
    // Add other product details
  },
  'EMCOVIT': {
    description: "Emcovit Gold Tablet is a comprehensive health supplement formulated to nourish your body from within. Packed with a potent blend of multivitamins, multiminerals, grape seed extract, and zinc, this tablet offers a myriad of benefits. Key advantages include boosting overall immunity, promoting healthy skin and hair with grape seed extract, supporting optimal energy levels, enhancing cognitive function, and helping in the maintenance of bone health.",
    uses: "Antioxidant support,Immune system boost,Promotes healthy skin and hair,Energy and cognitive support",
    // Add other product details
  },
  'SPANSAVE': {
    description: "Spansave Tablet is a medicine that reduces the amount of acid produced in your stomach. It is used for treating acid-related diseases of the stomach and intestine such as heartburn, acid reflux, peptic ulcer disease, and Zollinger-Ellison syndrome. It provides relief from the symptoms and promotes healing.",
    uses: "Treatment of Heartburn,Treatment of Gastroesophageal reflux disease (Acid reflux),Treatment of Peptic ulcer disease,Treatment of Zollinger-Ellison syndrome",
    // Add other product details
  },
  'SPANSAVE DSR': {
    description: "Spansave DSR Capsule is a prescription medicine used to treat gastroesophageal reflux disease (Acid reflux), dyspepsia (indigestion), and gastritis. It helps treat the conditions by reducing the amount of acid in the stomach thereby relieving symptoms of acidity such as heartburn, stomach pain, or irritation.  ",
    uses: "Treatment of Gastroesophageal reflux disease (Acid reflux),Treatment of Indigestion,Treatment of Gastritis",
    // Add other product details
  },
  'PRACTOGLIM M1': {
    description: " It is a combination of two medicines used to treat type 2 diabetes mellitus in adults. It helps control blood sugar levels in people with diabetes.",
    uses: "Treatment of Type 2 diabetes mellitus",
    // Add other product details
  },
  'PRACTOGLIM M2': {
    description: "  It is a combination of two medicines used to treat type 2 diabetes mellitus in adults. It helps control blood sugar levels in people with diabetes.",
    uses: "Treatment of Type 2 diabetes mellitus",
    // Add other product details
  },
  'PRACTOGLIM M2 FORTE': {
    description: "",
    uses: "Treatment of Type 2 diabetes mellitus",
    // Add other product details
  },
  
};
function ProductDetails() {
  const { productName } = useParams();
  const images = productImages[productName] || [];
  const info = productInfo[productName] || {};
  const hasImages = images.length > 0;
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Details</h1>
      <p className="text-center text-dark fs-5 mt-2">{productName}</p>
      {hasImages ? (
        <Card className="p-4 mb-4 border-0 shadow-sm">
          <div className="row">
            <div className="col-md-6 p-4 mb-4  border border-tertiary shadow-sm bg-white">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={image}
                      alt={`${productName} ${index + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '300px', cursor: 'pointer' }}
                      className="img-fluid"
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                ))}
              </Slider>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                  <img src={currentImage} alt="Product" className="img-fluid" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="col-md-6">
              <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> <div className='fs-6 text-dark'>{info.description}</div>
                </Card.Text>
                <Card.Text>
                  <strong>Uses:</strong><div className='fs-6 text-dark'>{info.uses}</div> 
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ) : (
        <p className="text-center">Images not available</p>
      )}
      <div className="pb-5 mb-5"></div>
    </div>
  );
}

export default ProductDetails;