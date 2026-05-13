export default function Print() {
  const P = {
    bg: "#F5F3EE",
    bgAlt: "#EEF0EB",
    dark: "#1A3530",
    gold: "#C9A96E",
    sage: "#2D6B5C",
    muted: "#5A7A72",
    cream: "#FAFAF6",
  };

  return (
    <div className="min-h-screen font-main" style={{ backgroundColor: P.bg }}>

      {/* Header */}
      <div className="text-center py-10 px-6 no-print">
        <p className="font-display italic text-sm tracking-widest mb-2" style={{ color: P.gold }}>
          Макеты для печати
        </p>
        <h1 className="font-main font-medium tracking-[0.2em] text-2xl uppercase mb-6" style={{ color: P.dark }}>
          Полиграфия студии
        </h1>
        <button
          onClick={() => window.print()}
          className="px-8 py-3 font-main font-medium tracking-[0.12em] text-sm uppercase transition-all hover:opacity-80"
          style={{ backgroundColor: P.dark, color: P.cream }}
        >
          Распечатать все
        </button>
        <p className="font-display italic text-xs mt-3" style={{ color: P.muted }}>
          Откроется диалог печати браузера
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-16">

        {/* Вывеска */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: P.gold }}>
            01 — Вывеска (горизонтальная)
          </p>
          <div style={{ backgroundColor: P.cream, border: `1px solid #C8D8D0`, padding: "32px 40px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" width="100%">
              <text x="40" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill={P.dark}>I</text>
              <text x="98" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill={P.gold} opacity="0.92">E</text>
              <line x1="195" y1="30" x2="195" y2="170" stroke={P.gold} strokeWidth="0.8" opacity="0.4"/>
              <text x="218" y="82" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="46" fontWeight="300" fill={P.gold} letterSpacing="4">Nail Studio</text>
              <text x="220" y="124" fontFamily="Montserrat, Arial, sans-serif" fontSize="22" fontWeight="500" fill={P.dark} letterSpacing="9">EFIMOVA</text>
              <text x="220" y="155" fontFamily="Montserrat, Arial, sans-serif" fontSize="22" fontWeight="500" fill={P.dark} letterSpacing="9">IRINA</text>
            </svg>
          </div>
        </div>

        {/* Визитка */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: P.gold }}>
            02 — Визитка (90×50 мм)
          </p>
          <div className="flex gap-6 flex-col sm:flex-row">
            {/* Лицевая сторона */}
            <div className="flex-1" style={{ backgroundColor: P.cream, border: `1px solid #C8D8D0`, padding: "24px 28px" }}>
              <p className="font-display italic text-xs mb-3 no-print" style={{ color: P.muted }}>Лицевая сторона</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%">
                <rect x="14" y="14" width="512" height="272" fill="none" stroke={P.gold} strokeWidth="0.7" opacity="0.4"/>
                <text x="38" y="188" fontFamily="Cormorant Infant, Georgia, serif" fontSize="138" fontWeight="300" fill={P.dark}>I</text>
                <text x="100" y="188" fontFamily="Cormorant Infant, Georgia, serif" fontSize="138" fontWeight="300" fill={P.gold} opacity="0.92">E</text>
                <line x1="224" y1="50" x2="224" y2="250" stroke={P.gold} strokeWidth="0.7" opacity="0.35"/>
                <text x="248" y="108" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="40" fontWeight="300" fill={P.gold} letterSpacing="3">Nail Studio</text>
                <text x="250" y="150" fontFamily="Montserrat, Arial, sans-serif" fontSize="19" fontWeight="500" fill={P.dark} letterSpacing="6">EFIMOVA IRINA</text>
                <line x1="248" y1="168" x2="512" y2="168" stroke={P.gold} strokeWidth="0.6" opacity="0.4"/>
                <text x="248" y="194" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="17" fill={P.muted}>+7 913 865-69-61</text>
                <text x="248" y="218" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="15" fill={P.muted}>с. Корнилово, ул. Лучистая 52</text>
                <text x="248" y="244" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="13" fill={P.sage}>«С теплом к вашей красоте»</text>
              </svg>
            </div>
            {/* Оборотная сторона */}
            <div className="flex-1" style={{ backgroundColor: P.dark, padding: "24px 28px" }}>
              <p className="font-display italic text-xs mb-3 no-print" style={{ color: P.gold }}>Оборотная сторона</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%">
                <rect x="14" y="14" width="512" height="272" fill="none" stroke={P.gold} strokeWidth="0.7" opacity="0.3"/>
                <text x="270" y="118" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="52" fontWeight="300" fill={P.cream} textAnchor="middle" letterSpacing="4">Nail Studio</text>
                <text x="270" y="158" fontFamily="Montserrat, Arial, sans-serif" fontSize="18" fontWeight="500" fill={P.gold} textAnchor="middle" letterSpacing="7">EFIMOVA IRINA</text>
                <line x1="150" y1="178" x2="390" y2="178" stroke={P.gold} strokeWidth="0.6" opacity="0.35"/>
                <text x="270" y="210" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="15" fill={P.gold} textAnchor="middle" opacity="0.85">«С теплом к вашей красоте»</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Табличка на дверь */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: P.gold }}>
            03 — Табличка на дверь (вертикальная)
          </p>
          <div className="max-w-xs" style={{ backgroundColor: P.dark, padding: "32px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 620" width="100%">
              <rect x="16" y="16" width="328" height="588" fill="none" stroke={P.gold} strokeWidth="0.8" opacity="0.35"/>
              {/* Логотип */}
              <text x="108" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill={P.cream}>I</text>
              <text x="168" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill={P.gold} opacity="0.92">E</text>
              <line x1="70" y1="176" x2="290" y2="176" stroke={P.gold} strokeWidth="0.7" opacity="0.4"/>
              <text x="180" y="214" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="28" fontWeight="300" fill={P.gold} textAnchor="middle" letterSpacing="3">Nail Studio</text>
              <text x="180" y="248" fontFamily="Montserrat, Arial, sans-serif" fontSize="15" fontWeight="500" fill={P.cream} textAnchor="middle" letterSpacing="7">EFIMOVA IRINA</text>
              <line x1="100" y1="268" x2="260" y2="268" stroke={P.gold} strokeWidth="0.6" opacity="0.35"/>
              {/* По предварительной записи */}
              <text x="180" y="298" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="14" fill={P.gold} textAnchor="middle" opacity="0.9" letterSpacing="1">По предварительной записи</text>
              {/* График */}
              <text x="180" y="330" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="12" fill={P.gold} textAnchor="middle" opacity="0.6" letterSpacing="2">ГРАФИК РАБОТЫ</text>
              <text x="180" y="358" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="22" fill={P.cream} textAnchor="middle" letterSpacing="1">9:00 — 21:00</text>
              <text x="180" y="378" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="12" fill={P.gold} textAnchor="middle" opacity="0.6">ежедневно</text>
              <line x1="100" y1="396" x2="260" y2="396" stroke={P.gold} strokeWidth="0.6" opacity="0.35"/>
              {/* QR-код */}
              <text x="180" y="424" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="12" fill={P.gold} textAnchor="middle" opacity="0.8" letterSpacing="1">Записаться в Max</text>
              <image
                href="https://api.qrserver.com/v1/create-qr-code/?size=120x120&color=FAFAF6&bgcolor=1A3530&data=https%3A%2F%2Fmax.ru%2Fu%2Ff9LHodD0cOJzybHH5nirMGhvF5nIv7dWDLfPGS5hXFog8K1iNpEChCBTXn4"
                x="120" y="434" width="120" height="120"
              />
              <text x="180" y="576" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="12" fill={P.cream} textAnchor="middle" opacity="0.4">+7 913 865-69-61</text>
            </svg>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Cormorant+Infant:ital,wght@0,300;1,300;1,400&display=swap');
      `}</style>
    </div>
  );
}
