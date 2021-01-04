# Tailsaw: Saber Blog Starter Template

This is a starter template for creating a beautiful, customizable blog in Saber with minimal effort. It is based on the [Blog Template](https://github.com/tightenco/jigsaw-blog-template) for Jigsaw. See the [demo](http://tailsaw.saber.land).

## Installation

```bash
yarn add saber-theme-tailsaw
```

Then, in your Saber config file:

```yml
theme: tailsaw
plugins:
  - saber-plugin-query-posts
  - saber-plugin-prismjs
  # If you want to enable local search:
  - saber-plugin-search
```

This starter template includes samples of common page types, and comes pre-configured with:

- A fully responsive theme
- [Tailwind CSS](https://tailwindcss.com/), a utility CSS framework that allows you to customize your design without touching a line of CSS
- Syntax highlighting using [Prism](https://prismjs.com)
- A search bar which indexes your content automatically (when `saber-plugin-search` is used)
- Progress bar and page transition
- A custom 404 page
- A component for accepting newsletter signups
- A sample contact form

Coming soon:

- RSS feed and sitemap generator
- Config options

---

### Adding Content

You can write your content using a variety of file types. Your content is located in the `pages/_posts/` folder.

The top of each content page contains a YAML header that specifies how it should be rendered. The `title` attribute is used to dynamically generate HTML `title` and OpenGraph tags for each page. The `layout` attribute defines which parent layout this content file will render with (e.g. `post` will render with `theme/layouts/post.vue`).

```yaml
---
title: First Post
layout: post
date: 2019-04-29
author: Jane
categories:
  - meta
slug: first-post
featured: true
assets:
  cover: ./first-post.png
---

```

---

### Adding Assets

You can easily include assets in your posts, just by [linking to their relative location](https://saber.land/docs/images-fonts-and-files.html).

---

## Building Your Site

Now that you know how to customize your content, let’s build the site.

```bash
yarn build
```

Your built site is under `public/`.
