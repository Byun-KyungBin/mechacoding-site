export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Contact</h2>
        <p className="text-black/50 text-base sm:text-lg">5세부터 고3까지, 자녀에게 맞는 프로그램을 상담해 드립니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gwanggyo */}
        <div>
          <div className="h-64 lg:h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.270965216196!2d127.0474064!3d37.2887114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b205391b75d%3A0x8e3b6d5486881a36!2z66mU7Lm07L2U65Sp7ZWZ7JuQIOq0keq1kOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355902771!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">광교 캠퍼스</h3>
            <a href="https://map.naver.com/v5/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%97%90%EB%93%80%ED%83%80%EC%9A%B4%EB%A1%9C%2084" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 flex items-center gap-1 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              지도에서 열기
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-gray-600">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>수원시 영통구 에듀타운로 84, 세븐스퀘어 3층</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:031-895-5774" className="text-red-500 font-bold text-base hover:text-red-600">031-895-5774</a>
            </div>
          </div>
        </div>

        {/* Homaesil */}
        <div>
          <div className="h-64 lg:h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.904549570512!2d126.95192317658163!3d37.27369047211598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b439c89ce3ed7%3A0x7687bcfdef2cca39!2z66mU7Lm07L2U65Sp7ZWZ7JuQIO2YuOunpOyLpOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1779355952764!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">호매실 캠퍼스</h3>
            <a href="https://map.naver.com/v5/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%EA%B3%A1%EB%A1%96196%EB%B2%88%EA%B8%B8%2061" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 flex items-center gap-1 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              지도에서 열기
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-gray-600">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>수원시 권선구 금곡로196번길 61, 에스지프라자 3층</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:031-292-2697" className="text-red-500 font-bold text-base hover:text-red-600">031-292-2697</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">어떤 수업이 맞을지 모르겠다면?</h3>
        <p className="text-gray-500 mb-2 text-sm sm:text-base">상담을 통해 자녀의 나이, 경험, 목표에 맞는 프로그램을 안내해 드립니다.</p>
        <p className="text-gray-400 text-sm mb-8">5세부터 고3까지 모든 연령대의 학생을 위한 맞춤 프로그램이 준비되어 있습니다.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:031-895-5774" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <div className="text-left">
              <div className="text-xs text-white/60">광교 캠퍼스</div>
              <div className="text-base font-semibold">031-895-5774</div>
            </div>
          </a>
          <a href="tel:031-292-2697" className="inline-flex items-center gap-3 bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <div className="text-left">
              <div className="text-xs text-gray-500">호매실 캠퍼스</div>
              <div className="text-base font-semibold">031-292-2697</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
