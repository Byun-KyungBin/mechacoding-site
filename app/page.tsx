'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    bg: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')",
    label: 'Robotics · Software · AI',
    title: '생각을 현실로 만드는 힘',
    desc: '학생이 직접 만들고, 실험하고, 문제를 해결하며 성장하는 프로젝트 기반 교육',
    sub: ['초1~고3 맞춤 교육', 'VEX Robotics · Python · Arduino · AI', '체험수업 및 레벨진단 운영'],
  },
  {
    bg: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop')",
    label: 'Project Based Learning',
    title: '설계부터 결과까지',
    desc: '학생이 문제를 정의하고, 기술로 해결하며, 결과를 설명하는 힘을 기릅니다',
    sub: [],
  },
  {
    bg: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1580584126903-c17d41830450?w=1920&h=1080&fit=crop')",
    label: 'VEX Robotics Competition',
    title: '세계로 뻗어나가는\n로봇 경쟁력',
    desc: 'VEX World Championship 진출을 향한 체계적인 트레이닝',
    sub: [],
  },
  {
    bg: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop')",
    label: 'Software & AI',
    title: '코드로 만드는\n미래 기술',
    desc: 'Python, C++부터 AI 융합까지 실전 중심 소프트웨어 교육',
    sub: [],
  },
  {
    bg: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
    label: 'Portfolio & Admissions',
    title: '결과로 증명하는\n포트폴리오',
    desc: '국제학교·해외대학 진학을 위한 차별화된 프로젝트 경험',
    sub: [],
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <div className="relative overflow-hidden bg-black" style={{ height: 'calc(100vh - 80px)' }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: slide.bg }}
          >
            <div className="slide-inner">
              <div className="slide-content slide-text-content">
                <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">{slide.label}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed px-4">
                  {slide.desc}
                </p>
                {slide.sub.length > 0 && (
                  <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40">
                    {slide.sub.map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="slide-buttons">
              <Link href="/contact" className="hero-cta-btn hero-cta-btn--white">
                체험수업 및 레벨진단 신청
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-24 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`slider-dot w-8 h-1 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* Why MechaCoding */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Why MechaCoding</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block">우리가 가르치고 싶은 것은</span>
            <span className="block">로봇이 아닙니다</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">
            중요한 것은 로봇 자체가 아닙니다.<br className="hidden sm:inline" />
            문제를 발견하고, 해결책을 고민하고, 직접 만들고, 실패를 개선하며, 끝까지 완성하는 경험입니다.
          </p>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            메카코딩은 로보틱스, 소프트웨어, AI를 통해 학생이 스스로 생각하고 성장하는 힘을 기르는 프로젝트 기반 교육을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>, title: '문제를 발견하는 힘', desc: '주어진 상황에서 문제를 정의하고, 해결 방향을 스스로 설정합니다.' },
            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>, title: '해결책을 만드는 힘', desc: '설계부터 제작, 테스트, 개선까지 전 과정을 경험하며 완성도를 높입니다.' },
            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>, title: '끝까지 완성하는 힘', desc: '실패를 학습의 기회로 삼고, 지속적으로 자신의 결과를 개선합니다.' },
          ].map((item, i) => (
            <div key={i} className="why-card text-center">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Preview */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
          <p className="text-black/50 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            아이의 연령과 경험에 맞는 단계로 자연스럽게 성장하는 7단계 로드맵
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop', badge: 'bg-green-500', badgeText: '입문', age: '5~7세', label: 'DISCOVERY', title: '로보틱스 · 코딩 입문', desc: '블록코딩과 기초 로봇 제작으로 만들기의 즐거움을 경험합니다.', color: 'text-green-400' },
            { img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=800&fit=crop', badge: 'bg-blue-600', badgeText: '기초', age: '초1~초3', label: 'FOUNDATION', title: '로보틱스 · 코딩 기초', desc: '로봇 설계와 센서 활용, 기초 프로그래밍으로 스스로 만들고 완성하는 경험을 쌓습니다.', color: 'text-blue-400' },
            { img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=800&fit=crop', badge: 'bg-red-600', badgeText: '대회', age: '초1~중3', label: 'VEX IQ COMPETITION', title: 'VEX IQ 대회반', desc: 'VEX IQ로 협업과 문제해결 능력을 키우고 대회에 참가합니다.', color: 'text-red-400' },
            { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop', badge: 'bg-purple-600', badgeText: '고급', age: '초5~고3', label: 'SOFTWARE & AI', title: '소프트웨어 · AI', desc: 'Python, AI 활용, 데이터 분석으로 소프트웨어 역량을 강화합니다.', color: 'text-purple-400' },
          ].map((card, i) => (
            <div key={i} className="course-card aspect-[3/4]">
              <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
              <div className={`level-badge ${card.badge} text-white`}>{card.badgeText}</div>
              <div className="age-badge">{card.age}</div>
              <div className="course-overlay" />
              <div className="course-info text-white">
                <p className="text-xs text-white/60 mb-1">{card.label}</p>
                <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                <div className="course-desc">
                  <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                  <Link href="/programs" className={`mt-3 ${card.color} text-sm font-medium flex items-center gap-1`}>
                    자세히 보기 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/programs" className="hero-cta-btn hero-cta-btn--black">
            전체 커리큘럼 보기
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Recommended Path */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Recommended Path</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">내 아이는 어떤 과정을<br className="hidden sm:inline" />선택하면 될까요?</h2>
          </div>
          <div className="relative pl-4">
            {[
              { age: '5~7세', title: 'Discovery', desc: '로보틱스 · 코딩 입문' },
              { age: '초1~초3', title: 'Foundation', desc: '로보틱스 · 코딩 기초' },
              { age: '초4~초6', title: 'Foundation + VEX IQ', desc: '기초 심화 + 대회 준비' },
              { age: '초5~중3', title: 'VEX IQ Competition', desc: 'VEX IQ 대회 트레이닝' },
              { age: '중1~고3', title: 'VEX V5 Competition', desc: 'VEX V5 고급 대회 트레이닝' },
              { age: '초5~고3', title: 'Software & AI', desc: 'Python · AI · 알고리즘' },
              { age: '중1~고3', title: 'Future Ready', desc: '포트폴리오 · 입시 준비' },
            ].map((item, i, arr) => (
              <div key={i} className="path-card">
                {i < arr.length - 1 && <div className="path-connector" />}
                <span className="path-age">{item.age}</span>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="hero-cta-btn hero-cta-btn--black">
              체험수업 및 레벨진단 신청
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Trial Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Trial Class</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">체험수업 & 레벨진단</h2>
          <p className="text-gray-500 text-base sm:text-lg">아이에게 맞는 과정을 찾는 가장 빠른 방법입니다</p>
        </div>
        <div>
          {[
            { step: '01', title: '상담 신청', desc: '전화 또는 카카오채널로 간단히 신청하세요. 학생의 나이와 경험을 알려주시면 됩니다.' },
            { step: '02', title: '레벨 진단', desc: '30분 레벨 진단을 통해 학생의 현재 실력과 적합한 과정을 파악합니다.' },
            { step: '03', title: '체험수업', desc: '실제 수업과 동일한 환경에서 1회 체험수업을 진행합니다.' },
            { step: '04', title: '과정 안내', desc: '진단 결과를 바탕으로 최적의 커리큘럼과 일정을 안내해 드립니다.' },
          ].map((item, i) => (
            <div key={i} className="trial-step">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-black/10 flex-shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/contact" className="hero-cta-btn hero-cta-btn--black">
            체험수업 신청하기
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold">자주 묻는 질문</h2>
          </div>
          <FaqSection />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">지금 시작하세요</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">체험수업을 통해 아이에게 맞는 과정을 직접 경험해보세요.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:031-895-5774" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <div className="text-left">
                <div className="text-xs text-black/50">광교 캠퍼스</div>
                <div className="text-base font-semibold">031-895-5774</div>
              </div>
            </a>
            <a href="tel:031-292-2697" className="inline-flex items-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <div className="text-left">
                <div className="text-xs text-white/50">호매실 캠퍼스</div>
                <div className="text-base font-semibold">031-292-2697</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: '몇 살부터 수업이 가능한가요?', a: '5세(유치원생)부터 수업이 가능합니다. 연령별로 맞춤화된 커리큘럼이 준비되어 있어, 처음 코딩을 접하는 유아부터 대입을 준비하는 고등학생까지 모두 수강할 수 있습니다.' },
    { q: '코딩 경험이 없어도 괜찮나요?', a: '물론입니다. 처음 시작하는 학생을 위한 입문 과정부터 준비되어 있습니다. 체험수업과 레벨 진단을 통해 현재 수준에 맞는 과정을 안내해 드립니다.' },
    { q: 'VEX Robotics 대회는 어떻게 참가하나요?', a: '메카코딩 대회반에 등록한 학생들은 체계적인 훈련 후 VEX IQ 및 VEX V5 대회에 팀으로 참가합니다. 원장 직접 코칭으로 국가대표 선발전부터 VEX World Championship까지 지도합니다.' },
    { q: '수업 일정과 횟수는 어떻게 되나요?', a: '주 1~2회 수업이 기본이며, 대회반의 경우 시즌에 따라 집중 훈련이 추가될 수 있습니다. 자세한 일정은 상담을 통해 안내해 드립니다.' },
    { q: '광교와 호매실 중 어느 캠퍼스로 가야 하나요?', a: '두 캠퍼스 모두 동일한 커리큘럼과 교육 수준을 제공합니다. 거주지와 가까운 캠퍼스를 선택하시면 됩니다. 상담 시 추천해 드릴 수도 있습니다.' },
  ];

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <div
            className="faq-question flex items-center justify-between py-5 text-gray-600"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium pr-4">{faq.q}</span>
            <svg className={`faq-icon w-5 h-5 flex-shrink-0 ${open === i ? 'open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div className={`faq-answer ${open === i ? 'open' : ''}`}>
            <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
