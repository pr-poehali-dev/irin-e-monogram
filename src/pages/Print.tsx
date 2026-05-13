export default function Print() {
  return (
    <div className="min-h-screen font-main" style={{ backgroundColor: "#FAF6EE" }}>

      {/* Header */}
      <div className="text-center py-10 px-6 no-print">
        <p className="font-display italic text-sm tracking-widest mb-2" style={{ color: "#C9A97A" }}>
          Макеты для печати
        </p>
        <h1 className="font-main font-medium tracking-[0.2em] text-2xl uppercase mb-6" style={{ color: "#3B2314" }}>
          Полиграфия студии
        </h1>
        <button
          onClick={() => window.print()}
          className="px-8 py-3 font-main font-medium tracking-[0.12em] text-sm uppercase transition-all hover:opacity-80"
          style={{ backgroundColor: "#3B2314", color: "#FAF6EE" }}
        >
          Распечатать все
        </button>
        <p className="font-display italic text-xs mt-3" style={{ color: "#8C7155" }}>
          Откроется диалог печати браузера
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-16">

        {/* Вывеска */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: "#C9A97A" }}>
            01 — Вывеска (горизонтальная)
          </p>
          <div style={{ backgroundColor: "#FAF6EE", border: "1px solid #E8DCC8", padding: "32px 40px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" width="100%">
              <text x="40" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill="#3B2314">I</text>
              <text x="98" y="148" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill="#C9A97A" opacity="0.92">E</text>
              <line x1="195" y1="30" x2="195" y2="170" stroke="#C9A97A" strokeWidth="0.8" opacity="0.4"/>
              <text x="218" y="82" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="46" fontWeight="300" fill="#C9A97A" letterSpacing="4">Nail Studio</text>
              <text x="220" y="124" fontFamily="Montserrat, Arial, sans-serif" fontSize="22" fontWeight="500" fill="#3B2314" letterSpacing="9">EFIMOVA</text>
              <text x="220" y="155" fontFamily="Montserrat, Arial, sans-serif" fontSize="22" fontWeight="500" fill="#3B2314" letterSpacing="9">IRINA</text>
            </svg>
          </div>
        </div>

        {/* Визитка */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: "#C9A97A" }}>
            02 — Визитка (90×50 мм)
          </p>
          <div className="flex gap-6 flex-col sm:flex-row">
            {/* Лицевая сторона */}
            <div className="flex-1" style={{ backgroundColor: "#FAF6EE", border: "1px solid #E8DCC8", padding: "24px 28px" }}>
              <p className="font-display italic text-xs mb-3 no-print" style={{ color: "#8C7155" }}>Лицевая сторона</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%">
                <rect x="14" y="14" width="512" height="272" fill="none" stroke="#C9A97A" strokeWidth="0.7" opacity="0.4"/>
                <text x="38" y="188" fontFamily="Cormorant Infant, Georgia, serif" fontSize="138" fontWeight="300" fill="#3B2314">I</text>
                <text x="100" y="188" fontFamily="Cormorant Infant, Georgia, serif" fontSize="138" fontWeight="300" fill="#C9A97A" opacity="0.92">E</text>
                <line x1="224" y1="50" x2="224" y2="250" stroke="#C9A97A" strokeWidth="0.7" opacity="0.35"/>
                <text x="248" y="108" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="40" fontWeight="300" fill="#C9A97A" letterSpacing="3">Nail Studio</text>
                <text x="250" y="150" fontFamily="Montserrat, Arial, sans-serif" fontSize="19" fontWeight="500" fill="#3B2314" letterSpacing="6">EFIMOVA IRINA</text>
                <line x1="248" y1="168" x2="512" y2="168" stroke="#C9A97A" strokeWidth="0.6" opacity="0.4"/>
                <text x="248" y="194" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="17" fill="#8C7155">+7 913 865-69-61</text>
                <text x="248" y="218" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="15" fill="#8C7155">с. Корнилово, ул. Лучистая 52</text>
                <text x="248" y="244" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="13" fill="#C9A97A">«С теплом к вашей красоте»</text>
              </svg>
            </div>
            {/* Оборотная сторона */}
            <div className="flex-1" style={{ backgroundColor: "#3B2314", padding: "24px 28px" }}>
              <p className="font-display italic text-xs mb-3 no-print" style={{ color: "#C9A97A" }}>Оборотная сторона</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%">
                <rect x="14" y="14" width="512" height="272" fill="none" stroke="#C9A97A" strokeWidth="0.7" opacity="0.3"/>
                <text x="270" y="118" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="52" fontWeight="300" fill="#FAF6EE" textAnchor="middle" letterSpacing="4">Nail Studio</text>
                <text x="270" y="158" fontFamily="Montserrat, Arial, sans-serif" fontSize="18" fontWeight="500" fill="#C9A97A" textAnchor="middle" letterSpacing="7">EFIMOVA IRINA</text>
                <line x1="150" y1="178" x2="390" y2="178" stroke="#C9A97A" strokeWidth="0.6" opacity="0.35"/>
                <text x="270" y="210" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="15" fill="#C9A97A" textAnchor="middle" opacity="0.85">«С теплом к вашей красоте»</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Табличка на дверь */}
        <div>
          <p className="font-display italic text-xs tracking-widest mb-4 no-print" style={{ color: "#C9A97A" }}>
            03 — Табличка на дверь (вертикальная)
          </p>
          <div className="max-w-xs" style={{ backgroundColor: "#3B2314", padding: "32px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440" width="100%">
              <rect x="16" y="16" width="328" height="408" fill="none" stroke="#C9A97A" strokeWidth="0.8" opacity="0.35"/>
              <text x="108" y="168" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill="#FAF6EE">I</text>
              <text x="168" y="168" fontFamily="Cormorant Infant, Georgia, serif" fontSize="130" fontWeight="300" fill="#C9A97A" opacity="0.92">E</text>
              <line x1="70" y1="196" x2="290" y2="196" stroke="#C9A97A" strokeWidth="0.7" opacity="0.4"/>
              <text x="180" y="238" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="30" fontWeight="300" fill="#C9A97A" textAnchor="middle" letterSpacing="3">Nail Studio</text>
              <text x="180" y="274" fontFamily="Montserrat, Arial, sans-serif" fontSize="16" fontWeight="500" fill="#FAF6EE" textAnchor="middle" letterSpacing="7">EFIMOVA</text>
              <text x="180" y="300" fontFamily="Montserrat, Arial, sans-serif" fontSize="16" fontWeight="500" fill="#FAF6EE" textAnchor="middle" letterSpacing="7">IRINA</text>
              <line x1="100" y1="322" x2="260" y2="322" stroke="#C9A97A" strokeWidth="0.6" opacity="0.35"/>
              <text x="180" y="362" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="14" fill="#C9A97A" textAnchor="middle" opacity="0.8">«С теплом к вашей красоте»</text>
              <text x="180" y="400" fontFamily="Cormorant Infant, Georgia, serif" fontStyle="italic" fontSize="13" fill="#FAF6EE" textAnchor="middle" opacity="0.5">+7 913 865-69-61</text>
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
