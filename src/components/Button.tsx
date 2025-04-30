import { ReactNode } from "react"
import { cn } from "../lib/utils"

type ButtonProps = {
	onClick?: () => void
	className?: string
	children: ReactNode
}

export default function Button({ onClick, className, children }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"bg-primary text-primary-foreground font-proxima-nova outline-foreground w-fit cursor-pointer rounded-full px-6 py-5 text-lg font-bold transition-all hover:scale-105",
				className,
			)}
		>
			{children}
		</button>
	)
}
