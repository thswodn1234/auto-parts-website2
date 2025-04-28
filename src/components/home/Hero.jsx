// src/components/home/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImage from '../../assets/images/Hero.jpg'; // 이미지 import

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">미래 자동차의 심장을 만듭니다</h1>
        <p className="hero-subtitle">최고 품질의 자동차 부품으로 안전하고 효율적인 주행을 경험하세요.</p>
        <div className="hero-buttons">
          <Link to="/products" className="button">제품 보기</Link>
          <Link to="/about" className="button button-secondary">더 알아보기</Link>
        </div>
      </div>
      <div className="hero-image">
        {/* 실제로는 고품질 이미지를 사용하세요 */}
        <img src={HeroImage} alt="최첨단 자동차 부품" />
      </div>
    </section>
  );
};

export default Hero;