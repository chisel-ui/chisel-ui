import { checkIsCSSLength } from './css'
import { getSpacingValue } from './spacing'
import type { CSSLength } from './css'
import type { SpacingOptions } from './spacing'
import type { BaseTheme } from './themes'
import type { Maybe } from './utils'

export type Gutter = CSSLength | number | keyof SpacingOptions

export function getSafeGutter<T extends BaseTheme>(
	theme: T,
	gutter?: Gutter
): Maybe<CSSLength> {
	if (typeof gutter === 'number' && gutter > 0) {
		return `${gutter}px`
	}

	const isCSSLength = checkIsCSSLength(gutter as string)
	if (isCSSLength) {
		return gutter as CSSLength
	}

	return gutter !== undefined
		? getSpacingValue(theme, gutter as keyof SpacingOptions)
		: undefined
}

export function validateGutter<T extends { gutter?: Gutter }>(
	{ gutter }: T,
	propName: string
): void {
	if (gutter === undefined) {
		return
	}

	const isValid = typeof gutter === 'number' || typeof gutter === 'string'
	if (isValid) {
		return
	}

	console.error(`${propName} needs to be a number, CSSLength or SizesOptions`)
}
