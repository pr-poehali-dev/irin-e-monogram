import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/fa1fbc0a-9a4a-4633-b66f-8758c3257068.jpg";
const HANDS_IMAGE = "https://cdn.poehali.dev/projects/ac55f69d-54ba-4d02-8f53-ca36a242ec06/files/f4b41a04-5fab-41af-9e5e-7253defe5a04.jpg";

const services = [
  {
    title: "Классический маникюр",
    description: "Обработка кутикулы, опил, полировка. Основа ухоженных рук.",
    price: "от 1 200 ₽",
    duration: "60 мин",
    icon: "Sparkles",
  },
  {
    title: "Аппаратный маникюр",
    description: "Бережная обработка без порезов. Идеально для чувствительной кожи.",
    price: "от 1 500 ₽",
    duration: "75 мин",
    icon: "Zap",
  },
  {
    title: "Покрытие гель-лак",
    description: "Стойкое покрытие до 3–4 недель. Более 200 оттенков в палитре.",
    price: "от 1 800 ₽",
    duration: "90 мин",
    icon: "Droplets",
  },
  {
    title: "Наращивание ногтей",
    description: "Акрил или гель — создаём идеальную форму и длину.",
    price: "от 3 500 ₽",
    duration: "120 мин",
    icon: "Star",
  },
  {
    title: "Nail-арт",
    description: "Роспись, втирка, фольга, стразы. Ваши ногти — маленькие произведения искусства.",
    price: "от 500 ₽/ноготь",
    duration: "по запросу",
    icon: "Paintbrush",
  },
  {
    title: "Педикюр",
    description: "Комплексный уход за стопами. Классический и аппаратный.",
    price: "от 2 200 ₽",
    duration: "90 мин",
    icon: "Heart",
  },
];

