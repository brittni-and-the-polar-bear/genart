---
layout: "palette_color"
title: "often orange (#FF704D)"
name: "often orange"
hex: "FF704D"
luminance: 0.3338416291
contrast: "black-pass"
color_category: "orange"
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
