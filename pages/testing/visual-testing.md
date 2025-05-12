---
transition: slide-up
layout: image-right
image: /testing/VTA.jpg
level: 2
---

# Visual Testing

Catch visual changes inside Storybook

<figure>
  <SlidevVideo autoplay controls>
    <source src="/videos/component-visual-testing-optimized.mp4" type="video/mp4" />
    <p>
      Your browser does not support videos. You may download it
      <a href="https://storybook.js.org/docs-assets/8.6/writing-tests/component-visual-testing-optimized.mp4">here</a>.
    </p>
  </SlidevVideo>
  <figcaption>https://storybook.js.org/docs-assets/8.6/writing-tests/component-visual-testing-optimized.mp4</figcaption>
</figure>

---
transition: slide-up
level: 2
---

# Visual Testing

A visual test is a snapshot test that compares image snapshots of a UI component before and after a code change. The test fails if the snapshots do not match.

Either the difference is expected and the baseline (before) image must be updated
Or the difference is unexpected and the user should go fix the code.

<figure>
  <img src="/testing/visual-testing.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/size/w1600/2024/06/UI-Development-Trick--1-.png</figcaption>
</figure>

<style>
  figure {
    width: 80%;
  }
</style>

---
transition: slide-up
level: 2
---

# Visual Testing

> Test the UX, not implementation details (Cory House)

Less code, better tests
Visual testing is pretty neat, but why do we think it’s a fundamentally better way to test UI? The short answer is that visual tests are easier to write and maintain than unit tests. At the same time, they provide more confidence because they test more.
