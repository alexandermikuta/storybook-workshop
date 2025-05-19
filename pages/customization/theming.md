---
transition: slide-up
level: 2
---

# Theming

Storybook can be customized with own branding, e.g. custom logo, colors, ...

```ts {monaco}
import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
});
```