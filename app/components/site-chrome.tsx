"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WORDPRESS_ORIGIN = "https://scottfordhouseinc.com";

type NavigationItem = {
  label: string;
  href: string;
  localPath?: string;
  emphasis?: boolean;
};

const navigation: readonly NavigationItem[] = [
  { label: "Home", href: `${WORDPRESS_ORIGIN}/` },
  { label: "About", href: `${WORDPRESS_ORIGIN}/about/` },
  { label: "Voices", href: "/voices/", localPath: "/voices/" },
  { label: "History", href: `${WORDPRESS_ORIGIN}/history/` },
  { label: "Monument", href: "/", localPath: "/" },
  { label: "Midwives Database", href: "/database/", localPath: "/database/" },
  { label: "Archive", href: "/archive/", localPath: "/archive/" },
  { label: "Events", href: `${WORDPRESS_ORIGIN}/?post_type=tribe_events` },
  {
    label: "Donate",
    href: "https://cffms.fcsuite.com/erp/donate/list/event?event_date_id=3607",
    emphasis: true,
  },
] as const;

export function PrimaryNavigation() {
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;

  const renderLinks = (items: readonly NavigationItem[]) => items.map((item) => {
    const props = {
      className: item.emphasis ? "navigation-donate" : undefined,
      "aria-current": item.localPath === normalizedPath ? "page" as const : undefined,
    };
    return item.localPath
      ? <Link href={item.href} key={item.label} {...props}>{item.label}</Link>
      : <a href={item.href} key={item.label} {...props}>{item.label}</a>;
  });

  return <>
    <nav className="primary-navigation" aria-label="Primary navigation">
      {renderLinks(navigation)}
    </nav>
    <details className="mobile-navigation">
      <summary>Menu</summary>
      <nav aria-label="Mobile primary navigation">
        {renderLinks(navigation)}
      </nav>
    </details>
  </>;
}

export function SiteBrand() {
  return (
    <Link className="site-brand" href={WORDPRESS_ORIGIN} aria-label="Scott Ford Houses home">
      <Image src="/images/site/scott-ford-houses-logo.png" width={91} height={91} alt="" priority />
      <span>Scott Ford Houses Inc.</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header interior-site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteBrand />
      <PrimaryNavigation />
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
  const nextSteps: Record<string, readonly [string, string, string]> = {
    "/": ["Continue through the monument", "Meet the midwives", "/database/"],
    "/voices/": ["Continue through the monument", "Meet the midwives", "/database/"],
    "/database/": ["Continue through the monument", "Examine the archive", "/archive/"],
    "/archive/": ["Return to the ceremonial threshold", "Enter the monument", "/"],
    "/project/": ["Return to the ceremonial threshold", "Enter the monument", "/"],
  };
  const [nextEyebrow, nextLabel, nextHref] = nextSteps[normalizedPath] ?? nextSteps["/"];

  return (
    <footer className="site-footer">
      <Link className="footer-next" href={nextHref}>
        <span>{nextEyebrow}</span><strong>{nextLabel}</strong><i aria-hidden="true">→</i>
      </Link>
      <div className="footer-identity"><Link className="wordmark" href="/" aria-label="Return to the Wombs of Wisdom monument"><span>Wombs of Wisdom</span><small>The Midwives&apos; Digital Monument</small></Link><p>Names, labor, and memory held across Mississippi.</p></div>
      <nav className="footer-navigation" aria-label="Footer navigation">{navigation.map((item) => item.localPath ? <Link href={item.href} key={item.label}>{item.label}</Link> : <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
      <p className="footer-funder"><a href="https://monumentlab.com/projects/regeneration-2026" target="_blank" rel="noreferrer">A Monument Lab Re:Generation 2026 project · Major support provided by the Mellon Foundation ↗</a></p>
    </footer>
  );
}
