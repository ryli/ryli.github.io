---
title: Yes or No
layout: post
date: 2021-01-12
author: yaf
categories:
  - tool
  - idea
slug: yes-or-no
assets:
  cover: ./img/yes-or-no.png
---

Get an answer to your question using the Yes/No generator!

Your answer is:

<span class="answer">{{ answer }}</span>

<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="getAnAnswer">Get an answer</button>

<br/>

PS: The cover picture is from game [Trivia](https://www.amazon.com/DH3-Games-Yes-Or-No/dp/B01IM324P0).

<script>
export default {
  data() {
    return {
      answer: getAnswer(),
    }
  },
  methods: {
    getAnAnswer() {
      this.answer = '...'
      setTimeout(() => this.answer = getAnswer(), 300)
    },
  },

}

function getAnswer() {
  return Math.random() > 0.5 ? 'Yes' : 'No'
}
</script>

<style>
.answer {
  padding: 0.5rem;
  color: #63b3ed;
  font-size: 6rem;
}
</style>
