import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 및 오시는 길 | 메카코딩학원",
  description: "체험수업 신청 및 캠퍼스 위치 정보를 안내해 드립니다.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">상담 및 문의</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">광교 캠퍼스</h2>
          <p className="text-gray-600 mb-2">주소: 수원시 영통구 에듀타운로 84, 3층</p>
          <p className="text-gray-900 font-semibold">문의: 031-895-5774</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">호매실 캠퍼스</h2>
          <p className="text-gray-600 mb-2">주소: 수원시 권선구 금곡로196번길 61, 3층</p>
          <p className="text-gray-900 font-semibold">문의: 031-292-2697</p>
        </div>
      </div>
    </div>
  );
}
