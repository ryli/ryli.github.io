---
title: Hello World
slug: hello-world
date: 2021-01-01
layout: post
author: yaf
assets:
  cover: ./img/first-post.png
---


This is the first post!

> Nisi ullamco eu excepteur eu eu culpa enim elit veniam ut dolore ullamco aute.
>
> -- Surely someone

You can do all crazy things with Saber!

```js
console.log('woah!')
```

In fact, <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="count++">{{ count }}</button> crazy things!

<script>
export default {
  data() {
    return {
      count: 77
    }
  }
}
</script>
