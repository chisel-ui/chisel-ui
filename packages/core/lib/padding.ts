import { isCssLength } from './css.js'
import { Gaps, getGapValue } from './gaps.js'
import type { Gap } from './gaps.js'

export interface PaddingObject {
	left?: Gap
	right?: Gap
	top?: Gap
	bottom?: Gap
	inlineStart?: Gap
	inlineEnd?: Gap
	blockStart?: Gap
	blockEnd?: Gap
}

export type Padding =
	| Gap
	| Partial<PaddingObject>
	| [Gap]
	| [Gap, Gap]
	| [Gap, Gap, Gap]
	| [Gap, Gap, Gap, Gap]


function keyToProperty(key: keyof PaddingObject) {
    switch (key) {
        case 'left':
        case 'inlineStart':
            return 'padding-inline-start'
        case 'right':
        case 'inlineEnd':
            return 'padding-inline-end'
        case 'top':
        case 'blockStart':
            return 'padding-block-start'
        case 'bottom':
        case 'blockEnd':
            return 'padding-block-end'
        default:
            return undefined
    }
}

export function isValidPadding(padding: Padding): boolean {
    if (typeof padding === 'number') {
        return padding >= 0
    } else if (typeof padding === 'string') {
        return padding in Gaps || isCssLength(padding)
    } else if (Array.isArray(padding)) {
        return padding.length > 0 && padding.length < 5
    } else if (typeof padding === 'object') {
        return Object.entries(padding).every(([key, value]) => {
            return !!keyToProperty(key as keyof Padding) && isValidPadding(value)
        })
    }

    return false
}

function getPaddingValue(value: Gap) {
    if (typeof value === 'number') {
        return `${value}px`
    } else if (typeof value === 'string' && isCssLength(value)) {
        return value
    } else {
        return getGapValue(value)
    }
}

export function getPaddingStyles(padding: Padding) {
    if (Array.isArray(padding) && padding.length > 4) {
        throw new Error(`padding arrays can't be longer than 4, found ${padding.length}`)
    }

    if (!isValidPadding(padding)) {
        throw new Error(`Invalid padding type - ${padding}`)
    }

    if (Array.isArray(padding)) {
        if (padding.length === 1) {
            return `padding: ${getPaddingValue(padding[0])};`
        } else if (padding.length === 2) {
            const [block, inline] = padding
            return [
                `padding-inline: ${getPaddingValue(inline)}`,
                `padding-block: ${getPaddingValue(block)};`
            ].join(';')
        } else if (padding.length === 3) {
            const [blockStart, inline, blockEnd] = padding
            return [
                `padding-block-start: ${getPaddingValue(blockStart)}`,
                `padding-inline: ${getPaddingValue(inline)}`,
                `padding-block-end: ${getPaddingValue(blockEnd)};`
            ].join(';')
        } else {
            const [blockStart, inlineEnd, blockEnd, inlineStart] = padding
            return [
                `padding-block-start: ${getPaddingValue(blockStart)}`,
                `padding-inline-end: ${getPaddingValue(inlineEnd)}`,
                `padding-block-end: ${getPaddingValue(blockEnd)}`,
                `padding-inline-start: ${getPaddingValue(inlineStart)};`
            ].join(';')
        }
    } else if (typeof padding === 'object') {
        const array = Object.entries(padding).map(([key, value]) => {
            return `${keyToProperty(key as keyof Padding)}: ${getGapValue(value as Gap)};`
        })
        
        return array.join(' ');
    } else {
        return `padding: ${getPaddingValue(padding)};`
    }
}