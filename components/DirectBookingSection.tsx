"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DirectBookingSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden grain py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-carvao)" }}
    >
      {/* Background image subtle */}
      <Image
        src="/images/countryside.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-15"
        sizes="100vw"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left: Headline + copy */}
          <div className="flex-1 max-w-xl">
            <p className="section-label mb-6" style={{ color: "rgba(245,241,236,0.5)" }}>
              {t.directBooking.sectionLabel}
            </p>
            <h2
              className="font-display text-title text-nevoa mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.directBooking.headline}{" "}
              <em className="italic" style={{ color: "var(--color-dourado)" }}>
                {t.directBooking.headlineAccent}
              </em>
            </h2>
            <p className="text-body mb-8" style={{ color: "rgba(245,241,236,0.75)" }}>
              {t.directBooking.sub}
            </p>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 text-body font-medium link-under"
              style={{ color: "var(--color-dourado)" }}
            >
              {t.directBooking.pill}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: Financial breakdown */}
          <div className="flex-1 max-w-md">
            {/* Calculation card */}
            <div
              className="rounded-card p-7 md:p-8"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 32px rgba(0,0,0,0.18)" }}
            >
              <p className="text-fine tracking-aura mb-6" style={{ color: "var(--color-pedra)" }}>
                {t.directBooking.cardHeader}
              </p>

              {/* Via OTA */}
              <div className="mb-6">
                <p className="text-caption font-medium mb-3" style={{ color: "var(--color-pedra)" }}>
                  {t.directBooking.otaLabel}
                </p>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-caption" style={{ color: "var(--color-pedra)" }}>{t.directBooking.forYou}</span>
                  <span
                    className="font-mono text-card font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-carvao)" }}
                  >
                    R$ 425
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-caption" style={{ color: "var(--color-pedra)" }}>{t.directBooking.forOta}</span>
                  <span
                    className="font-mono text-caption font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-pedra)" }}
                  >
                    R$ 75 (15%)
                  </span>
                </div>
                <div
                  className="mt-4 h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "var(--color-linho)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "85%", backgroundColor: "var(--color-musgo)" }}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t mb-6" style={{ borderColor: "var(--color-linho)" }} />

              {/* Via Aura */}
              <div>
                <p className="text-caption font-medium mb-3" style={{ color: "var(--color-pedra)" }}>
                  {t.directBooking.directLabel}
                </p>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-caption" style={{ color: "var(--color-pedra)" }}>{t.directBooking.forYou}</span>
                  <span
                    className="font-mono text-card font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-floresta)" }}
                  >
                    R$ 500
                  </span>
                </div>
                <div
                  className="mt-4 h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "var(--color-linho)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "100%", backgroundColor: "var(--color-dourado)" }}
                  />
                </div>
              </div>

              {/* Insight */}
              <div
                className="mt-8 p-4 rounded-button"
                style={{ backgroundColor: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)" }}
              >
                <p className="text-caption font-medium" style={{ color: "var(--color-floresta)" }}>
                  {t.directBooking.insight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
