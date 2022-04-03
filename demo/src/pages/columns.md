---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Column, Columns } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Columns
---

# Columns

This component creates an n-column layout. The `Column` component can be used to control to span multiple columns and create gaps with column offsets.

## API

| name         | description                                                                | default |
| ------------ | -------------------------------------------------------------------------- | ------- |
| **_gap_**    | Sets space between each element `number, CSSLength, SpacingOption`         | 0px     |
| **columns**  | Sets the number of columns `number`                                        | 1       |
| **dense**    | Orders the children to fit any blank space `boolean`                       | false   |
| **switchAt** | Below this size, only one column is used `CSSLength, number, SizingOption` | (unset) |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<Columns gap={20} columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### Custom gap as string ("3ch")

<Columns gap="3ch" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### none

<Columns gap="none" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 2xs

<Columns gap="2xs" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### xs

<Columns gap="xs" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### sm

<Columns gap="sm" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### md

<Columns gap="md" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### lg

<Columns gap="lg" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### xl

<Columns gap="xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 2xl

<Columns gap="2xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 3xl

<Columns gap="3xl" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>

#### 4xl

<Columns gap="4xl" columns={4}>
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

<Columns gap="lg" columns={4}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Columns>
