---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Inline } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Inline
---

# Inline

This component creates a consistent spacing around inline elements of variable width. Consider this a component wrapper around a plain old flexbox.

Unlike `InlineCluster`, items will not wrap.

## API

| name         | description                                                                         | default |
| ------------ | ----------------------------------------------------------------------------------- | ------- |
| **_gap_**    | Sets space between each element `number, CSSLength, SpacingOption`                  | 0px     |
| **justify**  | Sets the inline justification of the children `string`                              | start   |
| **align**    | Sets the block alignment of the children `string`                                   | start   |
| **stretch**  | Stretches a specific child to fill any remaining space                              | (unset) |
| **switchAt** | Below this size, content will be shown vertically `CSSLength, number, SizingOption` | (unset) |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<Inline gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### Custom gap as string ("3ch")

<Inline gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### none

<Inline gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### 2xs

<Inline gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### xs

<Inline gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### sm

<Inline gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### md

<Inline gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### lg

<Inline gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### xl

<Inline gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### 2xl

<Inline gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### 3xl

<Inline gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### 4xl

<Inline gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

## `justify`

This attribute defines the inline justification of elements in the cluster. Options: `start`, `end`, `center`.

### Example Usage

#### start

<Inline justify="start" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline justify="start" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### end

<Inline justify="end" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline justify="end" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### center

<Inline justify="center" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline justify="center" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

## `align`

This attribute defines the block alignment of the element within the cluster. Options: `start`, `end`, `center`, `stretch`.

### Example usage

#### start

<Inline align="start" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

```astro
<Inline align="start" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>
```

#### end

<Inline align="end" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

```astro
<Inline align="end" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>
```

#### center

<Inline align="center" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

```astro
<Inline align="center" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>
```

#### stretch

<Inline align="stretch" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

```astro
<Inline align="stretch" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>
```

## `stretch`

This attribute can be used to stretch a specific child component to fill any extra space.

#### start

<Inline gap="lg" stretch="start">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="lg" stretch="start">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### end

<Inline gap="lg" stretch="end">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="lg" stretch="end">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### all

<Inline gap="lg" stretch="all">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="lg" stretch="all">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

#### Index 2

<Inline gap="lg" stretch={2}>
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

```astro
<Inline gap="lg" stretch={2}>
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>
```

## `switchAt`

This attribute sets a minimum screen width for the inline items to be shown horizontally. Below this, items will be stacked vertically.

### Example usage

(Resize your window to see this in action)

#### 45rem

<Inline gap="lg" switchAt="45rem">
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
</Inline>

```astro
<Inline gap="lg" switchAt="45rem">
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
    <Box>
        <Box />
    </Box>
</Inline>
```
