"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/app/lib/portfolio-content";

type SiteNavigationProps = {
  items: NavItem[];
  orientation?: "row" | "column";
};

export function SiteNavigation({
  items,
  orientation = "row",
}: SiteNavigationProps) {
  const pathname = usePathname();
  const isColumn = orientation === "column";

  return (
    <nav
      aria-label="Điều hướng chính"
      className={
        isColumn
          ? "flex flex-col gap-2"
          : "flex flex-wrap items-center gap-2 lg:justify-end"
      }
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-teal-700 text-white shadow-lg shadow-teal-900/10"
                : "bg-white/70 text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            } ${isColumn ? "w-full text-left" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
