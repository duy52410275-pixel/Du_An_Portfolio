import type { Metadata } from "next";

import { GmailComposeForm } from "@/app/components/gmail-compose-form";
import { PageHero } from "@/app/components/page-hero";
import {
  contactChannels,
  gmailComposeUrl,
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
        description="Mình để sẵn các kênh liên hệ cơ bản ở đây để ai cần có thể kết nối nhanh với mình."
        actions={[
          {
            href: gmailComposeUrl,
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
            Mình để sẵn kênh liên hệ chính ở đây để ai cần thì có thể kết nối nhanh.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Hiện tại mình đã thêm GitHub và email là hai kênh chính. Sau này nếu
            có thêm Facebook, LinkedIn hoặc Zalo thì mình sẽ cập nhật tiếp vào
            phần này.
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
          <GmailComposeForm email={profile.email} />
        </article>
      </section>
    </div>
  );
}
