---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# [Testing User Flows](https://storybook.js.org/blog/testing-user-flows/)

Tools like Cypress and Playwright allow you to run end-to-end (E2E) tests against the complete application to verify such interactions.

- Testing the complete application requires substantial infrastructure work
- limit E2E tests to just the critical user flows, e.g., sign up → add to cart → buy.

::left::

<figure>
  <img src="/testing/component-automate-testing.gif"/>
  <figcaption>https://storybookblog.ghost.io/content/images/2021/11/component-automate-testing.gif</figcaption>
</figure>

::right::

<figure>
  <img src="/testing/component-e2e-testing.gif"/>
  <figcaption>https://storybookblog.ghost.io/content/images/2021/08/component-e2e-testing.gif</figcaption>
</figure>

<style>
  img, video {
    width: 80%
  }
</style>
