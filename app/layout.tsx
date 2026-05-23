import type { Metadata } from "next";
import Link from "next/link";

import { SiteNavigation } from "@/app/components/site-navigation";
import { SocialLinks } from "@/app/components/social-links";
import {
  navItems,
  profile,
  socialLinks,
} from "@/app/lib/portfolio-content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.shortBio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full">
        <div className="site-background" aria-hidden="true" />
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-5 pt-4 sm:px-6 lg:px-8">
          <header className="shell-card sticky top-4 z-50 mb-6 flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link href="/" className="text-2xl font-semibold text-slate-900">
                {profile.name}
              </Link>
              <p className="mt-1 text-sm text-slate-600">{profile.role}</p>
            </div>
            <SiteNavigation items={navItems} orientation="row" />
          </header>

          <div className="flex flex-1 gap-6">
            <aside className="hidden xl:block xl:w-80">
              <div className="sticky top-28 space-y-6">
                <section className="shell-card px-6 py-6">
                  <p className="eyebrow">Hồ sơ cá nhân</p>
                  <div className="profile-orb mt-4">
                    <span>{profile.initials}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {profile.tagline}
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-slate-600">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3">
                      <span className="font-semibold text-slate-900">Địa điểm:</span>{" "}
                      {profile.location}
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3">
                      <span className="font-semibold text-slate-900">Email:</span>{" "}
                      {profile.email}
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3">
                      <span className="font-semibold text-slate-900">
                        Mục tiêu:
                      </span>{" "}
                      {profile.availability}
                    </div>
                  </div>
                </section>

                <section className="shell-card px-6 py-6">
                  <p className="eyebrow">Sidebar / Điều hướng</p>
                  <div className="mt-4">
                    <SiteNavigation items={navItems} orientation="column" />
                  </div>
                  <div className="mt-6">
                    <SocialLinks links={socialLinks} />
                  </div>
                </section>
              </div>
            </aside>

            <main className="flex-1">
              <div className="page-enter">{children}</div>
            </main>
          </div>

          <footer className="shell-card mt-6 flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
                Footer
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Portfolio được tối ưu cho bài nộp môn học, responsive và sẵn
                sàng deploy lên GitHub Pages.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a href={`mailto:${profile.email}`} className="text-sm text-slate-700">
                {profile.email}
              </a>
              <span className="hidden text-slate-300 sm:inline">/</span>
              <a
                href={`tel:${profile.phoneDisplay.replace(/\s+/g, "")}`}
                className="text-sm text-slate-700"
              >
                {profile.phoneDisplay}
              </a>
              <span className="hidden text-slate-300 sm:inline">/</span>
              <SocialLinks links={socialLinks} compact />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
