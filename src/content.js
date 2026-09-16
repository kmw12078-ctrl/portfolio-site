// 이 파일의 문구와 링크를 수정하면 사이트 전체에 반영됩니다.
// 확인되지 않은 수치, 자격증, 기간, 수상 내역은 넣지 않았습니다.
export const profile = {
  name: '전자공학 포트폴리오', // 실제 이름으로 교체
  headline: '현장의 문제를 데이터와 기술로 이해하는 엔지니어',
  introduction: '전자공학을 바탕으로 제어, 임베디드, 소프트웨어 프로젝트를 경험했습니다. 품질관리와 생산기술 직무에서 측정과 분석을 통해 개선점을 찾는 일을 지향합니다.',
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
    description: '판 위 공의 위치를 인식하고 목표 위치로 이동시키는 제어 시스템을 설계한 프로젝트입니다.',
    process: ['위치 인식', '오차 계산', 'PID 제어', '구동부 조정'],
    focus: '센서 데이터와 제어 응답의 관계를 관찰하고, 파라미터 조정 과정을 기록했습니다.',
    stack: ['PID Control', 'OpenCV', 'Python'],
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
  { title: 'Tools & Approach', items: ['OpenCV', '데이터 관찰', '문제 분석', '동작 검증'] },
];

export const experience = [
  { title: '캡스톤 디자인', text: 'Ball balancing 프로젝트를 통해 위치 인식부터 제어 응답 확인까지의 과정을 다뤘습니다.' },
  { title: '기술 프로젝트', text: 'ATmega128·STM32 임베디드 구현과 MisoTalk 챗봇을 프로젝트 주제로 경험했습니다.' },
];
