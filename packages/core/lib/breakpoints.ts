import { isCssLength } from './css'
import type { CSSLength } from './css'
import type { Theme } from './themes'
import type { Maybe } from './utils'

export type Breakpoints = Record<string, CSSLength>
export type Breakpoint<T extends Breakpoints> = CSSLength | number | keyof T

export const defaultBreakpoints: Breakpoints = {
	xs: '360px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
	'3xl': '1920px',
}

export function getBreakpointValue<T extends Theme>(
	theme: T,
	breakpoint: Breakpoint<T['breakpoints']>
): Maybe<CSSLength> {
	const breakpoints = theme.breakpoints ?? defaultBreakpoints

	if (breakpoint)
		if (typeof breakpoint === 'string' && isCssLength(breakpoint)) {
			return breakpoint
		} else if (typeof breakpoint === 'number') {
			return `${breakpoint}px`
		}

	return breakpoints[breakpoint] ?? '0px'
}
