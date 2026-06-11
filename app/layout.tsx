import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "메카코딩학원 | 수원 로봇코딩학원",

  description:
    "수원 광교·호매실 로봇코딩학원. VEX Robotics·AI·Python 전문교육.",

  keywords: [
    "수원코딩학원",
    "수원로봇코딩학원",
    "광교코딩학원",
    "호매실코딩학원",
    "금곡동코딩학원",
    "권선구코딩학원",
    "로봇코딩",
    "로봇학원",
    "로보틱스",
    "VEX Robotics",
    "VEX IQ",
    "VEX V5",
    "AI교육",
    "Python교육",
    "초등코딩",
    "중등코딩",
    "고등코딩",
    "프로젝트기반학습"
  ],

  openGraph: {
    type: "website",
    url: "https://www.mechacoding.kr",

    title: "메카코딩학원 | 수원 로봇코딩학원",

    description:
      "초등·중등·고등 로봇코딩 교육, VEX Robotics 대회준비반, AI·Python 프로젝트 수업",

    siteName: "메카코딩학원",

    images: [
      {
        url: "https://www.mechacoding.kr/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "메카코딩학원 - 수원 로봇코딩학원"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title: "메카코딩학원 | 수원 로봇코딩학원",

    description:
      "초등·중등·고등 로봇코딩 교육, VEX Robotics 전문교육",

    images: ["https://www.mechacoding.kr/images/og-image.png"]
  },
  verification: {
    google: "3qEYUIoNZEhr1uF-y-kP9cYK49gwqbSsHi7UQF1YFjA",
  },
  alternates: {
    canonical: "https://www.mechacoding.kr"
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/public/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/public/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-black antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
