---
transition: slide-up
level: 2
---

# Mocking Dependencies

Consistency is crucial to develop and test UI in isolation.

Ideally, your Storybook stories should always render the same UI no matter who’s viewing them when, and whether or not the backend is working. The same input to your story should always result in identical output.

- **Decorators**: if your component depends on data from context providers you can mock those out by wrapping stories with decorators

- **MSW-Addon**: for UIs whose inputs are fetched from network you can use Mock Service Worker-Addon

- **Module Mocking**: Since Storybook 8.1 others sources like e.g. browser API, localStorage or cookies can be mocked with module mocking

---
transition: slide-up
level: 2
---

# Mocking Dependencies - Decorators

Components can receive data or configuration from context providers. For example, a styled component might access its theme from a ThemeProvider or Redux uses React context to provide components access to app data. To mock a provider, you can wrap your component in a [decorator](https://storybook.js.org/docs/writing-stories/decorators) that includes the necessary context.

```ts {monaco}
import React from 'react';

import { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme="default">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
```

---
transition: slide-up
level: 2
---

# Mocking Dependencies - MSW-Addon

Rather than using real data, we want to be able to control the data. This lets us test different states and generate consistent results.

Therefore we can use the [MSW (Mock-Service-Worker) Storybook Addon](https://github.com/mswjs/msw-storybook-addon?ref=storybookblog.ghost.io)

Usage:

You can pass request handlers into the handlers-property of the msw-parameter:

```ts {monaco}
import { http, HttpResponse } from 'msw'

export const SuccessBehavior = {
  parameters: {
    msw: {
      handlers: [
        http.get('/user', () => {
          return HttpResponse.json({
            firstName: 'Neil',
            lastName: 'Maverick',
          })
        }),
      ],
    },
  },
}
```

---
transition: slide-up
level: 2
---

# Mocking Dependencies - MSW-Addon

Data can also be mocked with mswjs/data

see: [https://storybook.js.org/blog/build-a-nextjs-app-with-rsc-msw-storybook/](https://storybook.js.org/blog/build-a-nextjs-app-with-rsc-msw-storybook/)

---
transition: slide-up
level: 2
---

# Mocking Dependencies - [Module Mocking](https://storybook.js.org/blog/type-safe-module-mocking/)

What is module mocking?

> Module mocking is a technique in which you substitute a module that is imported directly or indirectly by your component with a consistent, independent alternative
