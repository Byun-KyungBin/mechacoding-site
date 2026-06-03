import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "메카코딩학원 | 수원 광교 호매실 로보틱스 코딩학원",
  description: "수원 광교·호매실 VEX Robotics 전문 메카코딩학원. 5세부터 고3까지 단계별 맞춤 커리큘럼.",
  keywords: ["수원코딩학원", "광교코딩학원", "호매실코딩학원", "금곡동코딩학원", "로봇학원", "로보틱스학원", "VEX Robotics", "메카코딩학원"],
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
        url: "https://mechacoding.kr/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MechaCoding Academy",
      },
    ],
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-white text-black antialiased">
        <header id="mainHeader" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 flex items-center justify-between px-6" style={{ height: "80px" }}>
          <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
            <Link href="/">
              <img src="/images/MechaCoding-logo-black.png" alt="MechaCoding Academy" class="h-[72px] w-auto" />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            <Link href="/" className="text-sm font-medium text-black">HOME</Link>
            <Link href="/programs" className="text-sm font-medium text-black/60 hover:text-black">PROGRAMS</Link>
            <Link href="/about" className="text-sm font-medium text-black/60 hover:text-black">ABOUT</Link>
            <Link href="/contact" className="text-sm font-medium text-black/60 hover:text-black">CONTACT</Link>
          </nav>
        </header>

        <main id="mainContent" className="pt-[80px]">
          {children}
        </main>

        <footer className="mt-auto bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              <div>
                <img src="/images/MechaCoding-logo-white.png" alt="MechaCoding Academy" className="h-16 w-auto mb-4 filter brightness-0 invert" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  성과와 실력으로 증명하는<br />로보틱스·소프트웨어·AI 전문 아카데미
                </p>
                <div className="flex gap-3 mt-6">
                  <a href="https://www.instagram.com/mecha_coding/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://blog.naver.com/steamplus_suwon" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Menu</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">오시는 길</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-medium mb-1">광교 캠퍼스</p>
                    <p className="text-gray-400 text-sm">수원시 영통구 에듀타운로 84, 3층</p>
                    <a href="tel:031-895-5774" className="text-red-500 font-bold hover:text-red-400 transition-colors">031-895-5774</a>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">호매실 캠퍼스</p>
                    <p className="text-gray-400 text-sm">수원시 권선구 금곡로196번길 61, 3층</p>
                    <a href="tel:031-292-2697" className="text-red-500 font-bold hover:text-red-400 transition-colors">031-292-2697</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© 2026 MechaCoding Academy. All rights reserved.</p>
              <p className="text-gray-600 text-sm">메카코딩학원 · 로보틱스 & 소프트웨어 & AI 교육</p>
            </div>
          </div>
        </footer>

        <a href="tel:031-292-2697" className="fixed bottom-6 right-6 z-40 lg:hidden bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
