import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PROGRAMS | 메카코딩학원",
  description: "5세 유아 입문 단계부터 고등부 국제 대회 준비 및 AI 포트폴리오까지 이어지는 7단계 검증 커리큘럼.",
};

const stages = [
  { no: "1", age: "5~7세", name: "DISCOVERY", desc: "로보틱스 · 코딩 입문", details: ["블록코딩", "기초 로봇 제작", "논리적 사고력 확립"], target: "만들기의 즐거움을 다각도로 경험" },
  { no: "2", age: "초1~초3", name: "FOUNDATION", desc: "로보틱스 · 코딩 기초", details: ["로봇 구조 설계", "센서 인터페이스 활용", "기초 절차적 프로그래밍"], target: "스스로 기획하고 끝까지 완성하는 경험" },
  { no: "3", age: "초1~중3", name: "VEX IQ COMPETITION", desc: "VEX IQ 대회 트레이닝", details: ["엔지니어링 노트 작성", "하드웨어 메커니즘 최적화", "팀 기반 협업 시스템"], target: "국내외 대회 수상을 통한 성취감 확보" },
  { no: "4", age: "중1~고3", name: "VEX V5 COMPETITION", desc: "VEX V5 엘리트 클래스", details: ["고급 기구 설계 및 CAD", "텍스트 프로그래밍 (C++)", "실전 시스템 엔지니어링"], target: "국제 규격의 하드웨어 프로젝트 지배력 확보" },
  { no: "5", age: "초5~고3", name: "SOFTWARE & AI", desc: "소프트웨어 · AI 융합", details: ["Python 문법 심화", "AI 모델 및 프롬프트 제어", "실전 데이터 웹 분석"], target: "텍스트 코딩 및 미래 기술 제어력 극대화" },
  { no: "6", age: "초5~고3", name: "MAKER & INNOVATION", desc: "메이커 · 혁신 프로젝트", details: ["Arduino 스마트 제어", "IoT 하드웨어 연동", "3D Printing 설계 제작"], target: "아이디어를 실제 작동하는 기기로 구현" },
  { no: "7", age: "중1~고3", name: "FUTURE READY", desc: "진학 · 포트폴리오 마감", details: ["고급 알고리즘 문제 해결", "개인 기술 포트폴리오 정밀 구축", "국제학교 및 해외대 진학 설계"], target: "진학과 미래 커리어를 위한 포트폴리오 완성" }
];

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
        <p className="text-gray-500">아이의 연령과 경험에 맞는 최적의 플랜으로 자연스럽게 결합되는 7단계 정밀 로드맵</p>
      </div>

      <div className="space-y-6">
        {stages.map((stage) => (
          <div key={stage.no} className="border border-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white hover:border-black transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-black uppercase tracking-wider">Stage {stage.no}</span>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-gray-500 font-medium bg-gray-50 px-2 py-0.5 rounded-full">{stage.age}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stage.name}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">{stage.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                {stage.details.map((d, i) => <span key={i}>• {d}</span>)}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl min-w-[240px] text-left md:text-right">
              <p className="text-xs text-gray-400 uppercase font-medium mb-1">최종 도달 목표</p>
              <p className="text-sm font-bold text-gray-800">{stage.target}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-8 bg-black text-white font-medium rounded-full text-sm">
          체험수업 및 레벨진단 신청하기
        </Link>
      </div>
    </div>
  );
}
