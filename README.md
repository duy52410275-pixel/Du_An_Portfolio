# Portfolio cá nhân - Phạm Bảo Duy

Đây là website portfolio cá nhân của **Phạm Bảo Duy**, được xây dựng bằng **Next.js** để phục vụ cho bài đồ án môn học và cũng có thể dùng làm trang giới thiệu bản thân sau này.

Website tập trung vào cách trình bày gọn gàng, dễ đọc và đủ thông tin cơ bản như giới thiệu bản thân, học vấn, kỹ năng, dự án và phần liên hệ.

## Thông tin chính

- Họ và tên: `Phạm Bảo Duy`
- Vai trò: `Sinh viên CNTT-UDPM, định hướng làm web bán hàng`
- Trường: `Cao đẳng Việt Mỹ`
- Email: `duy52410275@caodangvietmy.edu.vn`
- GitHub: `https://github.com/duy52410275-pixel`

## Tính năng

- Có đầy đủ các trang: `Trang chủ`, `Giới thiệu`, `CV`, `Dự án`, `Liên hệ`
- Giao diện responsive cho desktop và mobile
- Header, footer và menu điều hướng rõ ràng
- Nội dung được tách riêng để dễ chỉnh sửa
- Có liên kết GitHub và email
- Nút email mở thẳng `Gmail compose`
- Có cấu hình sẵn để build static và deploy lên `GitHub Pages`

## Công nghệ sử dụng

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`

## Chạy project ở máy local

```bash
npm install
npm run dev
```

Sau đó mở:

```txt
http://localhost:3000
```

## Build production

```bash
npm run build
```

Sau khi build xong, project sẽ xuất ra thư mục `out/`.

## Cấu trúc nội dung chính

Phần thông tin cá nhân và nội dung hiển thị chính nằm ở:

```txt
app/lib/portfolio-content.ts
```

Nếu muốn cập nhật thêm thông tin sau này, chỉ cần sửa ở đây:

- Thông tin cá nhân
- Học vấn
- Kinh nghiệm
- Kỹ năng
- Dự án
- Liên hệ và mạng xã hội

## Deploy lên GitHub Pages

Project đã có sẵn workflow tại:

```txt
.github/workflows/deploy.yml
```

Các bước deploy:

1. Commit và push code lên GitHub
2. Vào `Settings` > `Pages`
3. Chọn `GitHub Actions`
4. Push lên nhánh `main` để workflow tự build và deploy

## Ghi chú

- Hiện tại phần liên hệ ưu tiên `Email` và `GitHub`
- Nếu sau này có thêm `Facebook`, `LinkedIn` hoặc `Zalo`, chỉ cần thêm link vào file dữ liệu là dùng được ngay
- File CV tạm hiện nằm ở:

```txt
public/portfolio-cv.txt
```
