import { FormEvent, useCallback, useState } from "react"
import Button from "../../components/Button"
import { z } from "zod"
import ReservationDialog from "./ReservationDialog"
import ReservationField from "./ReservationField"

const reservationSchema = z.object({
	name: z.string().min(1, { message: "Veuillez entrer votre nom" }),
	firstname: z.string().min(1, { message: "Veuillez entrer votre prénom" }),
	tel: z
		.string()
		.min(1, { message: "Veuillez entrer votre numéro de téléphone" })
		.min(10, { message: "Veuillez entrer un numéro de téléphone valide" })
		.refine((tel) => /^\+?[0-9\s\-()]+$/.test(tel), {
			message: "Veuillez entrer un numéro de téléphone valide",
		}),
	email: z
		.string()
		.email({ message: "Veuillez entrer une adresse email valide" }),
})

export default function ReservationSection() {
	const [error, setError] = useState("")
	const [isOpenDialog, setIsOpenDialog] = useState(false)

	const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.target as HTMLFormElement)

		const { name, firstname, tel, email } = Object.fromEntries(formData)

		const result = reservationSchema.safeParse({ name, firstname, tel, email })

		if (!result.success) {
			setError(result.error.errors[0].message)
			return
		} else {
			setError("")
			setIsOpenDialog(true)
		}
	}, [])

	return (
		<section
			id="reservation"
			className="bg-background-secondary flex w-full flex-col items-center justify-center gap-8 px-7 py-20 lg:flex-row lg:gap-20 lg:px-20"
		>
			<div className="xs:max-w-11/12 flex h-full flex-col gap-8 lg:w-6/7 lg:items-start lg:gap-14">
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
				onSubmit={handleSubmit}
				className="xs:max-w-11/12 flex w-full flex-col items-end gap-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8"
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
					className="w-full"
				/>
				<div className="flex w-full items-center justify-between lg:col-span-2">
					<p className="text-destructive text-center">{error}</p>
					<Button>Réserver</Button>
				</div>
			</form>
			<ReservationDialog
				open={isOpenDialog}
				onClose={() => setIsOpenDialog(false)}
			/>
		</section>
	)
}
