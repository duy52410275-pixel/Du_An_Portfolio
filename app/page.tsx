import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/app/components/page-hero";
import {
  highlightCards,
  homeMilestones,
  profile,
  strengths,
} from "@/app/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Portfolio cá nhân"
        title="Xin chào, mình là Duy. Đây là nơi mình giới thiệu bản thân và những gì mình đã làm trong quá trình học web."
        description={`${profile.shortBio} Nếu bạn muốn xem nhanh phần học vấn, dự án và cách liên hệ với mình thì mọi thứ đều có sẵn ở đây.`}
        actions={[
          { href: "/products", label: "Xem dự án" },
          { href: "/contact", label: "Liên hệ nhanh", secondary: true },
        ]}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {homeMilestones.map((item, index) => (
            <article
              key={item.label}
              className={`soft-card fade-card fade-delay-${index + 1}`}
            >
              <p className="text-3xl font-semibold text-slate-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </PageHero>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlightCards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className={`soft-card fade-card fade-delay-${index + 1} group flex h-full flex-col justify-between`}
          >
            <div>
              <p className="eyebrow">{card.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-transform group-hover:translate-x-1">
              Mở chi tiết
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="soft-card section-shell">
          <p className="eyebrow">Giới thiệu nhanh</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Mình muốn portfolio này nhìn gọn, dễ đọc và thể hiện đúng những gì mình đang có.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Khi làm dự án này, mình ưu tiên cách trình bày rõ ràng để người xem
            có thể hiểu nhanh mình là ai, đang học ở đâu và mình đã làm được gì
            trong quá trình học. Mình cũng cố gắng giữ giao diện đơn giản, dễ
            nhìn để sau này có thể tiếp tục cập nhật thành portfolio cá nhân
            thật của mình.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className={`soft-card inset-card fade-card fade-delay-${index + 1}`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {strength.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <aside className="soft-card section-shell flex flex-col justify-between">
          <div>
            <p className="eyebrow">Thông tin nhanh</p>
            <div className="profile-orb mt-4">
              <span>{profile.initials}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900">
              {profile.name}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {profile.tagline}
            </p>
          </div>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
              <span>Định hướng</span>
              <span className="font-semibold text-slate-900">{profile.role}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
              <span>Khu vực</span>
              <span className="font-semibold text-slate-900">
                {profile.location}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Hiện tại</span>
              <span className="status-pill">{profile.availability}</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
