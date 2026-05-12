import type { ResumeData } from "@/lib/types";

export const heroData = {
  tagline: "展览 · 旅行 · 阅读 · 编程",
  heading: "把生活过成自己喜欢的样子",
  subheading:
    "Hi! 我是 Eurus 梁入元，中大行政管理毕业，从展览行业出发，正在用 Claude Code 探索编程与 AI 的新可能。",
};

export const navItems = [
  { name: "关于我", link: "#about" },
  { name: "个人项目", link: "#projects" },
  { name: "格言", link: "#testimonials" },
  { name: "联系我", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Hi，我是梁入元 Eurus，中山大学行政管理专业毕业，两年会展行业项目管理经验，正在学习编程和 AI 🌿",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "热爱旅行，去过张家界、北京、无锡、上海、香港……喜欢看山看海，亲近自然是我最大的充电方式。",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "正在学习的技术方向",
    description:
      "用 Claude Code 搭建个人网站，正在系统学习 AI 和编程，一步步往前走",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "羽毛球老手 🏸 养了一窗台花花草草，活下来的都是勇士 🌱 西班牙语入门 🇪🇸",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "运营个人公众号「工位主理人的外语提升日记」，分享外语学习（英语+西班牙语）与阅读笔记，已更新 32 篇。",
    description: "阅读 · 外语 · 成长",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "一起交流吧！",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "工位主理人的外语提升日记",
    des: "2025 年 11 月起运营的个人公众号，已更新 32 篇。记录英语和西班牙语的学习过程，也分享阅读笔记和成长感悟。",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://mp.weixin.qq.com",
  },
  {
    id: 2,
    title: "旅行足迹 · 走过的山川湖海",
    des: "走过广东各地、长沙、张家界、香港、澳门、北京、无锡、苏州、上海……用镜头和文字记录每一段与自然相遇的故事，一年 2-4 次出发。",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "阅读笔记与书单",
    des: "正经书读了 300 本左右，小说、散文、成长类居多。努力做一个有输入也有输出的人，公众号上不定期分享读书笔记。",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "AI 与编程学习之路",
    des: "用 Claude Code 从零搭建了个人网站和 AI 商业视觉定制网站，正在系统学习编程，目标是找到一份有社会价值感的事业。",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "杀不死你的只会让你更强大。成长是痛苦的，因为要改掉身上根深蒂固的毛病——但每一步都算数。",
    name: "Eurus 的信念",
    title: "终身成长者",
    img: "/avatar1.svg",
  },
  {
    quote:
      "旅行的意义不在于打卡多少地方，而在于那些让你停下来深呼吸的瞬间——山风、海浪、森林的气息。",
    name: "关于旅行",
    title: "自然爱好者",
    img: "/avatar2.svg",
  },
  {
    quote:
      "青春太宝贵了，要在最有精力的时候去做轰轰烈烈的事业。普通人的生活很脆弱，所以要珍惜安稳时的幸福。",
    name: "关于生活",
    title: "活在当下",
    img: "/avatar3.svg",
  },
  {
    quote:
      "从展览行业跨界到编程和 AI，这是一条少有人走的路。会展就像媒婆，把供需双方拉到一起——但 AI 正在重塑这一切，我想站在浪潮的这一边。",
    name: "关于转型",
    title: "探索者",
    img: "/avatar4.svg",
  },
  {
    quote:
      "喜欢绿色，因为它代表着生长和希望。窗台上那些活下来的花花草草，即使养死了几盆，我还是会继续买新的——屡败屡战，生生不息。",
    name: "关于热爱",
    title: "植物爱好者（不放弃版）",
    img: "/avatar5.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Travel",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Reading",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Badminton",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Plants",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Spanish",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "展览招展与策展",
    desc: "深度参与 2026 年大湾区（广州）国际眼镜展从 0 到 1 的全流程，负责策展、招展与展会运营；参与 2024、2025 年广东国际旅游产业博览会招展及嘉宾接待工作。",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "会务策划与嘉宾管理",
    desc: "统筹执行多场高规格会议活动：2024 国家网络安全宣传周（食宿板块嘉宾接待）、广日电梯 2025 全球营销大会（嘉宾信息、食宿、交通、考察）、世界银行中大会议、中非检察论坛、APEC 广州第一次高官会等。",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "团建策划与商业方案",
    desc: "为百胜集团等企业策划多场多地团建活动；代表公司参加岭南集团 2024 岭秀创享大赛，撰写「体育+旅游：粤闽徒步新探索」商业计划书，获得三等奖。",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "转型探索 · 编程与 AI",
    desc: "2026 年起用 Claude Code 从零搭建个人网站及 AI 商业视觉定制网站，正在系统学习编程，目标是将会展行业的项目管理经验与 AI 技术结合，探索新的职业方向。",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/eurusleung",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "mailto:eurusleung@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://mp.weixin.qq.com",
  },
];

export const defaultData: ResumeData = {
  heroData,
  navItems,
  gridItems,
  projects,
  testimonials,
  companies,
  workExperience,
  socialMedia,
};
