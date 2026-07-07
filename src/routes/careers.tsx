import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Heart, MapPin, Sparkles } from "lucide-react";
import {
  CAREERS_APPLY_BTN,
  CAREERS_HEADING_1,
  CAREERS_HEADING_HIGHLIGHT,
  CAREERS_LABEL,
  CAREERS_META_DESC,
  CAREERS_META_TITLE,
  CAREERS_NO_ROLE_EMAIL_PREFIX,
  CAREERS_NO_ROLE_LINK,
  CAREERS_NO_ROLE_TEXT,
  CAREERS_OG_DESC,
  CAREERS_OG_TITLE,
  CAREERS_OPEN_ROLES_HEADING,
  CAREERS_SUBTEXT,
  ORG_CAREERS_EMAIL,
} from "@/constants/strings";
import details from "@/constants/details.json";

const perkIconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Briefcase,
};

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: CAREERS_META_TITLE },
      { name: "description", content: CAREERS_META_DESC },
      { property: "og:title", content: CAREERS_OG_TITLE },
      { property: "og:description", content: CAREERS_OG_DESC },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 text-center sm:px-6 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {CAREERS_LABEL}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {CAREERS_HEADING_1}{" "}
          <span className="italic text-primary">{CAREERS_HEADING_HIGHLIGHT}</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {CAREERS_SUBTEXT}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {details.perks.map(({ icon, title, body }) => {
            const Icon = perkIconMap[icon];
            return (
              <div key={title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            {CAREERS_OPEN_ROLES_HEADING}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {details.roles.length} positions across India.
          </p>
          {details.roles?.length > 0 ? (
            <ul className="mt-10 divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card">
              {details.roles.map((r) => (
                <li key={r.title}>
                  <a
                    href={`mailto:${ORG_CAREERS_EMAIL}`}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 transition hover:bg-secondary sm:px-6"
                  >
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-card-foreground sm:text-lg">
                        {r.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3 w-3" /> {r.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-3 w-3" /> {r.type}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                      {CAREERS_APPLY_BTN} <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-card-foreground">No Open Positions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We don't have any openings at the moment. Please check back later or send your
                resume to{" "}
                <a
                  href={`mailto:${ORG_CAREERS_EMAIL}`}
                  className="font-medium text-primary hover:underline"
                >
                  {ORG_CAREERS_EMAIL}
                </a>{" "}
                for future opportunities.
              </p>
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-dashed border-border/80 bg-card p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {CAREERS_NO_ROLE_TEXT}{" "}
              <Link to="/about" className="font-semibold text-primary hover:underline">
                {CAREERS_NO_ROLE_LINK}
              </Link>{" "}
              {CAREERS_NO_ROLE_EMAIL_PREFIX}{" "}
              <a
                href={`mailto:${ORG_CAREERS_EMAIL}`}
                className="font-semibold text-primary hover:underline"
              >
                {ORG_CAREERS_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
