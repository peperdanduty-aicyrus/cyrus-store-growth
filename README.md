# Cyrus吕｜门店增长专家

本项目是一个使用 Astro + Tailwind CSS 构建的静态个人业务官网，定位为“本地门店线上运营方案库”，部署目标为 Cloudflare Pages。

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
- 教培招生
- 朋友圈文案
- 案例复盘

## 如何修改案例

案例数据在 `src/data/cases.ts`。

每个案例包含：

- `title`：案例名称
- `industry`：行业
- `problem`：问题
- `solution`：解决方案
- `result`：结果或目标

建议案例文案使用打码后的真实问题，不写虚假数据，不承诺固定咨询量或排名。

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
- 案例数据：`src/data/cases.ts`
- 资料数据：`src/data/resources.ts`
- 博客文章：`src/content/blog`
