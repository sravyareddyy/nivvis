// src/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const productNames1 = [
    'TELSYDAY TRIO 50', 'TELSYDAY TRIO 25', 'TELSYDAY CT 40',
    'TELSYDAY AMH', 'TELSYDAY AM 40', 'TELSYDAY 40',
    'ROSUFAME GOLD 10', 'ROSUFAME F 10', 'ROSUFAME CV 10',
    'ROSUFAME 10'
  ];

  const productNames2 = [
    { category: 'NEUROPATHIC PAIN', products: ['NIVVI\'S COBASTART XT', 'NIVVI\'S COBASTART P', 'NIVVI\'S COBASTART'] },
    { category: 'PAIN MANAGEMENT', products: ['GABAZEST NT'] },
    { category: 'CALCIUM & VITAMIN DEFICIENCY', products: ['CALCINIV D3'] },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="p-4 mb-4 border rounded-3 bg-light text-center">
            <h3>ANTI HYPERTENSION & LIPIDS</h3>
            {productNames1.map(product => (
              <p key={product} className="text-center">
                <Link to={`/product/${encodeURIComponent(product)}`}>{product}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            {productNames2.map(category => (
              <div key={category.category} className="col-md-6">
                <div className="p-3 mb-4 border rounded-3 bg-light text-center">
                  <h3>{category.category}</h3>
                  {category.products.map(product => (
                    <p key={product} className="text-center">
                      <Link to={`/product/${encodeURIComponent(product)}`}>{product}</Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-5 mb-5"></div>
    </div>
  );
};

export default Products;
