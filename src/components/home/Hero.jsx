// src/components/home/Hero.js
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImage from "../../assets/images/Hero.jpg"; // 이미지 import

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">차세대 자동차 부품 솔루션</h1>
        <p className="hero-subtitle">
          혁신적인 기술로 더 안전하고 스마트한 드라이빙을 경험하세요.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="button button-primary">
            제품 살펴보기
          </Link>
          <Link to="/about" className="button button-secondary">
            회사 소개
          </Link>
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
