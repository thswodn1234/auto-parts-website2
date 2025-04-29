import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import logo from '../../assets/images/logo.jpg';

// 임시 고객 후기 데이터
const testimonialData = [
  {
    id: 1,
    name: '현대자동차',
    position: '구매 담당자',
    quote:
      'AutoParts의 제품은 항상 최고의 품질을 자랑합니다. 납기일을 항상 준수하고 기술 지원도 훌륭합니다.',
    image: logo,
  },
  {
    id: 2,
    name: '기아자동차',
    position: '생산 관리자',
    quote:
      '까다로운 품질 기준을 항상 충족시키는 몇 안 되는 공급업체 중 하나입니다. 10년 이상 함께 일하고 있습니다.',
    image: logo,
  },
  {
    id: 3,
    name: '삼성전자',
    position: '연구 개발팀',
    quote:
      '혁신적인 기술과 빠른 프로토타입 제작으로 우리의 연구 개발 속도를 크게 향상시켰습니다.',
    image: logo,
  },
  {
    id: 4,
    name: 'LG전자',
    position: '품질 관리팀',
    quote:
      '제품의 내구성과 안정성이 매우 뛰어납니다. 다양한 환경 테스트에서 항상 좋은 결과를 보여줍니다.',
    image: logo,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className='section testimonials'>
      <div className='container'>
        <h2 className='section-title'>고객 후기</h2>

        <div className='testimonial-slider'>
          <div
            className='testimonial-items'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialData.map((testimonial) => (
              <div className='testimonial-item' key={testimonial.id}>
                <div className='testimonial-content'>
                  <div className='quote-icon'>"</div>
                  <p className='testimonial-quote'>{testimonial.quote}</p>
                  <div className='testimonial-author'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='author-image'
                    />
                    <div className='author-info'>
                      <div className='author-name'>{testimonial.name}</div>
                      <div className='author-position'>
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='testimonial-controls'>
            <button className='control-btn prev' onClick={goToPrev}>
              <i className='fas fa-chevron-left'></i>
            </button>
            <div className='testimonial-dots'>
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className='control-btn next' onClick={goToNext}>
              <i className='fas fa-chevron-right'></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
