"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────
interface SlideData {
  label: string;
  title: string;
  subtitle: string;
  image: string;
}

interface ProgramCard {
  image: string;
  level: string;
  levelColor: string;
  age: string;
  stage: string;
  title: string;
  desc: string;
  linkColor: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface PathStep {
  age: string;
  title: string;
  desc: string;
}

interface TrialStep {
  title: string;
  desc: string;
}

interface Campus {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  naverUrl: string;
}

// ─── Data ────────────────────────────────────────────────
const slides: SlideData[] = [
  {
    label: "Robotics · Software · AI",
    title: "생각을 현실로 만드는 힘",
    subtitle: "학생이 직접 만들고, 실험하고, 문제를 해결하며 성장하는 프로젝트 기반 교육",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
  },
  {
    label: "Project Based Learning",
    title: "설계부터 결과까지",
    subtitle: "학생이 문제를 정의하고, 기술로 해결하며, 결과를 설명하는 힘을 기릅니다",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop",
  },
  {
    label: "VEX Robotics Competition",
    title: "세계로 뻗어나가는\n로봇 경쟁력",
    subtitle: "VEX World Championship 진출을 향한 체계적인 트레이닝",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=1920&h=1080&fit=crop",
  },
  {
    label: "Software & AI",
    title: "코드로 만드는\n미래 기술",
    subtitle: "Python, C++부터 AI 융합까지 실전 중심 소프트웨어 교육",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
  },
  {
    label: "Portfolio & Admissions",
    title: "결과로 증명하는\n포트폴리오",
    subtitle: "국제학교·해외대학 진학을 위한 차별화된 프로젝트 경험",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
  },
];

const programCards: ProgramCard[] = [
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop",
    level: "입문",
    levelColor: "bg-green-500",
    age: "5~7세",
    stage: "DISCOVERY",
    title: "로보틱스 · 코딩 입문",
    desc: "블록코딩과 기초 로봇 제작으로 만들기의 즐거움을 경험합니다.",
    linkColor: "text-green-400",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=800&fit=crop",
    level: "기초",
    levelColor: "bg-blue-600",
    age: "초1~초3",
    stage: "FOUNDATION",
    title: "로보틱스 · 코딩 기초",
    desc: "로봇 설계와 센서 활용, 기초 프로그래밍으로 스스로 만들고 완성하는 경험을 쌓습니다.",
    linkColor: "text-blue-400",
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=800&fit=crop",
    level: "대회",
    levelColor: "bg-red-600",
    age: "초1~중3",
    stage: "VEX IQ COMPETITION",
    title: "VEX IQ 대회반",
    desc: "VEX IQ로 협업과 문제해결 능력을 키우고 대회에 참가합니다.",
    linkColor: "text-red-400",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop",
    level: "고급",
    levelColor: "bg-purple-600",
    age: "초5~고3",
    stage: "SOFTWARE & AI",
    title: "소프트웨어 · AI",
    desc: "Python, AI 활용, 데이터 분석으로 소프트웨어 역량을 강화합니다.",
    linkColor: "text-purple-400",
  },
];

const pathSteps: PathStep[] = [
  { age: "5~7세", title: "Discovery", desc: "로보틱스 · 코딩 입문" },
  { age: "초1~초3", title: "Foundation", desc: "로보틱스 · 코딩 기초" },
  { age: "초4~초6", title: "Foundation + VEX IQ", desc: "기초 심화 + 대회 준비" },
  { age: "중1~중3", title: "VEX IQ + Software + AI", desc: "대회 심화 + 소프트웨어 + AI 융합" },
  { age: "고1~고3", title: "VEX V5 + Portfolio + AI", desc: "고급 대회 + 포트폴리오 + 진학 준비" },
];

const trialSteps: TrialStep[] = [
  { title: "체험수업", desc: "실제 수업과 동일한 환경에서 1시간 동안 체험합니다." },
  { title: "현재 수준 진단", desc: "아이의 현재 기술적 역량과 이해도를 객관적으로 평가합니다." },
  { title: "학습 성향 확인", desc: "아이에게 가장 적합한 학습 방식과 속도를 파악합니다." },
  { title: "교육과정 추천", desc: "진단 결과를 바탕으로 맞춤 커리큘럼을 제안합니다." },
  { title: "반 배정", desc: "가장 적합한 반에 배정하여 정규 수업을 시작합니다." },
];

