# Cyrus吕｜门店增长专家

这是一个使用 Astro + Tailwind CSS 构建的静态官网，定位为“本地门店线上运营诊断与增长方案”。站点部署目标为 Cloudflare Pages，保持纯静态生成，适合免费托管。

主品牌：`Cyrus吕｜门店增长专家`  
辅助表达：`Local Growth Lab`

## 网站结构

- `/`：首页，展示门店线上获客链路、核心判断、5D 诊断模型、服务矩阵、行业场景、案例预览和洞察文章
- `/services`：服务页，展示从诊断到执行陪跑的服务体系
- `/methodology`：诊断方法论，展示 Local Growth 5D 诊断模型
- `/cases`：匿名案例页，展示案例问题拆解、截图和报告预览
- `/blog`：洞察页，展示给本地门店店主看的咨询笔记
- `/resources`：资料页，展示线上获客工具包
- `/about`：关于页，展示工作方式和服务原则
- `/contact`：联系合作页，展示微信二维码、发送模板、合作流程和 FAQ
- `/audit-report`：69元深度诊断报告说明页

## 本地如何运行

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:4321`。

本地构建检查：

```bash
npm run build
```

## 如何添加洞察文章

文章放在 `src/content/blog` 目录下，使用 Markdown 编写。

新建一个 `.md` 文件，并添加 frontmatter：

```md
---
title: "文章标题"
description: "页面 SEO 摘要"
category: "平台诊断"
publishDate: 2026-06-08
readingTime: "6分钟"
industry: "中医馆、推拿馆、口腔"
summary: "文章卡片摘要"
---

正文内容从这里开始。
```

支持的分类：

- 平台诊断
- 美团点评
- 小红书本地运营
- 医疗健康内容
- 教培招生
- 案例复盘
- 老板经营认知

## 如何修改案例

案例数据在 `src/data/cases.ts`。

每个案例重点字段：

- `title`：案例名称，建议匿名化
- `industry`：行业
- `storeStage`：门店阶段
- `coreProblem`：核心问题
- `framework`：诊断框架
- `actions`：优化动作
- `goal`：阶段目标
- `reusable`：可复用经验
- `evidence`：截图、报告预览和过程证据

案例页支持已打码截图和 WebP 报告页预览。建议只放匿名化素材，避免出现真实店名、手机号、二维码、具体地址、订单号等隐私信息。

## 如何修改服务和页面文案

主要数据文件：

- `src/data/site.ts`：品牌、导航、邮箱、微信二维码、站点描述
- `src/data/consulting.ts`：首页洞察、5D 诊断模型、服务矩阵、行业场景、FAQ、联系页模板
- `src/data/auditReport.ts`：69元深度诊断报告页面内容
- `src/data/resources.ts`：资料页工具包
- `src/data/cases.ts`：案例页

主要组件：

- `HeroSection`
- `InsightCards`
- `DiagnosticFramework`
- `ServiceMatrix`
- `IndustryScenarios`
- `CasePreview`
- `ResourceCards`
- `CTASection`
- `FAQSection`

## 如何部署到 Cloudflare Pages

1. 将项目推送到 GitHub。
2. 进入 Cloudflare Pages，新建项目并连接仓库。
3. 选择 Astro 预设，或手动填写构建配置。
4. 保存并部署。

Cloudflare Pages 构建配置：

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js 版本：建议使用 20 或更高

## 常用命令

```bash
npm run dev
npm run build
npm run preview
```

## 内容表达注意

医疗健康相关内容要保持合规、克制、真实。避免使用夸大或敏感表达，优先使用“增强信任感”“优化咨询路径”“提升表达清晰度”“阶段目标”“提高转化机会”等表达。
