import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CtaBand } from "@/components/CtaBand";
import { LeafPatternParallax } from "@/components/LeafPatternParallax";
import { ParallaxHeroImage } from "@/components/ParallaxHeroImage";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";

const plantedBorderImg = "https://static.wixstatic.com/media/5bd9f2_63c8a967eca14e9bbb5ba5ac17134a02~mv2.jpeg";
const cottageGardenImg = "https://static.wixstatic.com/media/5bd9f2_2e6bc4b45da1415f98e69e1817086455~mv2.jpeg";
const finishedLawnImg = "https://static.wixstatic.com/media/5bd9f2_1996296ab32c4c3a93c249c3363e44a5~mv2.jpeg";
const rosePlantingImg = "https://static.wixstatic.com/media/5bd9f2_b39eec48c1234fe6b607c8ae0482eee7~mv2_d_3024_4032_s_4_2.jpg";
const flowerBedImg = "https://static.wixstatic.com/media/5bd9f2_60e9856b67264c02871d22ce910e0c65~mv2.jpeg";
const patioImg = "https://static.wixstatic.com/media/5bd9f2_47eba6f74e5548d0bb48b58fea5f0040~mv2.jpeg";

const services = [
  { image: finishedLawnImg, alt: "Finished Surrey garden with lawn and planted borders", title: "Landscaping", desc: "Full garden redesigns, planting, and lawn restoration." },
  { image: patioImg, alt: "Natural stone patio with timber raised beds", title: "Patios & paving", desc: "Porcelain, natural stone, and drainage done properly." },
  { image: cottageGardenImg, alt: "Cottage garden seating area with flowering borders", title: "Pergolas & structures", desc: "Timber features that frame your outdoor living." },
  { image: plantedBorderImg, alt: "Neat lawn edge with mixed planting beside a fence", title: "Maintenance", desc: "Regular visits to keep borders and hedges sharp." },
  { image: flowerBedImg, alt: "Climbers and flowering plants in a UK garden bed", title: "Tree & hedge work", desc: "Reductions, shaping, and clearance." },
];

const reviews = [
  { quote: "5★ job on our patio — transformed the back garden.", name: "Claire H.", detail: "Google concept" },
  { quote: "Reliable, tidy, and great eye for planting.", name: "Robert M.", detail: "Landscaping" },
  { quote: "Pergola exactly as discussed — highly recommend.", name: "Anna & Ben", detail: "Structures" },
];

export default function Page() {
  return (
    <main>
      <Reveal />
      <section className="relative min-h-[32rem] overflow-hidden py-28 px-6 text-center text-white sm:min-h-[36rem]">
        <ParallaxHeroImage
          src={plantedBorderImg}
          alt="Planted garden border and lawn in a Surrey garden"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--green)]/75 via-[var(--green)]/55 to-black/65"
          aria-hidden
        />
        <div className="reveal-build relative z-10 mx-auto max-w-2xl" data-reveal>
          <p className="text-xs uppercase tracking-widest text-white/95 drop-shadow-sm">7 Sylvaways Close · Cranleigh</p>
          <h1 className="mt-4 font-serif text-5xl drop-shadow-md sm:text-6xl">Gardens transformed.</h1>
          <p className="mt-4 leading-relaxed text-white/95 drop-shadow-sm">
            Demo for The Cranleigh Gardener — 5★ landscaping, patios, pergolas, and maintenance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--green)]">
              Start a project
            </Link>
            <a href="tel:07871388326" className="inline-block rounded-full border border-white px-8 py-3 text-sm font-semibold">
              07871 388326
            </a>
          </div>
        </div>
      </section>

      <section className="section-trust">
        <div className="reveal-build mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm" data-reveal>
          <p><span className="font-bold text-[var(--green)]">5★</span> landscaping</p>
          <p>Cranleigh GU6</p>
          <p>Mon–Fri · quotes by visit</p>
        </div>
      </section>

      <section className="section-services">
        <div className="section-inner">
          <h2 className="reveal-build font-serif text-3xl text-[var(--green)]" data-reveal>Services</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <ServiceCard
                key={s.title}
                image={s.image}
                alt={s.alt}
                title={s.title}
                desc={s.desc}
                className="reveal-build"
                style={{ "--reveal-delay": `${index * 85}ms` } as CSSProperties}
                data-reveal
              />
            ))}
          </ul>
        </div>
      </section>

      <LeafPatternParallax />

      <section className="section-band-green-a">
        <div className="section-inner">
          <div className="reveal-build relative min-h-[28rem] overflow-hidden bg-[#173220] shadow-sm sm:min-h-[34rem]" data-reveal>
            <Image
              src={finishedLawnImg}
              alt="Finished lawn and planting design beside a new-build home"
              fill
              className="object-cover"
              sizes="(max-width: 1152px) calc(100vw - 3rem), 72rem"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#102116]/80 via-[#102116]/28 to-transparent sm:bg-gradient-to-r sm:from-[#102116]/76 sm:via-[#102116]/28 sm:to-transparent"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12">
              <div className="reveal-build max-w-xl bg-[var(--cream)]/94 p-6 shadow-2xl ring-1 ring-white/40 backdrop-blur-sm sm:p-8" data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--moss)]">Local garden craft</p>
                <h2 className="mt-3 font-serif text-3xl text-[var(--green)] sm:text-4xl">Why Cranleigh chooses us</h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  From overgrown plots to finished patios and pergolas, we focus on craftsmanship and clear communication —
                  backed by 5★ reviews and local references in this demo concept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        bandClassName="section-band-brown-a"
        image={cottageGardenImg}
        imageAlt="Cottage-style garden planting around a seating area"
        title="Book a site visit"
        body="7 Sylvaways Close — free quotes for landscaping and hard landscaping. Demo site."
        primaryHref="/contact"
        primaryLabel="Get a quote"
        secondaryHref="tel:07871388326"
        secondaryLabel="07871 388326"
      />

      <LeafPatternParallax />

      <section className="section-band-green-b">
        <div className="section-inner">
          <h2 className="reveal-build font-serif text-3xl text-[var(--green)]" data-reveal>Client reviews</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((r, index) => (
              <li
                key={r.name}
                className="reveal-build rounded-xl bg-white p-6 shadow-sm"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-4 font-semibold">{r.name}</p>
                <p className="text-xs text-[var(--muted)]">{r.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-band-brown-b">
        <div className="section-inner pb-14">
          <h2 className="reveal-build font-serif text-3xl text-[var(--green)]" data-reveal>Before &amp; after</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="reveal-build relative aspect-[16/10] overflow-hidden" data-reveal>
              <Image src={plantedBorderImg} alt="Curved lawn with established mixed planting" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="reveal-build relative aspect-[16/10] overflow-hidden" data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
              <Image src={patioImg} alt="Completed stone patio and timber raised beds" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        bandClassName="section-band-green-c"
        reverse
        image={rosePlantingImg}
        imageAlt="Pink roses growing in a mature garden border"
        title="Ready for a new garden?"
        body="Patios, pergolas, planting, and maintenance — call or message to start."
        primaryHref="tel:07871388326"
        primaryLabel="Call now"
        secondaryHref="/contact"
        secondaryLabel="Contact form"
      />
    </main>
  );
}
