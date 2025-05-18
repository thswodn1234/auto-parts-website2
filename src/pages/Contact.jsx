import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const googleAppsScriptUrl =
    'https://script.google.com/macros/s/AKfycbzGeF-qYVKF-rexRWxETIKU3aCFx5modQE218jbASBqEdURRK4_L3g-tEt6rMvh_riA/exec'; // 여기에 복사한 웹 앱 URL을 넣어주세요.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('제출 중...');

    try {
      const response = await fetch(googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === 0) {
        // no-cors 모드에서는 response.json()을 직접 사용할 수 없을 수 있습니다.
        // 서버에서 성공적인 응답 (예: 상태 코드 200)을 보내도록 하고,
        // 단순히 성공 메시지를 표시하는 것이 안전할 수 있습니다.
        setSubmissionStatus('문의가 성공적으로 제출되었습니다.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        // 오류 발생 시
        let errorMessage = '문의 제출에 실패했습니다. 다시 시도해주세요.';
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = `문의 제출에 실패했습니다: ${errorData.message}`;
          }
        } catch (parseError) {
          console.error('응답 데이터 파싱 오류:', parseError);
        }
        setSubmissionStatus(errorMessage);
      }
    } catch (error) {
      console.error('문의 제출 오류:', error);
      setSubmissionStatus('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='contact-page'>
      {/* ... 기존 코드 ... */}
      <section className='contact-form-section'>
        <div className='container'>
          <h2 className='section-title'>문의 양식</h2>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>이름</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='이름을 입력해주세요'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>이메일</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='이메일 주소를 입력해주세요'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>연락처 (선택)</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='연락처를 입력해주세요'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>제목</label>
              <input
                type='text'
                id='subject'
                name='subject'
                placeholder='문의 제목을 입력해주세요'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>문의 내용</label>
              <textarea
                id='message'
                name='message'
                rows='8'
                placeholder='문의 내용을 입력해주세요'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='submit-button'
              disabled={submissionStatus === '제출 중...'}
            >
              {submissionStatus || '문의 보내기'}
            </button>
          </form>
        </div>
      </section>
      {/* ... 기존 코드 ... */}
    </div>
  );
};

export default Contact;
