import { ReactNode, useCallback, useState } from "react"
import { useIsTablet } from "../../hooks/useIsTablet"
import Logo from "./Logo"
import MenuIcon from "@mui/icons-material/Menu"
import { cn } from "../../lib/utils"
import NavbarDrawer from "./NavbarDrawer"
import sections from "./sections"

type NavbarButtonProps = {
	section: (typeof sections)[number]
	onClick?: () => void
	className?: string
	children: ReactNode
}

function NavbarButton({ section, className, children }: NavbarButtonProps) {
	const element = document.getElementById(section.id)

	const handleClick = useCallback(() => {
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}, [element])

	return (
		<button
			onClick={handleClick}
			className={cn(
				"font-proxima-nova cursor-pointer p-1 text-base transition-all hover:scale-105 md:text-lg lg:text-xl",
				className,
			)}
		>
			{children}
		</button>
	)
}

export default function Navbar() {
	const isTablet = useIsTablet()
	const [isOpenDrawer, setIsOpenDrawer] = useState(false)

	const handleCloseDrawer = () => {
		setIsOpenDrawer(false)
	}

	return (
		<nav className="flex h-24 shrink-0 items-center justify-between overflow-hidden p-4 sm:px-11">
			<Logo />
			{isTablet ? (
				<div className="flex gap-10">
					{sections.map((section) => (
						<NavbarButton
							key={section.id}
							section={section}
							className={section.id === "reservation" ? "text-primary" : ""}
						>
							{section.label}
						</NavbarButton>
					))}
				</div>
			) : (
				<>
					<button onClick={() => setIsOpenDrawer(true)}>
						<MenuIcon />
					</button>
					<NavbarDrawer open={isOpenDrawer} onClose={handleCloseDrawer} />
				</>
			)}
		</nav>
	)
}
