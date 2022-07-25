import { isCssLength } from './css.js'
import type { CSSLength } from './css.js'
import type { Maybe } from './utils.js'

const Widths = {
    'thin': 'var(--border-thin)',
    'medium': 'var(--border-medium)',
    'thick': 'var(--border-thick)'
}

export type BorderWidth = keyof typeof Widths | CSSLength | number

export function getBorderWidthValue(width: BorderWidth): Maybe<CSSLength> {
    return typeof width === 'number' ? `${width}px`
        // @ts-ignore
        : width in Widths ? Widths[width]
        : isCssLength(width) ? width
        : '0px'
}
