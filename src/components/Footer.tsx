import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  FOOTER_CONTACT_HEADING,
  FOOTER_COPYRIGHT,
  FOOTER_EXPLORE_HEADING,
  FOOTER_PROGRAMS_HEADING,
  FOOTER_TAGLINE,
  ORG_ADDRESS,
  ORG_EMAIL,
  ORG_FULL_NAME,
  ORG_NAME,
  ORG_PHONE,
  ORG_PHONE_HREF,
  ORG_SUBTITLE,
} from "@/constants/strings";
import details from "@/constants/details.json";

const socialIconMap: Record<string, React.ElementType> = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt={ORG_FULL_NAME} width={40} height={40} className="h-10 w-10" loading="lazy" />
              <div className="leading-tight">
                <div className="text-base font-bold text-foreground">{ORG_NAME}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{ORG_SUBTITLE}</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{FOOTER_TAGLINE}</p>
            <div className="mt-5 flex gap-2">
              {details.socialLinks.map(({ platform, href }) => {
                const Icon = socialIconMap[platform];
                return (
                  <a
                    key={platform}
                    href={href}
                    aria-label={platform}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{FOOTER_EXPLORE_HEADING}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {details.footerNav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{FOOTER_PROGRAMS_HEADING}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {details.footerPrograms.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="hover:text-primary">{p.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{FOOTER_CONTACT_HEADING}</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{ORG_ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={ORG_PHONE_HREF} className="hover:text-primary">{ORG_PHONE}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${ORG_EMAIL}`} className="hover:text-primary">{ORG_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>{FOOTER_COPYRIGHT}</p>
          <div className="flex gap-5">
            {details.footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-primary">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
