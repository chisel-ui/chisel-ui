---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Grid } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Grid
---

# Grid

This component creates a responsive grid of items that will automatically wrap. Optionally, a minimum width can be applied to every item in the grid.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |
| **minItemWidth** | Sets the minimum width of each child `number, CSSLength, SizingOption` | 0px |

## `gutter`

The `gutter` property defines the gap between grid items. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

### Custom gutter as number (20)
<Grid gutter={20} minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### Custom gutter as string ("3ch")
<Grid gutter="3ch" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### none
<Grid gutter="none" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 2xs
<Grid gutter="2xs" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### xs
<Grid gutter="xs" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### sm
<Grid gutter="sm" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### md
<Grid gutter="md" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### lg
<Grid gutter="lg" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### xl
<Grid gutter="xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 2xl
<Grid gutter="2xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 3xl
<Grid gutter="3xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

#### 4xl
<Grid gutter="4xl" minItemWidth="25rem">
    <Box />
    <Box />
    <Box />
</Grid>

### `minItemWidth`

#### 15rem

<Grid gutter="lg" minItemWidth="15rem">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Grid>