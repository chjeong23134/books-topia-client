"use client"

import styles from "./avata.module.scss";
//

import { useRecoilValue } from "recoil";

import { userState } from "@/consts/atom";
//
//

export default function Avata() {
	const user = useRecoilValue(userState);

	return (
		<div className={styles.avata}>
			<span className={styles.userName}>{user.name}</span>
		</div>
	);
}