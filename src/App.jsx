import { useMemo, useState } from 'react';
import { categories, comparisons, glossary, projects, roadmap, tools, tracks } from './data.js';

function Header() {
  const links = [
    ['المسارات', '#tracks'],
    ['الأدوات', '#tools'],
    ['المقارنات', '#comparisons'],
    ['الخطة', '#roadmap'],
    ['المشاريع', '#projects']
  ];

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="مسار المبرمج">
        <span className="brand-mark">م</span>
        <span>
          <strong>مسار المبرمج</strong>
          <small>Programmer Roadmap</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="التنقل الرئيسي">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-content">
        <span className="eyebrow">دليل عربي عملي للمبرمجين</span>
        <h1>من الصفر إلى اختيار الاختصاص وبناء مشاريع حقيقية.</h1>
        <p>
          موقع مبني على فكرة كتاب “مسار المبرمج”: يجمع المسارات، الأدوات، المقارنات،
          المشاريع، والقاموس التقني في تجربة واحدة سهلة وواضحة.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#tracks">ابدأ بالمسارات</a>
          <a className="btn ghost" href="#tools">استكشف الأدوات</a>
        </div>
      </div>
      <div className="hero-card" aria-label="ملخص الموقع">
        <div className="code-window">
          <div className="dots"><span></span><span></span><span></span></div>
          <pre>{`const goal = "Become a real developer";

roadmap
  .learnBasics()
  .chooseTrack()
  .buildProjects()
  .deployOnline()
  .getHired();`}</pre>
        </div>
        <div className="mini-stats">
          <div><strong>8</strong><span>مسارات</span></div>
          <div><strong>16+</strong><span>أداة</span></div>
          <div><strong>3</strong><span>مقارنات</span></div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function TracksSection() {
  const [active, setActive] = useState(tracks[0]);

  return (
    <section id="tracks" className="section-shell section-gap">
      <SectionTitle
        eyebrow="اختر وجهتك"
        title="المسارات البرمجية الأساسية"
        text="كل مسار يحتوي على المهارات، الهدف، ومشروع تطبيقي يساعد القارئ يعرف من أين يبدأ."
      />
      <div className="tracks-layout">
        <div className="track-list">
          {tracks.map((track) => (
            <button
              key={track.id}
              className={`track-tab ${active.id === track.id ? 'active' : ''}`}
              onClick={() => setActive(track)}
            >
              <span>{track.icon}</span>
              <div>
                <strong>{track.title}</strong>
                <small>{track.subtitle}</small>
              </div>
            </button>
          ))}
        </div>
        <article className="track-details">
          <span className="big-icon">{active.icon}</span>
          <p className="pill">{active.level}</p>
          <h3>{active.title}</h3>
          <p>{active.goal}</p>
          <div className="chips">
            {active.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="project-box">
            <strong>مشروع مقترح:</strong>
            <span>{active.project}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ToolsSection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('الكل');

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = category === 'الكل' || tool.category === category;
      const searchText = `${tool.name} ${tool.category} ${tool.use} ${tool.when} ${tool.alternatives.join(' ')}`.toLowerCase();
      const matchesQuery = searchText.includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="tools" className="tools-section section-gap">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Tool Atlas"
          title="أطلس أدوات المبرمج"
          text="ابحث باسم الأداة أو اختر التصنيف لتعرف متى تستخدمها وما البدائل الممكنة."
        />
        <div className="filters">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث: Twilio, PostgreSQL, Docker..."
            aria-label="البحث في الأدوات"
          />
          <div className="category-pills" aria-label="تصنيفات الأدوات">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === category ? 'selected' : ''}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <article key={tool.name} className="tool-card">
              <span className="tool-category">{tool.category}</span>
              <h3>{tool.name}</h3>
              <p>{tool.use}</p>
              <div className="tool-meta">
                <strong>متى أستخدمها؟</strong>
                <span>{tool.when}</span>
              </div>
              <div className="alternatives">
                {tool.alternatives.map((alt) => <span key={alt}>{alt}</span>)}
              </div>
            </article>
          ))}
        </div>
        {filteredTools.length === 0 && <p className="empty-state">لا توجد أدوات مطابقة للبحث الحالي.</p>}
      </div>
    </section>
  );
}

function ComparisonsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = comparisons[activeIndex];

  return (
    <section id="comparisons" className="section-shell section-gap">
      <SectionTitle
        eyebrow="Decision Guide"
        title="مقارنات تساعدك تختار صح"
        text="هذا القسم يحوّل الكتاب من حفظ أدوات إلى فهم قرارات تقنية."
      />
      <div className="comparison-tabs">
        {comparisons.map((comparison, index) => (
          <button
            key={comparison.title}
            className={activeIndex === index ? 'selected' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {comparison.title}
          </button>
        ))}
      </div>
      <div className="comparison-card">
        <div className="comparison-head">
          <h3>{active.title}</h3>
          <div><span>{active.left}</span><span>{active.right}</span></div>
        </div>
        <div className="comparison-table">
          {active.rows.map(([label, left, right]) => (
            <div className="comparison-row" key={label}>
              <strong>{label}</strong>
              <span>{left}</span>
              <span>{right}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="section-shell section-gap">
      <SectionTitle
        eyebrow="Learning Path"
        title="الخطة العامة للقارئ"
        text="خمس مراحل بسيطة تجعل رحلة التعلم مفهومة بدل الضياع بين الأدوات الكثيرة."
      />
      <div className="timeline">
        {roadmap.map((item) => (
          <article className="timeline-item" key={item.step}>
            <span>{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-gap">
      <SectionTitle
        eyebrow="Build to Learn"
        title="مشاريع تطبيقية حسب المستوى"
        text="المبرمج يتطور عندما يبني. هذه المشاريع يمكن أن تكون نهاية كل باب في الكتاب."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.level}</span>
            <h3>{project.title}</h3>
            <strong>{project.stack}</strong>
            <p>{project.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GlossarySection() {
  return (
    <section className="glossary-section section-gap">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Developer Dictionary"
          title="قاموس سريع للمصطلحات"
          text="قسم مناسب للمبتدئ كي لا يتوقف عند كل كلمة تقنية أثناء التعلم."
        />
        <div className="glossary-grid">
          {glossary.map(([term, meaning]) => (
            <article key={term}>
              <strong>{term}</strong>
              <p>{meaning}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-shell cta">
      <div>
        <span className="eyebrow">جاهز للتطوير؟</span>
        <h2>حوّل “مسار المبرمج” إلى منصة تعليمية كاملة.</h2>
        <p>
          يمكن لاحقًا إضافة صفحات لكل مسار، نظام تسجيل دخول، لوحة إدارة لإضافة أدوات،
          Progress Tracker، واختبارات قصيرة بعد كل فصل.
        </p>
      </div>
      <a className="btn primary" href="#top">العودة للبداية</a>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TracksSection />
        <ToolsSection />
        <ComparisonsSection />
        <RoadmapSection />
        <ProjectsSection />
        <GlossarySection />
        <CTA />
      </main>
      <footer className="footer">
        <p>© 2026 مسار المبرمج — React + Vite</p>
      </footer>
    </>
  );
}
