"use client"

import styles from "./board.module.scss";
//

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";
import moment from "moment";

import starEmptyImage from "@/images/star_empty.png";
import starYellowImage from "@/images/star_yellow.png";
import likeEmptyImage from "@/images/like_empty.png";

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
					<>
						<div className={styles.detailBook}>
							<Image src={book.cover} alt="book image" height={480} width={360} />

							<div className={styles.bookInfo}>
								<div className={styles.title}>
									{book.title}
								</div>

								<div className={styles.author}>
									{book.author}
								</div>

								<div style={{ margin: "0 0 30px 20px", display: "flex", flexDirection: "row" }}>
									<div className={styles.publisher}>
										{book.publisher}
									</div>
									·
									<div className={styles.pubDate}>
										{moment(book.pubDate).format('YYYY년 MM월 DD일')}
									</div>
								</div>

								<div className={styles.description}>
									{book.description}
								</div>

								<div className={styles.line} />

								<div className={styles.reviewMenuWrapper}>
									<div className={styles.score}>
										<Image src={starYellowImage} alt="star yellow image" height={40} width={40} />
										<Image src={starYellowImage} alt="star yellow image" height={40} width={40} />
										<Image src={starYellowImage} alt="star yellow image" height={40} width={40} />
										<Image src={starYellowImage} alt="star yellow image" height={40} width={40} />
										<Image src={starEmptyImage} alt="star empty image" height={40} width={40} />
									</div>

									<div className={styles.button}>
										<Image src={likeEmptyImage} alt="like empty image" height={40} width={40} />
										코멘트
									</div>
								</div>
							</div>
						</div>

						<div className={styles.myReviewWrapper}>
							<div className={styles.avata}>
								푸기
							</div>

							<div className={styles.content}>
								의미를 부여하려 애쓸수록 상상력은 배제된다.
								<br />
								그래서일까 그들의 시작과 끝은 내 상상과는 달랐다.
							</div>

							<div className={styles.menu}>
								<div className={styles.button}>
									수정
								</div>

								<div className={styles.button}>
									삭제
								</div>
							</div>
						</div>

						<div className={styles.reviewListWrapper}>
							
						</div>
					</>
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