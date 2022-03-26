---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Column, Columns } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Columns
---

# Columns

This component creates an n-column layout. The `Column` component can be used to control to span multiple columns and create gaps with column offsets.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |
| **columns** | Sets the number of columns `number` | 1 |
| **dense** | Orders the children to fit any blank space `boolean` | false |
| **switchAt** | Below this size, only one column is used `CSSLength, number, SizingOption` | (unset) |

## `gutter`

The `gutter` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gutter as number (20)
<Columns gutter={20} columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### Custom gutter as string ("3ch")
<Columns gutter="3ch" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### none
<Columns gutter="none" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 2xs
<Columns gutter="2xs" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### xs
<Columns gutter="xs" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### sm
<Columns gutter="sm" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### md
<Columns gutter="md" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### lg
<Columns gutter="lg" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### xl
<Columns gutter="xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 2xl
<Columns gutter="2xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 3xl
<Columns gutter="3xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 4xl
<Columns gutter="4xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

## `columns`

Defines the number of columns used. If `switchAt` is used, this will be ignored below the `switchAt` threshold.

### Example usage

#### 4 columns
<Columns gutter="lg" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>
