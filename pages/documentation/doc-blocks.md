---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Doc Blocks

DocBlocks are a set of readymade components that can be mixed and matched to build styleguides and component documentation pages (Prop Tables, Color Palettes, etc.).

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Doc Blocks

Typography

::left::

```ts {monaco}
import { Meta, Typeset } from '@storybook/blocks';

<Meta title="Typography" />

<Typeset
  fontSizes={[
    12,
    14,
    16,
    18,
    20,
    24,
    30,
    36,
    48,
  ]}
  fontWeight={400}
  sampleText={"The quick brown fox jumps over the lazy dog."}
  fontFamily={"system-ui, sans-serif"}
/>
```

::right::

<figure>
  <img src="/documentation/storybook-typeset-docs-block.avif"/>
  <figcaption>https://stevekinney.com/_app/immutable/assets/storybook-typeset-docs-block.CISmYbOU.avif</figcaption>
</figure>

<style>
  figure {
    width: 85%;
  }
</style>
