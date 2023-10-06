import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  return (
    <div className="container">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
