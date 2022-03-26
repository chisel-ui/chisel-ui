---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { InlineCluster } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | InlineCluster
---

# InlineCluster

This component displays a group of elements in a row, automatically wrapping if needed.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |
| **justify** | Sets the InlineCluster justification of the children `string` | start |
| **align** | Sets the block alignment of the children `string` | start |

## `gutter`

The `gutter` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gutter as number (20)
<InlineCluster gutter={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### Custom gutter as string ("3ch")
<InlineCluster gutter="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### none
<InlineCluster gutter="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 2xs
<InlineCluster gutter="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### xs
<InlineCluster gutter="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### sm
<InlineCluster gutter="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### md
<InlineCluster gutter="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### lg
<InlineCluster gutter="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### xl
<InlineCluster gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 2xl
<InlineCluster gutter="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 3xl
<InlineCluster gutter="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 4xl
<InlineCluster gutter="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

## `justify`

This attribute defines the InlineCluster justification of elements in the cluster. Options: `start`, `end`, `center`.

### Example Usage

#### start

<InlineCluster justify="start" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### end

<InlineCluster justify="end" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### center

<InlineCluster justify="center" gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

## `align`

This attribute defines the block alignment of the element within the cluster. Options: `start`, `end`, `center`, `stretch`.

### Example usage

#### start
<InlineCluster align="start" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>

#### end
<InlineCluster align="end" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>

#### center
<InlineCluster align="center" gutter="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>