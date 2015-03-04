---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> <span class="post-meta">{{ post.tags | join: ', ' }}</span>
    </h2>
      <div class="post-excerpt">
      {% if post.content contains '<!--more-->' %}
        {{ post.content | split:'<!--more-->' | first }}
      {% else %}
        {{ post.excerpt }}
      {% endif %}
      </div>
  </li>
{% endfor %}
</ul>