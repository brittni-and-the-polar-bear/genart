---
layout: "palette_color"
title: "dark souls (#A3A3A3)"
name: "dark souls"
hex: "A3A3A3"
luminance: 0.3662525956
contrast: "black-pass"
color_category: "gray"
palettes:
  - "asexual pride"
---

## examples

### `palette_color` module example

```typescript
import { palette_color } from '@batpb/genart';

const { PC_{{ page.hex }} } = palette_color;

const name: string = PC_{{ page.hex }}.NAME;
```

### `{{ page.color_category }}` namespace example

````typescript
import { palette_color } from '@batpb/genart';

const { {{ page.color_category }} } = palette_color;

const { PC_{{ page.hex }} } = {{ page.color_category }};

const name: string = PC_{{ page.hex }}.NAME;
````
