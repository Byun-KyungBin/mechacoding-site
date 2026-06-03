import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
    images: [{ url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-white text-black antialiased flex flex-col min-h-screen">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: "80px" }}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <img src="/images/MechaCoding-logo-black.png" alt="MechaCoding Academy" className="h-[72px] w-auto" />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8 ml-auto">
              <Link href="/" className="text-sm font-medium text-black/60 hover:text-black">HOME</Link>
              <Link href="/programs" className="text-sm font-medium text-black/60 hover:text-black">PROGRAMS</Link>
              <Link href="/about" className="text-sm font-medium text-black/60 hover:text-black">ABOUT</Link>
              <Link href="/contact" className="text-sm font-medium text-black/60 hover:text-black">CONTACT</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-[80px] flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] text-white mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              <div>
                <img src="/images/MechaCoding-logo-white.png" alt="MechaCoding Academy" className="h-16 w-auto mb-4 filter brightness-0 invert" />
                <p className="text-gray-400 text-sm leading-relaxed">성과와 실력으로 증명하는<br />로보틱스·소프트웨어·AI 전문 아카데미</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Menu</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">오시는 길</h4>
                <div className="space-y-4 text-sm text-gray-400">
                  <div>
                    <p className="text-white font-medium">광교 캠퍼스</p>
                    <p>수원시 영통구 에듀타운로 84, 3층</p>
                    <a href="tel:031-895-5774" className="text-red-500 font-bold">031-895-5774</a>
                  </div>
                  <div>
                    <p className="text-white font-medium">호매실 캠퍼스</p>
                    <p>수원시 권선구 금곡로196번길 61, 3층</p>
                    <a href="tel:031-292-2697" className="text-red-500 font-bold">031-292-2697</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left">
              <p className="text-gray-500 text-sm">© 2026 MechaCoding Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
