import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600&q=80", alt: "Garden landscaping", title: "Landscaping", desc: "Full garden redesigns, planting, and lawn restoration." },
  { image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80", alt: "Garden patio paving", title: "Patios & paving", desc: "Porcelain, natural stone, and drainage done properly." },
  { image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80", alt: "Garden pergola structure", title: "Pergolas & structures", desc: "Timber features that frame your outdoor living." },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Garden maintenance", title: "Maintenance", desc: "Regular visits to keep borders and hedges sharp." },
  { image: "https://images.unsplash.com/photo-1643701079732-3b1c7a797e3d?auto=format&fit=crop&w=600&q=80", alt: "Tree and hedge work", title: "Tree & hedge work", desc: "Reductions, shaping, and clearance." },
];

const reviews = [
  { quote: "5★ job on our patio — transformed the back garden.", name: "Claire H.", detail: "Google concept" },
  { quote: "Reliable, tidy, and great eye for planting.", name: "Robert M.", detail: "Landscaping" },
  { quote: "Pergola exactly as discussed — highly recommend.", name: "Anna & Ben", detail: "Structures" },
];

export default function Page() {
  return (
    <main>
      <section className="relative min-h-[32rem] overflow-hidden py-28 px-6 text-center text-white sm:min-h-[36rem]">
        <Image
          src={heroImg}
          alt="Landscaped garden"
          fill
          className="object-cover brightness-[0.72] saturate-[0.92]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--green)]/75 via-[var(--green)]/55 to-black/65"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl">
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
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-bold text-[var(--green)]">5★</span> landscaping</p>
          <p>Cranleigh GU6</p>
          <p>Mon–Fri · quotes by visit</p>
        </div>
      </section>

      <section className="section-services">
        <div className="section-inner">
          <h2 className="font-serif text-3xl text-[var(--green)]">Services</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section-band-green-a">
        <div className="section-inner">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={aboutImg} alt="Garden patio project" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[var(--green)]">Why Cranleigh chooses us</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                From overgrown plots to finished patios and pergolas, we focus on craftsmanship and clear communication —
                backed by 5★ reviews and local references in this demo concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        bandClassName="section-band-brown-a"
        image={galleryImg}
        imageAlt="Pergola and planting"
        title="Book a site visit"
        body="7 Sylvaways Close — free quotes for landscaping and hard landscaping. Demo site."
        primaryHref="/contact"
        primaryLabel="Get a quote"
        secondaryHref="tel:07871388326"
        secondaryLabel="07871 388326"
      />

      <section className="section-band-green-b">
        <div className="section-inner">
          <h2 className="font-serif text-3xl text-[var(--green)]">Client reviews</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.name} className="rounded-xl bg-white p-6 shadow-sm">
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
          <h2 className="font-serif text-3xl text-[var(--green)]">Before &amp; after</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={heroImg} alt="Garden transformation" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={galleryImg} alt="Patio and borders" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        bandClassName="section-band-green-c"
        reverse
        image={aboutImg}
        imageAlt="The Cranleigh Gardener"
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
