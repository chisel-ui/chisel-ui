import { checkIsCSSLength } from './css'
import { fromEntries } from './utils'
import type { CSSLength } from './css'
import type { BaseTheme, DefaultTheme } from './themes'
import type { Maybe } from './utils'

export interface Spacing {
	none: CSSLength
	xxs: CSSLength
	xs: CSSLength
	sm: CSSLength
	md: CSSLength
	lg: CSSLength
	xl: CSSLength
	xxl: CSSLength
	xxxl: CSSLength
	xxxxl: CSSLength
	xxxxxl: CSSLength
}

type ThemeOrDefaultSpace<T> = T extends {
	space: BaseTheme
}
	? T['space']
	: T extends { spacing: BaseTheme }
	? T['spacing']
	: Spacing

export type SpacingOptions = ThemeOrDefaultSpace<DefaultTheme>

const none = '0px'
const xxs = '0.0625rem'
const xs = '0.125rem'
const sm = '0.25rem'
const md = '0.5rem'
const lg = '0.75rem'
const xl = '1rem'
const xxl = '1.5rem'
const xxxl = '2rem'
const xxxxl = '3rem'
const xxxxxl = '4rem'

export const spacing: Record<string, CSSLength> = {
	none,
	xxs,
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
	xxxl,
	xxxxl,
	xxxxxl,
}

type GetSpacingValue = <T>(
	theme: T & {
		spacing?: BaseTheme
		space?: BaseTheme
	},
	spacingKey: keyof Spacing | keyof SpacingOptions
) => Maybe<CSSLength>

export const getSpacingValue: GetSpacingValue = (theme, spacingKey) => {
	const maybeSpaceingOrDefault = theme.space ?? theme.spacing ?? spacing

	const safeSpacings = fromEntries(
		Object.entries(maybeSpaceingOrDefault).map(([spaceKey, value]) => [
			spaceKey,
			typeof value === 'number' ? `${value}px` : value,
		])
	)

	const spacingValue = safeSpacings[spacingKey]

	const isCSSLength = checkIsCSSLength(spacingValue)

	return isCSSLength ? spacingValue : undefined
}
