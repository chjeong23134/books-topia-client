"use client"

import styles from "./avata.module.scss";
//

import { UserType } from "@/apis/userApi";
//
//

interface Props {
	// user: UserType %^& 서버 붙이면 유저정보를 직접 받도록 수정?
	name: string
}

export default function Avata(props: Props) {

	return (
		<div className={styles.avata}>
			<span className={styles.userName}>{props.name}</span>
		</div>
	);
}