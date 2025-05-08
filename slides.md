---
theme: default
background: /general/storybook2.jpg
title: Storybook
drawings:
  persist: false
transition: slide-left
mdc: true
addons:
  - fancy-arrow
  - slidev-addon-qrcode
  - slidev-addon-asciinema
---

# Storybook

Workshop

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/alexandermikuta/storybook-workshop" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-right
image: /general/storybook2.jpg
---

# Agenda

<Toc text-sm minDepth="1" maxDepth="2" />

---
src: ./pages/general.md
hide: false
---

---
src: ./pages/structure/_index.md
hide: false
---

---
src: ./pages/testing/_index.md
hide: false
---

---
hideInToc: true
---

# Ressources

- [https://storybook.js.org/](https://storybook.js.org/)
- [https://bradfrost.com/](https://bradfrost.com/)

---
hideInToc: true
layout: end
---

# Thanks!
<br/>

<div class="flex flex-col items-center">

# Code and Slides...

<QRCode
    :width="300"
    :height="300"
    type="svg"
    data="https://github.com/alexandermikuta/storybook-workshop"
    :margin="10"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ type: 'extra-rounded', color: 'white' }"
/>

</div>
