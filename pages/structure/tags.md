---
transition: slide-up
layout: image-right
image: /structure/storybook-tags.jpg
level: 2
---

# Tags

```ts {monaco}
import { Button } from './Button';

export default {
  component: Button,
  // 👇 Applies to all stories in this file
  tags: ['stable'],
}
```

Tags can also be negated
```ts {monaco}
export const SkipTesting = {
  args: { ... },
  tags: ['!test'],
}
```

---
transition: slide-up
layout: two-cols-header
level: 2
---

# Tags

::left::

<figure>
  <img src="/structure/tags-sidebar-filter.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/size/w1000/2024/12/tags-sidebar-filter.png</figcaption>
</figure>

tags are useful to structure components for atomic design

::right::

<figure>
  <img src="/structure/tags-badges-addon.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/2024/12/tags-badges-addon.png</figcaption>
</figure>

[storybook-addon-tag-badges](https://github.com/Sidnioulz/storybook-addon-tag-badges?ref=storybookblog.ghost.io)

<style>
  figure {
    width: 50%;
    height: 50%;
  }
</style>