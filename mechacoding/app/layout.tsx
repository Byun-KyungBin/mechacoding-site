
import "./globals.css";

export const metadata = {
  title: "메카코딩학원 | 수원 로보틱스 코딩학원",
  description: "VEX Robotics 기반 프로젝트 수업 전문 학원",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header style={{padding:20,borderBottom:"1px solid #eee"}}>
          <a href="/">MECHACODING</a>
          <nav style={{display:"flex",gap:20}}>
            <a href="/">HOME</a>
            <a href="/programs">PROGRAMS</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
          </nav>
        </header>

        <main style={{paddingTop:80}}>
          {children}
        </main>

        <footer style={{background:"#111",color:"#fff",padding:40,marginTop:80}}>
          <p>메카코딩학원 © 2026</p>
        </footer>
      </body>
    </html>
  );
}
