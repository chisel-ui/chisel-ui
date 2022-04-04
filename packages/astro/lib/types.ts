import type { Breakpoint, CSSLength, Gap, Theme } from '@chisel-ui/core'

export interface ComponentProps<T extends Theme> {
	as?: string
	theme?: T
	id?: string
	class?: string
	style?: string
	[key: string]: any
}

export interface LayoutProps<T extends Theme> extends ComponentProps<T> {
	gap?: Gap<T['gaps']>
	inlineGap?: Gap<T['gaps']>
	blockGap?: Gap<T['gaps']>
}

export interface StackProps<T extends Theme> extends LayoutProps<T> {}

type Fraction = `${number}/${number}` | `${number} / ${number}`

export interface SplitProps<T extends Theme> extends LayoutProps<T> {
	fraction?: Fraction | 'auto-start' | 'auto-end'
	switchAt?: Breakpoint<T['breakpoints']>
}

type Justification = 'start' | 'end' | 'center' | 'between' | 'around'
type Alignment = 'start' | 'end' | 'center' | 'stretch'

export interface InlineClusterProps<T extends Theme> extends LayoutProps<T> {
	justify?: Justification
	align?: Alignment
}

type Stretch = 'all' | 'start' | 'end' | number

export interface InlineProps<T extends Theme> extends InlineClusterProps<T> {
	stretch?: Stretch
	switchAt?: Breakpoint<T['breakpoints']>
}

export interface GridProps<T extends Theme> extends LayoutProps<T> {
	minItemWidth?: number | CSSLength | Breakpoint<T['breakpoints']>
}

export interface ColumnsProps<T extends Theme> extends LayoutProps<T> {
	columns?: number
	dense?: boolean
	switchAt?: Breakpoint<T['breakpoints']>
}

export interface ColumnDropProps<T extends Theme> extends LayoutProps<T> {
	basis?: Breakpoint<T['breakpoints']>
	noStretchedColumns?: boolean
}

export interface ColumnProps<T extends Theme> extends LayoutProps<T> {
	span?: number
	offsetStart?: number
	offsetEnd?: number
}

export interface CenterProps<T extends Theme> extends ComponentProps<T> {
	inline?: boolean
	block?: boolean
	maxWidth?: Breakpoint<T['breakpoints']>
	centerText?: boolean
	centerContent?: boolean
}

export interface CoverProps<T extends Theme> extends LayoutProps<T> {
	minHeight?: Breakpoint<T['breakpoints']>
	stretchContent?: boolean
}

export type Ratio = Fraction | [number, number]

export interface FrameProps<T extends Theme> extends ComponentProps<T> {
	ratio?: Ratio
	position?: string
}

export interface PaddingObject<T extends Theme> {
	left?: Gap<T['gaps']>
	right?: Gap<T['gaps']>
	top?: Gap<T['gaps']>
	bottom?: Gap<T['gaps']>
	inlineStart?: Gap<T['gaps']>
	inlineEnd?: Gap<T['gaps']>
	blockStart?: Gap<T['gaps']>
	blockEnd?: Gap<T['gaps']>
}

export type Padding<T extends Theme> =
	| Gap<T['gaps']>
	| Partial<PaddingObject<T>>
	| [Gap<T['gaps']>]
	| [Gap<T['gaps']>, Gap<T['gaps']>]
	| [Gap<T['gaps']>, Gap<T['gaps']>, Gap<T['gaps']>]
	| [Gap<T['gaps']>, Gap<T['gaps']>, Gap<T['gaps']>, Gap<T['gaps']>]

export interface PadBox<T extends Theme> extends ComponentProps<T> {
	padding?: Padding<T>
}

export interface AppProps<T extends Theme> extends LayoutProps<T> {
	maxWidth?: Breakpoint<T['breakpoints']>
}
