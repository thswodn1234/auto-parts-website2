// src/pages/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { productsData } from '../data/productsData'; // Import your product data

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <h2>제품을 찾을 수 없습니다.</h2>
          <Link to="/products" className="back-to-products">제품 목록으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <section className="product-info-section">
        <div className="container">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-category">카테고리: {product.categoryName}</div>
            <p className="product-description">{product.description}</p>
            <div className="product-full-description">
              <h3>상세 설명</h3>
              <p>{product.fullDescription}</p>
            </div>
            {product.features && product.features.length > 0 && (
              <div className="product-features">
                <h3>주요 특징</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="product-specifications">
                <h3>사양</h3>
                <ul>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="product-price">가격: {product.price}</div>
            <div className="product-actions">
              <Link to="/contact" className="inquire-button">문의하기</Link>
              <Link to="/products" className="back-to-products">목록으로 돌아가기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* You can add a related products section here */}
    </div>
  );
};

export default ProductDetail;