# Cyrus吕｜门店增长专家

本项目是一个使用 Astro + Tailwind CSS 构建的静态个人业务官网，定位为“本地门店线上运营方案库”，部署目标为 Cloudflare Pages。

当前业务路径：

- 9.9元门店基础体检：帮助店主先了解线上页面基础问题
- 199元详细诊断报告：主图、页面、团单、评价、竞品、搜索词和整改顺序
- 月度代运营：按周执行页面、团单、活动、评价关键词、小红书选题和朋友圈文案
- GEO/本地搜索优化：作为后续增值项目

核心转化页：

- `/audit-report`：199元详细诊断报告成交页
- `/cases`：匿名案例拆解页

## 本地如何运行

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:4321`。

## 如何添加博客文章

博客文章放在 `src/content/blog` 目录下，使用 Markdown 编写。

新建一个 `.md` 文件，并添加 frontmatter：

```md
---
title: "文章标题"
description: "文章摘要"
category: "美团运营"
publishDate: 2026-06-06
---

正文内容从这里开始。
```

支持的分类包括：

- 美团运营
- 小红书运营
- 医疗获客
- 朋友圈文案
- 案例复盘

## 如何修改案例

案例数据在 `src/data/cases.ts`。

每个案例包含：

- `title`：案例名称
- `industry`：行业
- `background`：行业背景
- `initialProblem`：初始问题
- `actions`：做了什么
- `deliverables`：交付内容
- `progress`：阶段变化
- `suitableFor`：适合参考的门店
- `evidence`：匿名证据卡片

建议案例文案使用打码后的真实问题，重点写诊断思路、优化动作和阶段变化。原始 PDF、微信截图和带店名的截图不要直接放到 `public` 目录。

## 如何部署到 Cloudflare Pages

1. 将项目推送到 GitHub 或 GitLab。
2. 进入 Cloudflare Pages，新建项目并连接仓库。
3. 选择框架预设时可选择 Astro，或手动填写构建配置。
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

## 站点内容位置

- 页面：`src/pages`
- 布局：`src/layouts/BaseLayout.astro`
- 组件：`src/components`
- 服务数据：`src/data/services.ts`
- 合作方式数据：`src/data/home.ts`
- 案例数据：`src/data/cases.ts`
- 199元报告数据：`src/data/auditReport.ts`
- 资料数据：`src/data/resources.ts`
- 博客文章：`src/content/blog`
- SEO 文件：`public/robots.txt`、`public/sitemap.xml`
