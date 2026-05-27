export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href?: string;
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
  name: "Duy",
  fullName: "Phạm Bảo Duy",
  initials: "DY",
  role: "Sinh viên CNTT-UDPM, định hướng làm web bán hàng",
  location: "Hồ Chí Minh, Việt Nam",
  email: "duy52410275@caodangvietmy.edu.vn",
  phoneDisplay: "0345 335 285",
  tagline:
    "Mình thích những website gọn, dễ dùng và nhìn rõ ràng hơn là quá nhiều chi tiết rối mắt.",
  shortBio:
    "Mình là Duy, hiện đang học ngành CNTT-UDPM tại Cao đẳng Việt Mỹ và đang thực tập tại trường.",
  availability: "Đang thực tập tại trường",
};

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

export const navItems: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/cv", label: "CV" },
  { href: "/products", label: "Dự án" },
  { href: "/contact", label: "Liên hệ" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/duy52410275-pixel",
    icon: "github",
  },
  { label: "Email", href: gmailComposeUrl, icon: "mail" },
];

export const homeMilestones = [
  { value: "05", label: "Mục nội dung chính" },
  { value: "100%", label: "Hiển thị tốt trên mobile" },
  { value: "Next.js", label: "Xây dựng bằng Next.js" },
];

export const highlightCards = [
  {
    href: "/about",
    eyebrow: "Giới thiệu",
    title: "Về bản thân mình",
    description:
      "Một vài thông tin ngắn gọn về mình, cách mình học và định hướng mình đang theo đuổi.",
  },
  {
    href: "/cv",
    eyebrow: "CV",
    title: "Thông tin học tập",
    description:
      "Tóm tắt học vấn, kỹ năng và những phần việc mình từng tham gia theo cách dễ nhìn, dễ theo dõi.",
  },
  {
    href: "/products",
    eyebrow: "Dự án",
    title: "Các dự án đã làm",
    description:
      "Những bài mình từng làm trong quá trình học, chủ yếu xoay quanh giao diện web và web bán hàng.",
  },
  {
    href: "/contact",
    eyebrow: "Liên hệ",
    title: "Liên hệ với mình",
    description:
      "Nếu muốn trao đổi thêm về bài làm hoặc cần liên hệ với mình thì mọi thông tin đều có ở đây.",
  },
];

export const strengths = [
  {
    title: "Trình bày rõ ràng",
    description:
      "Mình thích chia nội dung theo từng phần để người xem dễ nhìn, dễ theo dõi và không bị rối.",
  },
  {
    title: "Dễ chỉnh sửa",
    description:
      "Mình tách riêng phần nội dung để sau này có thể cập nhật thông tin cá nhân hoặc dự án nhanh hơn.",
  },
  {
    title: "Sẵn sàng để nộp",
    description:
      "Website đã có đầy đủ các mục cần thiết và có thể đưa lên GitHub để demo hoặc nộp bài.",
  },
];

export const studyFocus = [
  {
    title: "Nền tảng frontend",
    description:
      "Mình đang tập trung học HTML, CSS và responsive để làm giao diện gọn, rõ và dễ sử dụng hơn.",
  },
  {
    title: "React và Next.js",
    description:
      "Mình dùng React và Next.js để làm quen với cách chia component, tổ chức code và xây dựng một dự án hoàn chỉnh hơn.",
  },
  {
    title: "Cách trình bày nội dung",
    description:
      "Ngoài phần code, mình cũng để ý cách sắp xếp nội dung sao cho website nhìn tự nhiên và không bị khô.",
  },
];

export const toolkit = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Git",
  "GitHub",
  "VS Code",
];

export const educationTimeline: TimelineItem[] = [
  {
    period: "2024 - 2028",
    title: "Ngành CNTT-UDPM",
    location: "Cao đẳng Việt Mỹ",
    description:
      "Mình đang học các môn liên quan đến lập trình, phát triển phần mềm và xây dựng website theo hướng ứng dụng thực tế.",
  },
  {
    period: "2026",
    title: "Portfolio cá nhân",
    location: "Đồ án môn học",
    description:
      "Mình làm website portfolio này để giới thiệu bản thân, trình bày kỹ năng và tổng hợp lại những dự án đã làm trong quá trình học.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2026 - hiện tại",
    title: "Thực tập tại trường",
    location: "Cao đẳng Việt Mỹ",
    description:
      "Hiện tại mình đang thực tập tại trường, đồng thời làm thêm các bài tập và dự án nhỏ để luyện thêm kỹ năng làm giao diện web.",
  },
  {
    period: "2026",
    title: "Tham gia dự án web bán máy lọc nước",
    location: "Dự án nhóm môn học",
    description:
      "Mình tham gia làm giao diện, sắp xếp nội dung sản phẩm và hỗ trợ chỉnh sửa phần hiển thị để website nhìn gọn và dễ dùng hơn.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Ngôn ngữ và công nghệ",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Công cụ",
    items: ["GitHub", "VS Code", "npm"],
  },
  {
    title: "Kỹ năng khác",
    items: ["Tự học", "Kiên trì", "Làm việc độc lập", "Đọc tài liệu", "Tiếp thu góp ý"],
  },
];

