import React from 'react';
import { Link } from 'react-router-dom';
//import EmailSubscription from '../forms/EmailSubscription';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-grid'>
          <div className='footer-section'>
            <h3>LSK</h3>
            <p>
              최고의 품질과 기술력으로
              <br />
              자동차 부품 산업을 선도합니다.
            </p>
          </div>

          <div className='footer-section'>
            <h4>빠른 링크</h4>
            <ul className='footer-links'>
              <li>
                <Link to='/'>홈</Link>
              </li>
              <li>
                <Link to='/about'>회사소개</Link>
              </li>
              <li>
                <Link to='/products'>제품</Link>
              </li>
              <li>
                <Link to='/contact'>문의</Link>
              </li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>문의</h4>
            <address>
              <p>경상남도 창원시 의창구 창원대로363번길 11</p>
              <p>이메일: 1234@naver.com</p>
              <p>전화: 010-010-010</p>
            </address>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>&copy; {year} LSK. All rights reserved.</p>
          <div className='footer-legal'>
            <Link to='/privacy'>개인정보처리방침</Link>
            <Link to='/terms'>이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
