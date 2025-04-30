import { useBreakPoint } from "./useBreakPoint"

export function useIsTablet(breakpoint = 640) {
	return useBreakPoint(breakpoint)
}