const faqItems: FaqItem[] = [
  {
    question: "처음인데 따라갈 수 있나요?",
    answer: "네, 체험수업을 통해 아이의 현재 수준과 학습 성향을 진단한 후, 가장 적합한 단계의 반을 추천해 드립니다. 경험이 없는 학생도 기초부터 차근차근 배울 수 있도록 커리큘럼이 구성되어 있습니다.",
  },
  {
    question: "체험수업은 어떻게 진행되나요?",
    answer: "실제 수업과 동일한 환경에서 1시간 동안 체험합니다. 단순 견학이 아닌, 아이가 직접 로봇을 조립하거나 코딩을 해보는 실전 체험입니다. 수업 후 레벨 진단과 학습 성향 분석 결과를 학부모님께 안내해 드립니다.",
  },
  {
    question: "대회는 꼭 참가해야 하나요?",
    answer: "아닙니다. 대회 참가는 학생과 학부모의 선택입니다. 대회반에 속하지 않은 학생도 프로젝트 기반 학습을 통해 충분한 성장을 이룰 수 있습니다. 다만 대회 경험은 협업력, 문제해결력, 포트폴리오 구축에 큰 도움이 됩니다.",
  },
  {
    question: "로봇 외에도 배우는 것이 있나요?",
    answer: "네, 메카코딩은 로보틱스를 중심으로 소프트웨어(Python, C++)와 AI까지 연결되는 통합 교육을 제공합니다. 학생의 연령과 목표에 따라 Arduino·IoT, 3D Printing, 데이터 분석, 알고리즘 심화 등 다양한 분야를 학습합니다.",
  },
  {
    question: "AI 수업도 진행하나요?",
    answer: "네, 초등 고학년부터 고등학생까지 단계별 AI 융합 코딩 수업을 운영합니다. AI 도구 활용법부터 머신러닝 기초, 실제 AI 프로젝트 기획 및 개발까지 학습합니다.",
  },
  {
    question: "집에서 과제가 있나요?",
    answer: "수업 내용을 복습하고 확장하는 가벼운 과제가 있습니다. 다만 메카코딩은 수업 시간 내에 핵심 활동을 완료하는 것을 지향하며, 과도한 과제 부담은 지양합니다. 학생의 흥미와 자발적 탐구를 우선시합니다.",
  },
  {
    question: "수업료는 어떻게 되나요?",
    answer: "과정과 주당 수업 횟수에 따라 차이가 있습니다. 정확한 수업료는 체험수업 시 상담을 통해 안내해 드리며, 학부모님의 상황에 맞는 최적의 플랜을 제안해 드립니다. 전화 문의도 환영합니다.",
  },
];

const campuses: Campus[] = [
  {
    name: "광교 캠퍼스",
    address: "수원시 영통구 에듀타운로 84, 3층",
    phone: "031-895-5774",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.270965216196!2d127.0474064!3d37.2887114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b205391b75d%3A0x8e3b6d5486881a36!2z66mU7Lm07L2U65Sp7ZWZ7JuQIOq0keq1kOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355902771!5m2!1sko!2skr",
    naverUrl: "https://map.naver.com/v5/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%97%90%EB%93%80%ED%83%80%EC%9A%B4%EB%A1%9C%2084",
  },
  {
    name: "호매실 캠퍼스",
    address: "수원시 권선구 금곡로196번길 61, 3층",
    phone: "031-292-2697",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.904549570512!2d126.95192317658163!3d37.27369047211598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b439c89ce3ed7%3A0x7687bcfdef2cca39!2z66mU7Lm07L2U65Sp7ZWZ7JuQIO2YuOunpOyLpOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355952764!5m2!1sko!2skr",
    naverUrl: "https://map.naver.com/v5/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%EA%B3%A1%EB%A1%96196%EB%B2%88%EA%B8%B8%2061",
  },
];

const careerItems = [
  "대한민국 공군(ROK Air Force) 정보통신학교 교관 전역 (ICT 교육 전담)",
  "Chadwick International (채드윅 송도국제학교) VEX Robotics Head Coach",
  "Dwight School Seoul (드와이트 외국인학교) VEX Robotics Head Coach",
  "MICA (Mastery Integrity Creativity Academy) VEX Robotics Head Coach",
  "KAIST VEX Robotics Camp 지도 강사 및 대표 코치",
];

