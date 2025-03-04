<!--suppress JSUnresolvedLibraryURL -->
<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>

<style>
  div.color-block {
      text-align: center;
  }

  .color-block {
      width: 100%;
      margin: 0;
      padding: 0.5em;
  }

  .black-pass {
      color: black;
  }

  .white-pass {
      color: white;
  }
</style>

# Sketch Context Change Notes

> [!CAUTION]
> This release contains breaking changes from v1.1.0.
>
> Breaking Changes:
>   - [`PaletteColor` Naming Update](#palettecolor-naming-update)
>   - [`Palette` Naming Update](#palette-naming-update)
>   - [`FLOWERS_PALETTES` rename](#flowers_palettes-rename)
>   - [`HOLIDAYS_PALETTES` rename](#holidays_palettes-rename)
>   - [`SketchContext` rename](#sketchcontext-rename)

----

# Table of Contents

[`PaletteColor` Naming Update](#palettecolor-naming-update)

[`Palette` Naming Update](#palette-naming-update)

[Deprecated Classes](#deprecated-classes)

[New Classes](#new-classes)

[New Constants](#new-constants)

[Updated Classes](#updated-classes)

[Updated Constants](#updated-constants)

[Updated Interfaces](#updated-interfaces)

[New Colors](#new-colors)

[New Palettes](#new-palettes)

[Fin.](#fin)

----

# `PaletteColor` Naming Update

All `PaletteColor` constants will now start with a `PC_` prefix followed by the color's hex code
in all uppercase letters.

For example, the color constant `_121212` is now `PC_121212`.

[Table of Contents](#table-of-contents)

----

# `Palette` Naming Update

All `Palette` constants will now end with a `_PALETTE` suffix.

For example, the palette constant `GLITTER` is now `GLITTER_PALETTE`.

[Table of Contents](#table-of-contents)

----

# Deprecated Classes

## Deprecated Class: `ColorNameManager`

The `ColorNameManager` class has been deprecated and replaced by the `ColorNames` class.
It will be permanently removed in version 3.0.0.

[Table of Contents](#table-of-contents)

----

# New Classes

## New Class: `AspectRatio`

```typescript
/**
 * Defines the width to height ratio of a canvas.
 *
 * @category Canvas Context
 */
declare interface AspectRatio {
    /**
     * The name of the aspect ratio.
     */
    readonly NAME: string;

    /**
     * The width ratio component.
     */
    readonly WIDTH_RATIO: number;

    /**
     * The height ratio component.
     */
    readonly HEIGHT_RATIO: number
}
```

[Table of Contents](#table-of-contents)

## New Class: `AspectRatioHandler`

```typescript
/**
 * An AspectRatioHandler provides the proper width and height of a canvas
 * given an {@link AspectRatio} and resolution.
 *
 * @category Canvas Context
 */
declare class AspectRatioHandler {
    /**
     * @param aspectRatio - If this aspect ratio has a
     * {@link AspectRatio.WIDTH_RATIO width ratio} less than 1 or a
     * {@link AspectRatio.HEIGHT_RATIO height ratio} less than 1,
     * then {@link width} and {@link height} will both return 0.
     *
     * @param baseResolution - If this values is less than or equal to 0,
     * {@link width} and {@link height} will both return 0.
     */
    public constructor(aspectRatio: AspectRatio, baseResolution: number);

    /**
     * Creates an {@link AspectRatio} object with the given width ratio, height ratio, and name.
     *
     * @param widthRatio - If this value is less than 1, this method will return `undefined`.
     * @param heightRatio - If this value is less than 1, this method will return `undefined`.
     * @param name - If this value is not specified, the name of the AspectRatio object will be
     * derived from the {@link widthRatio} and {@link heightRatio} parameters.
     */
    public static buildAspectRatio(widthRatio: number,
                                   heightRatio: number,
                                   name?: string): AspectRatio | undefined;

    /**
     * @param aspectRatio
     * @param baseResolution
     * @return The base unit for the canvas given the desired resolution.
     */
    private calculateUnit(aspectRatio: AspectRatio, baseResolution: number): number;

    /**
     * The calculated canvas width.
     */
    public get width(): number;

    /**
     * The calculated canvas height.
     */
    public get height(): number;
}
```

[Table of Contents](#table-of-contents)

## New Class: `CanvasContext`

```typescript
/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Canvas Context
 */
declare class CanvasContext {
    /**
     * Build a p5 canvas with the given aspect ratio, resolution, and canvas type.
     * If {@link CanvasContext.lockedCanvas} is `true`, no canvas will be built.
     *
     * @param aspectRatio
     * @param resolution
     * @param lockCanvas - When `true`, the canvas will be locked after it has been created.
     * @param canvasType - can be WEBGL ("webgl") or P2D ("p2d")
     */
    public static buildCanvas(aspectRatio: AspectRatio,
                              resolution: number,
                              lockCanvas?: boolean,
                              canvasType?: string): void;

    /**
     * Is the canvas rendering mode set to WebGL?
     */
    public static get isWebGL(): boolean;

    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     */
    public static get lockedCanvas(): boolean;

    /**
     * The maximum visible height of the sketch.
     */
    public static get maxY(): number;

    /**
     * The maximum visible width of the sketch.
     */
    public static get maxX(): number;

    /**
     * The minimum visible height of the sketch.
     */
    public static get minY(): number;

    /**
     * The minimum visible width of the sketch.
     */
    public static get minX(): number;

    /**
     * The default stroke of the sketch.
     * Equivalent to a stroke of 1 in a 500x500 sketch.
     */
    public static get defaultStroke(): number;

    /**
     * Locks the canvas. After this is called, {@link buildCanvas} will not create a new canvas.
     */
    public static lockCanvas(): void;

    /**
     * Unlocks the canvas. After this is called, {@link buildCanvas} will create a new canvas.
     */
    public static unlockCanvas(): void;

    /**
     * Resizes the canvas and decorates the canvas with the appropriate
     * updated attributes.
     */
    public static resizeCanvas(): void;

    /**
     * Update the current aspect ratio of the canvas to the given aspect ratio.
     * This method will resize the canvas and decorate it with the appropriate
     * updated attributes.
     *
     * @param aspectRatio
     */
    public static updateAspectRatio(aspectRatio: AspectRatio): void;

    /**
     * Update the current resolution of the canvas to the given resolution.
     * This method will resize the canvas and decorate it with the appropriate
     * updated attributes.
     *
     * @param resolution
     */
    public static updateResolution(resolution: number): void;
}
```

[Table of Contents](#table-of-contents)

## New Class: `ColorNames`

```typescript
/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value. When a name has not yet been stored or found,
 * the nearest color algorithm will be applied to find the name of the next
 * closest color.
 */
declare class ColorNames {
    /**
     * A map of colors whose names have already been retrieved from the
     * nearest-color library or set by the {@link addColor} method.
     */
    static readonly #MATCHED_COLORS: StringMap<string> = new StringMap<string>();

    // TODO - unit test
    /**
     * The method used in the {@link getColorName} function to find the nearest color.
     * If the method is `null`, the nearest-color library will use its list of default colors;
     */
    static #nearestColor: ((hex: string) => NearestColorMatch | null) | null = null;

    // TODO - test
    // TODO - docs
    // TODO - release notes
    /**
     * Set the color names that could possibly be selected when searching for the nearest
     * color match in {@link getColorName}.
     *
     * @param colorNames -
     */
    public static setPossibleColors(colorNames: { name: string; hex: string; }[]): void {
        const colors = colorNames.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
        ColorNames.#nearestColor = nearestColor.from(colors);
    }

    /**
     * Retrieves the name of the color represented by the given {@link colorHex}.
     * If the {@link colorHex} string is not well formatted or the nearest color function
     * encounters an error, the method will return undefined.
     *
     * @param colorHex - The hex string representation of the color (format: `#RRGGBB`).
     */
    public static getColorName(colorHex: string): string | undefined {
        colorHex = ColorNames.#formatHex(colorHex);
        let match: string | undefined = undefined;

        if (ColorNames.hasMatch(colorHex)) {
            match = ColorNames.#MATCHED_COLORS.get(colorHex);
        } else {
            try {
                let result: NearestColorMatch | string | null;

                if (ColorNames.#nearestColor) {
                    result = ColorNames.#nearestColor(colorHex);
                } else {
                    result = nearestColor(colorHex);
                }

                if (result) {
                    if (typeof result === 'string') {
                        match = result;
                    } else {
                        match = result.name;
                    }
                }

                if (match) {
                    ColorNames.#MATCHED_COLORS.setUndefinedKey(colorHex, match);
                }
            } catch {
                match = undefined;
            }
        }

        if (match) {
            match = match.toLowerCase();
        }

        return match;
    }

    /**
     * Does the given {@link hex} string already have a color name match?
     *
     * @param hex
     *
     * @return `true` if the {@link hex} has a direct color name match in the manager,
     * `false` if it does not.
     */
    public static hasMatch(hex: string): boolean {
        return ColorNames.#MATCHED_COLORS.hasKey(hex);
    }

    // TODO - release notes
    // TODO - unit tests
    /**
     * Map the given hex to the given name.
     *
     * @param hex
     * @param name
     */
    public static addColor(hex: string, name: string): void;
    /**
     * Map the given {@link PaletteColor.HEX} to the given {@link PaletteColor.NAME}.
     *
     * @param color
     */
    public static addColor(color: PaletteColor): void;
    public static addColor(color: PaletteColor | string, name?: string): void {
        if (typeof color === 'string' && name) {
            const hexColor: string = ColorNames.#formatHex(color);

            if (StringValidator.isHex(hexColor) && name) {
                ColorNames.#MATCHED_COLORS.setKey(hexColor, name);
            }
        } else if (Discriminator.isPaletteColor(color)) {
            const hex: string = ColorNames.#formatHex(color.HEX);
            ColorNames.#MATCHED_COLORS.setKey(hex, color.NAME);
        }
    }

    /**
     * Adds a hash symbol (#) to the beginning of the given string
     * if one is missing and returns the result with all uppercase
     * characters.
     *
     * @param original
     */
    static #formatHex(original: string): string {
        let hex: string = original;

        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }

        return hex.toUpperCase();
    }
}
```

----

# New Constants

## `ASPECT_RATIOS`

```typescript
/**
 * Pre-set {@link AspectRatio} objects for easy access.
 *
 * @category Canvas Context
 */
declare const ASPECT_RATIOS: Record<string, AspectRatio>;
```

[Table of Contents](#table-of-contents)

## `FOOTBALL_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all football palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/sports/football/football-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palettes (Sports/Football)
 * @category Palettes (Sports)
 * @category Palette Collections
 */
declare const FOOTBALL_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

## `SPORTS_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all sports palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/sports/sports-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palettes (Sports)
 * @category Palette Collections
 */
declare const SPORTS_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

----

# Updated Classes

## `SketchContext` rename

The `SketchContext` class has been renamed to `P5Context`.

```typescript
/**
 * The P5Context provides static access to the p5.js sketch context.
 * This context allows access to all methods and variables of the p5.js library.
 *
 * @category Sketch Context
 * @category Sketch Context: p5.js
 */
declare class P5Context {
    /**
     * Initializes the sketch context to allow other accessors to have
     * accurate canvas, environment, and runtime information.
     *
     * @param p5 - The sketch context of the running p5.js script.
     */
    public static initialize(p5: P5Lib): void;

    /**
     * The current sketch context.<br/>
     * If no context has been initialized, the method will return
     * an "empty" sketch context (0x0 canvas; no loop).
     */
    public static get p5(): P5Lib;
}
```

[Table of Contents](#table-of-contents)

----

# Updated Constants

## `FLOWERS_PALETTES` rename

The `FLOWER_PALETTES` constant has been renamed to `FLOWERS_PALETTES`.

## `HOLIDAYS_PALETTES` rename

The `HOLIDAY_PALETTES` constant has been renamed to `HOLIDAYS_PALETTES`.

[Table of Contents](#table-of-contents)

----

# Updated Interfaces

## Palette

New field: `SOURCE_URL` - The source URL of the palette.

```typescript
declare interface Palette {
    /**
     * The source of the palette.
     */
    readonly SOURCE?: string;

    /**
     * The source URL of the palette.
     */
    readonly SOURCE_URL?: string;
}
```

[Table of Contents](#table-of-contents)

----

# New Colors

## `PC_003494` (smalt)

<div class="color-block" style="background: #003494;">
  <a href="https://coolors.co/003494" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">smalt (#003494)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #003494;">
 *     <a href="https://coolors.co/003494" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">smalt (#003494)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
declare const PC_003494: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `PC_041E43` (midnight mirage)

<div class="color-block" style="background: #041E43;">
  <a href="https://coolors.co/041e43" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">midnight mirage (#041E43)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #041E43;">
 *     <a href="https://coolors.co/041e43" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">midnight mirage (#041E43)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
declare const PC_041E43: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `PC_7E9594` (green granite)

<div class="color-block" style="background: #7E9594;">
  <a href="https://coolors.co/7e9594" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">green granite (#7E9594)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #7E9594;">
 *     <a href="https://coolors.co/7e9594" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">green granite (#7E9594)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Gray)
 * @category Palette Colors (All)
 */
declare const PC_7E9594: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `PC_869498` (carrier pigeon blue)

<div class="color-block" style="background: #869498;">
  <a href="https://coolors.co/869498" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">carrier pigeon blue (#869498)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #869498;">
 *     <a href="https://coolors.co/869498" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">carrier pigeon blue (#869498)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Gray)
 * @category Palette Colors (All)
 */
declare const PC_869498: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `PC_FFFFFF` (white)

<div class="color-block" style="background: #FFFFFF;">
  <a href="https://coolors.co/ffffff" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">white (#FFFFFF)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #FFFFFF;">
 *     <a href="https://coolors.co/ffffff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">white (#FFFFFF)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (White)
 * @category Palette Colors (All)
 */
declare const PC_FFFFFF: PaletteColor;
```

[Table of Contents](#table-of-contents)

----

# New Palettes

## `DALLAS_COWBOYS_PALETTE`

<!-- Coolors Palette Widget -->
<script data-id="009411858208226276">new CoolorsPaletteWidget("009411858208226276", ["041e43","869498","ffffff","7e9594","003494"],"dallas cowboys"); </script>
<br/>

```typescript
/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="009411858208226276">new CoolorsPaletteWidget("009411858208226276", ["041e43","869498","ffffff","7e9594","003494"],"dallas cowboys"); </script>
 *
 * @see {@link PC_041E43}
 * @see {@link PC_869498}
 * @see {@link PC_FFFFFF}
 * @see {@link PC_7E9594}
 * @see {@link PC_003494}
 *
 * @category Palettes (Sports/Football)
 * @category Palettes (Sports)
 * @category Palettes (All)
 */
declare const DALLAS_COWBOYS_PALETTE: Palette;
```

[Table of Contents](#table-of-contents)

----

### Fin.

[Table of Contents](#table-of-contents)
