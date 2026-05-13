import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/fa1fbc0a-9a4a-4633-b66f-8758c3257068.jpg";
const HANDS_IMAGE = "https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/f4b41a04-5fab-41af-9e5e-7253defe5a04.jpg";

// Palette: vanilla + dark chocolate
const C = {
  bg: "#FAF6EE",
  bgAlt: "#F2EBD9",
  dark: "#3B2314",
  sage: "#C9A97A",
  sageMid: "#A8834E",
  muted: "#8C7155",
  cream: "#FDF9F2",
  white: "#FFFFFF",
};

const services = [
  { title: "Классический маникюр", description: "Обработка кутикулы, опил, полировка. Основа ухоженных рук.", price: "от 1 200 ₽", duration: "60 мин", icon: "Sparkles" },
  { title: "Аппаратный маникюр", description: "Бережная обработка без порезов. Идеально для чувствительной кожи.", price: "от 1 500 ₽", duration: "75 мин", icon: "Zap" },
  { title: "Покрытие гель-лак", description: "Стойкое покрытие до 3–4 недель. Более 200 оттенков в палитре.", price: "от 1 800 ₽", duration: "90 мин", icon: "Droplets" },
  { title: "Наращивание ногтей", description: "Акрил или гель — создаём идеальную форму и длину.", price: "от 3 500 ₽", duration: "120 мин", icon: "Star" },
  { title: "Nail-арт", description: "Роспись, втирка, фольга, стразы. Ваши ногти — маленькие произведения искусства.", price: "от 500 ₽/ноготь", duration: "по запросу", icon: "Paintbrush" },
  { title: "Педикюр", description: "Комплексный уход за стопами. Классический и аппаратный.", price: "от 2 200 ₽", duration: "90 мин", icon: "Heart" },
];

