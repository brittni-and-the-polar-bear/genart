---
layout: "palette_color"
title: "rapunzel silver (#D2D3D5)"
name: "rapunzel silver"
hex: "D2D3D5"
luminance: 0.6509426552
contrast: "black-pass"
color_category: "gray"
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
