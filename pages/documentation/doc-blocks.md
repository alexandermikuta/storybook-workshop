---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Doc Blocks

DocBlocks are a set of readymade components that can be mixed and matched to build styleguides and component documentation pages (Prop Tables, Color Palettes, etc.).

There are several [doc-blocks available](https://storybook.js.org/docs/writing-docs/doc-blocks#available-blocks), e.g.:

- ArgTypes
- Canvas
- ColorPalette
- Controls
- Description
- IconGallery
- Markdown
- Meta
- Primary
- Source
- Typeset

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

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Doc Blocks

Colors

::left::

```ts {monaco}
import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';

<Meta title="Colors" />
<ColorPalette>
	<ColorItem
		title="Brand"
		subtitle="Brand Colors"
		colors={{
			Subtle: '#a5b4fc',
			Default: '#4f46e5',
		}}
	/>
</ColorPalette>
```

```ts {monaco}
import colors from 'tailwindcss/colors';

<ColorPalette>
  {Object.entries(colors)
    .filter(([, value]) => typeof value !== 'string')
    .map(([name, value]) => (
      <ColorItem key={name} title={name} colors={value} />
    ))}
</ColorPalette>;
```

::right::

<figure>
  <img src="/documentation/storybook-color-palette-from-tailwind@2x.avif"/>
  <figcaption>https://stevekinney.com/_app/immutable/assets/storybook-color-palette-from-tailwind@2x.B2D_umkd.avif</figcaption>
</figure>

<style>
  figure {
    width: 80%;
  }
</style>

---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Doc Blocks

Icons

::left::

```ts {monaco}
import { Meta, Title, IconGallery, IconItem } from '@storybook/blocks';
import { icons, Icon } from './components/icon';

<Meta title="Icons" />

<Title>Icons</Title>

These are the icons being used in our design system. They are available as React components.

<IconGallery>
  {icons.map((icon) => (
    <IconItem key={icon} name={icon}>
      <Icon type={icon} />
    </IconItem>
  ))}
</IconGallery>
```

::right::

<figure>
  <img src="/documentation/storybook-icon-gallery@2x.avif"/>
  <figcaption>https://stevekinney.com/_app/immutable/assets/storybook-icon-gallery@2x.BRF0OeKC.avif</figcaption>
</figure>
