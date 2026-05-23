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
  name: "Tên của bạn",
  initials: "TB",
  role: "Sinh viên CNTT định hướng Frontend",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "ban@example.com",
  phoneDisplay: "+84 90 000 0000",
  tagline:
    "Mình thích làm những giao diện gọn gàng, dễ nhìn và chạy mượt trên cả điện thoại lẫn máy tính.",
  shortBio:
    "Đây là nơi mình giới thiệu ngắn gọn về bản thân, kỹ năng và những dự án đã làm trong quá trình học.",
  availability: "Đang tìm cơ hội thực tập Frontend",
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
  { value: "05", label: "Mục nội dung chính" },
  { value: "100%", label: "Hiển thị tốt trên mobile" },
  { value: "GitHub", label: "Sẵn sàng đưa lên GitHub" },
];

export const highlightCards = [
  {
    href: "/about",
    eyebrow: "Giới thiệu",
    title: "Về bản thân mình",
    description:
      "Một vài dòng ngắn gọn về mình, định hướng đang theo đuổi và cách mình tiếp cận việc học frontend.",
  },
  {
    href: "/cv",
    eyebrow: "CV",
    title: "Thông tin học tập",
    description:
      "Tóm tắt học vấn, kỹ năng và những phần việc mình từng làm theo cách dễ nhìn, dễ theo dõi.",
  },
  {
    href: "/products",
    eyebrow: "Dự án",
    title: "Các dự án đã làm",
    description:
      "Nơi mình gom lại những bài đã làm để cho thấy cách mình xây dựng giao diện và xử lý nội dung.",
  },
  {
    href: "/contact",
    eyebrow: "Liên hệ",
    title: "Liên hệ với mình",
    description:
      "Nếu muốn trao đổi thêm về bài làm hoặc cơ hội thực tập, bạn có thể liên hệ với mình tại đây.",
  },
];

export const strengths = [
  {
    title: "Trình bày rõ ràng",
    description:
      "Mình chia nội dung theo từng phần để người xem dễ theo dõi và tìm được ý chính nhanh hơn.",
  },
  {
    title: "Dễ chỉnh sửa",
    description:
      "Thông tin cá nhân, dự án và liên hệ được tách riêng nên khi cần sửa chỉ cần cập nhật ở một chỗ.",
  },
  {
    title: "Sẵn sàng để nộp",
    description:
      "Trang đã có menu, social link, responsive và có thể deploy ngay lên GitHub Pages để demo hoặc nộp bài.",
  },
];

export const studyFocus = [
  {
    title: "Nền tảng frontend",
    description:
      "Mình đang tập trung học kỹ HTML, CSS, responsive và cách chia bố cục sao cho giao diện vừa đẹp vừa dễ dùng.",
  },
  {
    title: "React và Next.js",
    description:
      "Mình dùng React và Next.js để làm quen với cách tách component, chia route và tổ chức dự án bài bản hơn.",
  },
  {
    title: "Cách trình bày nội dung",
    description:
      "Ngoài phần code, mình cũng để ý cách viết tiêu đề và mô tả để portfolio đọc tự nhiên, không quá khô khan.",
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
      "Trong quá trình học, mình được làm quen với lập trình, cơ sở dữ liệu và các môn nền tảng liên quan đến phát triển web.",
  },
  {
    period: "2025",
    title: "Đồ án giao diện web cá nhân",
    location: "Môn học chuyên ngành",
    description:
      "Mình xây dựng một website portfolio để giới thiệu bản thân, trình bày dự án và luyện cách deploy sản phẩm hoàn chỉnh.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2025 - hiện tại",
    title: "Làm các dự án frontend cá nhân",
    location: "Tự học và làm đồ án",
    description:
      "Mình tự làm landing page, dashboard nhỏ và portfolio để luyện chia layout, xử lý component và cải thiện trải nghiệm người dùng.",
  },
  {
    period: "2024 - 2025",
    title: "Làm việc nhóm trong các môn chuyên ngành",
    location: "Nhóm 2 - 4 thành viên",
    description:
      "Mình tham gia phân chia công việc, tạo branch, commit code lên GitHub và cùng nhóm hoàn thiện bài cuối kỳ.",
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
    title: "Code dễ theo dõi",
    description:
      "Phần nội dung được chia theo từng route và từng khối rõ ràng nên nhìn tổng thể rất dễ theo dõi.",
  },
  {
    title: "Triển khai nhanh",
    description:
      "Dự án đã có sẵn cấu hình export và workflow để đưa bài lên GitHub Pages khá nhanh.",
  },
  {
    title: "Hiển thị linh hoạt",
    description:
      "Bố cục được chỉnh cho mobile, tablet và desktop để khi mở ở đâu cũng không bị vỡ giao diện.",
  },
  {
    title: "Nội dung dễ thay",
    description:
      "Bạn có thể đổi thông tin mẫu thành nội dung thật rất nhanh mà không cần sửa lại toàn bộ giao diện.",
  },
];

