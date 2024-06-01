import styles from "./nav.module.scss";
//

import Image from "next/image";

import logo from "@/images/logo.png";
//
//

export default function Nav() {
	return (
		<div className={styles.nav}>
			<div className={styles.menuWrapper}>
				<div className={styles.logo}>
					<Image src={logo}
						height={40}
						width={200}
						alt="SVG" />

				</div>
			</div>
		</div>
	);
}