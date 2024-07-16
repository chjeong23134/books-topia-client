import Board from "./board"
//
//


export const metadata = {
	title: "도서 상세",
	description: "북스토피아 도서 평론 및 공유 서비스"
}


interface ParamType {
	readonly id: number
}
//
//
//

export default function BookDetail({ params }: { params: ParamType }) {
	return (
		<div>
			<Board id={params.id} />
		</div>
	)
}
