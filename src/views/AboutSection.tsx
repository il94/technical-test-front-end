import imageAboutUs from "/images/image-about-us.png"

export default function AboutSection() {
	return (
		<section
			id="about"
			className="bg-background-secondary flex w-full flex-col items-center justify-center gap-8 px-7 py-20 lg:flex-row-reverse lg:justify-end lg:gap-24 lg:px-20"
		>
			<div className="flex h-full flex-col gap-8 lg:w-4/7 lg:items-start lg:gap-14">
				<h2 className="font-nohemi text-center text-4xl font-semibold lg:text-5xl">
					Qui sommes-nous ?
				</h2>
				<div className="h-full space-y-8 leading-[180%] lg:space-y-14 lg:text-xl">
					<p>
						Bienvenue chez Café Neko, l'endroit où le café et les chats se
						rencontrent pour créer une expérience unique en son genre.
					</p>
					<p>
						Chez Café Neko, nous sommes passionnés par deux choses : le café de
						qualité et le bien-être des chats. Fondé par des amoureux des félins
						et des aficionados du café, Café Neko est bien plus qu'un simple
						café. C'est un refuge pour les amoureux des chats, un havre de paix
						où l'on peut savourer une bonne tasse de café tout en câlinant nos
						adorables résidents à quatre pattes.
					</p>
				</div>
			</div>

			<img src={imageAboutUs} alt="image-about-us" />
		</section>
	)
}
