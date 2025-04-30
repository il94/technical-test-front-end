import { useEffect, useState } from "react"

export function useBreakPoint(breakpoint: number) {
	const [isBreakPoint, setIsBreakPoint] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`)

		const handleChange = (event: MediaQueryListEvent) => {
			setIsBreakPoint(event.matches)
		}

		setIsBreakPoint(mediaQuery.matches)

		mediaQuery.addEventListener("change", handleChange)

		return () => {
			mediaQuery.removeEventListener("change", handleChange)
		}
	}, [breakpoint])

	return isBreakPoint
}
