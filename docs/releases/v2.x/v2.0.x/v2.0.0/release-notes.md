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

# v2.0.0 Release Notes

Released on TBD.

> [!CAUTION]
> This release contains breaking changes from v1.1.0.
>
> Breaking Changes:
> - [New `AspectRatio` class](#aspectratio)
> - [`SketchContext` renamed](#sketchcontext)
> - [Updated `WeightedElement` interface](#weightedelement)

----

# Table of Contents

[New Classes](#new-classes)
- [`AspectRatio`](#aspectratio)
- [`P5Context`](#p5context)
- [`StringValidator`](#stringvalidator)

[Updated Classes](#updated-classes)
- [`Range`](#range)
- [`SketchContext`](#sketchcontext)

[Updated Interfaces](#updated-interfaces)
- [`PaletteColor`](#palettecolor)
- [`WeightedElement`](#weightedelement)

----

# New Classes

## `AspectRatio`

[!CAUTION]
> Breaking Change!
> 
> `AspectRatio` has been changed from an interface to a class.

[Table of Contents](#table-of-contents)

## `P5Context`

```typescript
/**
 * P5Context provides static access to the p5.js context.
 * This context allows access to all methods and variables of the p5.js library.
 *
 * @category Sketch
 * @category Sketch / P5 Context
 */
declare class P5Context {
    /**
     * Initializes the context to allow other accessors to have
     * accurate canvas, environment, and runtime information.
     *
     * @param p5 - The sketch context of the running p5.js script.
     */
    public static initialize(p5: P5Lib): void;

    /**
     * The current p5.js context.<br/>
     * If no context has been initialized with {@link P5Context.initialize},
     * the method will return an "empty" sketch context (0x0 canvas; no loop).
     */
    public static get p5(): P5Lib;

    /**
     * Resets the p5.js context to null.
     * This will allow the context to be re-initialized
     * using the {@link P5Context.initialize} method.
     */
    public static reset(): void;
}
```

[Table of Contents](#table-of-contents)

## `StringValidator`

```typescript
/**
 * StringValidator provides static methods that can be used
 * to verify that strings contain specified patterns.
 *
 * @category Utility
 */
declare class StringValidator {
    /**
     * Is the given string a hex color string?
     *
     * @param hex - string to check for the hex color pattern
     * @param withAlpha - When `true` the string will be checked for a `#RRGGBBAA` pattern.
     * When `false`, the given string will be checked for a `#RRGGBB` pattern.
     */
    public static isHex(hex: string, withAlpha?: boolean): boolean;

    /**
     * Is the given string a hex color string with an alpha component (`#RRGGBBAA`)?
     *
     * @param hex - string to check for the hex color pattern.
     */
    public static isHexWithAlpha(hex: string): boolean;
}
```

[Table of Contents](#table-of-contents)

----

# Updated Classes

## `Range`

```typescript
/**
 * Structure to handle a range of values,
 * where the range has a minimum value and a maximum value.
 *
 * @category Math
 * @category Random
 */
declare class Range {
    /**
     * @param min - The minimum value of the Range.
     * @param max - The maximum value of the Range.
     */
    public constructor(min: number, max: number);

    /**
     * @returns The maximum value of the Range.
     */
    public get max(): number;

    /**
     * Alias for {@link max}.
     *
     * @returns The maximum value of the Range.
     */
    public get maximum(): number;

    /**
     * If the given maximum is less than the current {@link min},
     * the fields {@link min} and {@link max} will be set so that {@link min} is less than {@link max}.
     *
     * @param max - The new maximum value of the Range.
     */
    public set max(max: number);

    /**
     * @returns The minimum value of the Range.
     */
    public get min(): number;

    /**
     * Alias for {@link min}.
     *
     * @returns The minimum value of the Range.
     */
    public get minimum(): number;

    /**
     * If the given minimum is greater than the current {@link max},
     * the fields {@link min} and {@link max} will be set so that {@link min} is less than {@link max}.
     *
     * @param min - The new minimum value of the Range.
     */
    public set min(min: number);
}
```

## `SketchContext`

[!CAUTION]
> Breaking Change!
>
> The `SketchContext` class has been renamed to `P5Context`.

[Table of Contents](#table-of-contents)

----

# Updated Interfaces

## PaletteColor

`RGB` and `HSL` components are now optional.

```typescript
/**
 * A color to be used in a {@link Palette}.
 *
 * @category Palette
 */
declare interface PaletteColor extends Discriminable {
    /**
     * The hex string representation of the color (format: `#RRGGBB`).
     */
    readonly HEX: string;

    /**
     * The name of the color.
     */
    readonly NAME: string;

    /**
     * The RGB (red, green, blue) components of the color.
     */
    readonly RGB?: {
        /**
         * The red component (0-255).
         */
        readonly R: number;

        /**
         * The green component (0-255).
         */
        readonly G: number;

        /**
         * The blue component (0-255).
         */
        readonly B: number;
    };

    /**
     * The HSL (hue, saturation, lightness) components of the color.
     */
    readonly HSL?: {
        /**
         * The hue component (0-360).
         */
        readonly H: number;

        /**
         * The saturation component (0-100).
         */
        readonly S: number;

        /**
         * The lightness component (0-100).
         */
        readonly L: number;
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE_COLOR;
}
```

[Table of Contents](#table-of-contents)

## `WeightedElement`

[!CAUTION]
> Breaking Change!
>
> The `value` and `weight` properties have been renamed to `VALUE` and `WEIGHT`.

### New Properties
- `DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT`

```typescript
declare interface WeightedElement<Type> extends Discriminable {
    /**
     * The value returned if this element is selected.
     */
    readonly VALUE: Type;

    /**
     * The weight associated with this element.
     * The greater the weight, the more likely the element will be selected.
     */
    readonly WEIGHT: number;

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT;
}
```

[Table of Contents](#table-of-contents)

----

### Fin.

[Table of Contents](#table-of-contents)
