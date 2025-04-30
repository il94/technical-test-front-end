import { FormEvent, useCallback } from "react"
import Button from "../components/Button"
import { cn } from "../lib/utils"
type ReservationFieldProps = {
	name: string
	label: string
	type?: string
	className?: string
}

function ReservationField({
	name,
	label,
	type = "text",
	className,
}: ReservationFieldProps) {
	return (
		<div className="w-full">
			<label htmlFor={name} className="text-foreground">
				{label}*
			</label>
			<input
				name={name}
				type={type}
				required
				className={cn("border-foreground w-full border-b-2", className)}
			/>
		</div>
	)
}

export default function ReservationSection() {
	// TODO: Add form validation
	const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// const formData = new FormData(event.target as HTMLFormElement)
	}, [])

	return (
		<section
			id="reservation"
			className="bg-background-secondary flex w-full flex-col items-center justify-center gap-8 px-7 py-20 lg:flex-row lg:gap-20 lg:px-20"
		>
			<div className="flex h-full flex-col gap-8 lg:w-6/7 lg:items-start lg:gap-14">
				<h2 className="font-nohemi text-center text-4xl font-semibold lg:text-5xl">
					Réservez votre table !
				</h2>
				<p className="h-full leading-[180%] lg:text-xl">
					Réservez dès maintenant votre table pour une expérience caféinée
					inoubliable en compagnie de nos adorables chats. Plongez dans
					l'ambiance apaisante de Café Chatouille et laissez-vous séduire par
					nos délices caféinés et nos compagnons félins. Réservez dès
					aujourd'hui et préparez-vous à vivre un moment magique de détente et
					de plaisir.
				</p>
			</div>
			<form
				onSubmit={onSubmit}
				className="flex w-full flex-col items-end gap-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8"
			>
				<ReservationField name="name" label="Nom" />
				<ReservationField name="firstname" label="Prénom" />
				<ReservationField
					name="tel"
					label="N° de téléphone"
					className="w-full"
				/>
				<ReservationField
					name="email"
					label="Adresse email"
					type="email"
					className="w-full"
				/>
				<div className="flex w-full justify-end lg:col-span-2">
					<Button>Réserver</Button>
				</div>
			</form>
		</section>
	)
}
