---
layout: "palette"
title: "asexual pride palette"
name: "asexual pride"
const: "ASEXUAL_PRIDE_PALETTE"
source: "flagcolorcodes: Asexual Flag Color Codes"
source_url: "https://www.flagcolorcodes.com/asexual"
coolors_script: '<script data-id="08264250835324647">new CoolorsPaletteWidget("08264250835324647", ["000000","a3a3a3","ffffff","80007f"],"asexual pride"); </script>'
palette_categories:
  - all
  - pride
colors:
  - "000000"
  - "A3A3A3"
---

## example

```typescript
import { palette } from '@batpb/genart';

const { {{ page.const }} }  = palette;

const name: string = {{ page.const }}.NAME;
```
