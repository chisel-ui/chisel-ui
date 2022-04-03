---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Grid } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Grid
---

# Grid

This component creates a responsive grid of items that will automatically wrap. Optionally, a minimum width can be applied to every item in the grid.

## API

| name             | description                                                            | default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| **_gap_**        | Sets space between each element `number, CSSLength, SpacingOption`     | 0px     |
| **minItemWidth** | Sets the minimum width of each child `number, CSSLength, SizingOption` | 0px     |

## `gap`

The `gap` property defines the gap between grid items. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

### Custom gap as number (20)

<Grid gap={20} minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### Custom gap as string ("3ch")

<Grid gap="3ch" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### none

<Grid gap="none" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 2xs

<Grid gap="2xs" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### xs

<Grid gap="xs" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### sm

<Grid gap="sm" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### md

<Grid gap="md" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### lg

<Grid gap="lg" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### xl

<Grid gap="xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 2xl

<Grid gap="2xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 3xl

<Grid gap="3xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 4xl

<Grid gap="4xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

### `minItemWidth`

#### 15rem

<Grid gap="lg" minItemWidth="15rem">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Grid>
