import Link from 'next/link';

export default function ProgramsPage() {
  const stages = [
    { num: 1, color: 'text-green-600', checkColor: 'text-green-500', age: '5~7세', title: 'DISCOVERY', sub: '로보틱스 · 코딩 입문', items: ['블록 코딩', '기초 로봇 조립', '센서 체험', '창의 프로젝트'], goal: '만들기의 즐거움 경험', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop', right: false },
    { num: 2, color: 'text-blue-600', checkColor: 'text-blue-500', age: '초1~초3', title: 'FOUNDATION', sub: '로보틱스 · 코딩 기초', items: ['VEX IQ 기초 조립', '센서 활용', '텍스트 코딩 입문', '팀 프로젝트'], goal: '스스로 만들고 완성하는 경험', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', right: true },
    { num: 3, color: 'text-red-500', checkColor: 'text-red-500', age: '초1~중3', title: 'VEX IQ COMPETITION', sub: 'VEX IQ 대회 트레이닝', items: ['고급 메커니즘 설계', '대회 룰 분석', '팀 전략 수립', '대회 참가'], goal: '협업과 문제해결 능력 향상', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop', right: false },
    { num: 4, color: 'text-red-700', checkColor: 'text-red-600', age: '중1~고3', title: 'VEX V5 COMPETITION', sub: 'VEX V5 대회 트레이닝', items: ['기구 설계', 'CAD', '프로그래밍 (C++)', '대회 참가'], goal: '실제 엔지니어링 경험', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', right: true },
    { num: 5, color: 'text-purple-600', checkColor: 'text-purple-500', age: '초5~고3', title: 'SOFTWARE & AI', sub: '소프트웨어 · AI 융합', items: ['Python', 'AI 활용', '데이터 분석', '자동화 프로젝트'], goal: '소프트웨어 역량 강화', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop', right: false },
    { num: 6, color: 'text-orange-600', checkColor: 'text-orange-500', age: '초5~고3', title: 'MAKER & INNOVATION', sub: '메이커 · 혁신 프로젝트', items: ['Arduino', 'IoT', '3D Printing', '센서 제어'], goal: '아이디어를 현실로 구현', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop', right: true },
    { num: 7, color: 'text-indigo-600', checkColor: 'text-indigo-500', age: '중1~고3', title: 'FUTURE READY', sub: '진학 · 미래 준비', items: ['알고리즘 심화', '포트폴리오 개발', '입시 준비', 'AI 융합 프로젝트'], goal: '진학과 미래 준비', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', right: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">7단계 성장 로드맵</h2>
        <p className="text-black/50 text-base sm:text-lg">5세부터 고3까지, 단계별 맞춤 로보틱스 & 소프트웨어 교육</p>
      </div>

      {stages.map((s) => (
        <div key={s.num} className="stage-card bg-white rounded-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {s.right ? (
              <>
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold ${s.color} uppercase tracking-wider`}>Stage {s.num}</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{s.age}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{s.title}</h3>
                  <p className="text-gray-500 mb-6">{s.sub}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className={`w-4 h-4 ${s.checkColor} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900">목표: <span className="text-gray-500 font-normal">{s.goal}</span></p>
                  </div>
                </div>
                <div className="h-56 sm:h-64 lg:h-auto order-1 lg:order-2">
                  <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
                </div>
              </>
            ) : (
              <>
                <div className="h-56 sm:h-64 lg:h-auto">
                  <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold ${s.color} uppercase tracking-wider`}>Stage {s.num}</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{s.age}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{s.title}</h3>
                  <p className="text-gray-500 mb-6">{s.sub}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className={`w-4 h-4 ${s.checkColor} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900">목표: <span className="text-gray-500 font-normal">{s.goal}</span></p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="text-center mt-12">
        <p className="text-gray-500 mb-6">아이에게 맞는 단계가 궁금하시다면 체험수업에서 확인해 보세요</p>
        <Link href="/contact" className="hero-cta-btn hero-cta-btn--black">
          체험수업 및 레벨진단 신청
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </Link>
      </div>
    </div>
  );
}
