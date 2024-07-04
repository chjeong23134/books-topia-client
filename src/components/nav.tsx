"use client"

import styles from "./nav.module.scss";
//

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import logo from "@/images/logo.png";
import Avata from "./avata";

import { jwtState, userState } from "@/consts/atom";
import { validate } from "@/apis/userApi";
//
//

export default function Nav() {
	const router = useRouter();

	const resetUser = useResetRecoilState(userState);
    const resetJwt = useResetRecoilState(jwtState);

	const user = useRecoilValue(userState);
	const jwt = useRecoilValue(jwtState);

	const [isClient, setIsClient] = useState(false);
	//

	useEffect(() => {
		if(Object.keys(user).length === 0 || !jwt) {
			localStorage.removeItem("user");
			localStorage.removeItem("jwt");

			resetUser();
			resetJwt();

			return setIsClient(true);
		}

		validate(jwt, user.id).catch(() => {
			localStorage.removeItem("user");
			localStorage.removeItem("jwt");

			resetUser();
			resetJwt();
		});

		setIsClient(true);
	}, []);

	function moveSignUpHandler() {
		router.push("/signup");
	}

	function moveSignInHandler() {
		router.push("/signin");
	}

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
								<Avata name="푸 기" />
							</div>
						) : (
							<>
								<div className={styles.button} onClick={moveSignInHandler}>로그인</div>
								<div className={styles.button} onClick={moveSignUpHandler}>회원가입</div>
							</>
						)
					)}
				</div>
			</div>
		</div>
	);
}