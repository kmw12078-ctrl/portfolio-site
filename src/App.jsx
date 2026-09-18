import React, { useEffect, useState } from 'react';
import { profile, navigation, projects, skillGroups, experience, capstone, misotalk } from './content.js';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function ArrowIcon({ diagonal = false }) {
  return diagonal ? <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16 16 4M6 4h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
    : <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-intro">{description}</p>}
  </div>;
}

function ProjectVisual({ type }) {
  if (type === 'control') return <div className="project-visual visual-control" aria-hidden="true">
    <div className="visual-topline"><span>CONTROL / 01</span><span>PID LOOP</span></div>
    <svg className="control-chart" viewBox="0 0 500 230" fill="none"><path d="M25 190H475M25 135H475M25 80H475M25 25H475M25 25V190M115 25V190M205 25V190M295 25V190M385 25V190M475 25V190" stroke="#bed0df" strokeWidth="1"/><path d="M25 110H475" stroke="#8ca7bd" strokeWidth="1.5" strokeDasharray="5 5"/><path d="M25 180C62 179 73 48 111 55S151 164 189 134 227 83 258 98 289 123 322 110 360 100 388 111 430 109 475 110" stroke="#00a4b5" strokeWidth="4" strokeLinecap="round"/><circle cx="388" cy="111" r="7" fill="#fff" stroke="#00a4b5" strokeWidth="3"/></svg>
    <span className="visual-caption">SETPOINT ─ RESPONSE</span>
  </div>;
  if (type === 'embedded') return <div className="project-visual visual-embedded" aria-hidden="true">
    <div className="visual-topline"><span>EMBEDDED / 02</span><span>MCU SYSTEM</span></div>
    <div className="circuit"><div className="circuit-line horizontal one"/><div className="circuit-line horizontal two"/><div className="circuit-line vertical three"/><div className="circuit-line vertical four"/><div className="chip"><span>ATmega128</span><strong>MCU</strong><span>STM32</span></div><i className="node n1"/><i className="node n2"/><i className="node n3"/><i className="node n4"/></div>
    <span className="visual-caption">INPUT / PROCESS / OUTPUT</span>
  </div>;
  return <div className="project-visual visual-chat" aria-hidden="true">
    <div className="visual-topline"><span>AI APPLICATION / 03</span><span>MISOTALK</span></div>
    <div className="chat-graphic"><div className="bubble bubble-one"><span/><span/><span/></div><div className="bubble bubble-two"><span/><span/><span/><span/></div><div className="chat-spark">✳</div></div>
    <span className="visual-caption">CONVERSATION FLOW</span>
  </div>;
}

function ProjectCard({ project }) {
  return <article className="project-card reveal">
    {project.image ? <img className="project-photo" src={assetUrl(project.image)} alt={project.imageAlt} loading="lazy" width="1299" height="781" /> : <ProjectVisual type={project.visual} />}
    <div className="project-body">
      <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.subtitle}</span></div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-detail"><span className="detail-label">PROCESS</span><p>{project.process.join(' → ')}</p></div>
      <div className="project-detail"><span className="detail-label">FOCUS</span><p>{project.focus}</p></div>
      <div className="project-footer"><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} 자세히 보기`}><ArrowIcon diagonal /></a>}</div>
      {project.detailId && <a className="case-link" href={`#${project.detailId}`}>{project.detailLabel || '담당 역할과 결과 보기'} <ArrowIcon /></a>}
    </div>
  </article>;
}

