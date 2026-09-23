const projects = {
  sichuan: {
    number: "01",
    kicker: "NATIONAL PLATFORM / UI·UX",
    title: "国家川藏铁路技术创新中心服务平台",
    summary: "国家级重点工程配套平台，覆盖项目管理、科研成果、知识产权、知识交易及数据可视化。设计从 0 到 1 建立平台视觉与交互体系，让跨组织、跨角色的复杂协作变得清晰可追踪。",
    introduction: "面向川藏铁路技术创新与多方协同场景，平台整合科技创新资源、科研项目、成果转化、知识产权与知识交易，为管理人员、科研人员和合作机构提供统一的协作入口。",
    background: "川藏铁路建设面对复杂地质、高原环境与多项世界级技术难题，需要连接跨行业、跨学科、跨领域的创新力量。项目参与方多、信息分散、科研流程长，原有以信息发布和单点工具为主的模式难以支撑持续协作。",
    decisions: [
      "按创新协同链路组织信息：将创新需求、项目、成果、知识交易、科研机构和科技服务放入统一导航，让跨组织协作有清晰的进入路径。",
      "用角色与任务驱动页面：围绕管理人员、科研人员与合作机构的常用任务划分工作台、待办、审批和消息状态，减少多角色之间的理解成本。",
      "把复杂科研流程拆成可追踪节点：通过项目阶段、成果状态和责任角色统一表达流程进度，让用户快速判断当前状态与下一步动作。",
      "强化三维虚拟地球与数字建模展示：将移动平台、三维虚拟地球和数字建模作为核心视觉入口，提升平台的科技感与业务辨识度。",
      "数据大屏优先服务判断：将项目、成果、知识产权和交易趋势整理为层级明确的核心指标、趋势图和排行，让管理角色快速获取决策信息。",
      "从 0 到 1 沉淀视觉与组件规范：统一导航、表单、表格、状态和图表样式，为后续模块扩展与研发协作建立稳定基础。"
    ],
    meta: [
      ["角色", "主导 UI/UX 设计"],
      ["终端", "Web + 大屏"],
      ["类型", "国家级平台 / 0 → 1"]
    ],
    facts: [
      ["设计起点", "从 0 到 1"],
      ["效率提升", "75%"],
      ["核心范围", "多业务模块 + 数据大屏"]
    ],
    cover: "assets/portfolio/page-03.jpg",
    gallery: [
      ["assets/portfolio/page-03.jpg", "三维虚拟地球与数字建模", "呈现基于移动平台的三维虚拟地球及数字建模能力。"],
      ["assets/portfolio/page-09.jpg", "知识产权与趋势看板", "呈现专利、知识产权、申请与交易趋势。"],
      ["assets/portfolio/page-08.jpg", "成果转化与指标分析", "支持机构、交易与成果转化数据的多维查看。"],
      ["assets/portfolio/page-06.jpg", "可视化运营驾驶舱", "把核心建设与运营指标转化为可快速判断的视觉信息。"],
      ["assets/portfolio/page-04.jpg", "科技服务与成果转化", "将复杂服务流程整理为可理解、可操作的产品入口。"],
      ["assets/portfolio/page-05.jpg", "项目总览与协同工作台", "整合项目、待办、协作与多角色任务信息。"],
      ["assets/portfolio/page-07.jpg", "业务数据与成果分析", "围绕项目、成果与运营数据建立统计视图。"]
    ]
  },
  components: {
    number: "02",
    kicker: "DESIGN SYSTEM / COMPONENT LIBRARY",
    title: "国铁集团信息系统界面组件库",
    summary: "基于国铁集团企业标准《铁路应用软件界面设计规范》开发的一套通用标准组件。通过组件驱动模块化开发，改变以往低效的页面级重复设计方式。",
    introduction: "组件库面向国铁集团信息化板块，统一基础控件、色彩、字体、状态与应用规则，为设计人员和研发团队提供可直接复用的界面语言。",
    background: "此前不同业务系统多按页面分别设计，控件状态、视觉样式和维护方式存在差异。重复设计增加了交付成本，也让系统升级、样式调整和后续运维缺少稳定基准。",
    decisions: [
      "先建立设计令牌：统一定义主体色、功能色、中性色、字体字号、间距、圆角和交互状态，形成可持续维护的视觉基线。",
      "以组件而非页面交付：把按钮、表单、表格、导航、反馈和弹窗等基础能力模块化，推动研发按组件搭建页面。",
      "按高频业务场景组织组件：优先覆盖查询、录入、审核、批量操作和数据展示等核心场景，降低业务团队的适配成本。",
      "同步输出使用规范与验收依据：将组件文档、尺寸标注、状态说明和使用边界纳入交付，保证设计与研发理解一致。",
      "兼顾多端适配与长期迭代：对桌面端、常用分辨率和不同业务密度进行适配，并预留组件升级与扩展能力。"
    ],
    meta: [
      ["角色", "UI 设计 / 规范输出"],
      ["依据", "铁路应用软件界面设计规范"],
      ["类型", "企业级设计系统"]
    ],
    facts: [
      ["核心目标", "模块化开发"],
      ["统一范围", "全集团信息系统"],
      ["交付重点", "组件 + 文档 + 标准"]
    ],
    cover: "assets/portfolio/page-10.jpg",
    gallery: [
      ["assets/portfolio/page-10.jpg", "组件库设计规范", "统一色彩、字体、功能色、中性色与基础控件。"]
    ]
  },
  finance: {
    number: "03",
    kicker: "ENTERPRISE SYSTEM / REVAMP",
    title: "广州铁路局财务管理系统",
    summary: "大型财务业务系统改版，统筹组件库更新迭代与业务逻辑优化。围绕收入、支出、合同、预算和成本管理等核心场景，建立多角色一致的视觉与交互语言。",
    introduction: "系统服务于路局财务管理场景，覆盖合同、预算、收入、成本、回款和审批等业务，通过统一的信息结构与操作规范提升财务人员和管理角色的处理效率。",
    background: "财务业务涉及多个角色、复杂权限和大量数据录入，原系统在页面结构、控件状态和操作反馈上不够统一。用户需要在多个模块间反复切换，关键数据处理路径较长。",
    decisions: [
      "围绕高频任务重构工作流：把合同、预算、成本、收入和回款等核心任务重新组织，减少跨模块跳转和信息重复查找。",
      "按角色设计操作路径：区分业务人员、财务人员、审批人与管理角色的权限和任务，让不同角色进入系统后直接看到自己的工作重点。",
      "建立统一的数据密度层级：区分总览、查询、详情和审批页面，控制表格、指标和操作区层级，让复杂信息更易扫描和比较。",
      "强化实时监控与数据分析：把财务记录、实时报表、趋势分析和异常状态放到统一视图，支持管理层快速判断。",
      "持续迭代组件与规范：将改版中形成的高频控件、表格规则和交互模式沉淀进组件库，支持后续业务扩展。"
    ],
    meta: [
      ["角色", "主导设计"],
      ["类型", "大型系统改版"],
      ["重点", "多角色 / 多业务场景"]
    ],
    facts: [
      ["效率提升", "60%"],
      ["业务范围", "合同、预算、收入、成本"],
      ["协作方式", "设计规范 + 组件迭代"]
    ],
    cover: "assets/portfolio/page-11.jpg",
    gallery: [
      ["assets/portfolio/page-11.jpg", "财务管理系统总览", "围绕财务记录、实时监控和综合分析建立产品主流程。"],
      ["assets/portfolio/page-12.jpg", "合同、预算与成本管理", "统一复杂财务数据的录入、查询与审批体验。"],
      ["assets/portfolio/page-13.jpg", "业务配置与流程优化", "提升流程自动化与历史数据分析效率。"]
    ]
  },
  assets: {
    number: "04",
    kicker: "WEB + APP / PRODUCT REDESIGN",
    title: "太中银资产管理系统",
    summary: "基于用户调研重构信息架构与页面流程，覆盖资产盘点、审核、缺陷管理和待办事项。打通 Web 与 APP 端体验，让资产管理从流程记录走向高效协作。",
    introduction: "项目以资产全生命周期管理为核心，覆盖资产信息、盘点、审核、缺陷、通知与待办，通过 Web 与 APP 协同满足资产管理人员和现场使用人员的不同任务。",
    background: "资产信息分散在多个流程和终端，盘点、审核与异常处理常依赖线下沟通。用户需要快速找到待办任务并了解当前状态，原系统在信息架构和移动场景支持上存在不足。",
    decisions: [
      "用用户调研重构信息架构：按资产管理员、使用人员和审批人的真实任务重新组织首页、资产、盘点、审核和缺陷入口。",
      "以资产生命周期组织信息：统一资产信息、使用状态、盘点记录、审核结果和缺陷处理，减少跨流程查找。",
      "保持 Web 与 APP 跨端一致：统一状态命名、操作反馈和关键任务路径，让现场盘点与后台管理可以顺畅衔接。",
      "把状态与下一步操作前置：强化待办、审核结果、异常提醒和处理入口，让用户进入页面即可判断要做什么。",
      "建立审核与缺陷闭环：通过状态流、操作记录和通知机制，保证盘点、审核与问题处理可以持续追踪。"
    ],
    meta: [
      ["角色", "UI/UX 重构"],
      ["终端", "Web + APP"],
      ["重点", "用户调研 / 流程重构"]
    ],
    facts: [
      ["效率提升", "70%"],
      ["核心场景", "盘点、审核、待办、缺陷"],
      ["体验变化", "跨端流程一致"]
    ],
    cover: "assets/portfolio/page-14.jpg",
    gallery: [
      ["assets/portfolio/page-14.jpg", "资产管理系统移动端", "统一资产信息、盘点审核、通知和待办操作。"]
    ]
  },
  brand: {
    number: "05",
    kicker: "VISUAL IDENTITY / LOGO",
    title: "铁科经纬品牌视觉系统",
    summary: "以经纬线为核心识别元素，结合铁路科技行业特征，建立从标志制图、标准色彩到安全空间、墨稿与应用规范的完整视觉体系。",
    introduction: "品牌视觉围绕铁科经纬的企业定位展开，通过标志、标准色和基础规范建立沉稳、可信赖且具有科技感的识别系统。",
    background: "公司需要在铁路科技与信息服务语境中建立清晰、统一的品牌形象。标志既要继承铁科院相关识别元素，也要体现西安地域特征、协作发展和持续创新。",
    decisions: [
      "用经纬线构建核心图形：由四段圆弧交汇形成开放轨道意象，并融入变形的 XA 地域识别，让品牌具备行业与地域双重语义。",
      "继承铁科院标识基因：在保持集团品牌关联性的前提下，建立铁科经纬独立、清晰且可识别的品牌形象。",
      "以科技蓝和交通绿建立色彩语义：蓝色表达可靠与技术，绿色对应畅通、安全和持续发展，形成稳定而有活力的品牌色彩。",
      "把识别规则做成可执行规范：同步定义标准色、最小尺寸、安全空间、标志墨稿和使用边界。",
      "通过多场景应用验证品牌一致性：在办公、印刷、数字端和对外传播场景中检查标志的清晰度与适配性。"
    ],
    meta: [
      ["角色", "Logo / VI 设计"],
      ["核心元素", "经纬线 / 轨道 / XA"],
      ["交付", "品牌规范体系"]
    ],
    facts: [
      ["品牌语义", "条理、秩序、规划治理"],
      ["标准色彩", "科技蓝 + 交通绿"],
      ["规范内容", "标志、色彩、空间、墨稿"]
    ],
    cover: "assets/portfolio/page-15.jpg",
    gallery: [
      ["assets/portfolio/page-15.jpg", "Logo 制图与标准色彩", "通过几何制图建立严谨、可复用的标志结构。"],
      ["assets/portfolio/page-16.jpg", "Logo 释义与最小使用规范", "解释品牌图形、色彩与识别逻辑。"],
      ["assets/portfolio/page-17.jpg", "安全空间与标准墨稿", "保证标志在不同环境和印刷条件下的清晰度。"]
    ]
  },
  type: {
    number: "06",
    kicker: "TYPEFACE DESIGN / STANDARD",
    title: "铁路字库与字体系统",
    summary: "参与国铁宋黑体、国铁速黑体字库设计，完成 928 个字形，并参与字体设计培训、验收标准制定与字型修正，让铁路品牌文字在信息场景中保持统一气质。",
    introduction: "字体系统服务于铁路品牌、信息系统与标识应用，需要在现代屏幕阅读、品牌识别和中文书写传统之间建立稳定平衡。",
    background: "铁路数字化产品涉及大量界面文字、标识信息和跨系统展示，不同字体的字面比例、重心与笔画特征会影响阅读效率和品牌一致性，需要建立统一字库与验收方式。",
    decisions: [
      "建立人文黑体气质：相较工业黑体更温和圆润，同时保留清晰、现代和可靠的识别特征，兼顾品牌感与阅读效率。",
      "以字面比例和重心统一字形：围绕主体框、基线、字面比例和笔画粗细控制整套字库的结构关系。",
      "针对屏幕阅读优化：控制中宫、字重和笔画细节，让字体在信息系统、标识与多分辨率屏幕中保持稳定清晰。",
      "将设计延伸到质量验收：通过设计培训、字型修正和验收标准制定，保证多团队协作下的字形质量。",
      "通过真实信息场景验证：将字库放到铁路标识、界面文字和运营信息中测试，提升应用的一致性与可读性。"
    ],
    meta: [
      ["角色", "字体设计 / 标准协作"],
      ["完成字形", "928 个"],
      ["应用范围", "铁路信息系统与标识"]
    ],
    facts: [
      ["设计目标", "现代、清晰、稳定"],
      ["字体工程", "字形设计 + 质量验收"],
      ["应用结果", "多场景统一应用"]
    ],
    cover: "assets/portfolio/page-18.jpg",
    gallery: [
      ["assets/portfolio/page-18.jpg", "字形设计与结构规范", "围绕字面比例、重心与笔画特征建立统一规则。"],
      ["assets/portfolio/page-19.jpg", "字体应用效果", "将字体应用于铁路标识与信息场景。"]
    ]
  },
  illustration: {
    number: "07",
    kicker: "ILLUSTRATION / BRAND EXTENSION",
    title: "12306 旅客服务手绘插画",
    summary: "将餐饮、特产、会员服务等铁路出行场景转译为更具温度的品牌插画，用清晰的视觉叙事提升服务触点的亲和力与识别度。",
    introduction: "插画用于 12306 旅客服务相关场景，通过手绘表达餐饮特产、会员权益和出行体验，让功能信息更具情感和场景感。",
    background: "铁路旅客服务触点通常以功能和流程信息为主，视觉表达偏工具化。面对餐饮、特产和会员服务等生活化场景，需要更温暖、更容易被理解和记忆的内容表达。",
    decisions: [
      "从真实出行场景提取叙事：围绕旅途餐饮、地方特产、家乡味道和会员服务建立画面主题，让内容更容易被理解和记忆。",
      "保持统一的手绘语言：通过构图、轮廓、色温和质感的一致性形成连续识别，使不同服务页面属于同一视觉体系。",
      "让插画服务于信息：将视觉重点与权益内容、服务卖点对应，避免插画只停留在装饰层面。",
      "用色彩区分服务类型：通过主色、辅助色和场景氛围区分餐饮、特产与会员权益，提高浏览效率。",
      "兼顾品牌复用与延展：把核心人物、场景元素和绘制方法沉淀为可重复使用的品牌插画资产。"
    ],
    meta: [
      ["角色", "插画设计"],
      ["应用", "12306 旅客服务"],
      ["场景", "餐饮、特产、会员权益"]
    ],
    facts: [
      ["设计方式", "手绘场景叙事"],
      ["体验目标", "温度与亲和力"],
      ["品牌作用", "服务触点视觉延展"]
    ],
    cover: "assets/portfolio/page-21.jpg",
    gallery: [
      ["assets/portfolio/page-20.jpg", "手绘插画设计", "建立统一的手绘表现与场景语言。"],
      ["assets/portfolio/page-21.jpg", "旅客服务插画应用", "用于特色餐饮、家乡味道与会员服务等触点。"]
    ]
  }
};

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
const body = document.body;
const header = document.querySelector("#site-header");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#case-modal");
const modalScroll = document.querySelector("#case-scroll");
const gallery = document.querySelector("#case-gallery");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastTrigger = null;
let carouselItems = [];
let carouselIndex = 0;
let carouselTimer = null;
let carouselPlaying = false;
const carouselDuration = 6000;

