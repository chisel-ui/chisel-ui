export type Maybe<T> = T | undefined

export function fromEntries<T>(
	entries: Array<[s: string, value: T]>
): Record<string, T> {
	return Object.fromEntries(entries.map(([key, value]) => [key, value]))
}
