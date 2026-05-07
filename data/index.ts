export const navItems = [
  { name: "关于我", link: "#about" },
  { name: "个人项目", link: "#projects" },
  { name: "格言", link: "#testimonials" },
  { name: "联系我", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi，我是梁入元 Eurus，一个在展览行业工作、正在探索编程世界的项目经理 🌿",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "热爱旅行，喜欢看山看海，亲近自然是我最大的充电方式。",
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
    description: "Python 入门选手，正往 AI 方向摸索前行",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "植物杀手 🌱 羽毛球随缘选手 🏸 西班牙语初学者 🇪🇸",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "运营个人公众号「工位主理人的外语提升日记」，分享外语学习与阅读笔记。",
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
    des: "个人微信公众号，记录外语学习过程、分享阅读笔记和学习方法，陪伴一起成长的你。",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://mp.weixin.qq.com",
  },
  {
    id: 2,
    title: "旅行足迹 · 自然风光集",
    des: "记录走过的山川湖海，用镜头和文字留下每一段与自然相遇的故事。",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "阅读笔记与书单",
    des: "小说、散文、成长类书籍的阅读摘录与心得，努力做一个有输入也有输出的人。",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "AI 与编程学习之路",
    des: "从 Python 入门到 AI 探索，记录一个展览人转型码农的踩坑与成长日记。",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "种一棵树最好的时间是十年前，其次是现在。学习任何东西都不晚，哪怕三天打鱼两天晒网，也比一直不下水强。",
    name: "Eurus 的座右铭",
    title: "终身学习者",
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
      "阅读是一座随身携带的避难所。在小说里体验千百种人生，在自然里找回最真实的自己。",
    name: "关于阅读",
    title: "书中自有天地",
    img: "/avatar3.svg",
  },
  {
    quote:
      "从展览行业跨界到编程和AI，这是一条少有人走的路。每一步都笨拙，但每一步都算数。",
    name: "关于转型",
    title: "探索者",
    img: "/avatar4.svg",
  },
  {
    quote:
      "喜欢绿色，因为它代表着生长和希望。就像我的那些花花草草，即使养死了几盆，我还是会继续买新的。",
    name: "关于热爱",
    title: "植物杀手（不放弃版）",
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
    desc: "任职于广州国际会展集团，负责展览项目的招展与策展工作，统筹展会全流程运营，协调多方资源确保项目顺利落地。",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "会务策划与管理",
    desc: "策划并执行各类会议及活动，从方案设计到现场管理，注重每一个细节与参会者体验。",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "团建活动策划",
    desc: "为企业和团队量身定制团建方案，通过创意活动提升团队凝聚力与沟通效率。",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "正在转型 · 编程与AI方向",
    desc: "利用业余时间学习 Python 和 AI 知识，探索展览行业与科技结合的可能性。",
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
    link: "mailto:2944501409@qq.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://mp.weixin.qq.com",
  },
];
