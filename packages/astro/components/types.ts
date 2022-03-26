import type {
    BaseTheme,
    CSSLength,
    Gutter,
    SizeOptions,
    Sizes
} from '..'

export type CSSSizeValue = number | CSSLength | SizeOptions

/** Core components */

export interface ComponentProps {
	as?: string
	theme?: BaseTheme
	class?: string
	style?: string
	[key: string]: any
}

export interface SpacerProps extends ComponentProps {
	gutter?: Gutter
}

/** Spacer components */

export interface ColumnProps extends ComponentProps {
    span?: number
    offsetStart?: number
    offsetEnd?: number
}

export type Basis = CSSLength | number | SizeOptions
export interface ColumnDropProps extends SpacerProps {
	basis?: Basis
	noStretchedColumns?: boolean
}

export interface ColumnsProps extends StackProps {
	columns?: number
	dense?: boolean
	switchAt?: number | string | keyof Sizes
}

export interface GridProps extends SpacerProps {
	minItemWidth?: CSSSizeValue
}

export interface InlineProps extends InlineClusterProps {
	stretch?: 'all' | 'start' | 'end' | number
	switchAt?: CSSLength | number
}

export interface InlineClusterProps extends SpacerProps {
	justify?: 'start' | 'end' | 'center'
	align?: 'start' | 'end' | 'center' | 'stretch'
}

export interface ReelProps extends SpacerProps {
	snapType?: 'none' | 'proximity' | 'mandatory'
}

export type Fraction =
	| 'auto-start'
	| 'auto-end'
	| '1/4'
	| '1/3'
	| '1/2'
	| '2/3'
	| '3/4'
export interface SplitProps extends StackProps {
	fraction?: Fraction
	switchAt?: number | string | keyof Sizes
}

export interface StackProps extends SpacerProps { }

/** Wrapper components */

export type BoundarySize = CSSSizeValue
export interface AppBoundaryProps extends ComponentProps {
    boundarySize?: BoundarySize
}

export interface CenterProps extends ComponentProps {
	maxWidth?: CSSSizeValue
	centerText?: boolean
	centerContent?: boolean
}

export interface CoverProps extends SpacerProps {
    minHeight?: CSSSizeValue
    stretchContent?: boolean
}

export type RatioString = `${number}/${number}` | `${number} / ${number}`
export type Ratio = [number, number] | RatioString
export interface FrameProps extends ComponentProps {
    ratio?: Ratio
    position?: string
}

export type PaddingValue = Gutter
export interface PadBoxProps extends ComponentProps {
    padding?: PaddingValue
}
