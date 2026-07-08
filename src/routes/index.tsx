import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, HeartHandshake, Leaf, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { DonateDialog } from "@/components/DonateDialog";
import {
  CTA_BTN_DONATE,
  CTA_BTN_JOIN,
  CTA_HEADING,
  CTA_SUBTEXT,
  HERO_BADGE,
  HERO_BTN_DONATE,
  HERO_BTN_TEAM,
  HERO_HEADING_1,
  HERO_HEADING_2,
  HERO_HEADING_HIGHLIGHT,
  HERO_HIGHLIGHT_MONTH,
  HERO_HIGHLIGHT_TEXT,
  HERO_IMG_ALT,
  HERO_SUBTEXT,
  ORG_EMAIL,
  PROGRAMS_HEADING,
  PROGRAMS_LABEL,
  PROGRAMS_SUBTEXT,
} from "@/constants/strings";
import details from "@/constants/details.json";

export const Route = createFileRoute("/")({ component: Index });

const programIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Leaf,
  HeartHandshake,
  Users,
};

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {HERO_BADGE}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {HERO_HEADING_1} <span className="italic text-primary">{HERO_HEADING_HIGHLIGHT}</span> {HERO_HEADING_2}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {HERO_SUBTEXT}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* <DonateDialog>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90"
                >
                  {HERO_BTN_DONATE} <ArrowRight className="h-4 w-4" />
                </button>
              </DonateDialog> */}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                {HERO_BTN_TEAM}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {details.impact.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-black text-foreground sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-hero)] opacity-30 blur-2xl" />
            <img
              src={hero}
              alt={HERO_IMG_ALT}
              width={1600}
              height={1000}
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-border/60 bg-card p-4 shadow-lg sm:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{HERO_HIGHLIGHT_MONTH}</p>
              <p className="mt-1 text-sm text-foreground">{HERO_HIGHLIGHT_TEXT}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{PROGRAMS_LABEL}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {PROGRAMS_HEADING}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">{PROGRAMS_SUBTEXT}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.programs.map(({ icon, title, body }) => {
              const Icon = programIconMap[icon];
              return (
                <article
                  key={title}
                  className="group rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="donate" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-primary-foreground sm:text-4xl">
            {CTA_HEADING}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
            {CTA_SUBTEXT}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* <DonateDialog>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
              >
                {CTA_BTN_DONATE} <ArrowRight className="h-4 w-4" />
              </button>
            </DonateDialog> */}
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              {CTA_BTN_JOIN}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
