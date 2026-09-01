export interface NavigationItem {
  label: string
  href: string
}

export interface MarqueeItem {
  label: string
  image: string
  alt: string
  available: boolean
  fit: 'cover' | 'contain'
  format: 'landscape' | 'standard' | 'portrait' | 'square'
  row: 1 | 2
}

export interface Experience {
  number: string
  company: string
  englishLabel: string
  role: string
  meta: string
  summary: string
  highlights: string[]
  tags: string[]
  metricLabel: string
  metric: string
  galleryTitle?: string
  gallery?: Array<{
    image: string
    alt: string
  }>
  logo?: string
  logoAlt?: string
}

export interface Project {
  number: string
  category: string
  title: string
  englishTitle: string
  roleDate: string
  description: string
  highlights: string[]
  tags: string[]
  metric: string
  cover: string
  coverAlt: string
  coverAvailable: boolean
  coverFit: 'cover' | 'contain'
  liveUrl?: string
  videoShortUrl?: string
  bilibiliBvid?: string
}

export interface Capability {
  number: string
  title: string
  description: string
}

export const navigation: NavigationItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export const hero = {
  identity: '周畅/2027届应届生',
  heading: "Hi, i'm chang",
  label: 'PRODUCT · BUSINESS · TECHNOLOGY',
  description: '从用户问题与业务目标出发，把 AI 能力转化为可运行、可评测、可增长的产品。',
  avatar: '/assets/chang-3d-avatar.png',
  resume: '/resume/Chang-Zhou-Resume.pdf',
}

export const selectedWorks: MarqueeItem[] = [
  { label: 'COMMUNITYLINK', image: '/assets/marquee/communitylink.png', alt: 'CommunityLink 社区活动网站界面', available: true, fit: 'cover', format: 'landscape', row: 1 },
  { label: "KIDS' CONFERENCE", image: '/assets/marquee/740deb688b2732b99e2e1d31bbc477ee.png', alt: 'Kids Conference 会议查找与报名页面', available: true, fit: 'cover', format: 'standard', row: 1 },
  { label: 'AI WORKSPACE', image: '/assets/marquee/obsidian-ai-workspace.jpg', alt: '绿色 AI 文档工作台作品海报', available: true, fit: 'contain', format: 'portrait', row: 1 },
  { label: 'MEMORYJAR', image: '/assets/marquee/memoryjar.png', alt: 'MemoryJar 智能语音记忆罐项目封面', available: true, fit: 'cover', format: 'square', row: 1 },
  { label: 'AI WORKFLOW MAP', image: '/assets/marquee/885c0ae4497b35244446c9fc43fe62cd.png', alt: '新时代做个会搭系统的人工作地图海报', available: true, fit: 'contain', format: 'portrait', row: 2 },
  { label: 'AGILE DELIVERY', image: '/assets/marquee/屏幕截图 2026-09-01 192005.png', alt: '健康教练平台敏捷开发 Trello 看板', available: true, fit: 'cover', format: 'landscape', row: 2 },
  { label: 'WELLNESS COACHING', image: '/assets/marquee/wellness-coaching.png', alt: 'Wellness Coaching 健康教练平台界面', available: true, fit: 'cover', format: 'landscape', row: 2 },
  { label: 'CLIENT DISCOVERY', image: '/assets/marquee/f192069caf78b39908d994e8faad53f8.jpg', alt: '与客户进行线上需求沟通和方案汇报', available: true, fit: 'contain', format: 'landscape', row: 2 },
  { label: 'AI PRODUCT VISUAL', image: '/assets/熙硅科技/5.jpg', alt: '使用 AI 生图工具制作的工作台商品视觉', available: true, fit: 'contain', format: 'portrait', row: 2 },
]

export const marqueeItems = selectedWorks

export const about = {
  title: 'ABOUT ME',
  description:
    '我关注产品、业务与技术的交叉地带，擅长从真实业务问题出发，完成需求分析、方案设计、流程搭建与原型验证。我的实践覆盖内容治理、电商用户产品与 AI 商业化，能够将大模型、Agent 与 Workflow 应用于可运行、可评测、可迭代的业务方案，也能借助 Vibe Coding 快速完成 Web、云端与 IoT 原型，将想法推进为可验证的结果。',
  education: {
    institution: 'MONASH UNIVERSITY',
    degree: '信息技术学士',
    gpa: '3.60',
    campus: '澳大利亚 · CLAYTON 校区',
    graduation: '预计 2027 年毕业',
    scholarship: '国际学生奖学金',
    scholarshipValue: '人民币 25,000 元',
  },
  cards: ['AGENT', 'PRODUCT', '0→1', 'MVP'],
  decorations: [
    { position: 'top-left', image: '/assets/decor/moon.png', alt: '3D moon decoration' },
    { position: 'bottom-left', image: '/assets/decor/object.png', alt: '3D abstract object decoration' },
    { position: 'top-right', image: '/assets/decor/lego.png', alt: '3D lego decoration' },
    { position: 'bottom-right', image: '/assets/decor/group.png', alt: '3D grouped object decoration' },
  ],
}

