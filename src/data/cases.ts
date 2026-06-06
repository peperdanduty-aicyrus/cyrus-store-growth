export type CaseItem = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
};

export const cases: CaseItem[] = [
  {
    title: '仁怀健康驿站',
    industry: '健康类门店',
    problem: '线上入口分散，顾客很难快速看懂服务项目和到店理由。',
    solution: '梳理核心项目、页面信息和私域承接话术，优先补齐门店基础资料和服务说明。',
    result: '目标是让线上页面更清楚，便于后续做内容发布和咨询承接。'
  },
  {
    title: '真如口腔',
    industry: '口腔门诊',
    problem: '儿童早矫/口腔项目专业度高，但页面表达容易让家长看不懂。',
    solution: '把项目拆成家长关心的问题、适合人群、初诊流程和常见疑问，减少纯专业术语。',
    result: '目标是提升项目理解度，让咨询前的信息更完整。'
  },
  {
    title: '中医馆美团方案',
    industry: '中医馆',
    problem: '新店开通美团前，产品、团单和页面结构还没有形成清晰梯度。',
    solution: '先规划入门体验、核心项目和利润项目，再设计标题、详情页和评价关键词方向。',
    result: '目标是在上线前减少返工，避免只靠低价团单引流。'
  },
  {
    title: '推拿馆线上店铺诊断',
    industry: '推拿理疗',
    problem: '页面标题、价格和团单内容缺少重点，顾客难判断每个套餐差异。',
    solution: '拆解主图、标题、套餐层级和竞品页面，给出优先整改顺序。',
    result: '目标是让顾客更快理解项目价值，并为后续活动复盘提供依据。'
  }
];
