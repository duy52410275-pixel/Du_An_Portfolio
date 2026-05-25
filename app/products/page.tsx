import type { Metadata } from "next";

import { PageHero } from "@/app/components/page-hero";
import { processSteps, projects } from "@/app/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Dự án",
};

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Dự án"
        title="Đây là một vài dự án mình dùng để luyện tay và thể hiện cách mình làm giao diện web."
        description="Mỗi dự án ở đây đều giúp mình học thêm một chút, từ chia bố cục, viết code cho tới cách trình bày nội dung sao cho gọn và dễ nhìn."
      />

      <section className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`soft-card fade-card fade-delay-${index + 1} flex flex-col`}
          >
            <div className="project-glow" />
            <p className="eyebrow">{project.category}</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="skill-chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Điểm nhấn
                </h3>
                <p className="mt-2">{project.highlight}</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Kết quả
                </h3>
                <p className="mt-2">{project.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="soft-card section-shell">
        <p className="eyebrow">Quy trình làm việc</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">
          Đây là cách mình thường làm một bài frontend từ lúc đọc đề đến khi hoàn thiện.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`soft-card inset-card fade-card fade-delay-${index + 1}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
