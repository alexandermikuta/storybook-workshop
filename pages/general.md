---
transition: fade-out
---

# What is Storybook?

Storybook is a [frontend workshop](https://bradfrost.com/blog/post/a-frontend-workshop-environment/) for building UI components and pages in isolation

<ul>
  <li data-id="anchor1">Development</li>
  <li v-click="1" data-id="anchor2">Testing</li>
  <li v-click="4" data-id="anchor3">Documentation</li>
</ul>

<div class="wrapper">
  <img data-id="anchor4" src="/general/development.png"/>
  <img v-click="1" data-id="anchor5" src="/general/component_testing.png"/>
  <img v-click="2" data-id="anchor6" src="/general/visual_testing.png" />
  <img v-click="3" data-id="anchor_a11y" src="/general/a11y.png"/>
  <img v-click="4" data-id="anchor7" src="/general/documentation.png"/>
</div>

<FancyArrow color="orange" roughness="2"  pos2="top"
    q1="[data-id=anchor1]"
    q2="[data-id=anchor4]"
/>
<FancyArrow v-click="1" color="lime" roughness="2" pos2="top"
    q1="[data-id=anchor2]"
    q2="[data-id=anchor5]"
>Component Testing</FancyArrow>
<FancyArrow v-click="2" color="lime" roughness="2" pos2="top"
    q1="[data-id=anchor2]"
    q2="[data-id=anchor6]"
>Visual Testing</FancyArrow>
<FancyArrow v-click="3" color="lime" roughness="2" pos2="top"
    q1="[data-id=anchor2]"
    q2="[data-id=anchor_a11y]"
>a11y Testing</FancyArrow>
<FancyArrow v-click="4" color="sky" roughness="2" pos2="top"
    q1="[data-id=anchor3]"
    q2="[data-id=anchor7]"
/>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
li {
  width: 200px;
}

h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.wrapper {
  height: 400px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: dense;
  gap: 40px;
  padding-top: 20px;

  img {
    width: 100%;
    height: 70%;
    object-fit: contain;
    border: 1px solid #666;
  }
}
</style>
<!--
Here is another comment.
-->

---
transition: slide-up
level: 2
---

# Why build UIs in Isolation? - The Problem

<figure>
  <img src="/general/problem.png"/>
  <figcaption>https://storybook.js.org/docs-assets/8.6/get-started/multiverse.png</figcaption>
</figure>

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Why build UIs in Isolation? - The Solution

::left::

Every piece of UI is a [component](https://www.componentdriven.org/)

> You do not need to spin up the whole app to see how they render. You can render a specific variation in isolation by passing props, mocking data or faking events

::right::

<figure>
  <SlidevVideo autoplay controls>
    <source src="/videos/whats-a-story.mp4" type="video/mp4" />
    <p>
      Your browser does not support videos. You may download it
      <a href="https://storybook.js.org/docs-assets/8.6/get-started/whats-a-story.mp4">here</a>.
    </p>
  </SlidevVideo>
  <figcaption>https://storybook.js.org/docs-assets/8.6/get-started/whats-a-story.mp4</figcaption>
</figure>

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Why build UIs in Isolation? - The Solution

UI-Variations are defined in Stories using the [CSF-Standard](https://github.com/ComponentDriven/csf)

> [Storybook uses the CSF-Standard since version 5.2](https://storybook.js.org/blog/component-story-format/)

::left::

<figure>
  <SlidevVideo autoplay controls>
    <source src="/videos/7.0-storybook-hero-video.mp4" type="video/mp4" />
    <p>
      Your browser does not support videos. You may download it
      <a href="https://storybook.js.org/docs-assets/8.6/get-started/7.0-storybook-hero-video.mp4">here</a>.
    </p>
  </SlidevVideo>
  <figcaption>https://storybook.js.org/docs-assets/8.6/get-started/7.0-storybook-hero-video.mp4</figcaption>
</figure>

::right::

```ts {monaco}
import type { Meta, StoryObj } from '@storybook/react';
import { Histogram } from './Histogram';

const meta: Meta<typeof Histogram> = {
  component: Histogram,
};

export default meta;
type Story = StoryObj<typeof Histogram>;

export const Default: Story = {
  args: {
    dataType: 'latency',
    showHistogramLabels: true,
    histogramAccentColor: '#1EA7FD',
    label: 'Latency distribution',
  },
};
```

---
transition: slide-up
---

# Why build UIs in Isolation? - The Solution

Benefits:

- **Verify hard-to-reach edge cases of UI:** context, API requests, device features, ... can be mocked via Addons
- **Test UIs with less effort and no flakes:** [Stories can be used as Unit-Tests](https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-unit-tests)
- **UI Documentation for the team:** Easy to find and reuse existing UI Patterns
- **Stories show how UI actually works**: Shareable with team members, stakeholders, customers, ...
- **Automate UI Workflows in CI:** Testing, Reviews, ...

<style>
  li {
    padding-top: 20px;
  }
</style>

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Design System Workflow

::left::

## [Brad Frost´s workflow](https://storybook.js.org/blog/why-most-design-systems-implode/)

1. **Develop** component states and variants in a universal format called stories.
2. **Review** them during development to verify appearance
3. **Test** stories during QA with built-in testing for accessibility, interaction, visual regression
4. **Document** components automatically and publish that documentation online
5. **Share** components in other workflows like external sites, Figma, Notion

::right::

<figure>
  <img src="/general/workflow.png"/>
  <figcaption>https://storybookblog.ghost.io/content/images/size/w1000/2022/06/pasted-image-0-3.png</figcaption>
</figure>

---

# Works with a lot of other Tools

e.g.

<div class="wrapper">
  <skill-icons-angular-dark/>
  <skill-icons-react-dark/>
  <skill-icons-nextjs-light/>
  <skill-icons-vuejs-dark/>
  <skill-icons-svelte/>
  <skill-icons-tailwindcss-dark/>
  <skill-icons-figma-dark/>
</div>

<style>
  .wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: dense;
  padding-top: 40px;

  .wrapper > * {
    width: 100%;
    height: 100%;
    object-fit: contains;
    border: 1px solid #666;
  }

  svg {
    width: 3em;
    height: 3em;
  }
}
</style>

---
transition: slide-up
layout: image-right
image: /general/storybook9.jpg
---

# Storybook 9

> [Currently in Beta](https://storybook.js.org/blog/storybook-9-beta/)

<br/>

## Some new features

- Tags-based organization

- React Native for device and web

- Tests can be run over all stories at once

- Test Coverage support

---
transition: slide-up
layout: image-right
image: /general/chromatic.webp
---

# Chromatic

Chromatic is made by the team behind Storybook and integrates with Storybook, Playwright, and Cypress.
It is a commercial product which needs to be [licensed](https://www.chromatic.com/pricing) for usage.

> Chromatic is a visual testing tool that scans every possible UI state across browsers to catch bugs in appearance and functionality. It enables you to assign reviewers and resolve discussions to streamline team sign-off.

<br/>

> Chromatic uses storybook stories to power visual tests