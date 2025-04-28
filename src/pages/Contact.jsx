// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">문의하기</h1>
          <p className="hero-subtitle">궁금한 점이나 문의사항을 보내주시면 친절하게 답변드리겠습니다.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">문의 양식</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" placeholder="이름을 입력해주세요" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" placeholder="이메일 주소를 입력해주세요" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">연락처 (선택)</label>
              <input type="tel" id="phone" name="phone" placeholder="연락처를 입력해주세요" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">제목</label>
              <input type="text" id="subject" name="subject" placeholder="문의 제목을 입력해주세요" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">문의 내용</label>
              <textarea id="message" name="message" rows="8" placeholder="문의 내용을 입력해주세요" required></textarea>
            </div>
            <button type="submit" className="submit-button">문의 보내기</button>
          </form>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">연락처 정보</h2>
          <div className="contact-details">
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>서울특별시 강남구 [회사 주소]</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-phone"></i>
              <p>[회사 전화번호]</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-envelope"></i>
              <p>[회사 이메일 주소]</p>
            </div>
            {/* 추가적인 연락처 정보 (팩스, 소셜 미디어 등) */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;