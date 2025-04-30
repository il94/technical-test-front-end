import { ReactNode } from "react"
import { useIsTablet } from "../../hooks/useIsTablet"
import Logo from "./Logo"
import MenuIcon from "@mui/icons-material/Menu"
import { cn } from "../../lib/utils"

/*
	TODO :
	SideBar
*/

type NavbarButtonProps = {
	children: ReactNode
	className?: string
}

function NavbarButton({ className, children }: NavbarButtonProps) {
	return (
		<button
			className={cn(
				"font-proxima-nova cursor-pointer p-1 text-sm md:text-lg lg:text-xl",
				className,
			)}
		>
			{children}
		</button>
	)
}

export default function Navbar() {
	const isTablet = useIsTablet()

	return (
		<nav className="flex h-24 shrink-0 items-center justify-between overflow-hidden p-3 sm:px-11">
			<Logo />
			{isTablet ? (
				<div className="flex gap-10">
					<NavbarButton>Qui sommes-nous ?</NavbarButton>
					<NavbarButton>Nos valeurs</NavbarButton>
					<NavbarButton className="text-primary">Réservez !</NavbarButton>
				</div>
			) : (
				<button>
					<MenuIcon />
				</button>
			)}
		</nav>
	)
}
