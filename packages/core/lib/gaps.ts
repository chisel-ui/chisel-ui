import { isCssLength } from './css'
import type { CSSLength } from './css'
import type { Maybe } from './utils'

const Gaps = {
    '4xs': 'var(--gap-4xs)',
    '3xs': 'var(--gap-3xs)',
    '2xs': 'var(--gap-2xs)',
    'xs': 'var(--gap-xs)',
    'sm': 'var(--gap-sm)',
    'base': 'var(--gap-base)',
    'lg': 'var(--gap-lg)',
    'xl': 'var(--gap-xl)',
    '2xl': 'var(--gap-2xl)',
    '3xl': 'var(--gap-3xl)',
    '4xl': 'var(--gap-4xl)'
}

export type Gap = keyof typeof Gaps | CSSLength | number

export function getGapValue(
	gap: Gap
): Maybe<CSSLength> {
    return typeof gap === 'number' ? `${gap}px`
        : gap in Gaps ? Gaps[gap]
        : isCssLength(gap) ? gap
        : '0px'
}
