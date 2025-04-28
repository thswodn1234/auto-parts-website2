// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './About.css';
// import aboutHeroImage from '../assets/images/about-hero.jpg'; // 회사 소개 Hero 이미지 (예시)
// import missionImage from '../assets/images/mission.jpg'; // 미션 이미지 (예시)
// import visionImage from '../assets/images/vision.jpg'; // 비전 이미지 (예시)
// import valueImage from '../assets/images/value.jpg'; // 핵심 가치 이미지 (예시)

const About = () => {
  return (
    <div className="about-page">
      {/* 회사 소개 Hero 섹션 */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">끊임없는 혁신으로 미래를 열어갑니다</h1>
            <p className="hero-subtitle">최고의 기술력과 품질로 자동차 산업 발전에 기여하는 [회사 이름]입니다.</p>
          </div>
          <div className="hero-image">
            <img alt="회사 소개" />
          </div>
        </div>
      </section>

      {/* 회사 소개 본문 */}
      <section className="section about-content-section">
        <div className="container">
          <h2 className="section-title">우리가 걸어온 길</h2>
          <p>
            [회사 이름]은 [설립 연도]에 설립되어 자동차 부품 산업의 혁신을 이끌어왔습니다.
            창립 이후, 고객 만족을 최우선으로 생각하며 끊임없는 연구 개발과 품질 향상에 매진해왔습니다.
            수많은 기술 혁신과 성장을 통해 업계의 선두 주자로 자리매김했으며, 앞으로도 미래 자동차 산업 발전에 기여할 것입니다.
          </p>
          <p>
            우리의 핵심 경쟁력은 [핵심 경쟁력 1], [핵심 경쟁력 2], 그리고 [핵심 경쟁력 3]입니다.
            이를 바탕으로 고객에게 최고의 가치를 제공하고, 지속 가능한 성장을 추구합니다.
          </p>
        </div>
      </section>

      {/* 미션 & 비전 섹션 */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission">
            <div className="image-container">
              <img  alt="미션" />
            </div>
            <div className="text-container">
              <h3>우리의 미션</h3>
              <p>[회사 미션에 대한 구체적인 설명]</p>
            </div>
          </div>
          <div className="vision">
            <div className="image-container">
              <img  alt="비전" />
            </div>
            <div className="text-container">
              <h3>우리의 비전</h3>
              <p>[회사 비전에 대한 구체적인 설명]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">핵심 가치</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="image-container">
                <img  alt="가치 1" />
              </div>
              <h3>[핵심 가치 1]</h3>
              <p>[핵심 가치 1에 대한 설명]</p>
            </div>
            <div className="value-card">
              <div className="image-container">
                <img alt="가치 2" />
              </div>
              <h3>[핵심 가치 2]</h3>
              <p>[핵심 가치 2에 대한 설명]</p>
            </div>
            <div className="value-card">
              <div className="image-container">
                <img alt="가치 3" />
              </div>
              <h3>[핵심 가치 3]</h3>
              <p>[핵심 가치 3에 대한 설명]</p>
            </div>
            {/* 필요에 따라 더 많은 핵심 가치 추가 */}
          </div>
        </div>
      </section>

      {/* 문의하기 CTA 섹션 (선택 사항) */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>[회사 이름]과 함께 미래를 만들어가세요</h2>
            <p>궁금한 점이나 협력 문의가 있으시면 언제든지 연락 주십시오.</p>
            <Link to="/contact" className="button">문의하기</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;