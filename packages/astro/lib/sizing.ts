import { fromEntries } from './utils'
import type { CSSLength } from './css'
import type { BaseTheme, DefaultTheme } from './themes'
import type { Maybe } from './utils'

export interface Sizes {
	xxsmall: CSSLength
	xsmall: CSSLength
	small: CSSLength
	medium: CSSLength
	large: CSSLength
	xlarge: CSSLength
	xxlarge: CSSLength
}

type ThemeOrDefaultSizes<T> = T extends {
	sizes: BaseTheme
}
	? T['sizes']
	: Sizes

export type SizeOptions = ThemeOrDefaultSizes<DefaultTheme>

const xxsmall = 159
const xsmall = 319
const small = 639
const medium = 1023
const large = 1199
const xlarge = 1439
const xxlarge = 1920

export const sizes: Sizes = {
	xxsmall: `${xxsmall}px`,
	xsmall: `${xsmall}px`,
	small: `${small}px`,
	medium: `${medium}px`,
	large: `${large}px`,
	xlarge: `${xlarge}px`,
	xxlarge: `${xxlarge}px`,
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
