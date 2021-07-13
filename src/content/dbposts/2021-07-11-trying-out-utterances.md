---
layout: dbpost
date: 2021-07-11 19:37:54
title: 'Trying out Utterances'
lead: "You can try commenting on this post as I've just added Utterances"
tags: ['news', 'blog']
comment: false
featuredImage: ../images/posts/utterances.png
---

## Motivation

I've been experimenting/researching a lot with comment systems, as I've been working on an issue in my student circle's blog project. We've been using Disqus before, but we've been thinking about self hosted solutions. Other reasons include the ones mentioned in [Arek Nawo's blogpost on this site](https://areknawo.com/top-6-disqus-alternatives-for-technical-blogging/).

## Utteranc.es

Although [Utteranc.es](https://utteranc.es/) is not the comment system that will be used by the blog project mentioned above, it seemed fitting to my expectations so I've decided to give it a try in my own blog site.

The solution Utterances gives is not a self-hosted comment system, not even a cloud service that you could hop onto. It uses the Github Issues API. So when I push a new blogpost into my repo, and someone loads the page of the post, the utterances component (or plugin) calls the owner Github repository's Issues API and creates an issue for the comment section of the blog post. This way all the comments you leave - on this post for example - will also appear on an issue in my blog's repository. This way I can easily moderate the comments as well (and get notifications about new ones - which is even more comfortable for me).

While a general purpose blog would need more than the ability of logging in with Github, it's enough for my site as it is tech based anyway (those who might visit, must have Github accounts 😁)

Give it a try down below!