export const experiences: Experience[] = [
  {
    number: '01',
    company: '小红书｜社区 Agentic 智能运营组',
    englishLabel: 'XIAOHONGSHU',
    role: 'AI 产品经理',
    meta: '上海 · 2026.03—2026.07',
    summary: '围绕社区内容质量治理，参与质检象限 Skill 工具开发与产运机制建设，推动质检流程从人工驱动向 AI 转型。',
    highlights: [
      '主导搭建 Dify 审核工作流，将规则细则拆分为 18 个 LLM 判定器并行研判，并结合正则词库、Prompt Engineering 与 RAG 知识库持续优化，准确率由 56% 提升至 95%。',
      '主导归因 Agent 全链路方案设计与开发，三级标签准确率由 65% 提升至 95%，CoT 输出质量由 3 分提升至 4.5 分。',
      '整体笔记机审处置占比由 65% 提升至 76.85%，Case 免审率由 54.23% 提升至 74.15%，归因环节人力提效 50%，内部 5+ 团队投入使用。',
    ],
    tags: ['Dify', 'Agent', 'RAG', 'LLM Evaluation', 'Bad Case', 'Workflow'],
    metricLabel: '审核准确率',
    metric: '56% → 95%',
    logo: '/assets/logos/xiaohongshu.svg',
    logoAlt: '小红书',
  },
  {
    number: '02',
    company: '字节跳动｜抖音商城用户产品部',
    englishLabel: 'BYTEDANCE',
    role: '用户产品实习生',
    meta: '上海 · 2025.12—2026.02',
    summary: '围绕抖音商城膨胀券玩法，优化 C 端推荐、补贴与展示策略，在维持转化率的基础上提升用户渗透与 GMV。',
    highlights: [
      '拓展首页弹窗、优惠券 Banner 与营销横幅等入口，并设计潜客与非潜客差异化券门槛和补贴策略。',
      '膨胀页日均访问 UV 由 25 万提升至 43 万，日均权益核销 UV 由 8.8 万提升至 14.4 万，端内 DAU 渗透提升 2.4pp。',
      '优化商品供给与推荐分发后，膨胀页订单金额提升 151%，人均支付 GMV 提升 0.89%，笔单价由 0.9 元提升至 2.9 元。',
    ],
    tags: ['Growth', 'C-end Product', 'A/B Testing', 'Recommendation', 'GMV'],
    metricLabel: '膨胀页订单金额',
    metric: '+151%',
    logo: '/assets/logos/bytedance.svg',
    logoAlt: 'ByteDance',
  },
  {
    number: '03',
    company: '熙硅科技｜AI 工作台商业化',
    englishLabel: 'XIGUI TECHNOLOGY',
    role: 'AI 产品运营（商品视觉与增长）',
    meta: '北京 · 2025.06—2025.09',
    summary: '负责面向职场白领与超级个体的 AI 工作台商业化验证，使用 AI 生图工具制作商品主图与详情页素材，并完成小红书内容投放、实验评测与付费转化闭环。',
    highlights: [
      '基于历史出单内容、竞品账号和高低表现样本建立需求地图，完成产品定位、卖点分层及 13 张商品详情页设计。',
      '将商品视觉生产拆解为六阶段工作流，沉淀选题调研、文案、AI 生图、渲染与详情页生成等 5 个可复用 AI Skill。',
      '工作流累计支撑 6 个账号生产并投放 960 条内容，归因成交 87 单，实现 GMV 14,616 元。',
    ],
    tags: ['AI Image Generation', 'Product Visual', 'Xiaohongshu Growth', 'AI Workflow', 'Commercialization'],
    metricLabel: 'AI 商品内容投放',
    metric: '960 条',
    galleryTitle: 'AI 工作台商品视觉',
    gallery: [
      { image: '/assets/熙硅科技/1.png', alt: 'AI 工作系统工作地图内容图' },
      { image: '/assets/熙硅科技/2.png', alt: 'AI 工作系统四部分协作流程内容图' },
      { image: '/assets/熙硅科技/3.png', alt: 'AI 工作系统用户反馈内容图' },
      { image: '/assets/熙硅科技/4.jpg', alt: 'AI 工作系统学员真实反馈内容图' },
      { image: '/assets/熙硅科技/5.jpg', alt: '内容生产 SOP 标准化内容图' },
      { image: '/assets/熙硅科技/6.png', alt: 'AI 工作系统工具与答疑服务内容图' },
      { image: '/assets/熙硅科技/7.png', alt: 'Obsidian AI 工作台产品内容图' },
    ],
    logo: '/assets/logos/xigui.svg',
    logoAlt: 'XIGUI TECHNOLOGY',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    category: 'WEB PRODUCT / FULL-STACK',
    title: '健康教练预约与运营管理平台',
    englishTitle: 'HEALTH COACH BOOKING & OPERATIONS PLATFORM',
    roleDate: 'Vibe Coding 全栈开发 · 2026.03—2026.05',
    description:
      '面向真实健康教练客户，带领 5 人团队从 0 到 1 搭建用户、教练与管理员三端平台，将课程预约、教练排期、客户记录、通知、账单支付与后台管理流程线上化。',
    highlights: [
      '访谈 10 名课程学员、健身用户及教练，构建用户画像与用户故事地图，规划三端核心流程与迭代优先级。',
      '基于 Figma 高保真原型，使用 CakePHP、PHP 与 MySQL 完成产品开发、测试与部署。',
      '协调 5 人团队完成两轮迭代，最终交付可运行 MVP 并获得客户验收认可。',
    ],
    tags: ['Vibe Coding', 'CakePHP', 'PHP', 'MySQL', 'Figma', 'Agile'],
    metric: '0 → 1 / 3 ENDS / 5 PEOPLE',
    cover: '/assets/projects/health-platform-cover.png',
    coverAlt: '健康教练预约与运营管理平台界面预览',
    coverAvailable: true,
    coverFit: 'cover',
    liveUrl: 'https://review.u26s1157.iedev.org/team157-app_fit3047/',
  },
  {
    number: '02',
    category: 'IoT PRODUCT / HARDWARE',
    title: 'MemoryJar 智能语音记忆罐',
    englishTitle: 'MEMORYJAR — A SCREENLESS VOICE KEEPSAKE',
    roleDate: '硬件端产品设计 & IoT 开发 · 2025.09—2025.11',
    description:
      '面向留学生、异地伴侣及长期离家人群，主导无屏情感沟通硬件从 0 到 1 设计，通过“远程录音—云端传输—开盖播放”的实体交互，将数字语音转化为具有仪式感的情感体验。',
    highlights: [
      '分析 Lovebox、Bond Touch 与 Friendship Lamp，确定“语音传递 + 无屏交互 + 开盖触发”的差异化方向。',
      '基于 ESP32、霍尔传感器、MAX98357A、扬声器和 LED 完成硬件系统，并打通 Web—Supabase/Firebase—硬件数据链路。',
      '独立完成电路、固件、云端联调和木质外壳制作，最终交付可运行的端云一体原型。',
    ],
    tags: ['ESP32', 'IoT', 'Supabase', 'Firebase', 'Hardware Prototype', 'Product Design'],
    metric: 'VOICE → CLOUD → OBJECT',
    cover: '/assets/projects/memoryjar-cover.png',
    coverAlt: 'MemoryJar 智能语音记忆罐原型预览',
    coverAvailable: true,
    coverFit: 'contain',
    videoShortUrl: 'https://b23.tv/HZPSCZk',
    bilibiliBvid: '',
  },
]

export const capabilities: Capability[] = [
  { number: '01', title: 'PRODUCT', description: '用户调研、需求分析与管理、PRD、用户故事地图、产品原型、敏捷项目管理' },
  { number: '02', title: 'AI ENGINEERING', description: 'Prompt Engineering、LLM 评测、RAG、Dify Agent、Bad Case 分析、Agent 与 Skill 开发' },
  { number: '03', title: 'DATA', description: 'SQL、Python、Excel、运营数据分析、数据看板、A/B 测试设计与复盘' },
  { number: '04', title: 'DEVELOPMENT', description: 'PHP、CakePHP、MySQL、JavaScript、ESP32、Git、产品原型开发、测试与部署' },
  { number: '05', title: 'DESIGN', description: 'Figma、XMind、Canva、Photoshop、高保真原型、视觉素材与短视频制作' },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING USEFUL.",
  description: '期待与你一起，把复杂问题变成真正可用的产品。',
  email: '3482358524@qq.com',
  resume: '/resume/Chang-Zhou-Resume.pdf',
  github: '',
  linkedin: '',
  footer: '© 2026 Chang Zhou. Designed and built with AI.',
}
