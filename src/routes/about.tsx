import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import {
  ABOUT_HEADING_1,
  ABOUT_HEADING_HIGHLIGHT,
  ABOUT_LABEL,
  ABOUT_META_DESC,
  ABOUT_META_TITLE,
  ABOUT_OG_TITLE,
  ABOUT_SUBTEXT,
  ABOUT_TEAM_HEADING,
  ABOUT_TEAM_LABEL,
  ABOUT_TEAM_SUBTEXT,
} from "@/constants/strings";
import details from "@/constants/details.json";

const teamImgMap: Record<string, string> = {
  "team-1": team1,
  "team-2": team2,
  "team-3": team3,
  "team-4": team4,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: ABOUT_META_TITLE },
      { name: "description", content: ABOUT_META_DESC },
      { property: "og:title", content: ABOUT_OG_TITLE },
      { property: "og:description", content: ABOUT_META_DESC },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{ABOUT_LABEL}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {ABOUT_HEADING_1} <span className="italic text-primary">{ABOUT_HEADING_HIGHLIGHT}</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {ABOUT_SUBTEXT}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {details.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-bold text-card-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{ABOUT_TEAM_LABEL}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {ABOUT_TEAM_HEADING}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{ABOUT_TEAM_SUBTEXT}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.team.map((m) => (
              <article key={m.emp} className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={teamImgMap[m.img]}
                    alt={`${m.name}, ${m.role}`}
                    width={640}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
                    {m.emp}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-card-foreground">{m.name}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{m.role}</p>
                  </div>
                  <div className="flex shrink-0 gap-1.5">
                    <a aria-label={`${m.name} on LinkedIn`} href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a aria-label={`${m.name} on Twitter`} href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
