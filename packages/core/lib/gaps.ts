import { isCssLength } from './css'
import { fromEntries } from './utils'
import type { CSSLength } from './css'
import type { Theme } from './themes'
import type { Maybe } from './utils'

export type Gaps = Record<string, CSSLength>
export type Gap<T extends Gaps> = CSSLength | number | keyof T

export const defaultGaps: Gaps = {
	none: '0px',
	'2xs': '0.125rem',
	xs: '0.5rem',
	sm: '0.75rem',
	md: '1rem',
	lg: '1.25rem',
	xl: '1.75rem',
	'2xl': '2.25rem',
	'3xl': '3rem',
	'4xl': '4.5rem',
}

export function getGapValue<T extends Theme>(
	theme: T,
	gap: Gap<T['gaps']>
): Maybe<CSSLength> {
	const gaps = theme.gaps ?? defaultGaps

	if (typeof gap === 'string' && isCssLength(gap)) {
		return gap
	} else if (typeof gap === 'number') {
		return `${gap}px`
	}

	return gaps[gap] ?? '0px'
}
