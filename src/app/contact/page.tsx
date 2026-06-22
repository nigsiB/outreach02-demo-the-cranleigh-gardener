import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const contactHeroImg =
  "https://static.wixstatic.com/media/5bd9f2_2e6bc4b45da1415f98e69e1817086455~mv2.jpeg";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Reveal />
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
        <div className="reveal-build relative min-h-[min(50vw,28rem)] lg:h-full lg:min-h-0" data-reveal>
          <Image
            src={contactHeroImg}
            alt="Cottage-style planting and seating in a Cranleigh garden"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center bg-[var(--bg-card)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto flex w-full max-w-md flex-col">
            <div className="reveal-build mb-8 flex flex-col items-center text-center" data-reveal>
              <Link href="/" className="inline-flex rounded-sm bg-white px-4 py-3 shadow-sm ring-1 ring-[var(--border-subtle)]">
                <Image src="/original-on-transparent.png" alt="The Cranleigh Gardener" width={743} height={180} className="h-auto w-[220px] sm:w-[260px]" />
              </Link>
              <p className="mt-2 text-xs uppercase tracking-widest text-[var(--moss)]">
                Landscaping · Cranleigh
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">7 Sylvaways Close</p>
            </div>
            <h1 className="reveal-build text-center font-serif text-3xl text-[var(--green)]" data-reveal>Contact</h1>
            <p className="reveal-build mt-2 text-center text-sm text-[var(--muted)]" data-reveal>Demo enquiry form.</p>
            <div className="reveal-build mt-8" data-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