export const projects: ProjectItem[] = [
  {
    category: "Giao diện bán hàng",
    title: "Trang giới thiệu cửa hàng thời trang",
    description:
      "Đây là một bài mình làm để luyện cách xây hero section, danh mục sản phẩm và bố trí các nút kêu gọi hành động cho rõ ràng.",
    highlight:
      "Điểm mình chú ý nhất ở bài này là bố cục, màu sắc và cách sắp xếp card sao cho nhìn hiện đại nhưng vẫn dễ xem.",
    outcome:
      "Sau bài này mình tự tin hơn ở phần responsive và cách sắp xếp nội dung cho một landing page bán hàng.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Giáo dục",
    title: "Landing page khóa học online",
    description:
      "Bài này giúp mình luyện cách trình bày nội dung cho một nền tảng học tập với phần giảng viên, lộ trình và đăng ký học thử.",
    highlight:
      "Mình tập trung vào việc sắp xếp thứ tự thông tin để người xem hiểu nhanh khóa học có gì và nên bấm vào đâu tiếp theo.",
    outcome:
      "Đây là bài khá ổn để thể hiện khả năng làm giao diện có nhiều nội dung mà vẫn giữ được sự gọn gàng.",
    stack: ["React", "UI Design", "Component Architecture"],
  },
  {
    category: "Thương hiệu cá nhân",
    title: "Portfolio cá nhân",
    description:
      "Đây là website mình dùng để giới thiệu bản thân, kỹ năng, dự án đã làm và cách liên hệ trong một giao diện thống nhất.",
    highlight:
      "Mình dùng layout chung, sidebar điều hướng và các card nội dung để tổng thể vừa gọn vừa dễ đọc.",
    outcome:
      "Bài này đáp ứng được yêu cầu đồ án và cũng có thể dùng làm portfolio cá nhân thật sau khi thay nội dung.",
    stack: ["Next.js", "Static Export", "GitHub Pages"],
  },
];

export const processSteps = [
  {
    title: "Đọc đề và chia mục",
    description:
      "Đầu tiên mình xem kỹ đề để biết cần những trang nào, phần nào là bắt buộc và thứ tự nên làm ra sao.",
  },
  {
    title: "Phác thảo bố cục",
    description:
      "Trước khi code, mình chia sẵn hero, card, timeline, footer và menu để lúc làm không bị rối bố cục.",
  },
  {
    title: "Code và hoàn thiện",
    description:
      "Sau đó mình tách layout, component và dữ liệu riêng để về sau sửa nội dung hay mở rộng cũng nhẹ hơn.",
  },
  {
    title: "Kiểm tra rồi deploy",
    description:
      "Cuối cùng mình kiểm tra lại giao diện, chạy build và đưa bài lên GitHub để có thể chia sẻ bằng link online.",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    description: "Nếu cần trao đổi về bài làm, CV hoặc cơ hội thực tập thì email là cách phù hợp nhất.",
    href: `mailto:${profile.email}`,
  },
  {
    label: "Điện thoại",
    value: profile.phoneDisplay,
    description: "Phù hợp cho những trường hợp cần liên hệ nhanh như hẹn trao đổi, demo bài hoặc xác nhận lịch.",
    href: `tel:${profile.phoneDisplay.replace(/\s+/g, "")}`,
  },
  {
    label: "Địa điểm",
    value: profile.location,
    description: "Bạn có thể thay phần này bằng nơi mình đang học hoặc khu vực muốn tìm cơ hội thực tập.",
    href: "https://maps.google.com",
  },
  {
    label: "GitHub",
    value: "github.com",
    description: "Đây là nơi mình để source code và lịch sử commit để giảng viên hoặc nhà tuyển dụng tiện xem thêm.",
    href: "https://github.com",
  },
];
