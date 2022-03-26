---
layout: "../../layouts/DocsLayout.astro"
setup: |
    import { Column, Columns } from 'chisel-ui'
    import Box from '../../components/Box.astro'
title: Spacer Components | Column
---

# Column

This component can be used as a child of `<Columns>` to span multiple column. Offsets can also be added to create gaps before or after the `Column`.

## API

| name | description | default |
| ---- | ----------- | ------- |
| **span** | Sets the number of columns the element will span `number` | 1 |
| **offsetStart** | Sets the number of columns the element will leave blank before it `number` | 0 |
| **offsetEnd** | Sets the number of columns the element will offset after the element `number` | 0 |

### `span`

#### Example usage

<Columns gutter="lg" columns={4}>
    <Box />
    <Box />
    <Column span={3}>
        <Box style="background: var(--chisel-primary);">
            3 columns
        </Box>
    </Column>
    <Column span={2}>
        <Box style="background: var(--chisel-primary);">
            2 columns
        </Box>
    </Column>
    <Box />
    <Box />
    <Box />
</Columns>

### `offsetStart` and `offsetEnd`

Adding an offset forces blank columns before or after the `Column`. Gaps can wrap to the next row!

#### Example usage

<Columns gutter="lg" columns={5}>
    <Box />
    <Box />
    <Column span={2} offsetStart={1}>
        <Box style="background: var(--chisel-primary);">
            `offsetStart: 1
        </Box>
    </Column>
    <Column span={2} offsetEnd={2}>
        <Box style="background: var(--chisel-primary);">
            `offsetEnd: 2`
        </Box>
    </Column>
    <Box />
    <Box />
    <Box />
</Columns>
