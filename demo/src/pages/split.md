---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Split } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Split
---

# Split

This component creates a responsive split layout.

## API

| name         | description                                                                         | default |
| ------------ | ----------------------------------------------------------------------------------- | ------- |
| **_gap_**    | Sets space between each element `number, CSSLength, SpacingOption`                  | 0px     |
| **fraction** | Sets the fractional split between the two columns `string`                          | 1/2     |
| **switchAt** | Below this size, content will be shown vertically `CSSLength, number, SizingOption` | (unset) |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<Split gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### Custom gap as string ("3ch")

<Split gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### none

<Split gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### 2xs

<Split gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### xs

<Split gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### sm

<Split gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### md

<Split gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### lg

<Split gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### xl

<Split gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### 2xl

<Split gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### 3xl

<Split gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

#### 4xl

<Split gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

```astro
<Split gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>
```

## `fraction`

This attribute defines the fraction of the container width that is used for the split.

#### 1/4

<Split gap="lg" fraction="1/4">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="1/4">
    <Box />
    <Box />
</Split>
```

#### 1/3

<Split gap="lg" fraction="1/3">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="1/3">
    <Box />
    <Box />
</Split>
```

#### 1/2

<Split gap="lg" fraction="1/2">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="1/2">
    <Box />
    <Box />
</Split>
```

#### 2/3

<Split gap="lg" fraction="2/3">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="2/3">
    <Box />
    <Box />
</Split>
```

#### 3/4

<Split gap="lg" fraction="3/4">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="3/4">
    <Box />
    <Box />
</Split>
```

#### auto-start

(The first box has a width of 50px)

<Split gap="lg" fraction="auto-start">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="auto-start">
    <Box />
    <Box />
</Split>
```

#### auto-end

(The second box has a width of 50px)

<Split gap="lg" fraction="auto-end">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="auto-end">
    <Box />
    <Box />
</Split>
```

## `switchAt`

This attribute sets a minimum screen width for the inline items to be shown horizontally. Below this, items will be stacked vertically.

### Example usage

(Resize your window to see this in action)

#### 45rem

<Split gap="lg" fraction="1/3" switchAt="45rem">
    <Box />
    <Box />
</Split>

```astro
<Split gap="lg" fraction="1/3" switchAt="45rem">
    <Box />
    <Box />
</Split>
```
