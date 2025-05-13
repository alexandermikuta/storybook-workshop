---
transition: slide-up
level: 2
---

# Mocking Dependencies

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

# Mocking Dependencies

Data can also be mocked with mswjs/data

see: [https://storybook.js.org/blog/build-a-nextjs-app-with-rsc-msw-storybook/](https://storybook.js.org/blog/build-a-nextjs-app-with-rsc-msw-storybook/)