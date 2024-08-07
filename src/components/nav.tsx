"use client"

import styles from "./nav.module.scss";
//

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import logo from "@/images/logo.png";
import Avata from "./avata";

import { jwtState, userState } from "@/consts/atom";
import { validate } from "@/apis/authApi";
//
//

export default function Nav() {
	const router = useRouter();

	const resetUser = useResetRecoilState(userState);
    const resetJwt = useResetRecoilState(jwtState);

	const user = useRecoilValue(userState);
	const jwt = useRecoilValue(jwtState);

	const [keyword, setKeyword] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(true);
	//

	useEffect(() => {
		if(Object.keys(user).length === 0 || !jwt) {
			localStorage.removeItem("user");
			localStorage.removeItem("jwt");

			resetUser();
			resetJwt();

			return setLoading(false);
		}

		validate(jwt, user.id).catch(() => {
			localStorage.removeItem("user");
			localStorage.removeItem("jwt");

			resetUser();
			resetJwt();
		});

		setLoading(false);
	}, []);

	function moveSignUpClickHandler() {
		router.push("/signup");
	}

	function moveSignInClickHandler() {
		router.push("/signin");
	}

	function moveSearchKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
		if(e.key === "Enter") {
			router.push("/search/" + keyword);
		}
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

					<div className={styles.button}>커뮤니티</div>
				</div>

				<div className={styles.menuWrapper}>
					<input
						onKeyDown={moveSearchKeyDownHandler}
						onChange={(e) => setKeyword(e.target.value)}
						className={styles.input}
						placeholder="도서, 유저, 커뮤니티를 검색하세요"
					/>
					
					{!loading && (
						user.id ? (
							<div>
								<Avata name="푸 기" />
							</div>
						) : (
							<>
								<div className={styles.button} onClick={moveSignInClickHandler}>로그인</div>
								<div className={styles.button} onClick={moveSignUpClickHandler}>회원가입</div>
							</>
						)
					)}
				</div>
			</div>
		</div>
	);
}