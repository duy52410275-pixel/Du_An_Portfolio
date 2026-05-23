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
        title="Một chút về mình, cách mình học và cách mình làm các sản phẩm web."
        description="Trang này không chỉ nói về kỹ năng, mà còn là cách mình suy nghĩ, học hỏi và cải thiện dần qua từng bài làm."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="soft-card section-shell">
          <p className="eyebrow">Tôi là ai</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Mình thích biến những ý tưởng còn thô thành giao diện gọn gàng, dễ nhìn và dễ dùng.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              Mình đang theo định hướng frontend vì thích cảm giác biến một bản
              phác thảo hoặc ý tưởng thành thứ có thể nhìn thấy và tương tác
              được. Mỗi bài làm là một lần mình học thêm về bố cục, màu sắc và
              cách sắp xếp nội dung cho hợp lý.
            </p>
            <p>
              Ngoài việc học React và Next.js, mình cũng cố gắng viết code theo
              hướng dễ đọc, dễ sửa và có thể dùng lại. Mình muốn những bài làm
              không chỉ đủ để nộp mà còn đủ gọn để sau này tiếp tục phát triển.
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
          Đây là những công cụ mình đang dùng nhiều nhất trong quá trình học và làm đồ án.
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
