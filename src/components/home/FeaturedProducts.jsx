import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

// 임시 제품 데이터
const featuredProducts = [
  {
    id: 1,
    name: "고성능 브레이크 패드",
    category: "브레이크 시스템",
    image: "https://cdn.pixabay.com/photo/2023/01/01/brake-pads-123456_300x200.jpg",
    description: "내구성과 제동력이 뛰어난 프리미엄 브레이크 패드",
  },
  {
    id: 2,
    name: "고효율 연료 인젝터",
    category: "연료 시스템",
    image: "https://cdn.pixabay.com/photo/2023/01/01/fuel-injector-789012_300x200.jpg",
    description: "연비 향상과 출력 개선을 위한 첨단 인젝터",
  },
  {
    id: 3,
    name: "첨단 센서 시스템",
    category: "전자 제어",
    image: "https://cdn.pixabay.com/photo/2023/01/01/car-sensor-345678_300x200.jpg",
    description: "정밀한 데이터 수집을 위한 최신 센서 패키지",
  },
  {
    id: 4,
    name: "내구성 서스펜션 부품",
    category: "서스펜션",
    image: "https://cdn.pixabay.com/photo/2023/01/01/suspension-901234_300x200.jpg",
    description: "최상의 주행 안정성을 위한 고급 서스펜션 부품",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">인기 제품</h2>
          <Link to="/products" className="view-all">전체 제품 보기</Link>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map(product => (
            <Link to={`/products/${product.id}`} className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-category">{product.category}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-link">자세히 보기 <i className="fas fa-arrow-right"></i></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;