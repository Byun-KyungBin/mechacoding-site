import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교육 커리큘럼 | 메카코딩학원",
  description: "유아부터 고등부까지, 로보틱스와 AI를 아우르는 맞춤형 프로그램을 확인하세요.",
};

export default function ProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">교육 프로그램</h1>
      <div className="space-y-6">
        <div className="border border-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Discovery (5~7세)</h2>
          <p className="text-gray-600">로보틱스와 코딩의 첫걸음을 즐거운 놀이와 직관적인 교구로 시작합니다.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Foundation & VEX IQ (초등부)</h2>
          <p className="text-gray-600">로봇 설계의 기초를 다지고 VEX IQ 세계 대회를 준비하며 논리적 사고력을 극대화합니다.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Advanced & VEX V5 (중고등부)</h2>
          <p className="text-gray-600">텍스트 코딩(Python, C++)과 고급 로보틱스 제어, AI 융합 프로젝트 및 진학 포트폴리오를 완성합니다.</p>
        </div>
      </div>
    </div>
  );
}
