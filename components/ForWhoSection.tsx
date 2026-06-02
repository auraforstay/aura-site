"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const profileIcons = [
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3C10.5 3 7.5 6 7.5 9.5C7.5 13 10.5 16 14 16C17.5 16 20.5 13 20.5 9.5C20.5 6 17.5 3 14 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M4 25C4 20.5 8.5 17 14 17C19.5 17 24 20.5 24 25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 12h22" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9 3v4M19 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5 22V10L14 4L23 10V22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="10" y="15" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 8h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
];

export default function ForWhoSection() {
  const { t } = useLanguage();

  return (
    <section
      className="bg-nevoa py-20 md:py-28 lg:py-36"
      id="para-quem"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-6">{t.forWho.sectionLabel}</p>
          <h2
            className="font-display text-title text-carvao max-w-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.forWho.headline}
          </h2>
        </div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.forWho.profiles.map((p, i) => (
            <div
              key={i}
              className="flex flex-col rounded-card p-7 md:p-8 border shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
              style={{
                borderColor: "var(--color-linho)",
                backgroundColor: "var(--color-terra-50)",
              }}
            >
              {/* Icon */}
              <div className="mb-6 text-floresta group-hover:text-musgo transition-colors duration-200">
                {profileIcons[i]}
              </div>

              {/* Text */}
              <h3
                className="font-display text-card text-carvao mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-caption text-pedra mb-4">{p.sub}</p>
              <p className="text-body text-pedra flex-1">{p.desc}</p>

              {/* Recommended plan */}
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-linho)" }}>
                <span className="text-fine text-pedra tracking-aura">{p.planLabel}</span>
                <p
                  className="font-mono text-caption font-medium text-floresta mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.plan}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-caption text-pedra mt-10 text-center">
          {t.forWho.bottomNote}
        </p>
      </div>
    </section>
  );
}
