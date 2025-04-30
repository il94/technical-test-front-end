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
	sectionId: "about" | "values" | "reservation"
	children: ReactNode
	className?: string
}

function NavbarButton({ sectionId, className, children }: NavbarButtonProps) {
	const element = document.getElementById(sectionId)

	return (
		<button
			onClick={() => element && element.scrollIntoView({ behavior: "smooth" })}
			className={cn(
				"font-proxima-nova xs:text-sm cursor-pointer p-1 md:text-lg lg:text-xl",
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
		<nav className="flex h-24 shrink-0 items-center justify-between overflow-hidden p-4 sm:px-11">
			<Logo />
			{isTablet ? (
				<div className="flex gap-10">
					<NavbarButton sectionId="about">Qui sommes-nous ?</NavbarButton>
					<NavbarButton sectionId="values">Nos valeurs</NavbarButton>
					<NavbarButton sectionId="reservation" className="text-primary">
						Réservez !
					</NavbarButton>
				</div>
			) : (
				<button>
					<MenuIcon />
				</button>
			)}
		</nav>
	)
}