function Monogram() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-6">
      <svg viewBox="0 0 96 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        <text
          x="2"
          y="72"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
          fontSize="66"
          fill="hsl(25, 15%, 22%)"
        >
          И
        </text>
        <text
          x="44"
          y="72"
          fontFamily="Cormorant Infant, serif"
          fontWeight="300"
          fontSize="66"
          fill="hsl(28, 40%, 68%)"
        >
          Е
        </text>
      </svg>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen font-main" style={{ backgroundColor: "hsl(35, 30%, 97%)" }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Студия маникюра"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, hsl(35,30%,97%) 0%, hsl(35,30%,97%)/70% 40%, hsl(35,30%,97%)/85% 100%)",
              backgroundColor: "hsla(35, 30%, 97%, 0.78)"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <Monogram />
          </div>

          <p
            className="font-display italic text-sm tracking-[0.35em] mb-1 opacity-0 animate-fade-up"
            style={{ color: "hsl(28, 40%, 68%)", animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            СТУДИЯ МАНИКЮРА
          </p>

          <h1
            className="font-main font-medium tracking-[0.22em] text-4xl md:text-6xl uppercase mb-1 opacity-0 animate-fade-up"
            style={{ color: "hsl(25, 15%, 22%)", animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            ЕФИМОВОЙ
          </h1>

          <p
            className="font-display italic text-sm tracking-[0.35em] mb-8 opacity-0 animate-fade-up"
            style={{ color: "hsl(28, 40%, 68%)", animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            ИРИНЫ
          </p>

          <div
            className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="h-px w-16" style={{ backgroundColor: "hsl(28, 40%, 68%, 0.5)" }} />
            <span className="font-display italic text-sm" style={{ color: "hsl(25, 10%, 50%)" }}>
              С теплом к вашей красоте
            </span>
            <div className="h-px w-16" style={{ backgroundColor: "hsl(28, 40%, 68%, 0.5)" }} />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <button
              className="px-10 py-3.5 font-main font-medium tracking-[0.12em] text-sm uppercase transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "hsl(25, 15%, 22%)", color: "hsl(35, 30%, 97%)" }}
            >
              Записаться
            </button>
            <button
              className="px-10 py-3.5 font-main font-medium tracking-[0.12em] text-sm uppercase transition-all duration-300"
              style={{ border: "1px solid hsl(28, 40%, 68%)", color: "hsl(25, 15%, 22%)" }}
            >
              Услуги и цены
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
          <span className="font-display italic text-xs tracking-widest" style={{ color: "hsl(25, 10%, 50%)" }}>scroll</span>
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "hsl(28, 40%, 68%, 0.5)" }} />
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6" style={{ backgroundColor: "hsl(35, 45%, 94%)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: "hsl(28, 40%, 68%)" }}>
              О студии
            </p>
            <h2 className="font-main font-medium tracking-[0.15em] text-2xl uppercase mb-4" style={{ color: "hsl(25, 15%, 22%)" }}>
              Красота в деталях
            </h2>
            <p className="font-display text-base leading-relaxed mb-4" style={{ color: "hsl(25, 10%, 50%)" }}>
              Студия маникюра Ирины Ефимовой — это пространство, где каждая деталь продумана для вашего комфорта. Стерильные инструменты, премиальные материалы и внимательный подход к каждой гостье.
            </p>
            <p className="font-display italic text-sm" style={{ color: "hsl(28, 40%, 68%)" }}>
              Более 5 лет опыта · Более 500 довольных клиентов
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 h-80 overflow-hidden">
            <img
              src={HANDS_IMAGE}
              alt="Маникюр"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display italic text-sm tracking-widest mb-3" style={{ color: "hsl(28, 40%, 68%)" }}>
              Прайс-лист
            </p>
            <h2 className="font-main font-medium tracking-[0.18em] text-3xl uppercase mb-4" style={{ color: "hsl(25, 15%, 22%)" }}>
              Услуги
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12" style={{ backgroundColor: "hsl(28, 40%, 68%, 0.4)" }} />
              <Icon name="Sparkles" size={14} style={{ color: "hsl(28, 40%, 68%)" }} />
              <div className="h-px w-12" style={{ backgroundColor: "hsl(28, 40%, 68%, 0.4)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-7 hover:shadow-md transition-all duration-300 cursor-pointer"
                style={{ border: "1px solid hsl(30, 20%, 88%)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(28, 40%, 68%)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(30, 20%, 88%)")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: "hsl(35, 45%, 94%)" }}
                  >
                    <Icon name={service.icon as "Sparkles"} size={18} style={{ color: "hsl(28, 40%, 68%)" }} fallback="Sparkles" />
                  </div>
                  <span className="font-display italic text-xs tracking-wide" style={{ color: "hsl(25, 10%, 50%)" }}>
                    {service.duration}
                  </span>
                </div>

                <h3 className="font-main font-medium tracking-[0.08em] text-sm uppercase mb-2" style={{ color: "hsl(25, 15%, 22%)" }}>
                  {service.title}
                </h3>
                <p className="font-display text-sm leading-relaxed mb-5" style={{ color: "hsl(25, 10%, 50%)" }}>
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-main font-medium text-sm" style={{ color: "hsl(25, 15%, 22%)" }}>
                    {service.price}
                  </span>
                  <button
                    className="font-display italic text-xs tracking-wide transition-colors duration-200"
                    style={{ color: "hsl(28, 40%, 68%)" }}
                  >
                    Записаться →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "hsl(25, 15%, 22%)" }}>
        <p className="font-display italic text-sm tracking-widest mb-4" style={{ color: "hsl(28, 40%, 68%)" }}>
          Запись онлайн
        </p>
        <h2 className="font-main font-medium tracking-[0.18em] text-2xl uppercase mb-3" style={{ color: "hsl(35, 30%, 97%)" }}>
          Запишитесь на приём
        </h2>
        <p className="font-display italic text-base mb-8 max-w-md mx-auto" style={{ color: "hsl(35, 20%, 75%)" }}>
          Выберите удобное время и услугу — ответим в течение часа
        </p>
        <button
          className="px-12 py-4 font-main font-medium tracking-[0.15em] text-sm uppercase transition-colors duration-300 hover:opacity-90"
          style={{ backgroundColor: "hsl(28, 40%, 68%)", color: "hsl(25, 15%, 22%)" }}
        >
          Написать в WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6 text-center"
        style={{ backgroundColor: "hsl(35, 45%, 94%)", borderTop: "1px solid hsl(30, 20%, 88%)" }}
      >
        <div className="mb-4">
          <p className="font-display italic text-xs tracking-widest mb-1" style={{ color: "hsl(28, 40%, 68%)" }}>
            СТУДИЯ МАНИКЮРА
          </p>
          <p className="font-main font-medium tracking-[0.2em] uppercase text-sm" style={{ color: "hsl(25, 15%, 22%)" }}>
            ЕФИМОВОЙ ИРИНЫ
          </p>
        </div>
        <p className="font-display italic text-xs" style={{ color: "hsl(25, 10%, 50%)" }}>
          С теплом к вашей красоте
        </p>
      </footer>
    </div>
  );
}
