---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { InlineCluster } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: InlineCluster
---

# InlineCluster

This component displays a group of elements in a row, automatically wrapping if needed.

## API

| name        | description                                                        | default |
| ----------- | ------------------------------------------------------------------ | ------- |
| **_gap_**   | Sets space between each element `number, CSSLength, SpacingOption` | 0px     |
| **justify** | Sets the InlineCluster justification of the children `string`      | start   |
| **align**   | Sets the block alignment of the children `string`                  | start   |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<InlineCluster gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### Custom gap as string ("3ch")

<InlineCluster gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### none

<InlineCluster gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 2xs

<InlineCluster gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### xs

<InlineCluster gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### sm

<InlineCluster gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### md

<InlineCluster gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### lg

<InlineCluster gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### xl

<InlineCluster gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 2xl

<InlineCluster gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 3xl

<InlineCluster gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### 4xl

<InlineCluster gap="4xl">
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

<InlineCluster justify="start" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### end

<InlineCluster justify="end" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

#### center

<InlineCluster justify="center" gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</InlineCluster>

## `align`

This attribute defines the block alignment of the element within the cluster. Options: `start`, `end`, `center`, `stretch`.

### Example usage

#### start

<InlineCluster align="start" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>

#### end

<InlineCluster align="end" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>

#### center

<InlineCluster align="center" gap="xl">
    <Box style="height: 200px;" />
    <Box />
    <Box />
</InlineCluster>
