"use client";

import type { FormEvent } from "react";

type GmailComposeFormProps = {
  email: string;
};

export function GmailComposeForm({ email }: GmailComposeFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const bodyLines = [
      name ? `Họ và tên: ${name}` : "",
      senderEmail ? `Email: ${senderEmail}` : "",
      "",
      message,
    ].filter(Boolean);

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: email,
      su: "Liên hệ từ portfolio",
      body: bodyLines.join("\n"),
    });

    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
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
        Mở Gmail để gửi
      </button>
    </form>
  );
}
