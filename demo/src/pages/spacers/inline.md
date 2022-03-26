---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Inline } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Inline
---

# Inline

This component creates a consistent spacing around inline elements of variable width. Consider this a component wrapper around a plain old flexbox.

Unlike `InlineCluster`, items will not wrap.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |
| **justify** | Sets the inline justification of the children `string` | start |
| **align** | Sets the block alignment of the children `string` | start |
| **stretch** | Stretches a specific child to fill any remaining space | (unset) |
| **switchAt** | Below this size, content will be shown vertically `CSSLength, number, SizingOption` | (unset) |

## `gutter`

The `gutter` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gutter as number (20)
<Inline gutter={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### Custom gutter as string ("3ch")
<Inline gutter="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### none
<Inline gutter="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### 2xs
<Inline gutter="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### xs
<Inline gutter="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### sm
<Inline gutter="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### md
<Inline gutter="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### lg
<Inline gutter="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### xl
<Inline gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### 2xl
<Inline gutter="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### 3xl
<Inline gutter="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### 4xl
<Inline gutter="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

## `justify`

This attribute defines the inline justification of elements in the cluster. Options: `start`, `end`, `center`.

### Example Usage

#### start

<Inline justify="start" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### end

<Inline justify="end" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### center

<Inline justify="center" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

## `align`

This attribute defines the block alignment of the element within the cluster. Options: `start`, `end`, `center`, `stretch`.

### Example usage

#### start
<Inline align="start" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

#### end
<Inline align="end" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

#### center
<Inline align="center" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

#### stretch
<Inline align="stretch" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</Inline>

## `stretch`

This attribute can be used to stretch a specific child component to fill any extra space.

#### start
<Inline gutter="lg" stretch="start">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### end
<Inline gutter="lg" stretch="end">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### all
<Inline gutter="lg" stretch="all">
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

#### Index 2
<Inline gutter="lg" stretch={2}>
    <Box />
    <Box />
    <Box />
    <Box />
</Inline>

## `switchAt`

This attribute sets a minimum screen width for the inline items to be shown horizontally. Below this, items will be stacked vertically.

### Example usage

(Resize your window to see this in action)

#### 45rem

<Inline gutter="lg" switchAt="45rem">
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