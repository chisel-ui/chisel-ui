---
layout: '../layouts/DocsLayout.astro'
setup: |
  import { Center, Component } from '@chisel-ui/astro'
  import Box from '../components/Box.astro'
title: Center
---

# Center

This compoennt is designed to clamp its width at a predefined value and center itself in its parent.

## API

| name              | description                                               | default |
| ----------------- | --------------------------------------------------------- | ------- |
| **maxWidth**      | Sets the maximum inline size of the component `CSSLength` | `md`    |
| **centerText**    | Centers text in the component `boolean`                   | `false` |
| **centerContent** | Centers the childrne in the component `boolean`           | `false` |

## `maxWidth`

The `maxWidth` property sets the maximum with the `Center` component will be clamped to.

### Example usage

#### maxWidth as percentage (75%)

<Component style="border: solid 1px red;">
    <Center maxWidth="75%" style="border: 1px solid black;">
        <div>
            Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
            elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
            eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
            vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
            sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
            sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
            ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
            nisi tellus, sit amet sagittis nisl luctus ut.
        </div>
    </Center>
</Component>

#### maxWidth as custom px (375px)

<Component style="border: solid 1px red;">
    <Center maxWidth="375px" style="border: 1px solid black;">
        <div>
            Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
            elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
            eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
            vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
            sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
            sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
            ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
            nisi tellus, sit amet sagittis nisl luctus ut.
        </div>
    </Center>
</Component>

#### maxWidth as percent (33%)

<Component style="border: solid 1px red;">
    <Center maxWidth="33%" style="border: 1px solid black;">
        <div>
            Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
            elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
            eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
            vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
            sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
            sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
            ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
            nisi tellus, sit amet sagittis nisl luctus ut.
        </div>
    </Center>
</Component>

#### maxWidth as theme breakpoint (sm)

<Component style="border: solid 1px red;">
    <Center maxWidth="sm" style="border: 1px solid black;">
        <div>
            Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
            elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
            eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
            vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
            sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
            sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
            ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
            nisi tellus, sit amet sagittis nisl luctus ut.
        </div>
    </Center>
</Component>

## `centerText`

The `centerText` property does just what it sounds like, uses center text alignment.

<Center centerText style="border: 1px solid black;">
    <div>
        Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
        elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
        eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
        vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
        sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
        sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
        ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
        nisi tellus, sit amet sagittis nisl luctus ut.
    </div>
</Center>

## `centerContent`

The `centerContent` property centers also centers all children inside the`<Center>` component.

<Center centerContent style="border: 1px solid black;">
    <div style="width: 75%;">
        Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
        elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
        eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
        vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
        sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
        sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
        ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
        nisi tellus, sit amet sagittis nisl luctus ut.
    </div>
</Center>