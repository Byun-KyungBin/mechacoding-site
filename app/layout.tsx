import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "메카코딩학원 | 수원 로봇코딩·AI·VEX Robotics 전문교육",

  description:
    "5세~고등학생 대상 로봇코딩·AI·Python 교육. 광교·호매실 캠퍼스 운영.",

  keywords: [
    "메카코딩학원",
    "수원코딩학원",
    "수원로봇코딩학원",
    "광교코딩학원",
    "호매실코딩학원",
    "금곡동코딩학원",
    "권선구코딩학원",
    "VEX Robotics",
    "VEX IQ",
    "VEX V5",
    "AI교육",
    "Python교육",
    "초등코딩",
    "중등코딩",
    "고등코딩",
    "로보틱스",
    "로봇코딩",
    "대회준비반",
    "코딩대회",
    "프로젝트기반학습",
  ],

  openGraph: {
    title: "메카코딩학원 | 수원 로봇코딩·AI·VEX Robotics 전문교육",

    description:
      "5세~고등학생 대상 로봇코딩·AI·Python 교육. VEX Robotics 대회준비반 운영.",

    url: "https://www.mechacoding.kr",

    siteName: "메카코딩학원",

    images: [
      {
        url: "https://www.mechacoding.kr/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "메카코딩학원",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "메카코딩학원 | 수원 로봇코딩·AI·VEX Robotics 전문교육",

    description:
      "5세부터 고등학생까지. VEX Robotics, AI, Python, 프로젝트 기반 로봇코딩 교육.",

    images: ["https://www.mechacoding.kr/images/og-image.png"],
  },

  verification: {
    google: "3qEYUIoNZEhr1uF-y-kP9cYK49gwqbSsHi7UQF1YFjA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />

        <meta
          property="og:title"
          content="메카코딩학원 | 수원 로봇코딩·AI·VEX Robotics 전문교육"
        />
        <meta
          property="og:description"
          content="5세부터 고등학생까지. VEX Robotics, AI, Python, 프로젝트 기반 로봇코딩 교육. 광교·호매실 캠퍼스 운영, 전국대회 준비반 운영."
        />
        <meta
          property="og:image"
          content="https://www.mechacoding.kr/images/og-image.png"
        />
        <meta
          property="og:url"
          content="https://www.mechacoding.kr"
        />
        <meta property="og:type" content="website" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-black antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