function staggerDelay(element, step = 90, max = 520) {
  const siblings = [...(element.parentElement?.children || [])].filter((child) => child.classList.contains("reveal"));
  return Math.min(Math.max(siblings.indexOf(element), 0) * step, max);
}

function animateReveal(element) {
  if (element.dataset.motionDone === "true") return;
  element.dataset.motionDone = "true";
  element.classList.add("motion-running");
  window.setTimeout(() => {
    element.classList.remove("motion-running");
    element.getAnimations?.({ subtree: true }).forEach((animation) => animation.cancel());
  }, 2400);
  const delay = staggerDelay(element);

  if (element.classList.contains("section-head")) {
    const title = element.querySelector("h2");
    const copy = element.querySelector("p");
    title?.animate([
      { transform: "translateY(110px) scaleY(1.34) scaleX(.96)", clipPath: "inset(0 0 100% 0)", opacity: .18 },
      { transform: "translateY(-10px) scaleY(.94) scaleX(1.01)", clipPath: "inset(0 0 8% 0)", opacity: 1, offset: .58 },
      { transform: "translateY(0) scaleY(1) scaleX(1)", clipPath: "inset(0 0 0 0)", opacity: 1 }
    ], { duration: 1550, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    copy?.animate([
      { transform: "translateX(-55px)", clipPath: "inset(0 100% 0 0)" },
      { transform: "translateX(0)", clipPath: "inset(0 0 0 0)" }
    ], { duration: 1150, delay: 170, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    return;
  }

  if (element.matches(".capabilities, .contact-grid")) {
    [...element.children].forEach((child, index) => {
      child.animate([
        { transform: "translateY(72px) scale(.96)", opacity: .14 },
        { transform: "translateY(-4px) scale(1.006)", opacity: 1, offset: .72 },
        { transform: "translateY(0) scale(1)", opacity: 1 }
      ], { duration: 1100, delay: index * 105, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    });
    return;
  }

  if (element.classList.contains("project-card")) {
    const visual = element.querySelector(".project-visual");
    element.animate([
      { transform: "translateY(120px) rotateX(5deg) scale(.94)", opacity: .12 },
      { transform: "translateY(-8px) rotateX(0deg) scale(1.008)", opacity: 1, offset: .68 },
      { transform: "translateY(0) rotateX(0deg) scale(1)", opacity: 1 }
    ], { duration: 1450, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    visual?.animate([
      { clipPath: "inset(0 100% 0 0)", transform: "scale(1.04)" },
      { clipPath: "inset(0 0 0 0)", transform: "scale(1)" }
    ], { duration: 1500, delay: delay + 80, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    return;
  }

  if (element.matches("h2, h3, .timeline-main h3")) {
    element.animate([
      { transform: "translateY(82px) scaleY(1.24)", clipPath: "inset(0 0 100% 0)", opacity: .2 },
      { transform: "translateY(-6px) scaleY(.96)", clipPath: "inset(0 0 8% 0)", opacity: 1, offset: .62 },
      { transform: "translateY(0) scaleY(1)", clipPath: "inset(0 0 0 0)", opacity: 1 }
    ], { duration: 1350, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    return;
  }

  element.animate([
    { transform: "translateY(78px) scale(.96)", opacity: .16 },
    { transform: "translateY(-5px) scale(1.006)", opacity: 1, offset: .7 },
    { transform: "translateY(0) scale(1)", opacity: 1 }
  ], { duration: 1150, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
}

function setupReveal() {
  const items = [...document.querySelectorAll(".reveal")].filter((item) => !item.closest(".hero"));
  if (!("IntersectionObserver" in window) || reduceMotion) {
    items.forEach((item) => { item.dataset.motionDone = "true"; });
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateReveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8%" });
  items.forEach((item) => observer.observe(item));
}

function setupParallax() {
  const media = [...document.querySelectorAll(".project-visual img, .floating-case img")];
  if (!media.length || reduceMotion || window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 860) return;
  media.forEach((item) => item.classList.add("parallax-media"));
  let ticking = false;
  const update = () => {
    const viewportCenter = window.innerHeight / 2;
    media.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;
      const center = rect.top + rect.height / 2;
      const offset = (viewportCenter - center) / window.innerHeight;
      item.style.setProperty("--parallax-y", `${(offset * 15).toFixed(2)}px`);
    });
    ticking = false;
  };
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function startOpeningFlow(canvas) {
  if (!canvas) return () => {};
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return () => {};
  let frame = null;
  let running = true;
  let width = 0;
  let height = 0;
  let particles = [];
  const startedAt = performance.now();
  const initialViewportWidth = window.visualViewport?.width || window.innerWidth;
  const dpr = Math.min(window.devicePixelRatio || 1, initialViewportWidth > 900 ? 1 : 1.25);
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const smooth = (value) => value * value * (3 - 2 * value);
  const rand = (min, max) => min + Math.random() * (max - min);

  const textTargets = (count) => {
    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;
    const targetContext = offscreen.getContext("2d", { willReadFrequently: true });
    if (!targetContext) return [];
    const compact = width <= 700;
    const fontSize = compact
      ? Math.min(width * .078, 38)
      : width <= 1024
        ? Math.min(width * .085, height * .15, 92)
        : Math.min(width * .095, height * .17, 120);
    targetContext.fillStyle = "#fff";
    targetContext.textAlign = "center";
    targetContext.textBaseline = "middle";
    targetContext.font = `900 ${fontSize}px "Arial Black", sans-serif`;
    const textWidth = targetContext.measureText("WANG CHEN").width;
    const scale = Math.min(1, (width * (compact ? .76 : .62)) / textWidth);
    targetContext.translate(width / 2, height * (compact ? .43 : .5) - 8);
    targetContext.scale(scale, scale);
    targetContext.fillText("WANG CHEN", 0, 0);
    targetContext.setTransform(1, 0, 0, 1, 0, 0);
    const image = targetContext.getImageData(0, 0, width, height).data;
    const points = [];
    const step = width < 700 ? 4 : 5;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (image[(y * width + x) * 4 + 3] > 100) points.push({ x, y });
      }
    }
    return Array.from({ length: count }, (_, index) => points[(index * Math.max(1, Math.floor(points.length / count))) % points.length] || { x: width / 2, y: height / 2 });
  };

  const resize = () => {
    const viewport = window.visualViewport;
    const previousWidth = width;
    const previousHeight = height;
    const previousParticles = particles;
    width = Math.max(1, Math.round(viewport ? viewport.width : window.innerWidth));
    height = Math.max(1, Math.round(viewport ? viewport.height : window.innerHeight));
    const opening = canvas.closest(".opening-screen");
    if (opening) {
      opening.style.width = width + "px";
      opening.style.height = height + "px";
    }
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(760, Math.max(480, Math.round((width * height) / 1200)));
    const targets = textTargets(count);
    const scaleX = previousWidth ? width / previousWidth : 1;
    const scaleY = previousHeight ? height / previousHeight : 1;
    particles = Array.from({ length: count }, (_, index) => {
      const target = targets[index] || { x: width / 2, y: height / 2 };
      const source = previousParticles[index % previousParticles.length];
      if (source) {
        return {
          ...source,
          x: clamp(source.x * scaleX, -24, width + 24),
          y: clamp(source.y * scaleY, -24, height + 24),
          baseX: clamp(source.baseX * scaleX, 0, width),
          targetX: target.x,
          targetY: target.y,
          wave: clamp(source.wave * Math.min(1.25, Math.max(.72, scaleX)), 5, 28)
        };
      }
      return {
        x: Math.random() * width,
        y: rand(-height * .22, height * .92),
        baseX: Math.random() * width,
        speed: rand(.18, .72),
        drift: rand(-.16, .16),
        wave: rand(6, 28),
        targetX: target.x,
        targetY: target.y,
        size: rand(.12, .34),
        alpha: rand(.18, .48),
        delay: rand(0, .25),
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > .74 ? "255,255,255" : Math.random() > .42 ? "102,221,255" : "114,166,255"
      };
    });
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);
  };

  const draw = (now) => {
    if (!running) return;
    const elapsed = (now - startedAt) / 1000;
    const intro = clamp(elapsed / .72, 0, 1);
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0,0,0,.14)";
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = "lighter";
    context.lineCap = "round";
    particles.forEach((particle) => {
      const morph = smooth(clamp((elapsed - .72 - particle.delay) / 2.05, 0, 1));
      const previousX = particle.x;
      const previousY = particle.y;
      if (morph < .015) {
        particle.baseX += particle.drift;
        particle.y += particle.speed;
        particle.x = particle.baseX + Math.sin(elapsed * 1.45 + particle.phase) * particle.wave;
        if (particle.y > height + 20) {
          particle.y = -20;
          particle.baseX = Math.random() * width;
        }
      } else {
        const settle = smooth(clamp((elapsed - 2.72 - particle.delay * .35) / .82, 0, 1));
        const pause = elapsed < 1.05 ? .22 : 1;
        const pull = (.028 + morph * .12 + settle * .095) * pause;
        const turbulence = (1 - morph) * (1 - morph) * (1 - settle * .88);
        particle.x += (particle.targetX - particle.x) * pull + Math.sin(elapsed * 1.28 + particle.phase) * turbulence * .58;
        particle.y += (particle.targetY - particle.y) * pull + Math.cos(elapsed * .98 + particle.phase) * turbulence * .4;
      }
      let directionX = particle.x - previousX;
      let directionY = particle.y - previousY;
      const directionLength = Math.hypot(directionX, directionY);
      if (directionLength < .08) {
        directionX = particle.drift || .15;
        directionY = particle.speed || .2;
      }
      const normalizedLength = Math.max(.001, Math.hypot(directionX, directionY));
      const trailLength = 2 + particle.speed * 4;
      const startX = particle.x - (directionX / normalizedLength) * trailLength;
      const startY = particle.y - (directionY / normalizedLength) * trailLength;
      const opacity = particle.alpha * intro * (.72 + morph * .28);
      context.strokeStyle = "rgba(" + particle.color + "," + opacity + ")";
      context.lineWidth = Math.max(.22, particle.size * .52);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(particle.x, particle.y);
      context.stroke();
    });

    frame = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("orientationchange", resize, { passive: true });
  window.visualViewport?.addEventListener("resize", resize, { passive: true });
  frame = requestAnimationFrame(draw);
  return () => {
    running = false;
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    window.removeEventListener("orientationchange", resize);
    window.visualViewport?.removeEventListener("resize", resize);
    context.clearRect(0, 0, width, height);
  };
}

function runOpeningAnimation() {
  const opening = document.querySelector("#opening-screen");
  const root = document.documentElement;
  if (!opening || reduceMotion) {
    opening?.remove();
    root.classList.remove("has-motion");
    root.classList.add("opening-finished");
    return;
  }
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousScrollBehavior;
  const stopFlow = startOpeningFlow(document.querySelector("#opening-flow"));
  requestAnimationFrame(() => opening.classList.add("is-active"));
  window.setTimeout(() => opening.classList.add("is-formed"), 3300);
  window.setTimeout(() => {
    opening.classList.add("is-opening", "is-complete");
    root.classList.add("hero-entering");
  }, 4300);
  window.setTimeout(() => {
    stopFlow();
    opening.remove();
    root.classList.add("opening-finished");
  }, 5000);
  window.setTimeout(() => {
    root.classList.remove("has-motion", "hero-entering");
    root.classList.add("opening-finished");
  }, 6500);
}

function setupHeader() {
  let ticking = false;
  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  };
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeader);
  };
  updateHeader();
  window.addEventListener("scroll", requestUpdate, { passive: true });
}

function setupMenu() {
  if (!menuToggle || !nav) return;
  const closeMenu = () => {
    menuToggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 860) closeMenu(); });
}

function setupActiveNav() {
  const links = [...document.querySelectorAll("[data-nav]")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -58%", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    counters.forEach((counter) => { counter.textContent = counter.dataset.count + (counter.dataset.suffix || ""); });
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const duration = 1100;
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.7 });
  counters.forEach((counter) => observer.observe(counter));
}

function buildMeta(items) {
  return items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function buildFacts(items) {
  return items.map(([label, value]) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function buildDecisions(items) {
  return items.map((item, index) => `<li data-index="${String(index + 1).padStart(2, "0")}">${item}</li>`).join("");
}

function buildGallery(items) {
  return items.map(([src, title], index) => `
    <figure data-slide-index="${index}">
      <img src="${src}" alt="${title}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async">
      <figcaption><strong>${title}</strong></figcaption>
    </figure>
  `).join("");
}

function buildCarousel(items) {
  return items.map(([src, title], index) => `
    <figure class="carousel-slide">
      <img src="${src}" alt="${title}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async">
    </figure>
  `).join("");
}

function setCarousel(index, animate = true) {
  if (!carouselItems.length) return;
  carouselIndex = (index + carouselItems.length) % carouselItems.length;
  const track = document.querySelector("#case-carousel-track");
  if (track) {
    track.style.transition = animate ? "" : "none";
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  }
  document.querySelectorAll(".carousel-slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === carouselIndex);
  });
  const current = document.querySelector("#case-carousel-current");
  const total = document.querySelector("#case-carousel-total");
  if (current) current.textContent = String(carouselIndex + 1).padStart(2, "0");
  if (total) total.textContent = String(carouselItems.length).padStart(2, "0");
  gallery?.querySelectorAll("figure").forEach((figure, figureIndex) => {
    figure.classList.toggle("is-active", figureIndex === carouselIndex);
  });
  const activeFigure = gallery?.querySelector(".is-active");
  if (activeFigure?.scrollIntoView) {
    activeFigure.scrollIntoView({ behavior: animate ? "smooth" : "auto", block: "nearest", inline: "nearest" });
  }
}

function restartProgress() {
  const wrap = document.querySelector(".case-carousel-progress");
  if (!wrap) return;
  wrap.classList.remove("is-running");
  wrap.style.setProperty("--slide-duration", `${carouselDuration}ms`);
  void wrap.offsetWidth;
  wrap.classList.add("is-running");
}

function stopCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = null;
  carouselPlaying = false;
  document.querySelector(".case-carousel-progress")?.classList.remove("is-running");
}

function startCarousel() {
  if (reduceMotion || !carouselItems.length) return;
  stopCarousel();
  carouselPlaying = true;
  carouselTimer = window.setInterval(() => setCarousel(carouselIndex + 1, true), carouselDuration);
  restartProgress();
}

function nextCarousel() {
  setCarousel(carouselIndex + 1, true);
  if (carouselPlaying) startCarousel();
}

function previousCarousel() {
  setCarousel(carouselIndex - 1, true);
  if (carouselPlaying) startCarousel();
}

function goToCarousel(index) {
  setCarousel(index, true);
  if (carouselPlaying) startCarousel();
}

function openProject(id, trigger) {
  const project = projects[id];
  if (!project || !modal) return;
  lastTrigger = trigger || null;
  document.querySelector("#case-number").textContent = project.number;
  document.querySelector("#case-kicker").textContent = project.kicker;
  document.querySelector("#case-title").textContent = project.title;
  document.querySelector("#case-summary").textContent = project.summary;
  document.querySelector("#case-introduction").textContent = project.introduction;
  document.querySelector("#case-background").textContent = project.background;
  document.querySelector("#case-decisions").innerHTML = buildDecisions(project.decisions);
  document.querySelector("#case-meta").innerHTML = buildMeta(project.meta);
  document.querySelector("#case-facts").innerHTML = buildFacts(project.facts);
  carouselItems = project.gallery;
  carouselIndex = 0;
  const carouselTrack = document.querySelector("#case-carousel-track");
  const carouselViewport = document.querySelector("#case-carousel-viewport");
  if (carouselTrack) {
    carouselTrack.innerHTML = buildCarousel(carouselItems);
    carouselTrack.style.transform = "";
    carouselTrack.style.transition = "";
    carouselTrack.style.animation = "";
    carouselTrack.style.setProperty("--carousel-duration", `${Math.max(24, carouselItems.length * 4.2)}s`);
  }
  document.querySelector("#case-carousel-current").textContent = "01";
  document.querySelector("#case-carousel-total").textContent = String(project.gallery.length).padStart(2, "0");
  const caseCarousel = document.querySelector(".case-carousel");
  caseCarousel?.animate([
    { clipPath: "inset(0 100% 0 0)", transform: "translateY(58px) scale(.965)" },
    { clipPath: "inset(0 0 0 0)", transform: "translateY(0) scale(1)" }
  ], { duration: 1450, delay: 120, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
  modalScroll.scrollTop = 0;
  requestAnimationFrame(() => {
    const currentViewport = document.querySelector("#case-carousel-viewport");
    const currentTrack = document.querySelector("#case-carousel-track");
    if (currentViewport?.clientWidth && currentTrack) {
      currentTrack.style.setProperty("--carousel-slide-width", `${currentViewport.clientWidth}px`);
      setCarousel(0, false);
      startCarousel();
    }
    document.querySelector(".case-close")?.focus();
  });
}

function closeProject() {
  if (!modal?.classList.contains("is-open")) return;
  stopCarousel();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  if (lastTrigger) lastTrigger.focus();
}

function setupProjects() {
  document.querySelectorAll("[data-project]").forEach((card) => {
    const open = () => openProject(card.dataset.project, card);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeProject));
  document.querySelector("#case-carousel-prev")?.addEventListener("click", previousCarousel);
  document.querySelector("#case-carousel-next")?.addEventListener("click", nextCarousel);
  const carouselViewport = document.querySelector("#case-carousel-viewport");
  carouselViewport?.addEventListener("mouseenter", stopCarousel);
  carouselViewport?.addEventListener("mouseleave", () => {
    if (modal?.classList.contains("is-open")) startCarousel();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProject();
    if (modal?.classList.contains("is-open") && event.key === "ArrowRight") nextCarousel();
    if (modal?.classList.contains("is-open") && event.key === "ArrowLeft") previousCarousel();
  });
  window.addEventListener("resize", () => {
    if (!modal?.classList.contains("is-open")) return;
    const viewport = document.querySelector("#case-carousel-viewport");
    const track = document.querySelector("#case-carousel-track");
    if (viewport?.clientWidth && track) {
      track.style.setProperty("--carousel-slide-width", `${viewport.clientWidth}px`);
    }
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function setupCopy() {
  document.querySelectorAll(".copy-email").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.email || "455895576@qq.com";
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }
      showToast("邮箱已复制");
    });
  });
}

function setupCardSpotlight() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".project-card, .stat").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty("--spot-y", `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
    }, { passive: true });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--spot-x", "50%");
      card.style.setProperty("--spot-y", "50%");
    });
  });
}
function setupMagneticButtons() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const buttons = document.querySelectorAll(".button, .header-cta");
  buttons.forEach((button) => {
    const reset = () => {
      button.style.setProperty("--magnet-x", "0px");
      button.style.setProperty("--magnet-y", "0px");
      button.style.setProperty("--tilt-x", "0deg");
      button.style.setProperty("--tilt-y", "0deg");
      button.style.setProperty("--glow-x", "50%");
      button.style.setProperty("--glow-y", "50%");
      button.classList.remove("is-pointer-active");
    };
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const offsetX = (x - 0.5) * 10;
      const offsetY = (y - 0.5) * 7;
      button.style.setProperty("--magnet-x", `${offsetX.toFixed(2)}px`);
      button.style.setProperty("--magnet-y", `${offsetY.toFixed(2)}px`);
      button.style.setProperty("--tilt-x", `${(-(y - 0.5) * 5).toFixed(2)}deg`);
      button.style.setProperty("--tilt-y", `${((x - 0.5) * 6).toFixed(2)}deg`);
      button.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
      button.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
      button.classList.add("is-pointer-active");
    });
    button.addEventListener("pointerleave", reset);
    button.addEventListener("blur", reset);
  });
}
function setupPointerGlow() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let frame = null;
  const render = () => {
    const deltaX = targetX - currentX;
    const deltaY = targetY - currentY;
    currentX += deltaX * 0.12;
    currentY += deltaY * 0.12;
    document.documentElement.style.setProperty("--mx", `${currentX.toFixed(2)}px`);
    document.documentElement.style.setProperty("--my", `${currentY.toFixed(2)}px`);
    if (Math.abs(deltaX) > 0.2 || Math.abs(deltaY) > 0.2) {
      frame = requestAnimationFrame(render);
    } else {
      frame = null;
    }
  };
  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    if (!frame) frame = requestAnimationFrame(render);
  }, { passive: true });
}

setupHeader();
setupMenu();
setupActiveNav();
setupCounters();
setupProjects();
setupCopy();
setupMagneticButtons();
setupCardSpotlight();
setupPointerGlow();
setupReveal();
setupParallax();
runOpeningAnimation();