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

				<div className={styles.button}>
					도서
				</div>

				<div className={styles.button}>
					커뮤니티
				</div>
			</div>

			<div className={styles.menuWrapper}>
				<input className={styles.input} />

				<div className={styles.button}>
					로그인
				</div>

				<div className={styles.button}>
					회원가입
				</div>
			</div>
		</div>
	);
}