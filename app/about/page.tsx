import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | 메카코딩학원",
  description: "국제학교 Head Coach 출신 변경빈 대표원장의 교육 철학과 세계 대회 출신 지도진을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* Philosophy */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-4">Philosophy</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
          우리가 진짜 가르치고 싶은 것은<br />로봇이 아닙니다
        </h2>
        <div className="text-base sm:text-lg text-gray-500 leading-relaxed space-y-6">
          <p>국제학교에서 가르치며 느낀 것은, 수업의 질은 학교 이름이 아니라 교육 방식이 결정한다는 사실이었습니다.</p>
          <p>메카코딩은 그 경험을 수원의 학생들에게 열어주고 싶어서 시작했습니다.</p>
          <p className="text-black font-medium text-lg sm:text-xl">문제의 원인을 찾고, 해결책을 직접 만들어내는 힘입니다.</p>
          <p>이 능력은 로보틱스뿐 아니라 인생 전체에서 필요한 역량이라고 믿습니다.</p>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <img src="/images/director.png" alt="변경빈 대표원장" className="w-full h-[400px] sm:h-[600px] object-cover rounded-2xl" />
          </div>
          <div>
            <p className="text-base text-gray-400 mb-2">MechaCoding Academy Director</p>
            <h3 className="text-3xl font-bold mb-2">변경빈 대표원장</h3>
            <p className="text-base text-gray-400">메카코딩학원 원장 / 로보틱스 부문 대표 코치</p>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-10">
          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Academic & International Leadership</h4>
            <ul className="space-y-3 text-base text-gray-700">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">대한민국 공군 정보통신학교 교관 전역 (ICT 교육 전담)</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">Chadwick International (채드윅 송도국제학교) VEX Head Coach</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">Dwight School Seoul (드와이트 외국인학교) VEX Head Coach</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">MICA (Mastery Integrity Creativity Academy) VEX Head Coach</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">KAIST VEX Robotics Camp 지도 강사 및 대표 코치</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">World-Class Achievement</h4>
            <ul className="space-y-3 text-base text-gray-700">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">국내 최초 4년 연속 국가대표 선발 기록 수립</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">2023 - 2025 VEX Robotics World Championship (Texas) 출전 및 지도</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-1 before:bg-red-500">2026 VEX Robotics World Championship (Missouri) 출전 및 지도</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-gray-50 p-5 rounded-xl"><p className="font-bold mb-1 text-sm">Standard-Centric</p><p className="text-xs text-gray-500">철저한 관리와 기준으로 학습 성취도를 보장합니다.</p></div>
            <div className="bg-gray-50 p-5 rounded-xl"><p className="font-bold mb-1 text-sm">Global Excellence</p><p className="text-xs text-gray-500">미국 월드 챔피언십 지도 기반의 글로벌 트렌드 교육</p></div>
            <div className="bg-gray-50 p-5 rounded-xl"><p className="font-bold mb-1 text-sm">Elite Path</p><p className="text-xs text-gray-500">실전 대회와 진학 포트폴리오로 연결되는 엘리트 로드맵</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
