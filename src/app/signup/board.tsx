"use client"

import styles from "./board.module.scss";
//

import Image from "next/image";
import { signup } from "@/apis/userApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

import logo from "@/images/logo.png"
//
//

export default function Board() {
	const router = useRouter();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordVerify, setPasswordVerify] = useState<string>("");
	//

	function signupHandler() {
		signup(email, password, name).then((res) => { console.log(res); router. push("/"); });
	}
	//
	//

	return (
		<div className={styles.signUp}>
			<div className={styles.signUpWrapper}>
				<div className={styles.infoWrapper}>
					<div className={styles.logo}>
						<Image src={logo}
							height={80}
							width={200}
							alt="logo" />
					</div>

					<h2>북스토피아에 오신것을 환영합니다.</h2>
					<p>도서 평론 및 공유하는 플랫폼입니다.</p>
				</div>

				<div className={styles.labelWrapper}>
					<label>닉네임</label>
					<input onChange={(e) => setName(e.target.value)} placeholder="한글, 알파벳, 숫자를 조합하여 2~20자 사이로 입력해주세요." />
				</div>

				<div className={styles.labelWrapper}>
					<label>이메일</label>
					<input onChange={(e) => setEmail(e.target.value)} placeholder="books@topia.com" />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호</label>
					<input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="알파벳, 숫자를 조합하여 6자리 이상을 입력해주세요." />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호 확인</label>
					<input onChange={(e) => setPasswordVerify(e.target.value)} type='password' placeholder="알파벳, 숫자를 조합하여 6자리 이상을 입력해주세요." />
				</div>

				<div className={styles.buttonWrapper}>
					<button onClick={signupHandler} className={styles.signButton}>회원가입</button>
				</div>

				<div className={styles.buttonWrapper}>
					<p>이미 회원이 이신가요?</p>
					<a href="signin">로그인</a>
				</div>
			</div>
		</div>
	);
}