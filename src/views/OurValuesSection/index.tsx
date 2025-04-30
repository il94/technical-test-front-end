import coffeIcon from "../../../public/icons/coffee-icon.svg"
import catIcon from "../../../public/icons/cat-icon.svg"
import plantIcon from "../../../public/icons/plant-icon.svg"
import Card from "./Card"

export default function OurValuesSection() {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-8 px-7 py-20">
			<h2 className="font-nohemi text-primary text-center text-4xl font-semibold">
				Nos valeurs
			</h2>
			<Card
				src={coffeIcon}
				alt="coffe-icon"
				title="Passioné de Café"
				description="Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse."
			/>
			<Card
				src={catIcon}
				alt="cat-icon"
				title="Bien-être des Chats"
				description="Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent."
			/>
			<Card
				src={plantIcon}
				alt="plant-icon"
				title="Engagement Environnemental"
				description="Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets."
			/>
		</section>
	)
}
