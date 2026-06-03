import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
  description: "수원 광교·호매실 메카코딩학원. VEX Robotics, 소프트웨어, AI까지 연결되는 프로젝트 기반 교육. 5세부터 고3까지 단계별 맞춤 커리큘럼.",
  keywords: ["수원코딩학원", "광교코딩학원", "호매실코딩학원", "금곡동코딩학원", "로봇학원", "로보틱스학원", "AI교육", "AI학원", "VEX Robotics", "VEX IQ", "VEX V5"],
  alternates: {
    canonical: "https://mechacoding.kr",
  },
  openGraph: {
    type: "website",
    url: "https://mechacoding.kr",
    title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
    description: "5세부터 고3까지, 로보틱스·소프트웨어·AI를 연결하는 프로젝트 기반 교육. VEX Robotics 전문 아카데미.",
    siteName: "MechaCoding Academy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "MechaCoding Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
    description: "5세부터 고3까지, 로보틱스·소프트웨어·AI를 연결하는 프로젝트 기반 교육.",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 네이버 플레이스 및 검색 로봇 최적화용 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "메카코딩학원 (MechaCoding Academy)",
    "description": "수원 VEX Robotics, 소프트웨어, AI 프로젝트 중심 코딩 전문 교육기관",
    "url": "https://mechacoding.kr",
    "telephone": "031-292-2697",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "수원시",
      "addressRegion": "경기도",
      "streetAddress": "권선구 금곡로196번길 61, 3층 및 영통구 에듀타운로 84",
      "postalCode": "16624"
    },
    "sameAs": [
      "https://www.instagram.com/mecha_coding/",
      "https://blog.naver.com/steamplus_suwon"
    ]
  };

  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-black antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
