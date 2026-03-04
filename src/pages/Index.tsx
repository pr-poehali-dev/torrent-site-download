import { useState } from "react";
import Icon from "@/components/ui/icon";

const heroImg = "https://cdn.poehali.dev/projects/57fff3d8-33e7-4beb-b0a5-c73796e04ab4/files/195c3657-f256-4bf7-8092-794a917b084a.jpg";
const sceneImg = "https://cdn.poehali.dev/projects/57fff3d8-33e7-4beb-b0a5-c73796e04ab4/files/b35225e9-6e46-40b7-a1aa-42773bab3113.jpg";

const reviews = [
  {
    id: 1,
    name: "Станислав К.",
    avatar: "🧑‍🚀",
    rating: 5,
    date: "12 фев 2026",
    text: "Лучший выживач про терраформирование! Провёл в игре уже 200+ часов и не собираюсь останавливаться. Качаешь кислород, строишь базу — и потихоньку планета начинает оживать.",
  },
  {
    id: 2,
    name: "Аня М.",
    avatar: "👩‍💻",
    rating: 5,
    date: "28 янв 2026",
    text: "Скачала по совету подруги. Не ожидала что так затянет! Атмосфера игры просто космос — в буквальном смысле.",
  },
  {
    id: 3,
    name: "Игорь Т.",
    avatar: "🎮",
    rating: 4,
    date: "5 янв 2026",
    text: "Отличная игра для любителей медитативного геймплея. Строишь базу, исследуешь пещеры, открываешь новые технологии. Засиживаюсь до утра.",
  },
  {
    id: 4,
    name: "DarkVoid_99",
    avatar: "🌌",
    rating: 5,
    date: "19 дек 2025",
    text: "Чистый кайф! Скачал отсюда — всё работает, никаких вирусов. Спасибо за нормальный ресурс.",
  },
  {
    id: 5,
    name: "Маша П.",
    avatar: "🌿",
    rating: 5,
    date: "3 дек 2025",
    text: "Очень залипательно наблюдать как планета преображается. Сначала пустыня — потом зелень и облака. Разработчики гении.",
  },
];

const features = [
  { icon: "Globe", label: "Терраформирование", desc: "Преврати мёртвую планету в цветущий мир" },
  { icon: "Pickaxe", label: "Добыча ресурсов", desc: "Исследуй пещеры и руины инопланетян" },
  { icon: "Cpu", label: "Технологии", desc: "Стройте генераторы кислорода и тепла" },
  { icon: "Users", label: "Кооператив", desc: "Играй с друзьями до 10 человек" },
];

