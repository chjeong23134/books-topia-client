import "./globals.scss";
//

import Nav from "@/components/nav";
import RecoilProvider from "./recoilProvider";
//
//

export const metadata = {
	title: {
		default: "북스토피아 - 도서 평론 및 공유 서비스 ",
		template: '%s | BooksTopia'
	},
	description: "북스토피아 도서 평론 및 공유 서비스",
	icons: {
		icon: '/icon.png',
	}
}
//
//
//

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	//
	//
	//
	//
	return (
		<html lang="kr">
			<body>
				<RecoilProvider>
					<div className="app">
						<Nav />

						{children}
					</div>
				</RecoilProvider>
			</body>
		</html>
	)
}