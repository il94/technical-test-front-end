import { cn } from "../../lib/utils"

type ReservationFieldProps = {
	name: string
	label: string
	className?: string
}

export default function ReservationField({
	name,
	label,
	className,
}: ReservationFieldProps) {
	return (
		<div className="w-full">
			<label htmlFor={name} className="text-foreground">
				{label}*
			</label>
			<input
				name={name}
				className={cn(
					"border-foreground outline-foreground/50 w-full border-b-2 transition-all hover:scale-102 focus:scale-102",
					className,
				)}
			/>
		</div>
	)
}
