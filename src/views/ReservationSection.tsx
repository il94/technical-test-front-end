import { FormEvent, useCallback } from "react"
import Button from "../components/Button"

type ReservationFieldProps = {
	name: string
	label: string
	type?: string
}

function ReservationField({
	name,
	label,
	type = "text",
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
				className="border-foreground w-full border-b-2"
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
		<section className="bg-background-secondary flex w-full flex-col items-center justify-center gap-12 px-7 py-20">
			<div className="flex flex-col gap-8">
				<h2 className="font-nohemi text-center text-4xl font-semibold">
					Réservez votre table !
				</h2>
				<p className="leading-[180%]">
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
				className="flex w-full flex-col items-end gap-6"
			>
				<ReservationField name="name" label="Nom" />
				<ReservationField name="firstname" label="Prénom" />
				<ReservationField name="tel" label="N° de téléphone" />
				<ReservationField name="email" label="Adresse email" type="email" />
				<Button>Réserver</Button>
			</form>
		</section>
	)
}
