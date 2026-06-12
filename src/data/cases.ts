const reportPages = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/case-assets/report-pages/${slug}/page-${String(index + 1).padStart(2, '0')}.webp`);

export type CaseMedia =
  | {
      title: string;
      type: 'image';
      src: string;
      caption: string;
    }
  | {
      title: string;
      type: 'report';
      pages: string[];
      cover: string;
      caption: string;
    };

export type CaseStage = {
  label: '合作初期' | '执行路径' | '成果转化';
  title: string;
  description: string;
  insight: string;
  media: CaseMedia[];
};

export type CaseItem = {
  id: string;
  title: string;
  industry: string;
  category: '4.9基础' | '69报告' | '口腔' | 'SPA' | '中医馆';
  storeStage: string;
  coreProblem: string;
  framework: string;
  actions: string;
  goal: string;
  reusable: string;
  summary: string;
  highlight: string;
  deliverables: string[];
  suitableFor: string;
  stages: CaseStage[];
};

export const cases: CaseItem[] = [
  {
    id: 'mini-audit',
    title: '4.9元门店基础体检能得到什么',
    industry: '基础体检 / 初步判断',
    category: '4.9基础',
    storeStage: '诊断入口',
    coreProblem: '店主想先知道线上页面有没有明显漏客点，但暂时不需要完整方案。',
    framework: '用D2页面诊断和D5转化诊断先看主图、团单、评价和咨询入口。',
    actions: '用一页式反馈指出3-5个基础问题，并判断是否需要进入69元深度诊断。',
    goal: '帮助店主用较低决策成本看清第一批优先问题。',
    reusable: '适合把陌生咨询转化为第一次信任建立。',
    highlight: '用一次轻量体检，先看页面最明显的漏客点。',
    summary:
      '4.9元适合店主先做一次轻量判断，重点看线上页面最基础、最明显的问题，不需要一开始就做完整代运营。',
    deliverables: ['一页式诊断结论', '基础问题截图说明', '是否需要继续做69元报告的建议'],
    suitableFor: '适合还在观望、第一次接触线上运营诊断、想先判断页面基础问题的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先确认页面是否值得继续深挖',
        description: '店主先提供门店链接或截图，不做复杂调研，先看最影响第一眼判断的基础问题。',
        insight: '核心不是给一堆泛泛建议，而是帮店主判断：这个页面有没有必要继续做完整诊断。',
        media: [
          {
            title: '4.9元基础体检报告预览',
            type: 'report',
            pages: reportPages('mini-audit', 1),
            cover: '/case-assets/9-audit/mini-audit-cover.webp',
            caption: '站内报告预览，点击可放大查看'
          }
        ]
      },
      {
        label: '执行路径',
        title: '围绕主图、团单、评价做基础判断',
        description: '从顾客第一眼能不能看懂、套餐是否清楚、评价关键词是否支撑信任三个角度快速判断。',
        insight: '4.9元不是完整方案，它的价值是降低第一次沟通成本，让店主先看到问题在哪里。',
        media: [
          {
            title: '基础体检报告页',
            type: 'report',
            pages: reportPages('mini-audit', 1),
            cover: '/case-assets/9-audit/mini-audit-cover.webp',
            caption: '一页式结构，适合快速沟通'
          }
        ]
      },
      {
        label: '成果转化',
        title: '判断是否升级到69元完整报告',
        description: '如果基础问题明显，再进入69元详细诊断报告，把主图、页面、团单、评价、竞品和搜索词系统拆清楚。',
        insight: '这一步负责建立第一次信任，不强推月度代运营。',
        media: [
          {
            title: '4.9元体检交付样式',
            type: 'report',
            pages: reportPages('mini-audit', 1),
            cover: '/case-assets/9-audit/mini-audit-cover.webp',
            caption: '让店主先看到交付长什么样'
          }
        ]
      }
    ]
  },
  {
    id: 'report-199',
    title: '69元深度诊断报告能得到什么',
    industry: '69元报告 / 交付样例',
    category: '69报告',
    storeStage: '准备系统优化',
    coreProblem: '店主知道线上有问题，但分不清是主图、团单、评价、竞品、搜索词还是承接流程的问题。',
    framework: '用Local Growth 5D模型完整拆解定位、页面、搜索、内容和转化。',
    actions: '输出页面拆解、团单建议、竞品对比、搜索词建议和优先整改顺序。',
    goal: '让店主在执行前先拿到一份能看懂、能落地的诊断材料。',
    reusable: '适合所有准备认真优化线上店铺，但暂时不确定是否代运营的门店。',
    highlight: '把主图、团单、评价、竞品和搜索词拆成整改顺序。',
    summary:
      '69元报告会把门店线上获客链路拆成可执行的整改顺序，适合店主先拿到一份能看懂、能执行的完整诊断材料。',
    deliverables: ['完整报告预览', '竞品与项目结构分析', '团单和页面整改顺序', '下一步执行建议'],
    suitableFor: '适合中医馆、推拿馆、口腔门诊等想先看清线上问题，再决定是否做月度代运营的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先判断门店所处的竞争位置',
        description: '先看同城竞品、项目结构、评分评价和低价体验项目，把门店当前线上处境说清楚。',
        insight: '报告第一步要让店主知道：不是单纯改图片，而是先看自己在同城竞争里处在哪个位置。',
        media: [
          {
            title: '线上美团新店启动方案',
            type: 'report',
            pages: reportPages('new-store-plan', 13),
            cover: '/case-assets/199-report/new-store-plan-cover.webp',
            caption: '13页站内预览，展示新店上线前的竞品和项目规划'
          }
        ]
      },
      {
        label: '执行路径',
        title: '把页面、团单和双店定位拆开',
        description: '遇到一个位置两个店铺、诊所和养生馆定位混在一起时，先明确两个线上入口分别承担什么获客任务。',
        insight: '高客单项目和体验项目不能混在一起讲，需要先建立清楚的入口分工。',
        media: [
          {
            title: '一个位置两个店铺的方案',
            type: 'report',
            pages: reportPages('two-store-plan', 6),
            cover: '/case-assets/199-report/two-store-plan-cover.webp',
            caption: '6页站内预览，展示双店模型拆解'
          }
        ]
      },
      {
        label: '成果转化',
        title: '让店主拿到可执行的下一步',
        description: '报告最后不是停在问题描述，而是给出先改主图、再改团单、再补评价关键词和承接话术的顺序。',
        insight: '69元报告的转化点，是让店主看到“接下来该怎么做”。',
        media: [
          {
            title: '完整诊断报告结构',
            type: 'report',
            pages: reportPages('new-store-plan', 13),
            cover: '/case-assets/199-report/new-store-plan-cover.webp',
            caption: '站内翻阅完整结构'
          }
        ]
      }
    ]
  },
  {
    id: 'oral-case',
    title: '真如口腔：儿童早矫/口腔项目线上转化',
    industry: '口腔门诊 / 儿童早矫',
    category: '口腔',
    storeStage: '已有项目，需要优化转化承接',
    coreProblem: '口腔项目客单高、决策周期长，家长会同时关注费用、医生信任、案例和现场评估流程。',
    framework: '重点使用D2页面诊断、D4内容诊断和D5转化诊断，拆解差评风险、团单表达和早矫承接材料。',
    actions: '整理初始诊断方案、团单修改设计、好评模板、儿童早矫SOP、话术和评估表。',
    goal: '减少线上信任流失，让家长更容易理解项目、费用和评估流程。',
    reusable: '适合儿童齿科、正畸、早矫和高客单医疗健康项目。',
    highlight: '从差评风险、团单设计，到早矫SOP和阶段数据。',
    summary:
      '这个案例重点展示口腔门诊从初始诊断、差评风险、团单设计，到后续数据和金牌评分的过程。',
    deliverables: ['初始诊断方案', '差评风险拆解', '团单修改设计', '好评模板', '儿童早矫SOP、话术和评估表', '阶段数据截图'],
    suitableFor: '适合口腔门诊、儿童齿科、正畸/早矫项目需要提升线上信任感和现场承接能力的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先拆诊断报告和差评风险',
        description: '合作前先看页面、评价和顾客顾虑，知道线上信任问题出在哪里。',
        insight: '口腔项目不是只靠低价团单，家长更在意费用透明、项目解释和现场评估流程。',
        media: [
          {
            title: '口腔门诊初始诊断方案',
            type: 'report',
            pages: reportPages('oral-initial-diagnosis', 8),
            cover: '/case-assets/oral/initial-diagnosis-cover.webp',
            caption: '8页站内预览，展示初始问题拆解'
          },
          {
            title: '差评风险截图',
            type: 'image',
            src: '/case-assets/oral/bad-review-1.webp',
            caption: '用于拆解顾客在意的问题'
          },
          {
            title: '差评风险补充截图',
            type: 'image',
            src: '/case-assets/oral/bad-review-2.webp',
            caption: '用于整理页面和接待改进方向'
          }
        ]
      },
      {
        label: '执行路径',
        title: '重做团单和儿童早矫承接材料',
        description: '把线上项目表达、好评关键词、儿童早矫现场承接动作整理成可执行材料。',
        insight: '线上页面负责建立信任，店内SOP负责把咨询接住，两边要对齐。',
        media: [
          {
            title: '团单修改设计1',
            type: 'image',
            src: '/case-assets/oral/tuandan-design-1.webp',
            caption: '团单项目表达修改'
          },
          {
            title: '团单修改设计2',
            type: 'image',
            src: '/case-assets/oral/tuandan-design-2.webp',
            caption: '项目卖点和价格表达调整'
          },
          {
            title: '好评评价模板',
            type: 'report',
            pages: reportPages('oral-review-template', 3),
            cover: '/case-assets/oral/review-template-cover.webp',
            caption: '3页站内预览，展示好评关键词模板'
          },
          {
            title: '儿童早期矫正场景转化SOP',
            type: 'report',
            pages: reportPages('oral-early-correction-sop', 5),
            cover: '/case-assets/oral/early-correction-sop-cover.webp',
            caption: '5页站内预览，展示现场转化SOP'
          },
          {
            title: '儿童早期矫正话术',
            type: 'report',
            pages: reportPages('oral-early-correction-script', 14),
            cover: '/case-assets/oral/early-correction-script-cover.webp',
            caption: '14页站内预览，展示咨询话术'
          },
          {
            title: '初筛评估表',
            type: 'report',
            pages: reportPages('oral-early-correction-assessment', 2),
            cover: '/case-assets/oral/early-correction-assessment-cover.webp',
            caption: '2页站内预览，展示评估表'
          }
        ]
      },
      {
        label: '成果转化',
        title: '看阶段数据、评分和成交承接',
        description: '用阶段截图展示合作后门店线上经营数据、评分和成交承接情况。',
        insight: '成果展示不只看一个数字，而是看咨询、下单、评分和店内承接是否形成闭环。',
        media: [
          {
            title: '第一个月增长数据',
            type: 'image',
            src: '/case-assets/oral/growth-data.webp',
            caption: '经营参谋阶段数据截图'
          },
          {
            title: '阶段评分截图',
            type: 'image',
            src: '/case-assets/oral/score-now.webp',
            caption: '评分与金牌标识截图'
          },
          {
            title: '成交沟通截图',
            type: 'image',
            src: '/case-assets/oral/deal-screenshot.webp',
            caption: '成交过程截图'
          }
        ]
      }
    ]
  },
  {
    id: 'spa-case',
    title: '仁怀健康驿站：健康类门店线上运营优化',
    industry: 'SPA推拿 / 到店服务',
    category: 'SPA',
    storeStage: '已有线上店铺，需要重排项目和承接动作',
    coreProblem: '项目多但顾客看不懂差异，团单标题、图片、评价关键词和店内SOP没有形成闭环。',
    framework: '重点使用D1定位诊断、D2页面诊断和D5转化诊断，先拆项目结构，再对齐店内服务流程。',
    actions: '调整团单标题与图片表达，补充店内SOP、好评模板和店员沟通说明。',
    goal: '让顾客更快理解套餐差异，也让店员知道如何承接体验和评价。',
    reusable: '适合推拿馆、SPA、艾灸理疗馆、正骨馆等项目多的到店服务门店。',
    highlight: '从项目重排、评分变化，到店内SOP和店员沟通。',
    summary:
      '这个案例重点展示推拿SPA门店从诊断，到团单项目重排、评分变化、店内SOP和店员沟通的过程。',
    deliverables: ['初始分析报告', '团单标题和图片优化', '评分截图', '店铺内部SOP', '好评模板', '店员沟通说明'],
    suitableFor: '适合推拿馆、SPA、理疗馆、艾灸理疗馆等项目多、套餐表达不清楚的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先做完整分析报告',
        description: '先把门店线上基础、项目结构和页面问题拆开，知道后面应该先改什么。',
        insight: 'SPA和推拿类门店最常见的问题，是项目很多但顾客看不懂差异。',
        media: [
          {
            title: '初始分析报告',
            type: 'report',
            pages: reportPages('spa-initial-analysis', 6),
            cover: '/case-assets/spa/initial-analysis-report-cover.webp',
            caption: '6页站内预览，展示初始分析'
          }
        ]
      },
      {
        label: '执行路径',
        title: '修改团单、图片和店内执行材料',
        description: '把线上团单从单纯项目列表，改成更容易理解的套餐结构，同时补充店内SOP和评价模板。',
        insight: '线上团单负责让顾客下单，店内SOP负责让体验和评价关键词接得上。',
        media: [
          {
            title: '修改后的团单项目标题和图片',
            type: 'image',
            src: '/case-assets/spa/tuandan-after-1.webp',
            caption: '团单标题与项目图优化'
          },
          {
            title: '修改后的团单列表',
            type: 'image',
            src: '/case-assets/spa/tuandan-after-2.webp',
            caption: '套餐结构重排'
          },
          {
            title: '店铺内部SOP',
            type: 'image',
            src: '/case-assets/spa/sop.webp',
            caption: '店内执行流程截图'
          },
          {
            title: '好评模板',
            type: 'report',
            pages: reportPages('spa-review-template', 3),
            cover: '/case-assets/spa/review-template-cover.webp',
            caption: '3页站内预览，展示好评模板'
          }
        ]
      },
      {
        label: '成果转化',
        title: '看评分和沟通执行',
        description: '后续继续跟进评分、页面执行和店员沟通，让线上内容和店内服务动作对齐。',
        insight: '门店增长不是只改页面，最后要落到店员知道怎么接、顾客知道怎么评。',
        media: [
          {
            title: '阶段评分截图',
            type: 'image',
            src: '/case-assets/spa/score-now.webp',
            caption: '评分截图'
          },
          {
            title: '与店员的沟通',
            type: 'image',
            src: '/case-assets/spa/staff-chat.webp',
            caption: '店内执行沟通截图'
          }
        ]
      }
    ]
  },
  {
    id: 'tcm-case',
    title: '中医馆美团方案：新店开通美团前的产品与团单规划',
    industry: '中医馆 / 美团点评',
    category: '中医馆',
    storeStage: '上线前或准备重做页面',
    coreProblem: '中医馆项目解释成本高，如果上线前没有规划产品梯度，顾客容易只看到低价体验。',
    framework: '重点使用D1定位诊断、D2页面诊断和D3搜索诊断，先拆项目梯度、团单表达和顾客入口。',
    actions: '围绕美团点评页面做诊断，梳理项目结构、团单表达、评价关键词和销售承接方向。',
    goal: '先让店主看清线上页面的核心问题，再决定优先上线或整改哪些项目。',
    reusable: '适合中医馆、针灸推拿馆、艾灸理疗馆等专业解释成本高的门店。',
    highlight: '从诊断方案到客户沟通，再到后续销售承接。',
    summary:
      '这个案例展示中医馆从美团点评诊断方案，到后续成交和销售截图的过程，适合看69元报告如何承接后续合作。',
    deliverables: ['美团点评诊断方案', '成交沟通截图', '销售过程截图'],
    suitableFor: '适合中医馆、针灸推拿馆、艾灸理疗馆等项目多、需要先看清线上产品结构的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先看美团点评诊断方案',
        description: '先看竞品、团单、页面和项目结构，再给店主明确下一步整改顺序。',
        insight: '中医馆项目解释成本高，先把项目梯度和顾客入口拆清楚。',
        media: [
          {
            title: '美团点评诊断方案',
            type: 'report',
            pages: reportPages('tcm-meituan-diagnosis', 6),
            cover: '/case-assets/tcm/meituan-diagnosis-cover.webp',
            caption: '6页站内预览，展示诊断方案'
          }
        ]
      },
      {
        label: '执行路径',
        title: '从诊断方案进入合作沟通',
        description: '展示从诊断方案到客户沟通、确认需求和服务承接的过程。',
        insight: '诊断报告本身也是信任建立过程，让客户看到你不是泛泛聊运营。',
        media: [
          {
            title: '成交截图',
            type: 'image',
            src: '/case-assets/tcm/deal-screenshot.webp',
            caption: '成交沟通过程'
          }
        ]
      },
      {
        label: '成果转化',
        title: '销售承接过程截图',
        description: '展示后续销售承接和客户需求确认，让案例从报告走到实际合作。',
        insight: '从报告到成交，核心是让店主知道问题、认可路径、愿意继续执行。',
        media: [
          {
            title: '销售承接截图',
            type: 'image',
            src: '/case-assets/tcm/sales-screenshot.webp',
            caption: '销售承接过程'
          }
        ]
      }
    ]
  },
  {
    id: 'tuina-diagnosis',
    title: '推拿馆线上店铺诊断：页面、价格、标题、团单问题拆解',
    industry: '推拿馆 / 美团点评',
    category: 'SPA',
    storeStage: '线上店铺已有内容，但结构不清晰',
    coreProblem: '页面、价格、标题和团单没有形成清晰梯度，顾客难以判断第一次应该选择哪个项目。',
    framework: '重点使用D1定位诊断和D2页面诊断，从项目结构、价格梯度、标题表达和评价关键词判断漏客点。',
    actions: '拆解团单层级、项目命名、主图表达和详情页说明，整理优先整改顺序。',
    goal: '让店主先知道应该先改页面、团单还是评价关键词，避免只靠低价引流。',
    reusable: '适合推拿馆、理疗馆、正骨馆等项目多、套餐容易混乱的门店。',
    highlight: '用诊断报告拆清页面、价格、标题和团单问题。',
    summary: '这个案例用于展示推拿馆线上店铺诊断的拆解方式，重点看顾客第一眼能不能理解项目价值和购买路径。',
    deliverables: ['页面结构诊断', '团单标题建议', '价格梯度判断', '评价关键词方向'],
    suitableFor: '适合推拿馆、理疗馆、正骨馆等需要先拆线上页面结构的门店。',
    stages: [
      {
        label: '合作初期',
        title: '先看页面和项目结构',
        description: '先判断顾客点进页面后能否快速理解项目、价格和适合人群。',
        insight: '推拿馆页面如果一开始讲不清项目差异，后续再多活动也容易浪费流量。',
        media: [
          {
            title: '推拿馆初始分析报告',
            type: 'report',
            pages: reportPages('spa-initial-analysis', 6),
            cover: '/case-assets/spa/initial-analysis-report-cover.webp',
            caption: '6页站内预览，展示页面与项目结构拆解'
          }
        ]
      },
      {
        label: '执行路径',
        title: '重排团单标题和项目卖点',
        description: '按体验、核心和升级项目重排团单，让店主先知道哪些内容需要优先修改。',
        insight: '团单不是越多越好，而是要让顾客能快速选对项目。',
        media: [
          {
            title: '团单标题和图片调整',
            type: 'image',
            src: '/case-assets/spa/tuandan-after-1.webp',
            caption: '团单标题与项目图优化'
          },
          {
            title: '团单列表重排',
            type: 'image',
            src: '/case-assets/spa/tuandan-after-2.webp',
            caption: '套餐结构重排'
          }
        ]
      },
      {
        label: '成果转化',
        title: '形成可复用的整改顺序',
        description: '把页面、价格、标题、团单和评价关键词按优先级整理成后续执行路径。',
        insight: '诊断的价值不是一次性指出问题，而是帮店主知道先改什么、后改什么。',
        media: [
          {
            title: '店内执行SOP',
            type: 'image',
            src: '/case-assets/spa/sop.webp',
            caption: '店内执行流程截图'
          }
        ]
      }
    ]
  }
];
