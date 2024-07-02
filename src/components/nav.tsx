"use client"

import styles from "./nav.module.scss";
//

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import logo from "@/images/logo.png";
import Avata from "./avata";

import { userState } from "@/consts/atom";
//
//

export default function Nav() {
	const user = useRecoilValue(userState);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className={styles.nav}>
			<div className={styles.navWrapper}>
				<div className={styles.menuWrapper}>
					<div className={styles.logo}>
						<Image
							src={logo}
							height={40}
							width={200}
							alt="SVG"
						/>
					</div>

					<div className={styles.button}>도서</div>

					<div className={styles.button}>커뮤니티</div>
				</div>

				<div className={styles.menuWrapper}>
					<input
						className={styles.input}
						placeholder="도서, 유저, 커뮤니티를 검색하세요"
					/>
					{isClient && (
						user.id ? (
							<div>
								<Avata />
							</div>
						) : (
							<>
								<div className={styles.button}>로그인</div>
								<div className={styles.button}>회원가입</div>
							</>
						)
					)}
				</div>
			</div>
		</div>
	);
}