const achievementItems = [
  "국내 최초 4년 연속 국가대표 선발 기록 수립",
  "2023 - 2025 VEX Robotics World Championship (Dallas, Texas) 출전 및 지도",
  "2026 VEX Robotics World Championship (St. Louis, Missouri) 출전 및 지도",
  "VEX Robotics 한국 국가대표 선발전 다수 입상팀 배출",
];

const curriculumItems = [
  "VEX IQ / V5 하드웨어 메커니즘 설계 및 시스템 엔지니어링 전문가",
  "AI 융합 차세대 코딩 커리큘럼 [Vibe Coding] 개발 총괄",
  "5세부터 고3까지 이어지는 체계적인 PBL(Project-Based Learning) 로드맵 구축",
];

// ─── SVG Icons ───────────────────────────────────────────
const ArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ChevronRight = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronDown = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const NaverIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const PuzzleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const TrendUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

// ─── Main Page Component ─────────────────────────────────
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Hero auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      {/* ─── Header ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 hover:bg-black/5 rounded-lg"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image
              src="/images/MechaCoding-logo-black.png"
              alt="MechaCoding Academy"
              width={200}
              height={72}
              className="h-[72px] w-auto"
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            {[
              { id: "hero", label: "HOME" },
              { id: "programs", label: "PROGRAMS" },
              { id: "about", label: "ABOUT" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-black active" : "text-black/60 hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="lg:hidden w-10" />
        </div>
      </header>

      {/* ─── Mobile Menu ────────────────────────────────── */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <Image
              src="/images/MechaCoding-logo-black.png"
              alt="MechaCoding Academy"
              width={160}
              height={64}
              className="h-16 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 hover:bg-black/5 rounded-lg"
              aria-label="메뉴 닫기"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {[
              { id: "hero", label: "HOME" },
              { id: "programs", label: "PROGRAMS" },
              { id: "about", label: "ABOUT" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="pt-20">
        {/* ─── Hero Section ─────────────────────────────── */}
        <section id="hero" className="relative h-[calc(100vh-80px)] overflow-hidden bg-black">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('${slide.image}')`,
              }}
              aria-hidden={index !== currentSlide}
            >
              <div className="slide-inner">
                <div className="slide-text-content slide-content">
                  <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">{slide.label}</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed px-4">
                    {slide.subtitle}
                  </p>
                  {index === 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/40">
                      <span>초1~고3 맞춤 교육</span>
                      <span className="hidden sm:inline">·</span>
                      <span>VEX Robotics · Python · Arduino · AI</span>
                      <span className="hidden sm:inline">·</span>
                      <span>체험수업 및 레벨진단 운영</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="slide-buttons">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hero-cta-btn hero-cta-btn--white"
                  type="button"
                >
                  체험수업 및 레벨진단 신청
                  <ArrowRight />
                </button>
              </div>
            </div>
          ))}

          {/* Slide dots */}
          <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </section>

        {/* ─── Why Section ────────────────────────────────── */}
        <section id="why" className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Why MechaCoding</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              우리가 가르치고 싶은 것은<br className="hidden sm:inline" />로봇이 아닙니다
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">
              중요한 것은 로봇 자체가 아닙니다.
              <br className="hidden sm:inline" />
              문제를 발견하고, 해결책을 고민하고, 직접 만들고, 실패를 개선하며, 끝까지 완성하는 경험입니다.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              메카코딩은 로보틱스, 소프트웨어, AI를 통해 학생이 스스로 생각하고 성장하는 힘을 기르는 프로젝트 기반 교육을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <LightbulbIcon />, title: "문제를 발견하는 힘", desc: "주어진 상황에서 문제를 정의하고, 해결 방향을 스스로 설정합니다." },
              { icon: <PuzzleIcon />, title: "해결책을 만드는 힘", desc: "설계부터 제작, 테스트, 개선까지 전 과정을 경험하며 완성도를 높입니다." },
              { icon: <TrendUpIcon />, title: "끝까지 완성하는 힘", desc: "실패를 학습의 기회로 삼고, 지속적으로 자신의 결과를 개선합니다." },
            ].map((item, i) => (
              <div key={i} className="why-card text-center">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Programs Preview ───────────────────────────── */}
        <section id="programs" className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
            <p className="text-black/50 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              아이의 연령과 경험에 맞는 단계로 자연스럽게 성장하는 7단계 로드맵
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programCards.map((card, i) => (
              <div key={i} className="course-card aspect-[3/4]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`level-badge ${card.levelColor} text-white`}>{card.level}</div>
                <div className="age-badge">{card.age}</div>
                <div className="course-overlay" />
                <div className="course-info text-white">
                  <p className="text-xs text-white/60 mb-1">{card.stage}</p>
                  <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                  <div className="course-desc">
                    <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                    <button
                      onClick={() => scrollToSection("programs-detail")}
                      className={`mt-3 ${card.linkColor} text-sm font-medium flex items-center gap-1`}
                    >
                      자세히 보기 <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollToSection("programs-detail")} className="hero-cta-btn hero-cta-btn--black" type="button">
              전체 커리큘럼 보기
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ─── Recommended Path ────────────────────────────── */}
        <div className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Recommended Path</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                내 아이는 어떤 과정을<br className="hidden sm:inline" />선택하면 될까요?
              </h2>
            </div>
            <div className="relative pl-4">
              {pathSteps.map((step, i) => (
                <div key={i} className="path-card">
                  {i < pathSteps.length - 1 && <div className="path-connector" />}
                  <span className="path-age">{step.age}</span>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-6 text-sm">아이의 현재 상황에 맞는 최적의 경로를 상담해 드립니다</p>
              <button onClick={() => scrollToSection("contact")} className="hero-cta-btn hero-cta-btn--black" type="button">
                맞춤 과정 상담하기
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Trial Class ────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Trial Class</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                체험수업 및<br />레벨진단
              </h2>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
                단순 견학이 아닙니다. 아이의 실제 수준과 학습 성향을 파악하는 1:1 진단 과정입니다.
              </p>
              <div className="space-y-0">
                {trialSteps.map((step, i) => (
                  <div key={i} className="trial-step">
                    <h4 className="font-bold text-base mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button onClick={() => scrollToSection("contact")} className="hero-cta-btn hero-cta-btn--black" type="button">
                  체험수업 및 레벨진단 신청
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop"
                alt="체험수업"
                width={800}
                height={1000}
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────── */}
        <div className="bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">자주 묻는 질문</h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((item, i) => (
                <div key={i} className="faq-item">
                  <div
                    className="faq-question flex items-center justify-between py-5"
                    onClick={() => toggleFaq(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium text-base">{item.question}</span>
                    <ChevronDown className={`faq-icon w-5 h-5 text-gray-400 flex-shrink-0 ml-4 ${openFaq === i ? "open" : ""}`} />
                  </div>
                  <div className={`faq-answer text-gray-500 text-sm leading-relaxed ${openFaq === i ? "open" : ""}`}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Bottom CTA Banner ──────────────────────────── */}
        <div className="cta-banner">
          <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center">
            <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-4">Get Started</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              아이의 첫 걸음을<br className="hidden sm:inline" />메카코딩과 함께하세요
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto px-4">
              체험수업으로 아이의 가능성을 확인해 보세요.
              <br className="hidden sm:inline" />
              광교 · 호매실 두 캠퍼스에서 상담을 기다리고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollToSection("contact")} className="hero-cta-btn hero-cta-btn--white w-full sm:w-auto" type="button">
                체험수업 및 레벨진단 신청
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ─── About Section ──────────────────────────────── */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          {/* Philosophy */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-4">Philosophy</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              우리가 진짜 가르치고 싶은 것은<br className="hidden sm:inline" />로봇이 아닙니다
            </h2>
            <div className="text-base sm:text-lg text-gray-500 leading-relaxed space-y-5 sm:space-y-6">
              <p>
                국제학교에서 가르치며 느낀 것은,
                <br className="hidden sm:inline" />
                수업의 질은 학교 이름이 아니라 교육 방식이 결정한다는 사실이었습니다.
              </p>
              <p>메카코딩은 그 경험을 수원의 학생들에게 열어주고 싶어서 시작했습니다.</p>
              <p className="text-black font-medium text-lg sm:text-xl">
                문제의 원인을 찾고,
                <br className="hidden sm:inline" />
                해결책을 직접 만들어내는 힘입니다.
              </p>
              <p>이 능력은 로보틱스뿐 아니라 인생 전체에서 필요한 역량이라고 믿습니다.</p>
            </div>
          </div>

          {/* Director Profile */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <Image
                  src="/images/director.png"
                  alt="변경빈 대표원장"
                  width={600}
                  height={600}
                  className="director-photo"
                />
              </div>
              <div>
                <p className="text-base text-gray-400 mb-2">MechaCoding Academy Director</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">변경빈 대표원장</h3>
                <p className="text-lg text-gray-500 mb-2">Byun Kyung-bin</p>
                <p className="text-base text-gray-400">메카코딩학원 원장 / 로보틱스 부문 대표 코치</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">Academic & International Leadership</h4>
                <div className="space-y-0">
                  {careerItems.map((item, i) => (
                    <div key={i} className="career-item py-4">
                      <p className="text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">World-Class Achievement</h4>
                <div className="space-y-0">
                  {achievementItems.map((item, i) => (
                    <div key={i} className="career-item py-4">
                      <p className="text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">Advanced Curriculum</h4>
                <div className="space-y-0">
                  {curriculumItems.map((item, i) => (
                    <div key={i} className={`career-item py-4 ${i === curriculumItems.length - 1 ? "border-b-0" : ""}`}>
                      <p className="text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">Philosophy</h4>
                <div className="space-y-4">
                  {[
                    { title: "Standard-Centric", desc: "공군 교관 출신의 엄격한 기준과 체계적인 관리로 학습 성취도를 보장합니다." },
                    { title: "Global Excellence", desc: "미국 현지 월드 챔피언십 지도 경험을 바탕으로 글로벌 기술 트렌드를 교육에 즉시 반영합니다." },
                    { title: "Elite Path", desc: "단순 취미를 넘어 실전 대회와 포트폴리오로 연결되는 엘리트 로보틱스 교육을 지향합니다." },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-lg">
                      <p className="text-base font-bold text-gray-900 mb-2">{item.title}</p>
                      <p className="text-base text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Programs Detail ─────────────────────────────── */}
        <section id="programs-detail" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-black/40 uppercase tracking-[0.3em] mb-3">Programs</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">학생 성장 단계별 커리큘럼</h2>
            <p className="text-black/50 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              아이의 연령과 경험에 맞는 단계로 자연스럽게 성장하는 7단계 로드맵
            </p>
          </div>

          {[
            {
              stage: "Stage 1",
              color: "text-green-600",
              age: "5~7세",
              title: "DISCOVERY",
              subtitle: "로보틱스 · 코딩 입문",
              items: ["블록코딩", "기초 로봇 제작", "논리적 사고", "문제해결 놀이"],
              goal: "만들기의 즐거움을 경험",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              checkColor: "text-green-500",
              reverse: false,
            },
            {
              stage: "Stage 2",
              color: "text-blue-600",
              age: "초1~초3",
              title: "FOUNDATION",
              subtitle: "로보틱스 · 코딩 기초",
              items: ["로봇 설계", "센서 활용", "기초 프로그래밍", "프로젝트 제작"],
              goal: "스스로 만들고 완성하는 경험",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
              checkColor: "text-blue-500",
              reverse: true,
            },
            {
              stage: "Stage 3",
              color: "text-red-600",
              age: "초1~중3",
              title: "VEX IQ COMPETITION",
              subtitle: "VEX IQ 대회 트레이닝",
              items: ["엔지니어링 노트", "로봇 설계", "팀 프로젝트", "대회 참가"],
              goal: "협업과 문제해결 능력 향상",
              image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
              checkColor: "text-red-500",
              reverse: false,
            },
            {
              stage: "Stage 4",
              color: "text-red-700",
              age: "중1~고3",
              title: "VEX V5 COMPETITION",
              subtitle: "VEX V5 대회 트레이닝",
              items: ["기구 설계", "CAD", "프로그래밍 (C++)", "대회 참가"],
              goal: "실제 엔지니어링 경험",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
              checkColor: "text-red-600",
              reverse: true,
            },
            {
              stage: "Stage 5",
              color: "text-purple-600",
              age: "초5~고3",
              title: "SOFTWARE & AI",
              subtitle: "소프트웨어 · AI 융합",
              items: ["Python", "AI 활용", "데이터 분석", "자동화 프로젝트"],
              goal: "소프트웨어 역량 강화",
              image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
              checkColor: "text-purple-500",
              reverse: false,
            },
            {
              stage: "Stage 6",
              color: "text-orange-600",
              age: "초5~고3",
              title: "MAKER & INNOVATION",
              subtitle: "메이커 · 혁신 프로젝트",
              items: ["Arduino", "IoT", "3D Printing", "센서 제어"],
              goal: "아이디어를 현실로 구현",
              image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
              checkColor: "text-orange-500",
              reverse: true,
            },
            {
              stage: "Stage 7",
              color: "text-indigo-600",
              age: "중1~고3",
              title: "FUTURE READY",
              subtitle: "진학 · 미래 준비",
              items: ["알고리즘 심화", "포트폴리오 개발", "입시 준비", "AI 융합 프로젝트"],
              goal: "진학과 미래 준비",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
              checkColor: "text-indigo-500",
              reverse: false,
            },
          ].map((program, i) => (
            <div key={i} className="stage-card bg-white rounded-2xl overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`h-56 sm:h-64 lg:h-auto ${program.reverse ? "order-1 lg:order-2" : ""}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${program.reverse ? "order-2 lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${program.color}`}>{program.stage}</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{program.age}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{program.title}</h3>
                  <p className="text-gray-500 mb-6">{program.subtitle}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {program.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckIcon className={`w-4 h-4 ${program.checkColor} mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900">
                      목표: <span className="text-gray-500 font-normal">{program.goal}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">아이에게 맞는 단계가 궁금하시다면 체험수업에서 확인해 보세요</p>
            <button onClick={() => scrollToSection("contact")} className="hero-cta-btn hero-cta-btn--black" type="button">
              체험수업 및 레벨진단 신청
              <ArrowRight />
            </button>
          </div>
        </section>

        {/* ─── Contact Section ────────────────────────────── */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Contact</h2>
            <p className="text-black/50 text-base sm:text-lg">5세부터 고3까지, 자녀에게 맞는 프로그램을 상담해 드립니다</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campuses.map((campus, i) => (
              <div key={i}>
                <div className="h-64 lg:h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src={campus.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${campus.name} 지도`}
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{campus.name}</h3>
                  <a
                    href={campus.naverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    <ExternalLinkIcon /> 지도에서 열기
                  </a>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-600">
                    <LocationIcon className="mt-0.5 flex-shrink-0" />
                    <span>{campus.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="text-gray-600 flex-shrink-0" />
                    <a href={`tel:${campus.phone}`} className="text-red-500 font-bold text-base hover:text-red-600">
                      {campus.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">어떤 수업이 맞을지 모르겠다면?</h3>
            <p className="text-gray-500 mb-2 text-sm sm:text-base">상담을 통해 자녀의 나이, 경험, 목표에 맞는 프로그램을 안내해 드립니다.</p>
            <p className="text-gray-400 text-sm mb-8">5세부터 고3까지 모든 연령대의 학생을 위한 맞춤 프로그램이 준비되어 있습니다.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:031-895-5774"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
              >
                <PhoneIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-white/60">광교 캠퍼스</div>
                  <div className="text-base font-semibold">031-895-5774</div>
                </div>
              </a>
              <a
                href="tel:031-292-2697"
                className="inline-flex items-center gap-3 bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
              >
                <PhoneIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">호매실 캠퍼스</div>
                  <div className="text-base font-semibold">031-292-2697</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─────────────────────────────────────── */}
      <footer className="footer-dark mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <Image
                src="/images/MechaCoding-logo-white.png"
                alt="MechaCoding Academy"
                width={200}
                height={64}
                className="h-16 w-auto logo-white"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                성과와 실력으로 증명하는<br />로보틱스·소프트웨어·AI 전문 아카데미
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.instagram.com/mecha_coding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://blog.naver.com/steamplus_suwon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 transition-colors"
                  aria-label="Naver Blog"
                >
                  <NaverIcon />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Menu</h4>
              <ul className="space-y-3">
                {[
                  { id: "hero", label: "Home" },
                  { id: "programs", label: "Programs" },
                  { id: "about", label: "About" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">오시는 길</h4>
              <div className="space-y-4">
                {campuses.map((campus, i) => (
                  <div key={i}>
                    <p className="text-white font-medium mb-1">{campus.name}</p>
                    <p className="text-gray-400 text-sm">{campus.address}</p>
                    <a href={`tel:${campus.phone}`} className="text-red-500 font-bold hover:text-red-400 transition-colors">
                      {campus.phone}
                    </a>
                  </div>