export const achievements = [
  {
    title: "Code dễ theo dõi",
    description:
      "Mình chia nội dung theo từng phần và từng route riêng nên tổng thể website nhìn khá rõ ràng.",
  },
  {
    title: "Triển khai nhanh",
    description:
      "Dự án đã được chuẩn bị theo hướng có thể đưa lên GitHub Pages để chia sẻ hoặc nộp bài.",
  },
  {
    title: "Hiển thị linh hoạt",
    description:
      "Bố cục được chỉnh để khi mở trên điện thoại hay máy tính vẫn giữ được sự gọn gàng.",
  },
  {
    title: "Nội dung dễ thay",
    description:
      "Sau này mình chỉ cần thay lại thông tin thật hoặc thêm dự án mới là có thể dùng tiếp như một portfolio cá nhân.",
  },
];

export const projects: ProjectItem[] = [
  {
    category: "Đồ án cá nhân",
    title: "Portfolio cá nhân",
    description:
      "Đây là website mình dùng để giới thiệu bản thân, trình bày kỹ năng, dự án và thông tin liên hệ trong một giao diện thống nhất.",
    highlight:
      "Mình tập trung vào bố cục rõ ràng, nội dung dễ đọc và điều hướng đơn giản để người xem nắm nhanh được thông tin chính.",
    outcome:
      "Qua bài này mình quen hơn với cách chia component, sắp xếp nội dung và hoàn thiện một sản phẩm bằng Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Dự án nhóm môn học",
    title: "Web bán máy lọc nước",
    description:
      "Đây là dự án nhóm mình từng tham gia ở trường với mục tiêu xây dựng website giới thiệu và bán máy lọc nước.",
    highlight:
      "Phần mình làm chủ yếu liên quan đến giao diện, sắp xếp nội dung sản phẩm và hỗ trợ chỉnh sửa phần hiển thị cho dễ nhìn hơn.",
    outcome:
      "Dự án giúp mình hiểu thêm về cách làm việc nhóm, phối hợp nội dung và hoàn thiện một website bán hàng cơ bản.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const processSteps = [
  {
    title: "Đọc đề và chia mục",
    description:
      "Đầu tiên mình xem kỹ đề để biết cần những trang nào, phần nào là bắt buộc và nên làm theo thứ tự ra sao.",
  },
  {
    title: "Phác thảo bố cục",
    description:
      "Trước khi code, mình chia sẵn hero, card, timeline, footer và menu để lúc làm không bị rối bố cục.",
  },
  {
    title: "Code và hoàn thiện",
    description:
      "Sau đó mình tách layout, component và dữ liệu riêng để về sau sửa nội dung hay thêm mục mới cũng nhẹ hơn.",
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
    description: "Nếu cần trao đổi về bài làm hoặc liên hệ với mình thì email là cách phù hợp nhất.",
    href: gmailComposeUrl,
  },
  {
    label: "Điện thoại",
    value: profile.phoneDisplay,
    description: "Phù hợp cho những trường hợp cần liên hệ nhanh như hẹn trao đổi hoặc xác nhận thông tin.",
    href: `tel:${profile.phoneDisplay.replace(/\s+/g, "")}`,
  },
  {
    label: "Địa điểm",
    value: profile.location,
    description: "Hiện tại mình đang học và sinh sống tại Hồ Chí Minh.",
    href: "https://maps.google.com",
  },
  {
    label: "GitHub",
    value: "duy52410275-pixel",
    description: "Mình để GitHub ở đây để tiện xem source code, lịch sử commit và các bài mình đã đưa lên.",
    href: "https://github.com/duy52410275-pixel",
  },
];
