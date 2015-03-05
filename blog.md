---
layout: page_with_link
title: Blog
links: [ "tags|group by tag", "archive|archive" ]
icon: comments-o
permalink: /blog/
index-include: recent_post.html
color: "rgba(255, 215, 0, 1)"
---

<ul class="post-list">
{% for post in site.posts %}
  {% include post_snippet.html post=post showexcerpt=1 showtags=1 %}
{% endfor %}
</ul>