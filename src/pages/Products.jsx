import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

// 임시 제품 데이터
import { productsData, categories } from '../data/productsData';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="products-page">
      <section className="product-hero">
        <div className="container">
          <h1>제품 카탈로그</h1>
          <p>최고 품질의 자동차 부품을 만나보세요</p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="product-filters">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="제품 검색..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            
            <div className="category-filters">
              <button 
                className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                전체
              </button>
              {categories.map(category => (
                <button 
                  key={category.id} 
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="products-grid product-catalog">
              {filteredProducts.map(product => (
                <Link to={`/products/${product.id}`} className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-category">{product.categoryName}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-link">자세히 보기 <i className="fas fa-arrow-right"></i></div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>검색 결과가 없습니다. 다른 검색어나 카테고리를 선택해 주세요.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>원하시는 제품을 찾지 못하셨나요?</h2>
            <p>맞춤형 견적을 요청하시거나 전문가에게 문의하세요.</p>
            <Link to="/contact" className="button">문의하기</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;