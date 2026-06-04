import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
  description: "수원 광교·호매실 메카코딩학원. VEX Robotics, 소프트웨어, AI까지 연결되는 프로젝트 기반 교육. 5세부터 고3까지 단계별 맞춤 커리큘럼.",
  keywords: ["수원코딩학원", "광교코딩학원", "호매실코딩학원", "금곡동코딩학원", "로봇학원", "로보틱스학원", "AI교육", "AI학원", "VEX Robotics", "VEX IQ", "VEX V5"],
  openGraph: {
    type: "website",
    url: "https://mechacoding.kr",
    title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
    description: "5세부터 고3까지, 로보틱스·소프트웨어·AI를 연결하는 프로젝트 기반 교육. VEX Robotics 전문 아카데미.",
    siteName: "MechaCoding Academy",
    images: [{ url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MechaCoding Academy - 수원 로보틱스·소프트웨어·AI 교육",
    description: "5세부터 고3까지, 로보틱스·소프트웨어·AI를 연결하는 프로젝트 기반 교육.",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-black antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
