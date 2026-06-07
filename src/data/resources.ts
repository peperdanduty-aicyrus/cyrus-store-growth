export type Resource = {
  title: string;
  audience: string;
  problem: string;
};

export const resources: Resource[] = [
  {
    title: '中医馆美团开店检查表',
    audience: '准备开通美团/大众点评的中医馆店主',
    problem: '上线前检查项目、团单、页面资料和评价关键词，减少盲目开店。'
  },
  {
    title: '推拿馆美团团单设计清单',
    audience: '推拿、艾灸理疗、养生馆经营者',
    problem: '区分引流款、核心款和利润款，避免只用低价套餐吸引顾客。'
  },
  {
    title: '本地门店小红书选题表',
    audience: '想做同城小红书内容的本地门店',
    problem: '从顾客问题、本地搜索词和门店场景出发，避免一上来只发硬广。'
  },
  {
    title: '朋友圈活动宣传文案模板',
    audience: '需要做私域活动但不会写文案的店主',
    problem: '把活动理由、适合人群、权益和咨询动作讲清楚。'
  }
];
