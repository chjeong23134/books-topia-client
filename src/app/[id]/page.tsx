
export default function BookDetail({params}: {params: {id: number}}) {
	return (
		<div>
			북넘버: {params.id}
		</div>
	)
}
