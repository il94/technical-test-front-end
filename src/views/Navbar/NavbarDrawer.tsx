import { Drawer } from "@mui/material"
import { useCallback } from "react"
import { ReactNode } from "react"
import { cn } from "../../lib/utils"
import Button from "../../components/Button"
import CloseIcon from "@mui/icons-material/Close"
import sections from "./sections"

type NavbarDrawerButtonProps = {
	section: (typeof sections)[number]
	onClick?: () => void
	className?: string
	children: ReactNode
}

function NavbarDrawerButton({
	section,
	onClick,
	className,
	children,
}: NavbarDrawerButtonProps) {
	const element = document.getElementById(section.id)

	const handleClick = useCallback(() => {
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
			onClick?.()
		}
	}, [onClick, element])

	return (
		<button
			onClick={handleClick}
			className={cn(
				"font-proxima-nova h-12 w-54 cursor-pointer p-1 px-6 text-right text-lg",
				className,
			)}
		>
			{children}
		</button>
	)
}

type NavbarDrawerProps = {
	open: boolean
	onClose: () => void
}

export default function NavbarDrawer({ open, onClose }: NavbarDrawerProps) {
	return (
		<Drawer
			open={open}
			onClose={onClose}
			anchor="right"
			slotProps={{
				paper: {
					sx: {
						backgroundColor: "#f3f0ea",
					},
				},
			}}
		>
			<div className="flex justify-end">
				<Button onClick={onClose} className="bg-transparent p-4 pb-0">
					<CloseIcon className="text-foreground" />
				</Button>
			</div>
			{sections.map((section) => (
				<NavbarDrawerButton
					key={section.id}
					onClick={onClose}
					section={section}
					className={section.id === "reservation" ? "text-primary" : ""}
				>
					{section.label}
				</NavbarDrawerButton>
			))}
		</Drawer>
	)
}
