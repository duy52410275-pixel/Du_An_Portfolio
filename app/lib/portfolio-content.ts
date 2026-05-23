export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "facebook" | "mail";
};

type TimelineItem = {
  period: string;
  title: string;
  location: string;
  description: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ProjectItem = {
  category: string;
  title: string;
  description: string;
  highlight: string;
  outcome: string;
  stack: string[];
};

export const profile = {
  name: "Tên Của Bạn",
  initials: "TB",
  role: "Lập trình viên Frontend / Người yêu UI",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "ban@example.com",
  phoneDisplay: "+84 90 000 0000",
  tagline:
    "Sinh viên yêu thích xây dựng web portfolio, landing page và giao diện có bố cục rõ ràng.",
  shortBio:
    "Portfolio được thiết kế để giới thiệu bản thân, CV, dự án và thông tin liên hệ trong một giao diện hiện đại, dễ chỉnh sửa.",
  availability: "Sẵn sàng cho internship",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/cv", label: "CV" },
  { href: "/products", label: "Dự án" },
  { href: "/contact", label: "Liên hệ" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const homeMilestones = [
  { value: "05", label: "Trang nội dung chính" },
  { value: "100%", label: "Responsive cho mobile" },
  { value: "GitHub", label: "Sẵn sàng deploy Pages" },
];

export const highlightCards = [
  {
    href: "/about",
    eyebrow: "Giới thiệu",
    title: "Bản sắc cá nhân",
    description:
      "Nơi tóm tắt câu chuyện, mục tiêu và phong cách học tập để người xem hiểu bạn nhanh hơn.",
  },
  {
    href: "/cv",
    eyebrow: "CV",
    title: "Hồ sơ năng lực",
    description:
      "Timeline học vấn, kinh nghiệm, kỹ năng và thành tựu được trình bày gọn, dễ theo dõi.",
  },
  {
    href: "/products",
    eyebrow: "Dự án",
    title: "Sản phẩm tiêu biểu",
    description:
      "Tập trung vào các bài toán đã giải quyết, công nghệ sử dụng và giá trị tạo ra cho người dùng.",
  },
  {
    href: "/contact",
    eyebrow: "Liên hệ",
    title: "Kết nối nhanh",
    description:
      "Thông tin liên hệ, social icons hoạt động và form mailto để demo ngay không cần backend.",
  },
];

export const strengths = [
  {
    title: "Bố cục có chủ đích",
    description:
      "Mỗi trang đều được chia thành khối nội dung rõ ràng để đảm bảo người xem không bị rối và tìm được thông tin nhanh.",
  },
  {
    title: "Code có thể mở rộng",
    description:
      "Dữ liệu được tách riêng thành file content giúp sửa thông tin cá nhân nhanh mà không cần động vào giao diện.",
  },
  {
    title: "Sẵn sàng nộp bài",
    description:
      "Dự án đã có nav, footer, responsive, liên kết social và workflow deploy lên GitHub Pages.",
  },
];

export const studyFocus = [
  {
    title: "Frontend fundamentals",
    description:
      "Tập trung vào HTML semantic, CSS layout, responsive design, accessibility cơ bản và cách tổ chức component hợp lý.",
  },
  {
    title: "React va Next.js",
    description:
      "Sử dụng App Router để tách route rõ ràng, tái sử dụng layout chung và giữ trải nghiệm điều hướng mượt mà.",
  },
  {
    title: "UI writing và trình bày",
    description:
      "Chú trọng cách viết tiêu đề, mô tả và microcopy để portfolio vừa đẹp vừa dễ đọc, đúng chất bài giới thiệu bản thân.",
  },
];

export const toolkit = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Git",
  "GitHub",
  "Responsive Design",
  "SEO cơ bản",
];

export const educationTimeline: TimelineItem[] = [
  {
    period: "2022 - 2026",
    title: "Cử nhân Công nghệ thông tin",
    location: "Trường đại học / cao đẳng của bạn",
    description:
      "Học các môn nền tảng về lập trình, cơ sở dữ liệu, phân tích thiết kế hệ thống và phát triển ứng dụng web.",
  },
  {
    period: "2025",
    title: "Đồ án giao diện web cá nhân",
    location: "Môn học chuyên ngành",
    description:
      "Phát triển website portfolio gồm thông tin cá nhân, CV, dự án, contact và quy trình deploy lên GitHub.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2025 - hiện tại",
    title: "Frontend practice projects",
    location: "Tự học và làm bài tập lớn",
    description:
      "Xây dựng landing page, dashboard nhỏ và portfolio để rèn luyện chia layout, quản lý state nhẹ và tối ưu trải nghiệm người dùng.",
  },
  {
    period: "2024 - 2025",
    title: "Làm việc nhóm trong đồ án môn học",
    location: "Team 2 - 4 thành viên",
    description:
      "Phân công công việc, tạo branch, commit lên GitHub và trình bày sản phẩm cuối kỳ trong nhóm.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Nền tảng frontend",
    items: ["HTML", "CSS", "Tailwind", "Responsive Layout", "Animation cơ bản"],
  },
  {
    title: "Hệ sinh thái JavaScript",
    items: ["JavaScript", "TypeScript", "React", "Next.js App Router"],
  },
  {
    title: "Công cụ",
    items: ["Git", "GitHub", "Figma", "VS Code", "npm"],
  },
];

export const achievements = [
  {
    title: "Cấu trúc rõ ràng",
    description:
      "Chia nội dung thành từng route riêng để portfolio dễ mở rộng và dễ đánh giá.",
  },
  {
    title: "Deploy-friendly",
    description:
      "Cấu hình static export và workflow GitHub Pages giúp đưa bài lên online nhanh hơn.",
  },
  {
    title: "Thiết kế responsive",
    description:
      "Bố cục đã được tính cho mobile, tablet và desktop để không vỡ layout khi demo.",
  },
  {
    title: "Content-first",
    description:
      "Văn bản mẫu đủ thông tin, dễ sửa thành profile thực tế mà không cần viết lại giao diện.",
  },
];

export const projects: ProjectItem[] = [
  {
    category: "E-commerce UI",
    title: "Trang giới thiệu cửa hàng thời trang",
    description:
      "Xây dựng giao diện bán hàng có hero section, danh mục sản phẩm, feedback khách hàng và CTA rõ ràng.",
    highlight:
      "Tập trung vào bố cục, màu sắc thu hút và cách sắp xếp card sản phẩm để tạo cảm giác hiện đại.",
    outcome:
      "Phù hợp để demo kỹ năng responsive, navigation và cách tổ chức giao diện marketing page.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Education Platform",
    title: "Landing page khóa học online",
    description:
      "Trình bày nội dung cho một nền tảng học tập với section về giảng viên, lộ trình học và đăng ký học thử.",
    highlight:
      "Chú ý tới hierarchy thông tin, typography và các CTA để người xem nhanh hiểu được giá trị khóa học.",
    outcome:
      "Là một case study tốt để chứng minh khả năng viết giao diện có cấu trúc nội dung đầy đủ.",
    stack: ["React", "UI Design", "Component Architecture"],
  },
  {
    category: "Personal Branding",
    title: "Portfolio cá nhân",
    description:
      "Website giới thiệu bản thân, CV, sản phẩm và thông tin liên hệ với bố cục chuyên nghiệp.",
    highlight:
      "Sử dụng layout chung, sidebar điều hướng, card thông tin và hiệu ứng nhẹ để website sống động hơn.",
    outcome:
      "Đạt yêu cầu bài đồ án: đầy đủ trang, social links, responsive, smooth navigation và deploy GitHub.",
    stack: ["Next.js", "Static Export", "GitHub Pages"],
  },
];

export const processSteps = [
  {
    title: "Phân tích đề bài",
    description:
      "Xác định danh sách trang bắt buộc, điều hướng, dữ liệu cần có và cách thỏa điều kiện nộp bài.",
  },
  {
    title: "Dựng wireframe",
    description:
      "Phân bổ hero, card, timeline, footer và sidebar trước khi viết code để tránh rối bố cục.",
  },
  {
    title: "Implementation",
    description:
      "Tách layout chung, component tái sử dụng và file dữ liệu để về sau dễ chỉnh sửa nhanh hơn.",
  },
  {
    title: "Kiểm tra và deploy",
    description:
      "Chạy lint, build, sau đó push lên GitHub và bật GitHub Pages để tạo domain free online.",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    description: "Kênh phù hợp để gửi CV, trao đổi đề bài hoặc phản hồi về portfolio.",
    href: `mailto:${profile.email}`,
  },
  {
    label: "Điện thoại",
    value: profile.phoneDisplay,
    description: "Dùng cho nhu cầu liên hệ nhanh khi cần demo, phỏng vấn hoặc xác nhận lịch hẹn.",
    href: `tel:${profile.phoneDisplay.replace(/\s+/g, "")}`,
  },
  {
    label: "Địa điểm",
    value: profile.location,
    description: "Có thể cập nhật thành thành phố, trường học hoặc khu vực làm việc mong muốn.",
    href: "https://maps.google.com",
  },
  {
    label: "GitHub",
    value: "github.com",
    description: "Nơi để đặt source code, lịch sử commit và các bài làm khác để giảng viên dễ kiểm tra.",
    href: "https://github.com",
  },
];
