import Board from "./board";
//
//

export const metadata = {
	title: "검색",
	description: "북스토피아 도서 평론 및 공유 서비스"
}

interface ParamType {
	readonly keyword: string
}

//
//
//

export default function Search({ params }: { params: ParamType }) {
	return (
		<div>
			<Board keyword={decodeURIComponent(params.keyword)} />
		</div>
	)
}
