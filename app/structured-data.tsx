"use client";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MechaCoding Academy",
    alternateName: "메카코딩학원",
    url: "https://mechacoding.kr",
    logo: "https://mechacoding.kr/images/MechaCoding-logo-black.png",
    description: "수원 광교·호매실 로보틱스·소프트웨어·AI 교육 아카데미. VEX Robotics 전문. 5세부터 고3까지.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "에듀타운로 84, 3층",
        addressLocality: "영통구",
        addressRegion: "수원시",
        addressCountry: "KR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "금곡로196번길 61, 3층",
        addressLocality: "권선구",
        addressRegion: "수원시",
        addressCountry: "KR",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+82-31-895-5774",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["Korean"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+82-31-292-2697",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["Korean"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/mecha_coding/",
      "https://blog.naver.com/steamplus_suwon",
    ],
    founder: {
      "@type": "Person",
      name: "변경빈",
      jobTitle: "대표원장",
    },
    areaServed: {
      "@type": "City",
      name: "수원",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "교육 프로그램",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "로보틱스 · 코딩 입문",
            description: "5~7세 블록코딩과 기초 로봇 제작",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VEX IQ 대회 트레이닝",
            description: "초1~중3 VEX Robotics 대회 준비",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "소프트웨어 · AI",
            description: "Python, AI 활용, 데이터 분석",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
      }}
    />
  );
}
