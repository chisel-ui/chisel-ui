import { fromEntries } from './utils'
import type { CSSLength } from './css'
import type { BaseTheme, DefaultTheme } from './themes'
import type { Maybe } from './utils'

export interface Sizes {
	xs: CSSLength
	sm: CSSLength
	md: CSSLength
	lg: CSSLength
	xl: CSSLength
	'2xl': CSSLength
	'3xl': CSSLength
}

type ThemeOrDefaultSizes<T> = T extends {
	sizes: BaseTheme
}
	? T['sizes']
	: Sizes

export type SizeOptions = ThemeOrDefaultSizes<DefaultTheme>

export const sizes: Sizes = {
	xs: '360px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
	'3xl': '1920px'
}

type GetSizeValue = <T>(
	theme: T & {
		sizes?: BaseTheme
	},
	sizingKey: unknown
) => Maybe<CSSLength>

export const getSizeValue: GetSizeValue = (theme, sizeKey) => {
	if (typeof sizeKey === 'number' || sizeKey === undefined) {
		return undefined
	}

	const maybeSizesOrDefault = theme.sizes ?? sizes

	const safeSizes = fromEntries<CSSLength>(
		Object.entries(maybeSizesOrDefault).map(([sizeKey, value]) => [
			sizeKey,
			typeof value === 'number' ? `${value}px` : value,
		])
	)

	return safeSizes[sizeKey as string]
}
