import type { Metadata } from "next";

import { PageHero } from "@/app/components/page-hero";
import {
  contactChannels,
  profile,
  socialLinks,
} from "@/app/lib/portfolio-content";
import { SocialLinks } from "@/app/components/social-links";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Liên hệ"
        title="Nếu muốn trao đổi thêm về bài làm hoặc cơ hội thực tập, bạn có thể liên hệ với mình."
        description="Mình để sẵn các kênh liên hệ cơ bản ở đây để người xem tiện kết nối. Sau này chỉ cần thay bằng thông tin thật là có thể dùng ngay."
        actions={[
          {
            href: `mailto:${profile.email}`,
            label: "Gửi email",
            external: true,
          },
          {
            href: `tel:${profile.phoneDisplay.replace(/\s+/g, "")}`,
            label: "Gọi điện",
            secondary: true,
            external: true,
          },
        ]}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {contactChannels.map((item, index) => (
          <article
            key={item.label}
            className={`soft-card fade-card fade-delay-${index + 1}`}
          >
            <p className="eyebrow">{item.label}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              {item.value}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700"
            >
              Mở liên kết
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="soft-card section-shell">
          <p className="eyebrow">Kết nối thêm</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Bạn cũng có thể xem thêm GitHub hoặc nhắn cho mình qua các kênh bên dưới.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Hiện tại mình đang để liên kết mẫu để bạn có thể demo ngay. Chỉ cần
            cập nhật lại URL và thông tin thật là phần này sẽ hoàn chỉnh.
          </p>
          <div className="mt-8">
            <SocialLinks links={socialLinks} />
          </div>
        </article>

        <article className="soft-card section-shell">
          <p className="eyebrow">Gửi tin nhắn nhanh</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Nếu tiện, bạn có thể để lại cho mình một lời nhắn ngắn ở đây.
          </h2>
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="mt-8 grid gap-4"
          >
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Họ và tên
              <input
                name="name"
                type="text"
                placeholder="Nhập tên của bạn"
                className="form-input"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                className="form-input"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Nội dung
              <textarea
                name="message"
                rows={5}
                placeholder="Bạn muốn trao đổi về dự án nào?"
                className="form-input resize-none"
              />
            </label>
            <button type="submit" className="primary-button w-full sm:w-fit">
              Mở ứng dụng email
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}
