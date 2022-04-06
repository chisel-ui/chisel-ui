import { defaultBreakpoints } from './breakpoints'
import { defaultGaps } from './gaps'
import type { Gaps } from './gaps'
import type { Breakpoints } from './breakpoints'

export interface Theme {
	gaps?: Gaps
	breakpoints?: Breakpoints
}

export const defualtTheme = {
	breakpoints: defaultBreakpoints,
	gaps: defaultGaps
}