import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT | 메카코딩학원",
  description: "메카코딩학원 수원 광교 캠퍼스 및 호매실 캠퍼스 상세 위치 안내 및 실시간 체험수업 전화 문의 채널.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Contact</h2>
        <p className="text-gray-500 text-sm sm:text-base">5세부터 고3까지, 메카코딩의 문은 항상 열려있습니다. 캠퍼스별 직통 상담 채널로 연결해 보세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gwanggyo */}
        <div className="border border-gray-100 rounded-2xl p-6 bg-white space-y-6">
          <div className="h-64 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
             [광교 에듀타운로 84 네이버 맵 매핑 구역]
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">광교 캠퍼스</h3>
              <a href="https://map.naver.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1">네이버 지도 보기 ➔</a>
            </div>
            <p className="text-sm text-gray-500 mb-4">수원시 영통구 에듀타운로 84, 3층</p>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs text-gray-400 font-medium">상담 및 체험 신청 직통 번호</span>
              <a href="tel:031-895-5774" className="text-red-500 font-bold text-lg hover:underline">031-895-5774</a>
            </div>
          </div>
        </div>

        {/* Homaesil */}
        <div className="border border-gray-100 rounded-2xl p-6 bg-white space-y-6">
          <div className="h-64 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
             [호매실 금곡로 196 네이버 맵 매핑 구역]
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">호매실 캠퍼스</h3>
              <a href="https://map.naver.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1">네이버 지도 보기 ➔</a>
            </div>
            <p className="text-sm text-gray-500 mb-4">수원시 권선구 금곡로196번길 61, 3층</p>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs text-gray-400 font-medium">상담 및 체험 신청 직통 번호</span>
              <a href="tel:031-292-2697" className="text-red-500 font-bold text-lg hover:underline">031-292-2697</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
