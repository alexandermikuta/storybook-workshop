---
transition: slide-up
layout: image-right
image: /testing/ci.png
level: 2
---

# CI

e.g. via Github-Actions

```yaml {monaco}
# .github/workflows/ui-tests.yml
name: 'UI Tests'

on: push

jobs:
  # Run interaction/accessibility tests with Axe
  interaction-and-accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: yarn
      - name: Run test
        run: yarn test
  # Run visual/composition tests with Chromatic
  visual-and-composition:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0 # retrieve git history
      - name: Install dependencies
        run: yarn
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # Grab this from the Chromatic manage page
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```