function Monogram() {
  return (
    <div style={{ width: 130, height: 110, margin: "0 auto 8px" }}>
      <svg viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg" width="130" height="110">
        {/* I — Cormorant, тонкие засечки, тёмный */}
        <text
          x="22"
          y="92"
          fontFamily="'Cormorant Infant', 'Georgia', serif"
          fontSize="96"
          fontWeight="300"
          fill={C.dark}
          letterSpacing="-2"
        >I</text>
        {/* E — Cormorant, шалфейный, чуть смещена и прозрачнее для наложения */}
        <text
          x="58"
          y="92"
          fontFamily="'Cormorant Infant', 'Georgia', serif"
          fontSize="96"
          fontWeight="300"
          fill={C.sage}
          letterSpacing="-2"
          opacity="0.92"
        >E</text>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center select-none">
      <Monogram />
      <h1 className="font-display italic text-4xl md:text-6xl tracking-[0.18em] mb-3" style={{ color: C.sage }}>
        Nail Studio
      </h1>
      <p className="font-main font-medium tracking-[0.26em] text-xl md:text-2xl uppercase mb-0.5" style={{ color: C.dark }}>
        EFIMOVA
      </p>
      <p className="font-main font-medium tracking-[0.26em] text-xl md:text-2xl uppercase mb-7" style={{ color: C.dark }}>
        IRINA
      </p>
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px w-14" style={{ backgroundColor: C.sage, opacity: 0.45 }} />
        <span className="font-main font-light text-[10px] tracking-[0.3em] uppercase" style={{ color: C.muted }}>
          Маникюр · Педикюр · Брови
        </span>
        <div className="h-px w-14" style={{ backgroundColor: C.sage, opacity: 0.45 }} />
      </div>
      <p className="font-display italic text-base" style={{ color: C.sageMid }}>
        «С теплом к вашей красоте»
      </p>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen font-main" style={{ backgroundColor: C.bg }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="Студия маникюра" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(244,247,240,0.82)" }} />
        </div>

        <div
          className="relative z-10 text-center px-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Logo />
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <button
              className="px-10 py-3.5 font-main font-medium tracking-[0.14em] text-sm uppercase transition-all duration-300 hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: C.dark, color: C.cream }}
            >
              Записаться
            </button>
            <button
              className="px-10 py-3.5 font-main font-medium tracking-[0.14em] text-sm uppercase transition-all duration-300 hover:bg-opacity-20"
              style={{ border: `1px solid ${C.sage}`, color: C.dark }}
            >
              Услуги и цены
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
          <span className="font-display italic text-xs tracking-widest" style={{ color: C.muted }}>scroll</span>
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: C.sage }} />
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: C.sage }}>
              О студии
            </p>
            <h2 className="font-main font-medium tracking-[0.15em] text-2xl uppercase mb-4" style={{ color: C.dark }}>
              Красота в деталях
            </h2>
            <p className="font-display text-base leading-relaxed mb-4" style={{ color: C.muted }}>
              Студия маникюра Ирины Ефимовой — это пространство, где каждая деталь продумана для вашего комфорта. Стерильные инструменты, премиальные материалы и внимательный подход к каждой гостье.
            </p>
            <p className="font-display italic text-sm" style={{ color: C.sageMid }}>
              Более 5 лет опыта · Более 500 довольных клиентов
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 h-80 overflow-hidden">
            <img src={HANDS_IMAGE} alt="Маникюр" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" id="services" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: C.sage }}>Прайс-лист</p>
            <h2 className="font-main font-medium tracking-[0.18em] text-3xl uppercase mb-4" style={{ color: C.dark }}>Услуги</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
              <Icon name="Sparkles" size={14} style={{ color: C.sage }} />
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-7 hover:shadow-md transition-all duration-300 cursor-pointer"
                style={{ border: `1px solid #D6E0D3` }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.sage)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#D6E0D3")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: C.bgAlt }}>
                    <Icon name={service.icon as "Sparkles"} size={18} style={{ color: C.sageMid }} fallback="Sparkles" />
                  </div>
                  <span className="font-display italic text-xs tracking-wide" style={{ color: C.muted }}>{service.duration}</span>
                </div>
                <h3 className="font-main font-medium tracking-[0.08em] text-sm uppercase mb-2" style={{ color: C.dark }}>
                  {service.title}
                </h3>
                <p className="font-display text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-main font-medium text-sm" style={{ color: C.dark }}>{service.price}</span>
                  <button className="font-display italic text-xs tracking-wide transition-colors duration-200" style={{ color: C.sageMid }}>
                    Записаться →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: C.sage }}>Наши работы</p>
            <h2 className="font-main font-medium tracking-[0.18em] text-3xl uppercase mb-4" style={{ color: C.dark }}>Галерея</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
              <Icon name="Heart" size={14} style={{ color: C.sage }} />
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="col-span-1 overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/d4b365a8-1f13-40a4-ac81-5ca159da94ad.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/59836755-e916-43a5-86cb-f14c91599a3f.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/4be2c87b-3d00-44b9-ac2c-6490c0094389.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/11de364e-6a68-4e63-b906-e675634bb498.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/c87bbb90-de48-4998-bb13-e28916980969.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-2 md:col-span-3 overflow-hidden" style={{ aspectRatio: "16/5" }}>
              <img src="https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/6e9f7acc-7e6e-471a-a5e3-262711dba950.jpg" alt="Nail art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: C.sage }}>Отзывы</p>
            <h2 className="font-main font-medium tracking-[0.18em] text-3xl uppercase mb-4" style={{ color: C.dark }}>Говорят клиенты</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
              <Icon name="Star" size={14} style={{ color: C.sage }} />
              <div className="h-px w-12" style={{ backgroundColor: C.sage, opacity: 0.35 }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Анастасия М.",
                date: "март 2025",
                text: "Ирина — настоящий мастер своего дела. Маникюр держится уже четыре недели, ни одного скола. Атмосфера в студии очень уютная, всегда хочется вернуться.",
                stars: 5,
              },
              {
                name: "Екатерина В.",
                date: "апрель 2025",
                text: "Делала наращивание и nail-арт. Результат превзошёл все ожидания — тонко, аккуратно, именно то, что хотела. Однозначно буду постоянным клиентом.",
                stars: 5,
              },
              {
                name: "Ольга Р.",
                date: "май 2025",
                text: "Приятная студия, чистота и порядок на высшем уровне. Аппаратный маникюр прошёл абсолютно безболезненно. Спасибо Ирине за профессионализм и заботу!",
                stars: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-7 flex flex-col gap-4"
                style={{ border: "1px solid #D6E0D3" }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Icon key={s} name="Star" size={13} style={{ color: C.sage }} />
                  ))}
                </div>

                {/* Text */}
                <p className="font-display italic text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                  «{review.text}»
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #EBF0E6" }}>
                  <span className="font-main font-medium text-xs tracking-wide uppercase" style={{ color: C.dark }}>
                    {review.name}
                  </span>
                  <span className="font-display italic text-xs" style={{ color: C.muted }}>
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: C.dark }}>
        <p className="font-display italic text-sm tracking-widest mb-4" style={{ color: C.sage }}>Запись онлайн</p>
        <h2 className="font-main font-medium tracking-[0.18em] text-2xl uppercase mb-3" style={{ color: C.cream }}>
          Запишитесь на приём
        </h2>
        <p className="font-display italic text-base mb-8 max-w-md mx-auto" style={{ color: "#A8B8A5" }}>
          Выберите удобное время и услугу — ответим в течение часа
        </p>
        <button
          className="px-12 py-4 font-main font-medium tracking-[0.15em] text-sm uppercase transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: C.sage, color: C.dark }}
        >
          Написать в WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ backgroundColor: C.bgAlt, borderTop: "1px solid #E8DCC8" }}>
        <div className="mb-4">
          <p className="font-display italic text-xs tracking-widest mb-1" style={{ color: C.sage }}>NAIL STUDIO</p>
          <p className="font-main font-medium tracking-[0.22em] uppercase text-sm" style={{ color: C.dark }}>EFIMOVA IRINA</p>
        </div>
        <p className="font-display italic text-xs mb-1" style={{ color: C.muted }}>с. Корнилово, ул. Лучистая 52</p>
        <p className="font-display italic text-xs mb-5" style={{ color: C.muted }}>+7 913 865-69-61</p>
        <div className="h-px max-w-xs mx-auto mb-5" style={{ backgroundColor: C.sage, opacity: 0.25 }} />
        <p className="font-display italic text-xs mb-3" style={{ color: C.muted }}>С теплом к вашей красоте</p>
        <a
          href="/print"
          className="font-display italic text-xs transition-opacity hover:opacity-70"
          style={{ color: C.sage }}
        >
          Макеты для печати →
        </a>
      </footer>
    </div>
  );
}