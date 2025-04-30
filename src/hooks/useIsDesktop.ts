import { useBreakPoint } from "./useBreakPoint"

export function useIsDesktop(breakpoint = 1024) {
	return useBreakPoint(breakpoint)
}
