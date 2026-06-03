import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "메카코딩학원 | 수원 로보틱스 코딩 최적화 센터",
  description: "수원 광교·호매실 코딩학원. VEX Robotics, 소프트웨어, AI 프로젝트 교육 및 체험수업 안내.",
  keywords: ["수원코딩학원", "광교코딩학원", "호매실코딩학원", "VEXRobotics"],
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "메카코딩학원",
    "description": "수원 광교·호매실 메카코딩학원. VEX Robotics, 소프트웨어, AI까지 연결되는 프로젝트 기반 교육.",
    "url": "https://mechacoding.kr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "수원시",
      "addressCountry": "KR"
    }
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section class="relative h-[calc(100vh-80px)] overflow-hidden bg-black text-white flex items-center justify-center">
        <div class="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
        <div class="relative z-10 text-center max-w-4xl px-6">
          <p class="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">Robotics · Software · AI</p>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">생각을 현실로 만드는 힘</h1>
          <p class="text-base sm:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-8">학생이 직접 만들고, 실험하고, 문제를 해결하며 성장하는 프로젝트 기반 교육</p>
          <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40 mb-8">
            <span>초1~고3 맞춤 교육</span><span>·</span><span>VEX Robotics · Python · Arduino · AI</span><span>·</span><span>체험수업 및 레벨진단 운영</span>
          </div>
          <Link href="/contact" class="inline-flex items-center justify-center min-h-[56px] px-8 bg-white text-black font-medium rounded-full transition-all hover:bg-gray-100">
            체험수업 및 레벨진단 신청
          </Link>
        </div>
      </section>

      {/* Why MechaCoding Section */}
      <section class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Why MechaCoding</p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">우리가 가르치고 싶은 것은<br />로봇이 아닙니다</h2>
          <p class="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">중요한 것은 로봇 자체가 아닙니다.<br />문제를 발견하고, 해결책을 고민하고, 직접 만들고, 실패를 개선하며, 끝까지 완성하는 경험입니다.</p>
          <p class="text-base sm:text-lg text-gray-500 leading-relaxed">메카코딩은 로보틱스, 소프트웨어, AI를 통해 학생이 스스로 생각하고 성장하는 힘을 기르는 프로젝트 기반 교육을 제공합니다.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-gray-100 p-8 rounded-2xl text-center hover:border-black transition-all">
            <h3 class="text-lg font-bold mb-2">문제를 발견하는 힘</h3>
            <p class="text-sm text-gray-500 leading-relaxed">주어진 상황에서 문제를 정의하고, 해결 방향을 스스로 설정합니다.</p>
          </div>
          <div class="border border-gray-100 p-8 rounded-2xl text-center hover:border-black transition-all">
            <h3 class="text-lg font-bold mb-2">해결책을 만드는 힘</h3>
            <p class="text-sm text-gray-500 leading-relaxed">설계부터 제작, 테스트, 개선까지 전 과정을 경험하며 완성도를 높입니다.</p>
          </div>
          <div class="border border-gray-100 p-8 rounded-2xl text-center hover:border-black transition-all">
            <h3 class="text-lg font-bold mb-2">끝까지 완성하는 힘</h3>
            <p class="text-sm text-gray-500 leading-relaxed">실패를 학습의 기회로 삼고, 지속적으로 자신의 결과를 개선합니다.</p>
          </div>
        </div>
      </section>

      {/* Recommended Path Section */}
      <section class="bg-gray-50 py-20 lg:py-28">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <p class="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Recommended Path</p>
            <h2 class="text-3xl font-bold mb-4">내 아이는 어떤 과정을 선택하면 될까요?</h2>
          </div>
          <div class="relative border-l-2 border-black ml-4 space-y-8 pl-6">
            <div><span class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">5~7세</span><h3 class="text-lg font-bold">Discovery</h3><p class="text-sm text-gray-500">로보틱스 · 코딩 입문</p></div>
            <div><span class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">초1~초3</span><h3 class="text-lg font-bold">Foundation</h3><p class="text-sm text-gray-500">로보틱스 · 코딩 기초</p></div>
            <div><span class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">초4~초6</span><h3 class="text-lg font-bold">Foundation + VEX IQ</h3><p class="text-sm text-gray-500">기초 심화 + 대회 준비</p></div>
            <div><span class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">중1~중3</span><h3 class="text-lg font-bold">VEX IQ + Software + AI</h3><p class="text-sm text-gray-500">대회 심화 + 소프트웨어 + AI 융합</p></div>
            <div><span class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">고1~고3</span><h3 class="text-lg font-bold">VEX V5 + Portfolio + AI</h3><p class="text-sm text-gray-500">고급 대회 + 포트폴리오 + 진학 준비</p></div>
          </div>
        </div>
      </section>

      {/* Trial Class Section */}
      <section class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p class="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Trial Class</p>
            <h2 class="text-3xl font-bold mb-6">체험수업 및 레벨진단</h2>
            <p class="text-gray-500 mb-8">단순 견학이 아닙니다. 아이의 실제 수준과 학습 성향을 파악하는 1:1 진단 과정입니다.</p>
            <div class="space-y-4 border-l-2 border-neutral-200 pl-6">
              <div><h4 class="font-bold">체험수업</h4><p class="text-sm text-gray-500">실제 수업과 동일한 환경에서 1시간 동안 체험합니다.</p></div>
              <div><h4 class="font-bold">현재 수준 진단</h4><p class="text-sm text-gray-500">아이의 현재 기술적 역량과 이해도를 객관적으로 평가합니다.</p></div>
              <div><h4 class="font-bold">학습 성향 확인</h4><p class="text-sm text-gray-500">아이에게 가장 적합한 학습 방식과 속도를 파악합니다.</p></div>
            </div>
            <div class="mt-8">
              <Link href="/contact" class="inline-flex items-center justify-center min-h-[52px] px-8 bg-black text-white font-medium rounded-full">맞춤 과정 상담하기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="bg-gray-50 py-16 lg:py-24">
        <div class="max-w-3xl mx-auto px-6">
          <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          <div class="space-y-6">
            <div class="border-b border-gray-200 pb-4"><h4 class="font-bold text-base mb-2">처음인데 따라갈 수 있나요?</h4><p class="text-sm text-gray-500">네, 체험수업을 통해 수준을 진단한 후 맞춤형 반을 배정하므로 처음이어도 차근차근 배울 수 있습니다.</p></div>
            <div class="border-b border-gray-200 pb-4"><h4 class="font-bold text-base mb-2">대회는 꼭 참가해야 하나요?</h4><p class="text-sm text-gray-500">아닙니다. 참가는 선택이며, 정규 프로젝트 기반 학습만으로도 충분한 논리력 성장이 가능합니다.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
