type CardValueProps = {
	src: string
	alt: string
	title: string
	description: string
}

export default function CardValue({
	src,
	alt,
	title,
	description,
}: CardValueProps) {
	return (
		<div className="bg-card flex w-full max-w-160 flex-col items-center gap-5 rounded-lg px-4 py-16 text-center drop-shadow-lg drop-shadow-[#0000001A]">
			<img src={src} alt={alt} />
			<h2 className="font-nohemi text-center text-2xl font-bold">{title}</h2>
			<p className="text-lg">{description}</p>
		</div>
	)
}
