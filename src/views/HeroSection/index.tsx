import Button from "../../components/Button"
import Navbar from "./Navbar"
import catHeroSection from "../../../public/images/cat-hero-section.png"

export default function HeroSection() {
	return (
		<section className="flex h-screen w-full flex-col overflow-hidden sm:py-5">
			<Navbar />
			<div className="flex h-full w-full flex-col items-center gap-6 px-7 text-center lg:flex-row lg:justify-center lg:px-12 lg:pb-20 lg:text-left">
				<div className="flex flex-col items-center gap-6 lg:w-1/2 lg:items-start lg:pl-16">
					<h1 className="font-nohemi xs:text-4xl text-4xl font-medium lg:text-6xl">
						Bienvenue chez Café Neko
					</h1>
					<h2 className="font-nohemi xs:text-xl text-lg font-medium">
						L'endroit où le café rencontre les ronronnements
					</h2>
					<p>
						Bienvenue dans notre univers où chaque tasse de café est accompagnée
						d'une dose d'amour félin.
					</p>
					<Button>Nous contacter</Button>
				</div>
				<div className="flex h-full max-h-115 w-full justify-center lg:w-2/3">
					<img
						src={catHeroSection}
						alt="cat-hero-section"
						className="object-contain px-5"
					/>
				</div>
			</div>
		</section>
	)
}
