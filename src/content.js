// 이 파일의 문구와 링크를 수정하면 사이트 전체에 반영됩니다.
// 확인되지 않은 수치, 자격증, 기간, 수상 내역은 넣지 않았습니다.
export const profile = {
  name: '김민우 | 전자공학 포트폴리오',
  headline: '현장의 문제를 데이터와 기술로 이해하는 엔지니어',
  introduction: '동아대학교 전자공학을 전공한 김민우입니다. 캡스톤 프로젝트에서 Raspberry Pi 카메라와 OpenCV를 연결해 주황색 공을 실시간으로 인식하는 영상 처리 시스템을 담당했습니다. 품질관리와 생산기술 직무에서 측정과 분석을 통해 개선점을 찾는 일을 지향합니다.',
  email: 'kmw4653@naver.com', // 예: name@example.com
  github: '', // 예: https://github.com/username
  resume: '', // 예: /resume.pdf (public 폴더에 파일 추가)
};

export const navigation = [
  ['Home', 'home'], ['About Me', 'about'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Experience', 'experience'], ['Contact', 'contact'],
];

export const projects = [
  {
    number: '01', category: 'CONTROL SYSTEM', title: 'Ball balancing',
    subtitle: '캡스톤 디자인 · 위치 제어',
    description: 'Raspberry Pi 5 기반 볼 밸런싱 로봇의 팀 프로젝트. 카메라 연동과 OpenCV를 이용한 주황색 공의 실시간 인식을 담당했습니다.',
    process: ['영상 획득', 'HSV 분리', '노이즈 제거', '중심 좌표 추출'],
    focus: '조명 조건에 맞춰 색상 임계값을 조정하고, 제어부에 전달할 공의 위치 데이터를 추출했습니다.',
    stack: ['OpenCV', 'Picamera2', 'Python', 'Raspberry Pi 5'],
    image: '/capstone/system.jpeg',
    imageAlt: '실제 볼 밸런싱 로봇과 노트북에 표시된 공 인식 화면',
    detailId: 'capstone-detail',
    href: '', // 프로젝트 문서 또는 저장소 URL
    visual: 'control',
  },
  {
    number: '02', category: 'EMBEDDED SYSTEM', title: 'ATmega128 / STM32',
    subtitle: '마이크로컨트롤러 기반 구현',
    description: '마이크로컨트롤러의 입출력과 주변 장치를 활용한 임베디드 구현 경험을 정리했습니다.',
    process: ['요구사항 정리', '회로·핀 구성', '펌웨어 구현', '동작 확인'],
    focus: '구체적인 장치명, 담당 기능과 검증 결과는 실제 프로젝트 기록에 맞춰 추가할 수 있습니다.',
    stack: ['ATmega128', 'STM32', 'C'],
    href: '',
    visual: 'embedded',
  },
  {
    number: '03', category: 'AI APPLICATION', title: 'MisoTalk',
    subtitle: 'AI 챗봇 프로젝트',
    description: '사용자와 대화하는 AI 챗봇을 주제로 기능 흐름과 사용 경험을 고민한 프로젝트입니다.',
    process: ['대화 흐름 설계', '입력 처리', '응답 연결', '사용성 점검'],
    focus: '사용한 모델, 구현 범위와 본인의 역할은 확인 후 구체적으로 기입하는 것이 좋습니다.',
    stack: ['AI Chatbot', 'Python','Ubuntu'],
    href: '',
    visual: 'chat',
  },
];

export const skillGroups = [
  { title: 'Programming', items: ['Python', 'C'] },
  { title: 'Hardware & Control', items: ['ATmega128', 'STM32', 'Raspberry Pi', 'PID Control'] },
  { title: 'Tools & Approach', items: ['OpenCV', 'Picamera2', 'HSV 색상 분리', '데이터 관찰', '동작 검증'] },
];

export const experience = [
  { title: '2025년 2학기 · 캡스톤 디자인', text: '동아대학교 전자공학과 4인 팀 ‘라즈베리포’에서 카메라와 OpenCV를 연동한 실시간 주황색 공 인식을 담당했습니다. 조명 변화와 배경 노이즈가 위치 데이터에 미치는 영향을 확인했습니다.' },
  { title: '기술 프로젝트', text: 'ATmega128·STM32 임베디드 구현과 MisoTalk 챗봇을 프로젝트 주제로 경험했습니다.' },
];

// 수치는 최종 보고서 3.3의 팀 실험 결과입니다. 원본 로그를 재분석한 값은 아닙니다.
export const capstone = {
  title: '공의 움직임을 제어에 필요한 좌표로',
  overview: '카메라가 평판 위 공의 위치를 읽고, 제어부가 PID와 역기구학으로 세 개의 서보모터를 조정하는 볼 밸런싱 로봇입니다. 영상 인식부터 기구 동작까지 연결한 팀 프로젝트에서 실시간 영상 처리 부분을 맡았습니다.',
  context: '2025년 2학기 · 동아대학교 전자공학과 · 라즈베리포 · 4인 팀',
  role: '김민우 · 임베디드 영상 처리',
  contributions: [
    { title: '카메라 연동', text: 'Raspberry Pi 5 환경에서 카메라 모듈과 OpenCV를 연결하고, Picamera2를 활용해 영상을 획득했습니다.' },
    { title: '주황색 공 인식', text: 'HSV 색상 공간에서 주황색 범위를 분리하고 조명에 맞게 임계값을 조정했습니다. 모폴로지 연산으로 배경 노이즈를 제거했습니다.' },
    { title: '위치 데이터 추출', text: '영상 모멘트로 공의 중심 좌표를 구하고, 인식 화면을 통해 위치를 확인했습니다. 제어부에서 사용할 수 있는 좌표 데이터를 제공했습니다.' },
  ],
  flow: ['카메라 영상', 'HSV 색상 분리', '모폴로지 전처리', '중심 좌표 (x, y)', '팀 제어부 · PID / 역기구학'],
  findings: [
    { title: '조명 변화 → 현장 보정', text: 'RGB 기반 인식의 밝기 민감성을 고려해 HSV를 적용하고 색상 임계값을 저장·불러오도록 구성했습니다. 짙은 그림자와 급격한 색온도 변화에서는 인식 성능이 떨어지는 한계가 남았습니다.' },
    { title: '불필요한 영역 → 입력 품질 개선', text: '색상 분리 후 침식·팽창 연산으로 배경 노이즈를 줄였습니다. 공을 찾는 것뿐 아니라 제어기가 사용할 위치 데이터의 신뢰도를 높이는 데 초점을 맞췄습니다.' },
    { title: '영상 처리 지연 → 시스템 통합', text: '팀 시스템은 480 × 480 영상 처리와 Python 멀티스레딩을 적용했습니다. 영상 획득·처리와 모터 제어가 서로의 실행을 막지 않도록 구성했습니다.' },
  ],
  metrics: [
    { value: '31.87 FPS', label: '평균 영상 획득 속도', note: '보고서의 img_fps 분석 결과' },
    { value: '약 1.5초', label: '외란 후 중앙 복귀', note: '최대 오차 지점에서 ±10픽셀 범위까지' },
    { value: '±3픽셀', label: '정상 상태 위치 유지', note: '중앙 기준 · 미세 진동 포함' },
  ],
  resultNote: '최종 결과보고서 3.3에 기재된 팀 실험 결과입니다. 원본 로그의 독립 재검증 값은 아니며, 후반 두 지표는 기구·회로·제어·비전을 통합한 시스템 성능입니다.',
  relevance: '영상 기반 측정에서 조명과 노이즈 같은 조건을 관리하고, 입력 데이터의 신뢰도를 확인하는 경험을 쌓았습니다. 품질관리·생산기술에서도 검사 조건을 정리하고 이상 현상의 원인을 추적하는 업무에 이 접근을 이어가고 싶습니다.',
  next: '향후 과제는 다양한 조명 조건에서 인식 성능을 비교하는 것입니다. 보고서에서 제안한 YOLO·NPU 기반 인식은 후속 개선 방향이며, 이번 프로젝트에 구현한 기능은 아닙니다.',
};
