---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Cover, FullBleed } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: FullBleed
---

# FullBleed

This component creates a full-bleed layout often used for page layouts. This component works much like a [Stack](/stack/), but content clamped to a maximum width. Any [Cover](/cover/) components will break out of the max width and ignore the inline gap, useful for hero components.

## API

| name         | description                                                          | default |
| ------------ | -------------------------------------------------------------------- | ------- |
| **_gap_**    | Sets space between each element `number, CSSLength, SpacingOption`   | 0px     |
| **maxWidth** | Sets the maximum inline size of all children `breakpoint, CSSLength` | `xl`    |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<FullBleed gap={20} style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap={20} style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### Custom gap as string ("3ch")

<FullBleed gap="3ch" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="3ch" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### none

<FullBleed gap="none" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="none" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### 2xs

<FullBleed gap="2xs" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="2xs" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### xs

<FullBleed gap="xs" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="xs" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### sm

<FullBleed gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="sm" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### md

<FullBleed gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### lg

<FullBleed gap="lg" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="lg" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### xl

<FullBleed gap="xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### 2xl

<FullBleed gap="2xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="2xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### 3xl

<FullBleed gap="3xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="3xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### 4xl

<FullBleed gap="4xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap="4xl" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

## `maxWidth`

The `maxWidth` property sets the maximum inline width for all child components (except for `<Cover>`).

### Example usage

#### Custom gap as number (300)

<FullBleed gap={20} maxWidth={300} style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap={20} maxWidth={300} style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### Custom gap as string (30ch)

<FullBleed gap={20} maxWidth="30ch" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap={20} maxWidth="30ch" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### Theme breakpoint (md)

<FullBleed gap={20} maxWidth="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>

```astro
<FullBleed gap={20} maxWidth="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</FullBleed>
```

#### With a `<Cover>` child

<FullBleed gap={20} maxWidth="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Cover as={Box} />
    <Box />
</FullBleed>

```astro
<FullBleed gap={20} maxWidth="md" style="border: solid 1px var(--chisel-neutral-800);">
    <Box />
    <Cover as={Box} />
    <Box />
</FullBleed>
```
