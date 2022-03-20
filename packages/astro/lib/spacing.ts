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
	'2xl': CSSLength
	'3xl': CSSLength
	'4xl': CSSLength
}

type ThemeOrDefaultSpace<T> = T extends {
	space: BaseTheme
}
	? T['space']
	: T extends { spacing: BaseTheme }
	? T['spacing']
	: Spacing

export type SpacingOptions = ThemeOrDefaultSpace<DefaultTheme>

export const spacing: Record<string, CSSLength> = {
	none: '0px',
	xxs: '0.125rem',
	xs: '0.5rem',
	sm: '0.75rem',
	md: '1rem',
	lg: '1.25rem',
	xl: '1.75rem',
	'2xl': '2.25rem',
	'3xl': '3rem',
	'4xl': '4.5rem',
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
