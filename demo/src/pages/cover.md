---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Cover } from '@chisel-ui/astro'
title: Cover
---

# Cover

This component is designed to cover a predefined area and vertically center it's children. Slots are included to render content at the top and bottom of the component as well.

## API

| name          | description                                                        | default |
| ------------- | ------------------------------------------------------------------ | ------- |
| **_gap_**     | Sets space between each element `number, CSSLength, SpacingOption` | 0px     |
| **minHeight** | Sets the minimum block size of the component `CSSLength`           | 0px     |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<Cover minHeight="25vh" gap={20} style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap={20} style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### Custom gap as string ("3ch")

<Cover minHeight="25vh" gap="3ch" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="3ch" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### 2xs

<Cover minHeight="25vh" gap="2xs" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="2xs" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### xs

<Cover minHeight="25vh" gap="xs" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="xs" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### sm

<Cover minHeight="25vh" gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### md

<Cover minHeight="25vh" gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### lg

<Cover minHeight="25vh" gap="lg" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="lg" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### xl

<Cover minHeight="25vh" gap="xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### 2xl

<Cover minHeight="25vh" gap="2xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="2xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### 3xl

<Cover minHeight="25vh" gap="3xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="3xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### 4xl

<Cover minHeight="25vh" gap="4xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="4xl" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

## `minHeight`

The `minHeight` property cna be used to set the minimum height, `100vh` by default.

### Example usage

#### Custom minHeight as a number (500)

<Cover minHeight={500} gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight={500} gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```

#### Custom minHeight as a string (25vh)

<Cover minHeight="25vh" gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>

```astro
<Cover minHeight="25vh" gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Cover>
```
