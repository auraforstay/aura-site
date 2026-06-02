"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FeatureImage = {
  number: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  aspectRatio?: string;
  bgColor?: string;
};

const featureImages: FeatureImage[] = [
  {
    number: "01",
    image: "/images/financeiro-aura.png",
    imageAlt: "Módulo financeiro no sistema Aura",
    reverse: false,
    objectFit: "cover",
    objectPosition: "left center",
    aspectRatio: "1672/940",
    bgColor: "#ffffff",
  },
  {
    number: "02",
    image: "/images/glamping-walkway.jpg",
    imageAlt: "Passarela de glamping entre as cabines",
    reverse: true,
  },
  {
    number: "03",
    image: "/images/servicos-aura-v2.png",
    imageAlt: "Módulo de serviços no sistema Aura",
    reverse: false,
    objectFit: "cover",
    objectPosition: "left center",
    aspectRatio: "1672/941",
    bgColor: "#ffffff",
  },
  {
    number: "04",
    image: "/images/cabin-interior.png",
    imageAlt: "Interior aconchegante de uma hospedagem",
    reverse: true,
  },
];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section
      className="bg-floresta py-20 md:py-28 lg:py-36"
      id="funcionalidades"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <p className="section-label mb-6" style={{ color: "rgba(245,241,236,0.55)" }}>{t.features.sectionLabel}</p>
          <h2
            className="font-display text-title text-nevoa"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.features.headline}
            <span className="text-nevoa/60"> {t.features.headlineAccent}</span>
          </h2>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-20 md:gap-28">
          {t.features.items.map((f, idx) => {
            const layout = featureImages[idx];
            return (
              <div
                key={layout.number}
                className={`flex flex-col gap-8 md:gap-12 lg:gap-20 ${
                  layout.reverse
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div
                    className="relative rounded-card overflow-hidden shadow-elevated"
                    style={{
                      aspectRatio: layout.aspectRatio ?? "4/3",
                      backgroundColor: layout.bgColor ?? "transparent",
                    }}
                  >
                    <Image
                      src={layout.image}
                      alt={layout.imageAlt}
                      fill
                      className={layout.objectFit === "contain" ? "object-contain" : "object-cover"}
                      style={{ objectPosition: layout.objectPosition ?? "center" }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle overlay — skip for UI screenshots */}
                    {!layout.bgColor && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(61,90,76,0.08) 0%, transparent 60%)",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-4 lg:max-w-md">
                  <span
                    className="text-fine font-mono font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "rgba(245,241,236,0.4)" }}
                  >
                    {layout.number}
                  </span>
                  <h3
                    className="font-display text-section text-nevoa"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-body text-nevoa/70">{f.desc}</p>
                  <p className="text-fine font-medium tracking-aura mt-2" style={{ color: "rgba(245,241,236,0.5)" }}>
                    {f.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extranet callout */}
        <div
          className="mt-20 md:mt-28 p-8 md:p-10 rounded-card"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 32px rgba(30,45,37,0.12)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <span className="section-label mb-3 block">Exclusivo Aura</span>
              <h3
                className="font-display text-card md:text-section text-carvao mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.features.extranet.title}
              </h3>
              <p className="text-body text-pedra max-w-lg">
                {t.features.extranet.desc}
              </p>
            </div>
            <div className="shrink-0">
              <span
                className="inline-block px-4 py-2 rounded-full text-fine font-medium"
                style={{
                  backgroundColor: "var(--color-floresta)",
                  color: "#ffffff",
                }}
              >
                {t.features.extranet.detail}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
