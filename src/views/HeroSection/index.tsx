import Button from "../../components/Button"
import Navbar from "./Navbar"
import catHeroSection from "../../../public/images/cat-hero-section.png"

export default function HeroSection() {
	return (
		<section className="flex h-screen w-full flex-col sm:py-5">
			<Navbar />
			<div className="flex flex-col items-center gap-6 px-7 text-center">
				<h1 className="font-nohemi xs:text-4xl text-center text-2xl font-medium">
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
			<div className="flex h-full w-full justify-center">
				<img
					src={catHeroSection}
					alt="cat-hero-section"
					className="h-full object-contain px-5"
				/>
			</div>
		</section>
	)
}
