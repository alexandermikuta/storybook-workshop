---
transition: slide-up
level: 2
---

# Component Testing

E2E tests are the highest fidelity tests, because they test exactly what the user will see when they use your application.

**Challenges include:**

- Slower test runs that are subject to flake
- Lots of “hard-to-reach” states
- Overhead to set up and test the backend
- Black box environment can only be manipulated from the outside

**A component test:**

- Renders a component in the browser for high fidelity
- Simulates a user interacting with actual UI, like an E2E test
- Only tests a unit (e.g. a single component) of UI, and can reach into the implementation to mock things or manipulate data, like a unit test

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Component Testing

This makes the two techniques perfect complements.

> E2E tests can cover a small number of happy paths through your app.
> Component tests can cover a wide range of other important UI states.
> [And this is exactly how we think UIs should be tested.](https://storybook.js.org/blog/component-testing/)



::left::

<figure>
  <SlidevVideo autoplay controls>
    <source src="/videos/HappyPath.mp4" type="video/mp4" />
    <p>
      Your browser does not support videos. You may download it
      <a href="https://storybookblog.ghost.io/content/media/2024/08/HappyPath.mp4">here</a>.
    </p>
  </SlidevVideo>
  <figcaption>https://storybookblog.ghost.io/content/media/2024/08/HappyPath.mp4</figcaption>
</figure>

::right::

<figure>
  <img src="/testing/component-test.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/size/w1000/2024/05/image.png</figcaption>
</figure>

---
transition: slide-up
level: 2
---

# Component Testing

Since Storybook 8.1 it is possible to [reuse React/Vue3-Storybook Stories in Playwright CT](https://storybook.js.org/blog/portable-stories-for-playwright-ct/)

<figure>
  <SlidevVideo autoplay controls>
    <source src="/videos/Playwright-CT-demo.mp4" type="video/mp4" />
    <p>
      Your browser does not support videos. You may download it
      <a href="https://storybookblog.ghost.io/content/media/2024/05/Playwright-CT-demo.mp4">here</a>.
    </p>
  </SlidevVideo>
  <figcaption>https://storybookblog.ghost.io/content/media/2024/05/Playwright-CT-demo.mp4</figcaption>
</figure>