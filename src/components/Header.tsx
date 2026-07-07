import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useTheme } from "@/lib/theme";
import { DonateDialog } from "@/components/DonateDialog";
import {
  HEADER_DONATE_BTN,
  HEADER_LOGO_ALT,
  HEADER_MENU,
  HEADER_TOGGLE_THEME,
  ORG_NAME,
  ORG_SUBTITLE,
} from "@/constants/strings";
import details from "@/constants/details.json";

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt={HEADER_LOGO_ALT} width={40} height={40} className="h-10 w-10 shrink-0" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-base font-bold text-foreground">{ORG_NAME}</div>
            <div className="truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{ORG_SUBTITLE}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {details.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={HEADER_TOGGLE_THEME}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <DonateDialog>
            <button
              type="button"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 sm:inline-flex"
            >
              {HEADER_DONATE_BTN}
            </button>
          </DonateDialog>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={HEADER_MENU}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {details.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
