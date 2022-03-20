const counters = new Map<string, number>()

export function uid(prefix = '') {
	if (!counters.has(prefix)) {
		counters.set(prefix, 0)
	}

	const counter = counters.get(prefix) ?? 0

	counters.set(prefix, counter + 1)

	return ['chisel', prefix, counter + 1].filter(Boolean).join('-')
}
