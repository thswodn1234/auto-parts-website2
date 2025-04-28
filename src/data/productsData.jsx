// src/data/productsData.js

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
      name: "고성능 브레이크 패드",
      category: "brake",
      categoryName: "브레이크 시스템",
      image: "/api/placeholder/300/200",
      description: "내구성과 제동력이 뛰어난 프리미엄 브레이크 패드",
      fullDescription: "최고급 재질로 제작된 브레이크 패드로, 고온에서도 안정적인 제동력을 유지합니다. 일반 패드 대비 2배 이상의 수명을 자랑하며, 소음과 분진 발생이 적습니다.",
      features: [
        "고온 안정성 향상",
        "마모 저항성 강화",
        "소음 감소 기술 적용",
        "친환경 소재 사용"
      ],
      specs: {
        material: "세라믹 복합소재",
        compatibility: "대부분의 국산 및 수입차량",
        warranty: "2년 또는 40,000km"
      },
      price: "180,000원"
    },
    {
      id: 2,
      name: "고효율 연료 인젝터",
      category: "engine",
      categoryName: "엔진 부품",
      image: "/api/placeholder/300/200",
      description: "연비 향상과 출력 개선을 위한 첨단 인젝터",
      fullDescription: "최신 기술이 적용된 연료 인젝터로, 연료 분사 정밀도를 높여 연비를 향상시키고 출력을 개선합니다. 미세한 분사각 조절로 완전 연소를 돕습니다.",
      features: [
        "정밀한 연료 분사 제어",
        "향상된 분무 패턴",
        "저소음 작동",
        "내구성 강화 설계"
      ],
      specs: {
        type: "전자식 고압 인젝터",
        pressure: "최대 200bar",
        compatibility: "가솔린 직분사 엔진",
        warranty: "1년 또는 20,000km"
      },
      price: "250,000원"
    },
    {
      id: 3,
      name: "첨단 센서 시스템",
      category: "electrical",
      categoryName: "전기 시스템",
      image: "/api/placeholder/300/200",
      description: "정밀한 데이터 수집을 위한 최신 센서 패키지",
      fullDescription: "차량의 다양한 상태를 정확하게 모니터링하는 센서 패키지입니다. 온도, 압력, 속도 등의 정보를 실시간으로 측정하여 최적의 차량 성능을 유지하는 데 기여합니다.",
      features: [
        "고정밀 측정 기술",
        "빠른 응답 시간",
        "다양한 환경에서 안정적 작동",
        "내구"
        ],
        specs: {
        type: "전자식 고압 인젝터",
        pressure: "최대 200bar",
        compatibility: "가솔린 직분사 엔진",
        warranty: "1년 또는 20,000km"
        },
    price: "250,000원"
    }]