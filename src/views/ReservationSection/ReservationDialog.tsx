import Button from "../../components/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"

type ReservationDialogProps = {
	open: boolean
	onClose: () => void
}

export default function ReservationDialog({
	open,
	onClose,
}: ReservationDialogProps) {
	return (
		<Dialog
			onClose={onClose}
			open={open}
			slotProps={{
				paper: {
					sx: {
						backgroundColor: "#f3f0ea",
						borderRadius: "10px",
					},
				},
			}}
		>
			<DialogTitle>Réservation envoyée !</DialogTitle>
			<DialogContent>
				Votre demande de réservation a été envoyée avec succès. Nous reviendrons
				vers vous dans les plus brefs délais.
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} className="px-4 py-2 text-base font-medium">
					Fermer
				</Button>
			</DialogActions>
		</Dialog>
	)
}
