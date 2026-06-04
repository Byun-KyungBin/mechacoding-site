import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">메카코딩을 소개합니다</h2>
        <p className="text-black/50 text-base sm:text-lg">결과로 증명하는 로보틱스 & 소프트웨어 교육</p>
      </div>

      {/* Director Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
        <div>
          <img src="/images/director.png" alt="변경빈 대표원장" className="director-photo" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Director</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">변경빈 대표원장</h2>
          <p className="text-gray-500 mb-6">메카코딩학원 원장 / 로보틱스 부문 대표 코치</p>
          <blockquote className="text-xl sm:text-2xl font-bold leading-snug mb-8 border-l-4 border-black pl-6">
            "글로벌 상위 1%를 지향하는<br />로보틱스 교육의 기준"
          </blockquote>
          <p className="text-gray-500 leading-relaxed mb-6">
            최상위 국제학교의 헤드 코치와 KAIST 로보틱스 캠프 지도 강사를 역임하며 교육의 전문성을 검증받았습니다. 4년 연속 VEX 월드 챔피언십 출전 및 지도 경력을 바탕으로 세계 무대에서 통하는 실전 로보틱스 기술을 전수합니다.
          </p>
        </div>
      </div>

      {/* Career */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8">Academic & International Leadership</h3>
        <div className="space-y-4">
          {[
            '대한민국 공군(ROK Air Force) 정보통신학교 교관 전역 (ICT 교육 전담)',
            'Chadwick International (채드윅 송도국제학교) VEX Robotics Head Coach',
            'Dwight School Seoul (드와이트 외국인학교) VEX Robotics Head Coach',
            'MICA (Mastery Integrity Creativity Academy) VEX Robotics Head Coach',
            'KAIST VEX Robotics Camp 지도 강사 및 대표 코치',
          ].map((item, i) => (
            <div key={i} className="career-item py-4">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8">World-Class Achievement</h3>
        <div className="space-y-4">
          {[
            '국내 최초 4년 연속 국가대표 선발 기록 수립',
            '2023 - 2025 VEX Robotics World Championship (Dallas, Texas) 출전 및 지도',
            '2026 VEX Robotics World Championship (St. Louis, Missouri) 출전 및 지도',
            'VEX Robotics 한국 국가대표 선발전 다수 입상팀 배출',
          ].map((item, i) => (
            <div key={i} className="career-item py-4">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8">Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Standard-Centric', desc: '공군 교관 출신의 엄격한 기준과 체계적인 관리로 학습 성취도를 보장합니다.' },
            { title: 'Global Excellence', desc: '미국 현지 월드 챔피언십 지도 경험을 바탕으로 글로벌 기술 트렌드를 교육에 즉시 반영합니다.' },
            { title: 'Elite Path', desc: '단순 취미를 넘어 실전 대회와 포트폴리오로 연결되는 엘리트 로보틱스 교육을 지향합니다.' },
          ].map((item, i) => (
            <div key={i} className="why-card">
              <h4 className="text-lg font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-2xl p-10">
        <h3 className="text-2xl font-bold mb-3">메카코딩을 직접 경험해보세요</h3>
        <p className="text-gray-500 mb-8">체험수업과 레벨진단을 통해 아이에게 맞는 교육을 안내해 드립니다.</p>
        <Link href="/contact" className="hero-cta-btn hero-cta-btn--black">
          상담 신청하기
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </Link>
      </div>
    </div>
  );
}
