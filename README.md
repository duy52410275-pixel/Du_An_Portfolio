# Portfolio Next.js

Đây là dự án portfolio cá nhân dùng Next.js App Router, được chuẩn bị theo hướng phù hợp để nộp bài và deploy lên GitHub Pages.

## Tinh nang chinh

- Header, footer, sidebar/nav rõ ràng
- Các trang `Home`, `About`, `CV`, `My Product`, `Contact`
- Social icon có liên kết hoạt động
- Giao diện responsive cho desktop và mobile
- Chuyển trang mượt nhờ client-side navigation của Next.js
- Đã cấu hình sẵn để static export và deploy GitHub Pages

## Chay local

```bash
npm install
npm run dev
```

Mo `http://localhost:3000`.

## Nơi cần sửa thông tin cá nhân

Tất cả nội dung mẫu được đặt tại:

`app/lib/portfolio-content.ts`

Bạn chỉ cần đổi:

- Tên
- Email
- Số điện thoại
- Social links
- Học vấn, kinh nghiệm, dự án

## Build production

```bash
npm run build
```

Sau khi build thành công, bạn sẽ có thư mục `out/`.

## Deploy GitHub Pages

Repo da co workflow tai:

`.github/workflows/deploy.yml`

Huong dan:

1. Push code len GitHub.
2. Vao `Settings` > `Pages`.
3. Chọn `GitHub Actions` làm source.
4. Push lên nhánh `main`, workflow sẽ tự build và deploy.

Workflow đã tự xử lý `basePath`:

- Nếu repo là `username.github.io` thì deploy root domain.
- Nếu repo là repo thường, workflow sẽ dùng đường dẫn `/<ten-repo>`.
