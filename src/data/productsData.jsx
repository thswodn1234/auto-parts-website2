// src/data/productsData.js
import pdtImg1 from '../assets/images/part1.jpg';
import pdtImg2 from '../assets/images/part2.jpg';
import pdtImg3 from '../assets/images/part3.jpg';

export const categories = [
  { id: 'brake', name: '브레이크 시스템' },
  { id: 'engine', name: '엔진 부품' },
  { id: 'suspension', name: '서스펜션' },
  { id: 'electrical', name: '전기 시스템' },
  { id: 'transmission', name: '변속기' },
];

export const productsData = [
  {
    id: 1,
    name: '고성능 헤드라이트',
    category: 'electrical',
    categoryName: '전기 시스템',
    image: pdtImg1,
    description: '최고의 시인성을 제공하는 고성능 헤드라이트',
    fullDescription: '최고의 시인성을 제공하는 고성능 헤드라이트입니다.',
    features: [
      '뛰어난 밝기와 넓은 조사 범위',
      '악천후 속에서도 안정적인 성능',
      '긴 수명과 낮은 에너지 소비',
      '간편한 설치 및 유지보수',
    ],
    specs: {
      type: 'LED',
      voltage: '12V',
      lifespan: '50,000시간',
      waterproof: 'IP67',
    },
    price: '220,000원',
  },
  {
    id: 2,
    name: '경량 21인치 알로이 휠',
    category: 'suspension',
    categoryName: '서스펜션',
    image: pdtImg2,
    description: '세련된 디자인과 뛰어난 성능의 경량 21인치 휠',
    fullDescription:
      '고급 알루미늄 합금으로 제작된 경량 21인치 휠입니다. 차량의 핸들링 성능을 향상시키고, 연비 효율성을 높여줍니다. 세련된 디자인은 차량의 외관을 더욱 돋보이게 합니다.',
    features: [
      '뛰어난 강성과 경량화 설계',
      '정밀한 밸런싱으로 안정적인 주행',
      '부식 방지 코팅으로 내구성 강화',
      '다양한 차종에 호환 가능',
    ],
    specs: {
      size: '21인치',
      material: '알루미늄 합금',
      weight: '9.5kg (개당)',
      offset: '+35',
    },
    price: '580,000원 (개당)',
  },
  {
    id: 3,
    name: '최첨단 전방 카메라 시스템',
    category: 'electrical',
    categoryName: '전기 시스템',
    image: pdtImg3,
    description: '운전 안전성을 높이는 최첨단 전방 카메라 시스템',
    fullDescription:
      '최첨단 기술이 적용된 전방 카메라 시스템으로, 차선 이탈 경고, 전방 충돌 방지 보조, 보행자 감지 등 다양한 운전 보조 기능을 제공하여 안전하고 편리한 주행을 돕습니다.',
    features: [
      '실시간 영상 분석 및 위험 감지',
      '차선 이탈 경고 (LDW)',
      '전방 충돌 방지 보조 (FCA)',
      '보행자 감지 (PCW)',
    ],
    specs: {
      resolution: '1920x1080',
      frameRate: '30fps',
      viewingAngle: '120도',
      connectivity: 'CAN',
    },
    price: '350,000원',
  },
];
