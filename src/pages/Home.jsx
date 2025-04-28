import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// 홈페이지 컴포넌트들 임포트
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">왜 우리 부품인가?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cog"></i>
              </div>
              <h3>최고 품질</h3>
              <p>엄격한 품질 관리 시스템으로 최고의 품질을 보장합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>기술 혁신</h3>
              <p>지속적인 연구 개발로 혁신적인 기술을 제공합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>빠른 배송</h3>
              <p>전국 어디서나 빠르고 안전한 배송 서비스를 제공합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>전문 지원</h3>
              <p>전문 기술 지원팀이 항상 여러분의 문제 해결을 도와드립니다.</p>
            </div>
          </div>
        </div>
      </section>
      
       <FeaturedProducts /> 

       <AboutPreview />
      
       <Testimonials /> 
      
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>최고의 부품으로 최상의 성능을</h2>
            <p>지금 바로 제품 카탈로그를 확인하고 문의하세요.</p>
            <div className="cta-buttons">
              <Link to="/products" className="button">제품 보기</Link>
              <Link to="/contact" className="button button-secondary">문의하기</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;