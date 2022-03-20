type NumberTuple = [number, number]

/* Based on Foundations Break Points */
const smallOnly = 639
const mediumOnly: NumberTuple = [640, 1023]
const largeOnly: NumberTuple = [1024, 1199]
const xlargeOnly: NumberTuple = [1200, 1439]

/* TODO: Share with sizing.ts */
const medium = 1023
const large = 1199
const xlarge = 1439
const xxlarge = 1920

export interface Breakpoints {
	smallOnly: number
	mediumOnly: NumberTuple
	largeOnly: NumberTuple
	xlargeOnly: NumberTuple
	medium: number
	large: number
	xlarge: number
	xxlarge: number
}

export type BreakpointTypes = keyof Breakpoints

export const breakPoints: Breakpoints = {
	smallOnly,
	mediumOnly,
	largeOnly,
	xlargeOnly,
	medium,
	large,
	xlarge,
	xxlarge,
}

type MergeBreakpoints = (breakPoints: Record<string, unknown>) => Breakpoints
export const mergeBreakpoints: MergeBreakpoints = (newBreakPoints = {}) => ({
	...breakPoints,
	...newBreakPoints,
})