const stats = [
  { label: "Игроков в Steam", value: "500K+", icon: "Users" },
  { label: "Часов геймплея", value: "50M+", icon: "Clock" },
  { label: "Положительных отзывов", value: "97%", icon: "ThumbsUp" },
  { label: "Обновлений", value: "40+", icon: "RefreshCw" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-400" : "text-gray-600"}>★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState<"home" | "download" | "reviews">("home");

  const scrollTo = (id: string, section: typeof activeSection) => {
    setActiveSection(section);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() && commentName.trim()) {
      setSubmitted(true);
      setCommentText("");
      setCommentName("");
    }
  };

  return (
    <div className="min-h-screen bg-[#050e08] font-exo text-green-100 overflow-x-hidden">
      {/* Фоновые частицы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400 opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
        {/* Сканлайны */}
        <div className="absolute inset-0 scan-line opacity-30" />
        {/* Градиентные пятна */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-green-900/40 bg-[#050e08]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-orbitron text-green-400 font-bold text-lg tracking-widest glow-green-text">
            PLANET CRAFTER
          </div>
          <div className="flex gap-1">
            {[
              { label: "Главная", section: "home" as const, id: "hero" },
              { label: "Скачать", section: "download" as const, id: "download" },
              { label: "Отзывы", section: "reviews" as const, id: "reviews" },
            ].map((item) => (
              <button
                key={item.section}
                onClick={() => scrollTo(item.id, item.section)}
                className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 font-exo tracking-wide ${
                  activeSection === item.section
                    ? "bg-green-500/20 text-green-300 border border-green-500/40"
                    : "text-green-600 hover:text-green-300 hover:bg-green-500/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e08]/60 via-[#050e08]/40 to-[#050e08]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e08]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-orbitron tracking-widest mb-6"
              style={{ animation: "fade-in 0.5s ease-out forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              ВЕРСИЯ 1.0 — ПОЛНАЯ ИГРА
            </div>

            <h1
              className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none mb-4 glow-green-text"
              style={{ animation: "fade-in 0.6s ease-out 0.1s both" }}
            >
              THE PLANET<br />
              <span className="text-green-400">CRAFTER</span>
            </h1>

            <p
              className="text-green-200/70 text-lg leading-relaxed mb-8 font-exo"
              style={{ animation: "fade-in 0.6s ease-out 0.2s both" }}
            >
              Выживание и терраформирование на далёкой планете. Преврати безжизненную пустыню
              в цветущий мир — один или вместе с друзьями.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fade-in 0.6s ease-out 0.3s both" }}
            >
              <button
                onClick={() => scrollTo("download", "download")}
                className="flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-[#050e08] font-bold font-orbitron text-sm tracking-wider rounded transition-all duration-200 animate-pulse-glow hover:scale-105"
              >
                <Icon name="Download" size={18} />
                СКАЧАТЬ БЕСПЛАТНО
              </button>
              <button
                onClick={() => scrollTo("reviews", "reviews")}
                className="flex items-center gap-3 px-8 py-4 border border-green-500/40 text-green-300 hover:bg-green-500/10 font-orbitron text-sm tracking-wider rounded transition-all duration-200"
              >
                <Icon name="MessageSquare" size={18} />
                ОТЗЫВЫ
              </button>
            </div>
          </div>
        </div>

        {/* Скролл-индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-600 animate-float">
          <span className="text-xs font-orbitron tracking-widest">SCROLL</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* Статистика */}
      <section className="relative z-10 py-16 border-y border-green-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center p-4"
              style={{ animation: `fade-in 0.6s ease-out ${0.1 * i}s both` }}
            >
              <div className="font-orbitron text-3xl font-black text-green-400 glow-green-text mb-1">
                {s.value}
              </div>
              <div className="text-green-600 text-sm font-exo">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Об игре */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-green-500 font-orbitron text-xs tracking-widest mb-3">ОБ ИГРЕ</div>
              <h2 className="font-orbitron text-4xl font-black text-white mb-6 leading-tight">
                ТЕРРАФОРМИРУЙ<br />
                <span className="text-green-400">СВОЙ МИР</span>
              </h2>
              <p className="text-green-200/60 leading-relaxed mb-8 font-exo">
                The Planet Crafter — это игра про выживание и освоение планеты. Добывай ресурсы,
                строй базу, создавай машины для генерации кислорода, тепла и давления.
                Смотри как планета буквально оживает на твоих глазах.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="p-4 rounded-lg border border-green-900/40 bg-green-900/10 hover:border-green-500/40 hover:bg-green-900/20 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={f.icon} size={16} className="text-green-400" />
                      <span className="font-orbitron text-xs text-green-300 font-bold">{f.label}</span>
                    </div>
                    <p className="text-green-600 text-xs font-exo">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/10 rounded-2xl blur-xl" />
              <img
                src={sceneImg}
                alt="The Planet Crafter gameplay"
                className="relative rounded-xl border border-green-900/40 w-full object-cover aspect-video"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#050e08]/90 border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-green-400 text-xs font-orbitron">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  КИСЛОРОД: 21% — ТЕРРАФОРМИРОВАНИЕ АКТИВНО
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* СКАЧАТЬ */}
      <section id="download" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-green-500 font-orbitron text-xs tracking-widest mb-3">ЗАГРУЗКА</div>
            <h2 className="font-orbitron text-4xl font-black text-white">
              СКАЧАТЬ <span className="text-green-400">ИГРУ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Основная карточка */}
            <div className="col-span-full p-8 rounded-2xl border border-green-500/30 bg-green-900/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-orbitron text-2xl font-black text-white mb-1">The Planet Crafter</h3>
                    <div className="flex items-center gap-3 text-sm text-green-500 font-exo">
                      <span className="flex items-center gap-1"><Icon name="HardDrive" size={14} /> 3.2 GB</span>
                      <span className="flex items-center gap-1"><Icon name="Tag" size={14} /> v0.9.014</span>
                      <span className="flex items-center gap-1"><Icon name="Monitor" size={14} /> Windows</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-orbitron">
                    ПОЛНАЯ
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Процессор", value: "Intel i5-4460 / AMD FX-8350" },
                    { label: "Память", value: "8 GB RAM" },
                    { label: "Видеокарта", value: "NVIDIA GTX 960 / AMD R9 380" },
                    { label: "Место на диске", value: "4 GB" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-sm border-b border-green-900/30 pb-2">
                      <span className="text-green-600 font-exo">{r.label}</span>
                      <span className="text-green-300 font-exo">{r.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-400 text-[#050e08] font-orbitron font-black text-sm tracking-wider rounded-lg transition-all duration-200 hover:scale-[1.02] animate-pulse-glow">
                  <Icon name="Download" size={20} />
                  СКАЧАТЬ — БЕСПЛАТНО
                </button>

                <div className="mt-4 flex items-center justify-center gap-6 text-green-600 text-xs font-exo">
                  <span className="flex items-center gap-1"><Icon name="Shield" size={12} /> Без вирусов</span>
                  <span className="flex items-center gap-1"><Icon name="Zap" size={12} /> Быстрая загрузка</span>
                  <span className="flex items-center gap-1"><Icon name="CheckCircle" size={12} /> Проверено</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-green-500 font-orbitron text-xs tracking-widest mb-3">СООБЩЕСТВО</div>
            <h2 className="font-orbitron text-4xl font-black text-white">
              ОТЗЫВЫ <span className="text-green-400">ИГРОКОВ</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Stars count={5} />
              <span className="font-orbitron text-green-400 font-bold">4.9</span>
              <span className="text-green-600 text-sm font-exo">из 5 — {reviews.length} отзывов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {reviews.map((r, i) => (
              <div
                key={r.id}
                className="p-5 rounded-xl border border-green-900/40 bg-green-900/5 hover:border-green-500/30 hover:bg-green-900/10 transition-all duration-200"
                style={{ animation: `fade-in 0.6s ease-out ${0.1 * i}s both` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{r.avatar}</div>
                  <div>
                    <div className="font-orbitron text-sm text-green-300 font-bold">{r.name}</div>
                    <div className="text-green-700 text-xs font-exo">{r.date}</div>
                  </div>
                  <div className="ml-auto">
                    <Stars count={r.rating} />
                  </div>
                </div>
                <p className="text-green-200/60 text-sm leading-relaxed font-exo">{r.text}</p>
              </div>
            ))}
          </div>

          {/* Форма комментария */}
          <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-green-900/40 bg-green-900/5">
            <h3 className="font-orbitron text-lg font-bold text-green-300 mb-5">
              ОСТАВИТЬ ОТЗЫВ
            </h3>
            {submitted ? (
              <div className="flex items-center gap-3 py-6 text-green-400 font-orbitron text-sm">
                <Icon name="CheckCircle" size={20} />
                Спасибо! Твой отзыв отправлен на проверку.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Твой игровой ник"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#050e08] border border-green-900/40 text-green-200 placeholder-green-700 font-exo text-sm focus:outline-none focus:border-green-500/60 transition-colors"
                />
                <textarea
                  placeholder="Напиши свой отзыв об игре..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#050e08] border border-green-900/40 text-green-200 placeholder-green-700 font-exo text-sm focus:outline-none focus:border-green-500/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-[#050e08] font-orbitron font-bold text-sm tracking-wider rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Icon name="Send" size={16} />
                  ОТПРАВИТЬ ОТЗЫВ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="relative z-10 py-10 border-t border-green-900/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-orbitron text-green-700 text-sm tracking-widest">
            PLANET CRAFTER © 2026
          </div>
          <div className="text-green-800 text-xs font-exo text-center">
            Сайт создан в информационных целях. The Planet Crafter — игра студии Miju Games.
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo("hero", "home")}
              className="text-green-700 hover:text-green-400 text-xs font-exo transition-colors"
            >
              Наверх
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}