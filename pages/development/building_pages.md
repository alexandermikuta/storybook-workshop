---
transition: slide-up
level: 2
---

# [Building Pages](https://storybook.js.org/blog/building-pages-in-storybook/)

Why use Storybook for pages?

Storybook helps you construct each page state in isolation then save it as a story to revisit during QA and automated testing.

- **Capture the edge cases:** Stories demonstrate the various states of your page. That includes edge cases that can be hard-to-reach in your app like the loading and empty states.

- **Test user interactions:** You can verify such interactions by scripting user behavior and writing assertions in a play function.

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Building Pages

How to build pages in Storybook?

A page is really just a component with extra data requirements. You build it in a similar way as a regular component. First develop the page in its most common “default” state with all data present. Then write stories for edge cases like no data, missing data, responsive breakpoints, etc.

Ideally all state of the page is provided. We can then write a Default Story with inputs/args capturing this state.

::left::

```ts {monaco}
Default.args = {
 authorAvatarUrl: mockImageUrl(50, 50),
 componentCount: 55,
 components: mockComponents,
 contributors: [
   {
     avatarUrl: mockImageUrl(50, 50),
     name: 'First Last',
   },
   {
     avatarUrl: mockImageUrl(50, 50),
     name: 'First Last',
   },
   {
     avatarUrl: mockImageUrl(50, 50),
     name: 'First Last',
   },
 ],
 description: 'Spectrum provides components and tools to help product teams work more efficiently, and to make Adobes applications more cohesive',
 downloads: 15123,
 gitHubUrl: '#',
 org: 'Adobe',
 packageName: 'packagename',
 storyCount: 135,
 storybookUrl: '#',
 title: 'Spectrum Design System',
}
```

::right::

<figure>
  <img src="/development/pages.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/size/w1000/2022/03/image-2.png</figcaption>
</figure>

<style>
  img, video {
    height: 280px;
  }
</style>