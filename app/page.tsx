'use client';

import { useState, useEffect } from 'react';

export default function UnifiedPage() {
  const [activePage, setActivePage] = useState<'main' | 'programs' | 'about' | 'contact'>('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // 배너 슬라이더 자동 재생 로직 (기존 6000ms 주기 완벽 대응)
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
          <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => handlePageChange('main')}>
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
                  title: "세계로 뻗어나가는 로봇 경쟁력",
                  desc: "VEX World Championship 진출을 향한 체계적인 트레이닝"
                },
                {
                  bg: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
                  sub: "Software & AI",
                  title: "코드로 만드는 미래 기술",
                  desc: "Python, C++부터 AI 융합까지 실전 중심 소프트웨어 교육"
                },
                {
                  bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                  sub: "Portfolio & Admissions",
                  title: "결과로 증명하는 포트폴리오",
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
                {/* 카드 3개 생략 없이 풀 마크업 */}
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
                {/* 프리뷰 카드 4종 풀 이식 */}
                <div className="course-card aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop" class="w-full h-full object-cover" alt="Discovery" />
                  <div className="level-badge bg-green-500 text-white">입문</div><div className="age-badge">5~7세</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">DISCOVERY</p><h3 className="text-lg font-bold mb-1">로보틱스 · 코딩 입문</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">블록코딩과 기초 로봇 제작으로 즐거움을 경험합니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=800&fit=crop" class="w-full h-full object-cover" alt="Foundation" />
                  <div className="level-badge bg-blue-600 text-white">기초</div><div className="age-badge">초1~초3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">FOUNDATION</p><h3 className="text-lg font-bold mb-1">로보틱스 · 코딩 기초</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">센서 활용 프로그래밍으로 스스로 완성하는 경험을 쌓습니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=800&fit=crop" class="w-full h-full object-cover" alt="VEX IQ" />
                  <div className="level-badge bg-red-600 text-white">대회</div><div className="age-badge">초1~중3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">VEX IQ COMPETITION</p><h3 className="text-lg font-bold mb-1">VEX IQ 대회반</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">VEX IQ로 협업과 문제해결 능력을 키우고 대회에 참가합니다.</p></div>
                  </div>
                </div>
                <div className="course-card aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop" class="w-full h-full object-cover" alt="Software AI" />
                  <div className="level-badge bg-purple-600 text-white">고급</div><div className="age-badge">초5~고3</div><div className="course-overlay"></div>
                  <div className="course-info text-white">
                    <p className="text-xs text-white/60 mb-1">SOFTWARE & AI</p><h3 className="text-lg font-bold mb-1">소프트웨어 · AI</h3>
                    <div className="course-desc"><p className="text-sm text-white/70 leading-relaxed">Python, AI 활용, 데이터 분석으로 역량을 강화합니다.</p></div>
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
                <div className="text-center mb-16"><h2 className="text-3xl font-bold">내 아이는 어떤 과정을 선택하면 될까요?</h2></div>
                <div className="relative pl-4 space-y-2">
                  <div className="path-card"><span className="path-age">5~7세</span><h3 className="text-lg font-bold">Discovery</h3><p className="text-sm text-gray-500">로보틱스 · 코딩 입문</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">초1~초3</span><h3 className="text-lg font-bold">Foundation</h3><p className="text-sm text-gray-500">로보틱스 · 코딩 기초</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">초4~초6</span><h3 className="text-lg font-bold">Foundation + VEX IQ</h3><p className="text-sm text-gray-500">기초 심화 + 대회 준비</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">중1~중3</span><h3 className="text-lg font-bold">VEX IQ + Software + AI</h3><p className="text-sm text-gray-500">대회 심화 + 소프트웨어 + AI 융합</p><div className="path-connector"></div></div>
                  <div className="path-card"><span className="path-age">고1~고3</span><h3 className="text-lg font-bold">VEX V5 + Portfolio + AI</h3><p className="text-sm text-gray-500">고급 대회 + 포트폴리오 + 진학 준비</p></div>
                </div>
              </div>
            </div>

            {/* FAQ React 아코디언 이식 */}
            <div className="bg-white py-20">
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
                <div className="space-y-2">
                  {[
                    { q: "처음인데 따라갈 수 있나요?", a: "네, 체험수업을 통해 아이의 레벨과 성향을 분석한 후 가장 알맞은 반을 배정하므로 기초부터 차근차근 무리 없이 배울 수 있습니다." },
                    { q: "대회는 꼭 참가해야 하나요?", a: "아닙니다. 참가는 자율 선택 사항이며, 정규 프로젝트 커리큘럼만 진행하셔도 공학적 사고 성장에 완전한 성취를 낼 수 있습니다." }
                  ].map((faq, fIdx) => (
                    <div key={fIdx} className="border-b border-gray-100">
                      <div className="faq-question flex items-center justify-between py-5 cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}>
                        <span className="font-medium">{faq.q}</span>
                        <span className={`transform transition-transform ${openFaqIndex === fIdx ? 'rotate-180' : ''}`}>▼</span>
                      </div>
                      <div className={`faq-answer-block ${openFaqIndex === fIdx ? 'open' : ''}`}>
                        <p className="text-sm text-gray-500 pb-5">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== 2. PROGRAMS PAGE ==================== */}
        {activePage === 'programs' && (
          <section className="page-section max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">학생 성장 단계별 커리큘럼</h2>
            <div className="space-y-4">
              <div className="border border-gray-100 p-6 rounded-xl bg-white">
                <span className="text-xs font-bold text-green-500">STAGE 1 | 5~7세</span>
                <h3 className="text-xl font-bold mt-1">DISCOVERY (로보틱스 입문)</h3>
                <p className="text-sm text-gray-500 mt-2">블록코딩과 기초 하드웨어 제작으로 코딩 사고력의 기틀을 확립합니다.</p>
              </div>
              <div className="border border-gray-100 p-6 rounded-xl bg-white">
                <span className="text-xs font-bold text-blue-500">STAGE 2 | 초1~초3</span>
                <h3 className="text-xl font-bold mt-1">FOUNDATION (로보틱스 기초)</h3>
                <p className="text-sm text-gray-500 mt-2">구조 설계 및 센서 메커니즘 활용 제어로 메이커 역량의 기초를 완벽히 마스터합니다.</p>
              </div>
            </div>
          </section>
        )}

        {/* ==================== 3. ABOUT PAGE ==================== */}
        {activePage === 'about' && (
          <section className="page-section max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-6">변경빈 대표원장 약력</h2>
            <div className="space-y-4 text-gray-700">
              <div className="career-item py-2"><p className="font-medium">대한민국 공군 정보통신학교 교관 전역</p></div>
              <div className="career-item py-2"><p className="font-medium">Chadwick International VEX Robotics Head Coach</p></div>
              <div className="career-item py-2"><p className="font-medium">Dwight School Seoul VEX Robotics Head Coach</p></div>
              <div className="career-item py-2"><p className="font-medium">KAIST VEX Robotics Camp 지도 강사 및 대표 코치</p></div>
            </div>
          </section>
        )}

        {/* ==================== 4. CONTACT PAGE ==================== */}
        {activePage === 'contact' && (
          <section className="page-section max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8">상담 및 오시는 길</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold">광교 캠퍼스</h3>
                <p className="text-sm text-gray-500 mt-1">수원시 영통구 에듀타운로 84, 3층</p>
                <a href="tel:031-895-5774" className="text-red-500 font-bold block mt-4 text-lg">031-895-5774</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold">호매실 캠퍼스</h3>
                <p className="text-sm text-gray-500 mt-1">수원시 권선구 금곡로196번길 61, 3층</p>
                <a href="tel:031-292-2697" className="text-red-500 font-bold block mt-4 text-lg">031-292-2697</a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left text-sm text-gray-400">
          <p>© 2026 MechaCoding Academy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
