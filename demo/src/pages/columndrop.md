---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { ColumnDrop } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: ColumnDrop
---

# ColumnDrop

This component is an auto-wrapping column layout. Each row is treated independently and can have different column widths. The initial main size of items can be set, and by default items will be stretched to fill the full width of the row.

## API

| name                   | description                                                                | default |
| ---------------------- | -------------------------------------------------------------------------- | ------- |
| **_gap_**              | Sets space between each element `number, CSSLength, or SpacingOption`      | 0px     |
| **basis**              | Sets the minimum width for each child `CSSLength`                          | (unset) |
| **noStretchedColumns** | If true, the columns will not be stretched to fill the container `boolean` |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<ColumnDrop gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### Custom gap as string ("3ch")

<ColumnDrop gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### none

<ColumnDrop gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### 2xs

<ColumnDrop gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### xs

<ColumnDrop gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### sm

<ColumnDrop gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### md

<ColumnDrop gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### lg

<ColumnDrop gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### xl

<ColumnDrop gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### 2xl

<ColumnDrop gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### 3xl

<ColumnDrop gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### 4xl

<ColumnDrop gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

## `basis`

The `basis` property sets the initial main size of the child items.

### Example usage

#### 15rem

<ColumnDrop gap="lg" basis="15rem">
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>

#### Item-specific basis

<ColumnDrop gap="lg" basis="15rem">
    <Box />
    <Box style="--basis: 25rem;">
        25rem
    </Box>
    <Box />
    <Box />
</ColumnDrop>

## `noStretchedColumns`

By default, `ColumnDrop` will stretch items to fill each row. Adding the `noStretchedColumns` attribute will disable stretching and use the `basis` to determine the width of each column and center the columns of each row.

<ColumnDrop noStretchedColumns gap="lg" basis="20rem">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</ColumnDrop>
