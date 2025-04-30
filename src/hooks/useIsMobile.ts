import { useBreakPoint } from "./useBreakPoint"

export function useIsMobile(breakpoint = 360) {
	return useBreakPoint(breakpoint)
}
