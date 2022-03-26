---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Stack } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Stack
---

# Stack

This component stacks children vertically.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |

## `gutter`

The `gutter` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gutter as number (20)
<Stack gutter={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### Custom gutter as string ("3ch")
<Stack gutter="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### none
<Stack gutter="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 2xs
<Stack gutter="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### xs
<Stack gutter="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### sm
<Stack gutter="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### md
<Stack gutter="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### lg
<Stack gutter="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### xl
<Stack gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 2xl
<Stack gutter="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 3xl
<Stack gutter="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>

#### 4xl
<Stack gutter="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Stack>