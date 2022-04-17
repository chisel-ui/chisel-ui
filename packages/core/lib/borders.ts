import { isCssLength } from './css'
import type { CSSLength } from './css'
import type { Maybe } from './utils'

const Widths = {
    'thin': 'var(--border-thin)',
    'medium': 'var(--border-medium)',
    'thick': 'var(--border-thick)'
}

export type BorderWidth = keyof typeof Widths | CSSLength | number

export function getBorderWidthValue(width: BorderWidth): Maybe<CSSLength> {
    return typeof width === 'number' ? `${width}px`
        : width in Widths ? Widths[width]
        : isCssLength(width) ? width
        : '0px'
}
