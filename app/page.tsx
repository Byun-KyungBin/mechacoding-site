'use client';

import { useState, useEffect } from 'react';

export default function CompleteUnifiedPage() {
  const [activePage, setActivePage] = useState<'main' | 'programs' | 'about' | 'contact'>('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // 원본 6000ms 자동 슬라이드 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePageChange = (page: 'main' | 'programs' | 'about' | 'contact') => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Fixed Header */}
      <header id="mainHeader" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 hover:bg-black/5 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer lg:static lg:transform-none" onClick={() => handlePageChange('main')}>
            <img src="/images/MechaCoding-logo-black.png" alt="MechaCoding Academy" className="h-[72px] w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            {(['main', 'programs', 'about', 'contact'] as const).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`nav-link text-sm font-medium uppercase ${activePage === page ? 'active text-black' : 'text-black/60 hover:text-black'}`}
              >
                {page === 'main' ? 'HOME' : page}
              </button>
            ))}
          </nav>
          <div className="lg:hidden w-10"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 z-50 bg-white lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <img src="/images/MechaCoding-logo-black.png" alt="MechaCoding Academy" className="h-16 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {(['main', 'programs', 'about', 'contact'] as const).map((page) => (
              <button key={page} onClick={() => handlePageChange(page)} className="text-2xl font-medium text-left uppercase">
                {page === 'main' ? 'HOME' : page}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main id="mainContent" className="pt-[80px] flex-grow">
        {/* ==================== 1. HOME PAGE ==================== */}
        {activePage === 'main' && (
          <section className="page-section">
            {/* Hero Slider */}
            <div className="relative h-[calc(100vh-80px)] overflow-hidden bg-black">
              {[
                {
                  bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
                  sub: "Robotics · Software · AI",
                  title: "생각을 현실로 만드는 힘",
                  desc: "학생이 직접 만들고, 실험하고, 문제를 해결하며 성장하는 프로젝트 기반 교육",
                  extra: "초1~고3 맞춤 교육 · VEX Robotics · Python · Arduino · AI · 체험수업 및 레벨진단 운영"
                },
                {
                  bg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop",
                  sub: "Project Based Learning",
                  title: "설계부터 결과까지",
                  desc: "학생이 문제를 정의하고, 기술로 해결하며, 결과를 설명하는 힘을 기릅니다"
                },
                {
                  bg: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=1920&h=1080&fit=crop",
                  sub: "VEX Robotics Competition",
                  title: "세계로 뻗어나가는<br>로봇 경쟁력",
                  desc: "VEX World Championship 진출을 향한 체계적인 트레이닝"
                },
                {
                  bg: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
                  sub: "Software & AI",
                  title: "코드로 만드는<br>미래 기술",
                  desc: "Python, C++부터 AI 융합까지 실전 중심 소프트웨어 교육"
                },
                {
                  bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                  sub: "Portfolio & Admissions",
                  title: "결과로 증명하는<br>포트폴리오",
                  desc: "국제학교·해외대학 진학을 위한 차별화된 프로젝트 경험"
                }
              ].map((slide, idx) => (
                <div key={idx} className={`slide ${currentSlide === idx ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('${slide.bg}')` }}>
                  <div className="slide-inner">
                    <div className="slide-content slide-text-content">
                      <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">{slide.sub}</p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                      <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed px-4">{slide.desc}</p>
                      {slide.extra && (
                        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40">
                          {slide.extra.split(' · ').map((ex, i) => <span key={i}>{ex}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="slide-buttons">
                    <button onClick={() => handlePageChange('contact')} className="hero-cta-btn hero-cta-btn--white" type="button">
                      체험수업 및 레벨진단 신청
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-24 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`slider-dot w-8 h-1 rounded-full transition-all ${currentSlide === i ? 'bg-white' : 'bg-white/30'}`}></button>
                ))}
              </div>
            </div>

            {/* Why MechaCoding */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Why MechaCoding</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">우리가 가르치고 싶은 것은<br className="hidden sm:inline" />로봇이 아닙니다</h2>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">중요한 것은 로봇 자체가 아닙니다.<br className="hidden sm:inline" />문제를 발견하고, 해결책을 고민하고, 직접 만들고, 실패를 개선하며, 끝까지 완성하는 경험입니다.</p>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed">메카코딩은 로보틱스, 소프트웨어, AI를 통해 학생이 스스로 생각하고 성장하는 힘을 기르는 프로젝트 기반 교육을 제공합니다.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="why-card text-center">
                  <h3 className="text-lg font-bold mb-2">문제를 발견하는 힘</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">주어진 상황에서 문제를 정의하고, 해결 방향을 스스로 설정합니다.</p>
                </div>
                <div className="why-card text-center">
                  <h3 className="text-lg font-bold mb-2">해결책을 만드는 힘</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">설계부터 제작, 테스트, 개선까지 전 과정을 경험하며 완성도를 높입니다.</p>
                </div>
                <div className="why-card text-center">
                  <h3 className="text-lg font-bold mb-2">끝까지 완성하는 힘</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">실패를 학습의 기회로 삼고, 지속적으로 자신의 결과를 개선합니다.</p>
                </div>
              </div>
            </div>

            {/* Programs Preview */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
              <div className="text-center mb-16">
                <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
                <p className="text-black/50 text-base sm:text-lg max-w-2xl mx-auto">아이의 연령과 경험에 맞는 단계로 자연스럽게 성장하는 7단계 로드맵</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="course-card aspect-[3/4]" onClick={() => handlePageChange('programs')}>
                  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop" className="w-full h-full object-cover" alt="Discovery" />
                  <div className="level-badge bg-green-500 text-white">입문</div><div className="age-badge">5~7세</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">DISCOVERY</p><h3 className="text-lg font-bold mb-1">로보틱스 · 코딩 입문</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">블록코딩과 기초 로봇 제작으로 만들기의 즐거움을 경험합니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]" onClick={() => handlePageChange('programs')}>
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=800&fit=crop" className="w-full h-full object-cover" alt="Foundation" />
                  <div className="level-badge bg-blue-600 text-white">기초</div><div className="age-badge">초1~초3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">FOUNDATION</p><h3 className="text-lg font-bold mb-1">로보틱스 · 코딩 기초</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">로봇 설계와 센서 활용 기초 프로그래밍으로 스스로 완성하는 경험을 쌓습니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]" onClick={() => handlePageChange('programs')}>
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=800&fit=crop" className="w-full h-full object-cover" alt="VEX IQ" />
                  <div className="level-badge bg-red-600 text-white">대회</div><div className="age-badge">초1~중3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">VEX IQ COMPETITION</p><h3 className="text-lg font-bold mb-1">VEX IQ 대회반</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">VEX IQ로 협업과 문제해결 능력을 키우고 대회에 참가합니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]" onClick={() => handlePageChange('programs')}>
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop" className="w-full h-full object-cover" alt="Software AI" />
                  <div className="level-badge bg-purple-600 text-white">고급</div><div className="age-badge">초5~고3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">SOFTWARE & AI</p><h3 className="text-lg font-bold mb-1">소프트웨어 · AI</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">Python, AI 활용, 데이터 분석으로 소프트웨어 역량을 강화합니다.</p></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <button onClick={() => handlePageChange('programs')} className="hero-cta-btn hero-cta-btn--black">전체 커리큘럼 보기</button>
              </div>
            </div>

            {/* Recommended Path */}
            <div className="bg-gray-50 py-20 lg:py-28">
              <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                  <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Recommended Path</p>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">내 아이는 어떤 과정을<br className="hidden sm:inline" />선택하면 될까요?</h2>
                </div>
                <div className="relative pl-4 space-y-0">
                  <div className="path-card"><span className="path-age">5~7세</span><h3 className="text-lg font-bold mb-1">Discovery</h3><p className="text-sm text-gray-500">로보틱스 · 코딩 입문</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">초1~초3</span><h3 className="text-lg font-bold mb-1">Foundation</h3><p className="text-sm text-gray-500">로보틱스 · 코딩 기초</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">초4~초6</span><h3 className="text-lg font-bold mb-1">Foundation + VEX IQ</h3><p className="text-sm text-gray-500">기초 심화 + 대회 준비</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">중1~중3</span><h3 className="text-lg font-bold mb-1">VEX IQ + Software + AI</h3><p className="text-sm text-gray-500">대회 심화 + 소프트웨어 + AI 융합</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">고1~고3</span><h3 className="text-lg font-bold mb-1">VEX V5 + Portfolio + AI</h3><p className="text-sm text-gray-500">고급 대회 + 포트폴리오 + 진학 준비</p></div>
                </div>
                <div className="text-center mt-12">
                  <p className="text-gray-500 mb-6 text-sm">아이의 현재 상황에 맞는 최적의 경로를 상담해 드립니다</p>
                  <button onClick={() => handlePageChange('contact')} className="hero-cta-btn hero-cta-btn--black">맞춤 과정 상담하기</button>
                </div>
              </div>
            </div>

            {/* Trial Class */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Trial Class</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">체험수업 및<br />레벨진단</h2>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">단순 견학이 아닙니다. 아이의 실제 수준과 학습 성향을 파악하는 1:1 진단 과정입니다.</p>
                  <div className="space-y-0">
                    <div className="trial-step"><h4 className="font-bold text-base mb-1">체험수업</h4><p className="text-sm text-gray-500">실제 수업과 동일한 환경에서 1시간 동안 체험합니다.</p></div>
                    <div className="trial-step"><h4 className="font-bold text-base mb-1">현재 수준 진단</h4><p className="text-sm text-gray-500">아이의 현재 기술적 역량และ 이해도를 객관적으로 평가합니다.</p></div>
                    <div className="trial-step"><h4 className="font-bold text-base mb-1">학습 성향 확인</h4><p className="text-sm text-gray-500">아이에게 가장 적합한 학습 방식과 속도를 파악합니다.</p></div>
                    <div className="trial-step"><h4 className="font-bold text-base mb-1">교육과정 추천</h4><p className="text-sm text-gray-500">진단 결과를 바탕으로 맞춤 커리큘럼을 제안합니다.</p></div>
                    <div className="trial-step"><h4 className="font-bold text-base mb-1">반 배정</h4><p className="text-sm text-gray-500">가장 적합한 반에 배정하여 정규 수업을 시작합니다.</p></div>
                  </div>
                  <div className="mt-10">
                    <button onClick={() => handlePageChange('contact')} className="hero-cta-btn hero-cta-btn--black">체험수업 및 레벨진단 신청</button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop" className="w-full h-[600px] object-cover rounded-2xl" alt="Trial" />
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 py-20 lg:py-28">
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
                <div className="space-y-0 border-t border-gray-200">
                  {[
                    { q: "처음인데 따라갈 수 있나요?", a: "네, 체험수업을 통해 아이의 현재 수준과 학습 성향을 진단한 후, 가장 적합한 단계의 반을 추천해 드립니다. 경험이 없는 학생도 기초부터 차근차근 배울 수 있도록 커리큘럼이 구성되어 있습니다." },
                    { q: "체험수업은 어떻게 진행되나요?", a: "실제 수업과 동일한 환경에서 1시간 동안 체험합니다. 단순 견학이 아닌, 아이가 직접 로봇을 조립하거나 코딩을 해보는 실전 체험입니다. 수업 후 레벨 진단과 학습 성향 분석 결과를 학부모님께 안내해 드립니다." },
                    { q: "대회는 꼭 참가해야 하나요?", a: "아닙니다. 참가는 자율 선택 사항이며, 대회반에 속하지 않은 학생도 프로젝트 기반 학습을 통해 충분한 성장을 이룰 수 있습니다." },
                    { q: "로봇 외에도 배우는 것이 있나요?", a: "네, 메카코딩은 로보틱스를 중심으로 소프트웨어(Python, C++)와 AI까지 연결되는 통합 교육을 제공합니다. 상황에 따라 아두이노, 3D 프린팅 등 다양한 분야를 융합 학습합니다." },
                    { q: "AI 수업도 진행하나요?", a: "네, 초등 고학년부터 고등학생까지 단계별 AI 융합 코딩 수업을 운영합니다. 머신러닝 기초부터 실제 AI 프로젝트 기획 및 개발까지 진행합니다." }
                  ].map((faq, fIdx) => (
                    <div key={fIdx} className="border-b border-gray-200">
                      <div className="faq-question flex items-center justify-between py-5 cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}>
                        <span className="font-medium text-base text-gray-900">{faq.q}</span>
                        <span className={`transform transition-transform text-gray-400 ${openFaqIndex === fIdx ? 'rotate-180' : ''}`}>▼</span>
                      </div>
                      <div className={`faq-answer-block ${openFaqIndex === fIdx ? 'open' : ''}`}>
                        <p className="text-sm text-gray-500 pb-5 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-center py-20 lg:py-28 text-white">
              <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-4">Get Started</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">아이의 첫 걸음을<br className="hidden sm:inline" />메카코딩과 함께하세요</h2>
              <p className="text-white/50 text-base max-w-xl mx-auto mb-10">체험수업으로 아이의 가능성을 확인해 보세요.<br />광교 · 호매실 두 캠퍼스에서 상담을 기다리고 있습니다.</p>
              <button onClick={() => handlePageChange('contact')} className="hero-cta-btn hero-cta-btn--white">체험수업 및 레벨진단 신청</button>
            </div>
          </section>
        )}

        {/* ==================== 2. PROGRAMS PAGE ==================== */}
        {activePage === 'programs' && (
          <section className="page-section max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
              <p className="text-gray-500">아이의 연령과 경험에 맞는 단계로 자연스럽게 성장하는 7단계 로드맵</p>
            </div>
            <div className="space-y-6">
              {[
                { no: "1", color: "text-green-600", border: "hover:border-green-500", name: "DISCOVERY", age: "5~7세", desc: "로보틱스 · 코딩 입문", details: ["블록코딩", "기초 로봇 제작", "논리적 사고", "문제해결 놀이"], target: "만들기의 즐거움을 경험" },
                { no: "2", color: "text-blue-600", border: "hover:border-blue-500", name: "FOUNDATION", age: "초1~초3", desc: "로보틱스 · 코딩 기초", details: ["로봇 설계", "센서 활용", "기초 프로그래밍", "프로젝트 제작"], target: "스스로 만들고 완성하는 경험" },
                { no: "3", color: "text-red-600", border: "hover:border-red-500", name: "VEX IQ COMPETITION", age: "초1~중3", desc: "VEX IQ 대회 트레이닝", details: ["엔지니어링 노트", "로봇 설계", "팀 프로젝트", "대회 참가"], target: "협업과 문제해결 능력 향상" },
                { no: "4", color: "text-red-700", border: "hover:border-red-700", name: "VEX V5 COMPETITION", age: "중1~고3", desc: "VEX V5 엘리트 클래스", details: ["기구 설계", "CAD", "프로그래밍 (C++)", "대회 참가"], target: "실제 엔지니어링 경험 확보" },
                { no: "5", color: "text-purple-600", border: "hover:border-purple-500", name: "SOFTWARE & AI", age: "초5~고3", desc: "소프트웨어 · AI 융합", details: ["Python", "AI 활용", "데이터 분석", "자동화 프로젝트"], target: "소프트웨어 실전 역량 강화" },
                { no: "6", color: "text-orange-600", border: "hover:border-orange-500", name: "MAKER & INNOVATION", age: "초5~고3", desc: "메이커 · 혁신 프로젝트", details: ["Arduino", "IoT", "3D Printing", "센서 제어"], target: "아이디어를 현실로 구현" },
                { no: "7", color: "text-indigo-600", border: "hover:border-indigo-500", name: "FUTURE READY", age: "중1~고3", desc: "진학 · 미래 준비", details: ["알고리즘 심화", "포트폴리오 개발", "입시 준비", "AI 융합 프로젝트"], target: "진학과 대학 미래 포트폴리오 완성" }
              ].map((stage) => (
                <div key={stage.no} className={`stage-card bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 transition-all ${stage.border} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${stage.color}`}>Stage {stage.no}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{stage.age}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stage.name}</h3>
                    <p className="text-sm font-semibold text-gray-400 mb-4">{stage.desc}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                      {stage.details.map((d, i) => <span key={i}>• {d}</span>)}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl min-w-[240px] text-left md:text-right">
                    <p className="text-xs text-gray-400 font-medium mb-1">최종 목표</p>
                    <p className="text-sm font-bold text-gray-800">{stage.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================== 3. ABOUT PAGE ==================== */}
        {activePage === 'about' && (
          <section className="page-section max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-4">Philosophy</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">우리가 진짜 가르치고 싶은 것은<br />로봇이 아닙니다</h2>
              <div className="text-base text-gray-500 space-y-4 leading-relaxed">
                <p>국제학교에서 가르치며 느낀 것은, 수업의 질은 학교 이름이 아니라 교육 방식이 결정한다는 사실이었습니다.</p>
                <p>메카코딩은 그 엘리트 경험을 수원의 학생들에게 전면 제공하고자 시작했습니다.</p>
                <p className="text-black font-semibold text-lg">문제의 근본 원인을 파악하고, 해결책을 직접 설계해내는 핵심 역량입니다.</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-1/2">
                <img src="/images/director.png" alt="대표원장" className="director-photo mb-6 shadow-md" />
                <p className="text-sm text-gray-400 mb-1">MechaCoding Academy Director</p>
                <h3 className="text-3xl font-bold">변경빈 대표원장</h3>
                <p className="text-base text-gray-500 font-medium">로보틱스 부문 총괄 대표 코치</p>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1">Academic & International Leadership</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="career-item py-1">대한민국 공군(ROK Air Force) 정보통신학교 교관 전역 (ICT 전담 교육)</div>
                    <div className="career-item py-1">Chadwick International (채드윅 송도국제학교) VEX Robotics Head Coach</div>
                    <div className="career-item py-1">Dwight School Seoul (드와이트 외국인학교) VEX Robotics Head Coach</div>
                    <div className="career-item py-1">KAIST VEX Robotics Camp 대표 강사 및 코치 변천 전담</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1">World-Class Achievement</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="career-item py-1">국내 최초 4년 연속 VEX 대한민국 로봇 국가대표 지도진 등극</div>
                    <div className="career-item py-1">2023 - 2025 VEX Robotics World Championship (Texas, Dallas) 대표 출전 유치</div>
                    <div className="career-item py-1">2026 VEX Robotics World Championship (Missouri, St. Louis) 본선 엔지니어링 지도</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== 4. CONTACT PAGE ==================== */}
        {activePage === 'contact' && (
          <section className="page-section max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <h2 className="text-3xl font-bold mb-8">Contact & 캠퍼스 안내</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 광교 */}
              <div className="space-y-4">
                <div className="h-72 sm:h-80 rounded-xl overflow-hidden border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.270965216196!2d127.0474064!3d37.2887114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b205391b75d%3A0x8e3b6d5486881a36!2z66mU7Lm07L2U65Sp7ZWZ7JuQIOq0keq1kOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355902771!5m2!1sko!2skr"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">광교 캠퍼스</h3>
                  <a href="https://map.naver.com" target="_blank" className="text-xs text-blue-600 hover:underline">네이버 지도 연동 ➔</a>
                </div>
                <p className="text-sm text-gray-500">수원시 영통구 에듀타운로 84, 3층</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-400">직통 전화상담</span>
                  <a href="tel:031-895-5774" className="text-red-500 font-bold text-lg hover:underline">031-895-5774</a>
                </div>
              </div>

              {/* 호매실 */}
              <div className="space-y-4">
                <div className="h-72 sm:h-80 rounded-xl overflow-hidden border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.904549570512!2d126.95192317658163!3d37.27369047211598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b439c89ce3ed7%3A0x7687bcfdef2cca39!2z66mU7Lm07L2U65Sp7ZWZ7JuQIO2YuOunpOyLpOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355952764!5m2!1sko!2skr"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">호매실 캠퍼스</h3>
                  <a href="https://map.naver.com" target="_blank" className="text-xs text-blue-600 hover:underline">네이버 지도 연동 ➔</a>
                </div>
                <p className="text-sm text-gray-500">수원시 권선구 금곡로196번길 61, 3층</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-400">직통 전화상담</span>
                  <a href="tel:031-292-2697" className="text-red-500 font-bold text-lg hover:underline">031-292-2697</a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/images/MechaCoding-logo-white.png" alt="Logo" className="h-14 w-auto mb-4 filter brightness-0 invert" />
            <p className="text-gray-400 text-xs leading-relaxed">성과와 메커니즘 실력으로 증명하는<br />로보틱스 · 소프트웨어 · AI 전문 교육기관</p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/mecha_coding/" target="_blank" className="text-gray-500 hover:text-white">Instagram</a>
              <a href="https://blog.naver.com/steamplus_suwon" target="_blank" className="text-gray-500 hover:text-white">Naver Blog</a>
            </div>
          </div>
          <div>
            <h4 className="text-gray-500 text-xs font-bold mb-3 tracking-wider uppercase">Quick Menu</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => handlePageChange('main')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => handlePageChange('programs')} className="hover:text-white">Programs</button></li>
              <li><button onClick={() => handlePageChange('about')} className="hover:text-white">About</button></li>
              <li><button onClick={() => handlePageChange('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 text-xs font-bold mb-3 tracking-wider uppercase">Campus Location</h4>
            <p className="text-xs text-gray-400">광교 캠퍼스: 영통구 에듀타운로 84 (3층)</p>
            <p className="text-xs text-gray-400 mt-1">호매실 캠퍼스: 권선구 금곡로196번길 61 (3층)</p>
          </div>
        </div>
        <div className="border-t border-gray-900 text-center py-6 text-xs text-gray-600">
          &copy; 2026 MechaCoding Academy. All rights reserved.
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <a href="tel:031-292-2697" className="fixed bottom-6 right-6 z-40 lg:hidden bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl pulse-btn">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      </a>
    </>
  );
}
