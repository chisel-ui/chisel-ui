---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Split } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Split
---

# Split

This component creates a responsive split layout.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **_gutter_** | Sets space between each element `number, CSSLength, SpacingOption` | 0px |
| **fraction** | Sets the fractional split between the two columns `string` | 1/2 |
| **switchAt** | Below this size, content will be shown vertically `CSSLength, number, SizingOption` | (unset) |

## `gutter`

The `gutter` property defines the gap between elements. This can be a size defined in your theme (like `md` or `2xl`), a valid `CSSLength`, or a positive integer.

### Example usage

#### Custom gutter as number (20)
<Split gutter={20}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### Custom gutter as string ("3ch")
<Split gutter="3ch">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### none
<Split gutter="none">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### 2xs
<Split gutter="2xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### xs
<Split gutter="xs">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### sm
<Split gutter="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### md
<Split gutter="md">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### lg
<Split gutter="lg">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### xl
<Split gutter="xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### 2xl
<Split gutter="2xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### 3xl
<Split gutter="3xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

#### 4xl
<Split gutter="4xl">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
</Split>

## `fraction`

This attribute defines the fraction of the container width that is used for the split.

#### 1/4
<Split gutter="lg" fraction="1/4">
    <Box />
    <Box />
</Split>

#### 1/3
<Split gutter="lg" fraction="1/3">
    <Box />
    <Box />
</Split>

#### 1/2
<Split gutter="lg" fraction="1/2">
    <Box />
    <Box />
</Split>

#### 2/3
<Split gutter="lg" fraction="2/3">
    <Box />
    <Box />
</Split>

#### 3/4
<Split gutter="lg" fraction="3/4">
    <Box />
    <Box />
</Split>

#### auto-start
(The first box has a width of 50px)

<Split gutter="lg" fraction="auto-start">
    <Box />
    <Box />
</Split>

#### auto-end
(The second box has a width of 50px)

<Split gutter="lg" fraction="auto-end">
    <Box />
    <Box />
</Split>

## `switchAt`

This attribute sets a minimum screen width for the inline items to be shown horizontally. Below this, items will be stacked vertically.

### Example usage

(Resize your window to see this in action)

#### 45rem

<Split gutter="lg" fraction="1/3" switchAt="45rem">
    <Box />
    <Box />
</Split>