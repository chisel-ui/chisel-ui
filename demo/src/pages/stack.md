---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Stack } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Stack
---

# Stack

This component stacks children vertically.

## API

| name      | description                                                        | default |
| --------- | ------------------------------------------------------------------ | ------- |
| **_gap_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px     |

## `gap`

The `gap` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gap as number (20)

<Stack gap={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### Custom gap as string ("3ch")

<Stack gap="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### none

<Stack gap="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 2xs

<Stack gap="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### xs

<Stack gap="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### sm

<Stack gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### md

<Stack gap="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### lg

<Stack gap="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### xl

<Stack gap="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 2xl

<Stack gap="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 3xl

<Stack gap="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 4xl

<Stack gap="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>
