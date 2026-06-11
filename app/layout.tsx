import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const siteTitle =
  "메카코딩학원 | 수원 로봇코딩·AI·VEX Robotics 전문교육";

const siteDescription =
  "5세~고등학생 대상 로봇코딩·AI·Python 교육. VEX Robotics 대회준비반 운영. 광교·호매실 캠퍼스.";

const siteUrl = "https://www.mechacoding.kr";

export const metadata: Metadata = {
  title: siteTitle,

  description: siteDescription,

  keywords: [
    "메카코딩학원",
    "수원코딩학원",
    "로봇코딩",
    "VEX Robotics",
    "VEX IQ",
    "VEX V5",
    "AI교육",
    "Python교육",
    "초등코딩",
    "중등코딩",
    "고등코딩",
    "광교코딩학원",
    "호매실코딩학원",
    "권선구코딩학원",
    "로보틱스",
    "코딩대회",
    "대회준비반",
  ],

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "메카코딩학원",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "메카코딩학원",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/images/og-image.png`],
  },

  verification: {
    google: "3qEYUIoNZEhr1uF-y-kP9cYK49gwqbSsHi7UQF1YFjA",
  },

  alternates: {
    canonical: siteUrl,
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
