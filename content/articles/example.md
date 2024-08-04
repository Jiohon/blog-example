---
title: '个人博客模版'
description: 'blog-example'
date: 2024-04-09
lastUpdated: 2024-04-09
template: article
slug: example
icon: mdx
categories:
  - Example
  - Highlight
tags:
  - Example
published: true
---

#### 前言

- 本项目是一个基于`Gatsby`的个人博客模版，可以直接 clone 下来使用，也可以根据自己的需求进行二次开发。
- 项目中使用了`antd`+`antd-style`进行样式的管理，`markdown`进行文章的编写，`gatsby-plugin-mdx` + `@mdx-js`进行文章的解析。
- 项目中的文章都是以`markdown`的形式进行编写，可以直接在`content`目录下进行文章的编写。
- `content\pages`目录下的文件是用来渲染页面的，可以根据自己的需求进行修改。

#### 攥写文章

- 在`content`目录下新建一个`markdown`文件，文件名可以自定义，但是需要以`.md`或者`.mdx`结尾。
- 在文件的头部添加以下内容，这是文章的元数据，可以根据自己的需求进行修改。

```markdown title="content/articles/tip.md"
---
title: '个人博客模版'
description: 'blog-example'
date: 2024-04-09
lastUpdated: 2024-04-09
template: article
slug: markdown
icon: mdx
categories:
  - Markdown
tags:
  - Markdown
published: true
---
```

**template**

- 渲染模版

默认为`article` -> `src/templates/article.tsx`，可以根据自己的需求进行修改。

```ts title="gatsby-node.ts"
const articlePage = path.resolve('./src/templates/article.tsx')

createPage({
  ...
  component: articlePage,
  ...
})
```

**slug**

- 文章路径

例如该片文章解析为：[https://jiohon.github.io/blog-example/markdown](https://jiohon.github.io/blog-example/markdown)

**icon**

- 文章图标

可选值为`Languages`类型

```ts title="src/utils/code.ts"
export type Languages =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'md'
  | 'mdx'
  ···
```

**categories**

- 文章分类

文章属于哪些分类，可以根据分类进行文章的筛选。
当`categories`包含`Highlight`时，会筛选渲染到热门内容中

**tags**

- 文章标签

文章属于哪些标签，可以根据标签进行文章的筛选。

**published**

- 文章是否发布

#### 代码高亮、标记行

- 代码高亮使用`prism-react-renderer`+`@mdx-js/react`解析`markdown`文件中的代码块。

- 标记行使用`highlight`属性或简写`{}`，可以高亮指定的行。
- 代码高亮的行数是从`1`开始的，如果需要高亮多行，可以使用`-`连接行数。
- 使用`title`属性可以为代码块添加标题。

```markdown title="代码高亮" {1,3-6,8,9-11}
title="代码高亮"

highlight={1}
highlight={1,3-6}
highlight={1,3-6,8}
highlight={1,3-6,8,9-11}

{1}
{1,3-6}
{1,3-6,8}
{1,3-6,8,9-11}
```

#### 附加组件

- 目前支持的附加组件有：
  在`src/components/PrismSyntaxHighlight/components.tsx`可根据需求自行修改。

**[Antd Alert](https://ant.design/components/alert-cn/)**

<Alert message="Success" type="success" />
<Alert message="Info" type="info" />
<Alert message="Warning" type="warning" />
<Alert message="Error" type="error" />

**[Antd Tag](https://ant.design/components/tag-cn/)**

<Tag color="success">success</Tag>
<Tag color="processing">processing</Tag>
<Tag color="error">error</Tag>
<Tag color="warning">warning</Tag>
<Tag color="default">default</Tag>

#### 评论模块

由 [giscus](https://giscus.app) 提供支持

- 在`src/config/index.ts`中配置`siteConfig`的`comment`属性，即可开启评论功能。

```ts title="src/config/index.ts" {2}
const siteConfig: SiteConfig = {
  comment: true, // 是否开启评论
  ...
}
```

#### 主题

- 项目中使用了`antd`+`antd-style`的主题方案。可在`src/config/index.ts`中可以修改`antd`的主题配置

- 参考：[Ant Design - 主题定制](https://ant.design/docs/react/customize-theme-cn)
- 参考：[Ant Design - 主题编辑器](https://ant.design/theme-editor-cn)
- 参考：[Ant Design Style - API](https://ant-design.github.io/antd-style/zh-CN/api/create-styles)

**修改主题色**

```ts title="src/config/index.ts"
const siteConfig: SiteConfig = {
  ...
  theme: {
    primaryColor: '#565EFF', // 主题色
    light:{
      ...
    },
    dark:{
      ...
    }
  },
}
```

**修改组件默认配置**

```ts title="src/customize-theme/theme/components.ts"
export const components = {
  ...
}
```

**修改 light/dark 主题配置**

```ts title="src/customize-theme/theme/light.ts"
export const lightTheme: ThemeConfig = {
  components,
  token: {
    ...
  },
  algorithm: (seedToken, mapToken) => {
    return {
      ...mapToken!,

      ...lightMode.tokens,
    }
  },
}
```

**添加自定义 Token**

```ts title="src/customize-theme/customToken.ts"
export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  return {
    ...

  }
}
```

#### header/footer

**header**

```ts title="src/config/index.ts"
  headers: {
    menu: [
      ...
      // 导航路由
    ],
    social: [
      ...
      // 社交链接
    ],
  }
```

**footer**

```ts title="src/config/index.ts"
footers: {
    menu: [
      ...
      // 导航路由
    ],
    friend: [
      ...
      // 友链
    ],
    ICPRecord: '', // TCP备案号
  },
```
