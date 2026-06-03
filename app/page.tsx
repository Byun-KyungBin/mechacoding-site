import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Visual Section */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">Robotics · Software · AI</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">생각을 현실로 만드는 힘</h1>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto mb-8">학생이 직접 만들고, 실험하고, 문제를 해결하며 성장하는 프로젝트 기반 교육</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40 mb-10">
            <span>초1~고3 맞춤 교육</span><span>·</span><span>VEX Robotics · Python · AI</span><span>·</span><span>체험수업 및 레벨진단 운영</span>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center min-h-[56px] px-8 bg-white text-black font-medium rounded-full transition-all hover:bg-gray-100 shadow-xl">
            체험수업 및 레벨진단 신청
          </Link>
        </div>
      </section>

      {/* Why MechaCoding Core Value Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Why MechaCoding</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">우리가 가르치고 싶은 것은<br />로봇이 아닙니다</h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">중요한 것은 로봇 자체가 아닙니다. 문제를 발견하고, 해결책을 고민하고, 직접 만들고, 실패를 개선하며, 끝까지 완성하는 경험입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-gray-100 rounded-2xl text-center hover:border-black transition-all">
            <h3 className="text-lg font-bold mb-2">문제를 발견하는 힘</h3>
            <p className="text-sm text-gray-500">주어진 상황에서 문제를 정의하고 해결 방향을 스스로 설정합니다.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl text-center hover:border-black transition-all">
            <h3 className="text-lg font-bold mb-2">해결책을 만드는 힘</h3>
            <p className="text-sm text-gray-500">설계부터 제작, 테스트, 개선까지 전 과정을 경험하며 완성도를 높입니다.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl text-center hover:border-black transition-all">
            <h3 className="text-lg font-bold mb-2">끝까지 완성하는 힘</h3>
            <p className="text-sm text-gray-500">실패를 학습의 기회로 삼고 지속적으로 자신의 결과를 개선합니다.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-base mb-2">처음인데 따라갈 수 있나요?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">네, 체험수업을 통해 수준을 진단한 후 맞춤형 반을 배정하므로 처음이어도 단계적으로 안심하고 배울 수 있습니다.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-base mb-2">대회는 꼭 참가해야 하나요?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">아닙니다. 참가는 학생과 학부모의 자율적 선택이며, 정규 프로젝트 기반 학습만으로도 충분한 기술 논리 성장이 가능합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