function CapstoneCaseStudy() {
  return <article className="capstone-case" id="capstone-detail" aria-labelledby="capstone-title">
    <header className="case-heading">
      <p className="eyebrow">CAPSTONE / VISION SYSTEM</p>
      <p className="case-context">{capstone.context}</p>
      <h3 id="capstone-title">{capstone.title}</h3>
      <p>{capstone.overview}</p>
      <span className="role-badge">{capstone.role}</span>
    </header>
    <div className="case-intro-grid">
      <figure className="case-figure"><img src={assetUrl('/capstone/system.jpeg')} width="1299" height="781" loading="lazy" alt="카메라가 설치된 볼 밸런싱 로봇과 실시간 공 인식 화면"/><figcaption>팀이 제작한 로봇과 영상 인식 화면 · 최종 보고서 수록 사진</figcaption></figure>
      <div className="contributions"><h4>직접 맡은 일</h4>{capstone.contributions.map((item,i)=><div key={item.title}><span>0{i+1}</span><h5>{item.title}</h5><p>{item.text}</p></div>)}</div>
    </div>
    <h4>영상에서 제어 입력까지</h4>
    <ol className="vision-flow">{capstone.flow.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol>
    <div className="case-analysis-grid">
      <figure className="case-figure detection-figure"><img src={assetUrl('/capstone/detection.png')} width="519" height="520" loading="lazy" alt="주황색 공의 외곽을 검출하고 중심에 십자선을 표시한 인식 화면"/><figcaption>주황색 공의 검출 영역과 중심 위치 확인</figcaption></figure>
      <div><h4>문제와 해결 과정</h4>{capstone.findings.map(item=><div className="case-finding" key={item.title}><h5>{item.title}</h5><p>{item.text}</p></div>)}</div>
    </div>
    <h4>팀 시스템의 실험 결과</h4>
    <div className="case-metrics">{capstone.metrics.map(item=><div key={item.label}><strong>{item.value}</strong><span>{item.label}</span><p>{item.note}</p></div>)}</div>
    <p className="case-source">{capstone.resultNote}</p>
    <div className="capstone-demo">
      <h4>캡스톤 작동 영상</h4>
      <video controls playsInline preload="metadata" aria-label="볼 밸런싱 로봇 작동 시연 영상">
        <source src={assetUrl('/capstone/demo.mp4')} type="video/mp4" />
        사용 중인 브라우저에서 영상을 재생할 수 없습니다.
      </video>
      <p>볼 밸런싱 로봇의 작동 시연 영상입니다.</p>
    </div>
    <div className="case-takeaways"><div><h4>품질관리·생산기술과의 연결</h4><p>{capstone.relevance}</p></div><div><h4>남은 한계와 다음 과제</h4><p>{capstone.next}</p></div></div>
  </article>;
}

function MisoTalkCaseStudy() {
  return <article className="capstone-case misotalk-case" id="misotalk-detail" aria-labelledby="misotalk-title">
    <header className="case-heading">
      <p className="eyebrow">MISOTALK / CHATBOT PROTOTYPE</p>
      <p className="case-context">{misotalk.context}</p>
      <h3 id="misotalk-title">{misotalk.title}</h3>
      <p>{misotalk.overview}</p>
      <span className="role-badge">{misotalk.role}</span>
    </header>
    <div className="misotalk-details">
      <div className="contributions"><h4>직접 맡은 일</h4>{misotalk.contributions.map((item, i) => <div key={item.title}><span>0{i + 1}</span><h5>{item.title}</h5><p>{item.text}</p></div>)}</div>
      <div className="misotalk-features"><h4>팀이 시연한 기능</h4>{misotalk.features.map(item => <div key={item.title}><h5>{item.title}</h5><p>{item.text}</p></div>)}</div>
    </div>
    <div className="misotalk-demo">
      <h4>작동 영상</h4>
      <video controls playsInline preload="metadata" aria-label="MisoTalk 챗봇 작동 시연 영상">
        <source src={assetUrl(misotalk.video)} type="video/mp4" />
        사용 중인 브라우저에서 영상을 재생할 수 없습니다.
      </video>
      <p>{misotalk.videoCaption}</p>
    </div>
    <div className="misotalk-limit"><h4>프로토타입의 한계</h4><p>{misotalk.limitation}</p></div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    if (window.location.hash) {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
    }
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">E<span>.</span></span><span>ENGINEERING<br/>PORTFOLIO</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
        <nav id="site-nav" className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="주 메뉴">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> ELECTRONICS ENGINEERING PORTFOLIO</p>
            <h1>현장의 문제를<br/><em>기술로 풀어가는</em><br/>엔지니어</h1>
            <p className="hero-description">품질관리 · 생산기술을 향한 전자공학 포트폴리오.<br className="desktop-break"/> 제어, 임베디드, AI 프로젝트의 과정과 배움을 담았습니다.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">프로젝트 보기 <ArrowIcon /></a><a className="text-link" href="#about">소개 보기 <span>↓</span></a></div>
          </div>
          <div className="hero-panel reveal" aria-label="관심 분야: 제어, 임베디드, 문제 분석">
            <div className="panel-top"><span>ENGINEERING NOTE</span><span>01 / 03</span></div>
            <div className="hero-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orbit-center">E</div><span className="orbit-label label-one">CONTROL</span><span className="orbit-label label-two">EMBEDDED</span><span className="orbit-label label-three">ANALYSIS</span></div>
            <div className="panel-bottom"><span>OBSERVE</span><span className="panel-rule"/><span>ANALYZE</span><span className="panel-rule"/><span>IMPROVE</span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-heading">
            <SectionHeading
              eyebrow="01 / ABOUT ME"
              title="관찰에서 개선까지"
            />

            <img
              className="about-university-logo"
              src={assetUrl('/images/donga-university-logo.png')}
              alt="동아대학교 로고"
              width="271"
              height="70"
              loading="lazy"
            />

            
          </div>

          <div className="about-copy reveal">
            <p className="about-lead">{profile.introduction}</p>
            <p>
              프로젝트에서 문제를 정의하고, 동작을 확인하며, 결과를 바탕으로 다음 단계를
              정리하는 과정에 관심이 있습니다. 현장에서 필요한 정확한 측정과 꾸준한
              개선의 태도를 키워가고 있습니다.
            </p>

            <div className="about-points">
              <div>
                <span>01</span>
                <strong>측정</strong>
                <small>현상을 수치와 동작으로 확인</small>
              </div>
              <div>
                <span>02</span>
                <strong>분석</strong>
                <small>원인과 제약 조건 정리</small>
              </div>
              <div>
                <span>03</span>
                <strong>개선</strong>
                <small>검증 후 다음 설계에 반영</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects"><div className="container"><SectionHeading eyebrow="02 / SELECTED PROJECTS" title="프로젝트" description="문제에서 구현까지, 프로젝트의 흐름을 간결하게 정리했습니다."/><div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div><CapstoneCaseStudy /><MisoTalkCaseStudy /></div></section>

      <section className="section skills-section" id="skills"><div className="container"><SectionHeading eyebrow="03 / SKILLS" title="기술과 접근 방식" description="프로젝트에서 접한 기술과 문제 해결에 활용한 방법입니다."/><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group reveal" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section className="section experience-section" id="experience"><div className="container experience-grid"><SectionHeading eyebrow="04 / EXPERIENCE" title="프로젝트 경험" description="제어, 임베디드, AI 주제를 프로젝트로 탐색했습니다."/><div className="experience-list">{experience.map((item, index) => <div className="experience-item reveal" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="experience-plus">+</span></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div className="reveal"><p className="eyebrow">05 / CONTACT</p><h2>함께 이야기<br/>나눠요<span>.</span></h2><p>프로젝트와 지원 직무에 관한 대화를 기다립니다.</p></div><div className="contact-links reveal">{profile.email ? <a href={`mailto:${profile.email}`}>Email <span>{profile.email}<ArrowIcon diagonal /></span></a> : <div className="contact-empty">연락처 준비 중</div>}{profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>프로필 보기<ArrowIcon diagonal /></span></a>}{profile.resume && <a href={profile.resume} download>Resume <span>이력서 다운로드<ArrowIcon diagonal /></span></a>}</div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><span>{profile.name}</span><span>ENGINEERING PORTFOLIO</span><a href="#home">맨 위로 ↑</a></div></footer>
  </>;
}
