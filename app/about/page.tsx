import type { Metadata } from "next";

import { PageHero } from "@/app/components/page-hero";
import { strengths, studyFocus, toolkit } from "@/app/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Giới thiệu",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Giới thiệu"
        title="Câu chuyện cá nhân, định hướng học tập và cách tôi xây dựng sản phẩm web."
        description="Trang này tập trung vào con người đứng sau dự án: tư duy học hỏi, phong cách làm việc và những công cụ đang theo đuổi để trở thành một frontend developer vững vàng."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="soft-card section-shell">
          <p className="eyebrow">Tôi là ai</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Yêu thích biến ý tưởng thành giao diện rõ ràng, có hệ thống và dễ sử dụng.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              Tôi định hướng trở thành frontend developer có khả năng kết nối
              giữa thiết kế, trải nghiệm người dùng và implementation. Mỗi dự
              án là cơ hội để rèn luyện tư duy bố cục, khả năng tổ chức mã nguồn
              và cách trình bày thông tin chuyên nghiệp.
            </p>
            <p>
              Ngoài việc học React và Next.js, tôi cũng chú trọng cách viết code
              dễ đọc, dễ bảo trì, tái sử dụng được và phù hợp với biểu mẫu nộp
              bài, portfolio cá nhân hoặc landing page cho dự án nhỏ.
            </p>
          </div>
        </article>

        <article className="soft-card section-shell">
          <p className="eyebrow">Định hướng</p>
          <div className="mt-4 space-y-4">
            {studyFocus.map((item, index) => (
              <div
                key={item.title}
                className={`soft-card inset-card fade-card fade-delay-${index + 1}`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {strengths.map((item, index) => (
          <article
            key={item.title}
            className={`soft-card fade-card fade-delay-${index + 1}`}
          >
            <p className="eyebrow">Điểm mạnh</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="soft-card section-shell">
        <p className="eyebrow">Công cụ và công nghệ</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">
          Bộ kỹ năng đang được ưu tiên để hoàn thành các bài đồ án frontend.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {toolkit.map((tool) => (
            <span key={tool} className="skill-chip">
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
