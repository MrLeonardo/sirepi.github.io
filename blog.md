---
layout: page_with_link
title: Blog
link: "tags|group by tag"
permalink: /blog/
---

<ul class="post-list">
{% for post in site.posts %}
  {% include post_snippet.html post=post showexcerpt=1 showtags=1 %}
{% endfor %}
</ul>