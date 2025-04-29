import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';
import facImg from '../../assets/images/fac.jpg';

const AboutPreview = () => {
  return (
    <section className='section about-preview'>
      <div className='container'>
        <div className='about-grid'>
          <div className='about-content'>
            <h2 className='section-title'>혁신적인 자동차 부품의 선두 주자</h2>
            <p className='about-description'>
              20년 이상의 경험을 바탕으로 국내외 다양한 자동차 제조사에 고품질
              부품을 공급하고 있습니다. 혁신적인 기술 개발과 엄격한 품질 관리를
              통해 신뢰할 수 있는 제품을 제공합니다.
            </p>
            <div className='stats-grid'>
              <div className='stat-item'>
                <span className='stat-number'>20+</span>
                <span className='stat-label'>업계 경력</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>500+</span>
                <span className='stat-label'>제품 라인업</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>50+</span>
                <span className='stat-label'>글로벌 파트너</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>100%</span>
                <span className='stat-label'>품질 보증</span>
              </div>
            </div>
            <Link to='/about' className='button'>
              회사 소개 더 보기
            </Link>
          </div>
          <div className='about-image'>
            <img src={facImg} alt='자동차 부품 제조 현장' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
