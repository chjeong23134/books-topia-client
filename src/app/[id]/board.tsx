"use client"

import styles from "./board.module.scss";
//

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";

import { jwtState } from "@/consts/atom";
import { BookType, detail } from "@/apis/aladinApi";
//
//

interface PropType {
	readonly id: number;
}
//
//
//

export default function Board(props: PropType) {
	const jwt = useRecoilValue(jwtState);

	const [book, setBook] = useState<BookType | null>(null);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		detail(jwt, props.id).then(res => {
			if (res.item) {
				setBook(res.item[0]);
			}
		})

		setLoading(false);
	}, []);

	return (
		<div className={styles.detail}>
			<div className={styles.detailWrapper}>
				{!loading && book !== null && (
					<div className={styles.detailBook}>
						<Image src={book.cover} alt="book image" height={600} width={450} />

						<div className={styles.bookInfo}>
							<div className={styles.title}>
								{book.title}
							</div>

							<div className={styles.author}>
								{book.author}
							</div>

							<div style={{display: "flex", flexDirection: "row", color: "#74747d"}}>
								<div className={styles.publisher}>
									{book.publisher}
								</div>
								·
								<div className={styles.pubDate}>
									{book.pubDate}
								</div>
							</div>

							<div className={styles.description}>
								{book.description}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

/*
			"title": "지도 위 삼국유사 - 고전에서 읽는 우리 역사 80장면",
			"author": "일연, 표정옥 (지은이)",
			"pubDate": "2024-07-01",
			"description": "《삼국유사》는 유명하지만 제대로 읽은 사람은 그다지 많지 않다. 대부분의 독자는 가장 잘 알려진 이야기인 〈왕력편〉과 〈기이편〉의 판타지 소설 같은 일부만 기억한다. 이 책에서는 《삼국유사》를 제대로 이해하기 위해 세 단계로 나눠서 이야기를 풀어낸다.",
			"isbn13": "9791186222577",
			"priceStandard": 18500,
			"cover": "https://image.aladin.co.kr/product/34179/3/coversum/k782931211_1.jpg",
			"publisher": "이케이북",
			"adult": false
*/