import { ReactNode } from "react"
import { cn } from "../lib/utils"
type ButtonProps = {
	children: ReactNode
	className?: string
}

export default function Button({ children, className }: ButtonProps) {
	return (
		<button
			className={cn(
				"bg-primary text-primary-foreground font-proxima-nova w-fit cursor-pointer rounded-full px-6 py-5 text-lg font-bold transition-all hover:scale-105",
				className,
			)}
		>
			{children}
		</button>
	)
}
