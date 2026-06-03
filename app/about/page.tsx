import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | 메카코딩학원",
  description: "메카코딩학원의 교육 철학과 교수진을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">메카코딩 소개</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        메카코딩학원은 단순한 주입식 코딩 교육을 넘어, 학생들이 스스로 문제를 발견하고 해결해 나가는 로보틱스 기반의 프로젝트 중심 교육을 지향합니다.
      </p>
    </div>
  );
}
