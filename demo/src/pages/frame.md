---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Center, Frame } from '@chisel-ui/astro'
title: Frame
---

# Grid

This component creates a responsive grid of items that will automatically wrap. Optionally, a minimum width can be applied to every item in the grid.

## API

| name             | description                                                            | default |
| ---------------- | ---------------------------------------------------------------------- | ------- |
| **ratio**        | Aspect ratio for the child element `[number, number]`, `number/number` | 0px     |
| **position**     | Sets the alignment of the media in the Frame `object-position value`   | 0px     |

## `ratio`

The `ratio` property defines the aspect ratio maintained in the child element. This can be provided as an array, i.e. `[width, height]`, or as a string representing a fraction, i.e. `width/height`.

### Example usage

#### Fraction string (16/9)

<Frame as={Center} maxWidth="md" ratio="16/9">
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>

```astro
<Frame as={Center} maxWidth="md" ratio="16/9">
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>
```

#### Array ([4, 3])

<Frame as={Center} maxWidth="md" ratio={[4, 3]}>
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>

```astro
<Frame as={Center} maxWidth="md" ratio={[4, 3]}>
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>
```

## `position`

Content will be centered in the `<Frame>` by default. The `position` property accepts any valid [object-position value](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) to set the position of the content.

### Example Usage

#### Position string (left top)

<Frame as={Center} maxWidth="md" ratio="1/1" position="left top">
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>

```astro
<Frame as={Center} maxWidth="md" ratio="1/1" position="left top">
    <img src="/data-pic.jpg" alt="computer with data" />
</Frame>
```
