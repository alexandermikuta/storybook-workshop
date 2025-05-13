---
transition: slide-up
layout: two-cols-header
layoutClass: gap-8
level: 2
---

# Dark/Light-Themes

> The older [Styling Addon](https://storybook.js.org/blog/styling-addon-configure-styles-and-themes-in-storybook/) has been deprecated in favor of the newer [Theme Switcher Addon](https://storybook.js.org/blog/introducing-theme-switcher-addon/)!

::left::

```ts {monaco}
// .storybook/preview.ts
import { withThemeByClassName } from '@storybook/addon-themes';

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
};
```

::right::

<figure>
  <img src="/development/theme-switcher.gif"/>
  <figcaption>https://storybookblog.ghost.io/content/images/2023/10/Oct-10-Editorial-Calendar.gif</figcaption>
</figure>

<style>
  img, video {
    height: 350px;
  }
</style>