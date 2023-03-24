---
title: "Astro快速搭建博客"
description: "使用Astro快速搭建博客"
---

## 引言--什么是Astro

Astro 是集多功能于一体的 Web 框架 ，用于构建**快速、以内容为中心** 的网站。

## 准备工作

### 前提

首先确保你已近拥有以下条件

* node.js `v16.12.0` 或更高版本
* 文本编辑器 推荐vsCode

### 安装Astro

#### 使用命令工具自动化创建项目

在你的终端中运行以下命令以启动安装向导

```xml
# 使用 npm 创建一个新项目
npm create astro@latest
```

你还可以通过将 `--template` 参数传递给 `create astro` 命令，基于[官方示例](https://github.com/withastro/astro/tree/main/examples)或者任何 GitHub 存储库的`main` 分支来启动一个新的 astro 项目。

```shell
# 使用官方示例创建一个新项目
npm create astro@latest -- --template <example-name>

# 基于某个 GitHub 仓库的 main 分支创建一个新项目
npm create astro@latest -- --template <github-username>/<github-repo>
```

#### 手动下载

创建一个空目录，目录名称是你打算使用的项目名称，并导航到该目录首先创建空目

```shell
mkdir my-astro-project
cd my-astro-project
```

在该目录内，创建 `package.json` 文件，该文件将管理你的项目依赖，包括 Astro，如果你不熟悉这种文件格式，可以运行下面的命令来直接创建一个。

```shell
npm init --yes
```

在你的项目目录内安装 Astro 的项目依赖

```shell
npm install astro
```

然后，使用下面的代码来替换 `package.json` 文件的 `scripts` 部分内容

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
```

之后你就可以编写你的第一个页面了

## 部署你的Astro站点到github上

Astro 维护了一个官方的 GitHub Action `withastro/action` 来帮助你部署项目；你只需很少的配置，就可以完成部署

1. 在配置文件设置 [`site`](https://docs.astro.build/zh-cn/reference/configuration-reference/#site)，并在 `astro.config.mjs` 中根据需要设置 [`base`](https://docs.astro.build/zh-cn/reference/configuration-reference/#base) 选项.

```json
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/my-repo',
})
```

* site应当为 `https://<YOUR_USERNAME>.github.io` 或 `https://my-custom-domain.com`
* base应当是你的存储库的名称，以正斜杠（`/`）开头, 例如 `/my-repo`。这是为了告诉 Astro 你的网站的根目录是 `/my-repo`，而非默认的 `/`.

注意：

如果你的源代码存储库的名称是 `<YOUR_USERNAME>.github.io`或者你使用了自定义域名请不要配置`base`

tips

只要将仓库名修改为`<YOUR_USERNAME>.github.io`去掉即可令部署的网站url无仓库名


2. 在你的项目中的 `.github/workflows/` 目录(如没有需新建)创建一个新文件 `deploy.yml`，并粘贴以下 YAML 配置信息。

```yml
name: GitHub Pages Astro CI

on:
  # 每次推送到 `main` 分支时触发这个“工作流程”
  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名
  push:
    branches: [ main ]
  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”
  workflow_dispatch:
  
# 允许 job 克隆 repo 并创建一个 page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1

```



3. 在 GitHub 上，跳转到存储库的 **Settings** 选项卡并找到设置的 **Pages** 部分。

4. 选择 **GitHub Actions** 作为你网站的 **Source** ，然后按 **Save** 。
5. 提交（commit）这个新的“工作流程文件”（workflow file）并将其推送到 GitHub。


好了，现在您的网站现在应该已完成发布了！当你将更改推送到 Astro 项目的存储库时，GitHub Action 将自动为你部署它们。


## 设置自定义域


你可以选择通过将一个 `./public/CNAME` 文件添加到你的项目中，来设置自定义域(不要忘了为了你的域名提供商配置DNS)这会将你的站点部署在你的自定义域而不是 `<YOUR_USERNAME>.github.io`。

```shell
sub.mydomain.com
```


## 更多

如果你还有更多的疑问可以访问[官方文档](https://docs.astro.build/en/getting-started/)进行查询
