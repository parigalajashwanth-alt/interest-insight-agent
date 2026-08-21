import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 lg:grid-cols-[auto_1fr_auto] lg:px-8",
          solid ? "py-3" : "py-5",
        )}
      >
        <Link to="/" className="group min-w-0">
          <span className="block truncate font-display text-xl tracking-[0.14em] text-foreground transition-colors group-hover:text-primary md:text-2xl">
            {RESTAURANT.name.toUpperCase()}
          </span>
          <span className="mt-0.5 hidden text-[0.6rem] tracking-[0.36em] text-primary/80 sm:block">
            {RESTAURANT.tagline.toUpperCase()}
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative block py-1 text-[0.78rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[status=active]:text-primary"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-400 group-hover:w-full group-data-[status=active]:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/reservations"
            className="hidden shrink-0 border border-primary/60 px-5 py-2.5 text-[0.72rem] tracking-[0.2em] text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Book a Table
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 shrink-0 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-6 py-4">
          {[...NAV_LINKS, { to: "/reservations", label: "Book a Table" }].map((l, i) => (
            <li
              key={l.to}
              style={{ transitionDelay: `${open ? i * 45 : 0}ms` }}
              className={cn(
                "border-b border-border/40 transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
              )}
            >
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block py-4 text-sm tracking-[0.2em] uppercase text-muted-foreground data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
