import type { Metadata } from "next";

import { PageHero } from "@/app/components/page-hero";
import {
  achievements,
  educationTimeline,
  experienceTimeline,
  skillGroups,
} from "@/app/lib/portfolio-content";

export const metadata: Metadata = {
  title: "CV",
};

export default function CvPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="CV"
        title="Tổng hợp học vấn, kinh nghiệm, kỹ năng và thành tựu trong một bố cục dễ theo dõi."
        description="Thay vì để CV rời rạc, trang này trình bày thành timeline và nhóm kỹ năng rõ ràng. Nhà tuyển dụng có thể xem nhanh và tải file CV mẫu nếu cần."
        actions={[
          {
            href: "/portfolio-cv.txt",
            label: "Tải CV mẫu",
            external: true,
            download: true,
          },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="soft-card section-shell">
          <p className="eyebrow">Học vấn</p>
          <div className="mt-6 space-y-4">
            {educationTimeline.map((item, index) => (
              <div
                key={item.title}
                className={`timeline-card fade-card fade-delay-${index + 1}`}
              >
                <div className="timeline-dot" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
                  {item.period}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">{item.location}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="soft-card section-shell">
          <p className="eyebrow">Kinh nghiệm</p>
          <div className="mt-6 space-y-4">
            {experienceTimeline.map((item, index) => (
              <div
                key={item.title}
                className={`timeline-card fade-card fade-delay-${index + 1}`}
              >
                <div className="timeline-dot" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
                  {item.period}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">{item.location}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className={`soft-card fade-card fade-delay-${index + 1}`}
          >
            <p className="eyebrow">Kỹ năng</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {group.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="soft-card section-shell">
        <p className="eyebrow">Thành tựu và ghi chú</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className={`soft-card inset-card fade-card fade-delay-${index + 1}`}
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
