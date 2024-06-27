"use client"

import styles from "./board.module.scss";
//

import Image from "next/image";

import logo from "@/images/logo.png"
//
//

export default function SignIn() {
	return (
		<div className={styles.signIn}>
			<div className={styles.signInWrapper}>
				<div className={styles.infoWrapper}>
					<div className={styles.logo}>
						<Image src={logo}
							height={80}
							width={400}
							alt="logo" />
					</div>

					<h2>북스토피아에 오신것을 환영합니다.</h2>
					<p>도서 평론 및 공유하는 플랫폼입니다.</p>
				</div>

				<div className={styles.labelWrapper}>
					<label>이메일</label>
					<input placeholder="moim@modumoa.com" />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호</label>
					<input type='password' placeholder="알파벳, 숫자를 조합하여 6자리 이상을 입력해주세요." />
				</div>
				<div className={styles.buttonWrapper}>
					<button className={styles.signButton}>로그인</button>
				</div>

				<div className={styles.buttonWrapper}>
					<p>아직 회원이 아니신가요?</p>
					<a href="signup">회원가입</a>
				</div>
			</div>
		</div>
	);
}