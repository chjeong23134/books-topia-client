"use client"

import styles from "./board.module.scss";
//

import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import starEmptyImage from "@/images/star_empty.png";
import starYellowImage from "@/images/star_yellow.png";
import { BookType, search } from "@/apis/aladinApi";
import { jwtState } from "@/consts/atom";
//
//

interface PropType {
	readonly keyword: string;
}

export default function Board(props: PropType) {
	const jwt = useRecoilValue(jwtState);

	const [searchBookItems, setSearchBookList] = useState<BookType[]>([]);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		console.log(props.keyword);

		search(jwt, props.keyword).then(res => {
			if (res.item) {
				setSearchBookList(res.item);
			}
		});

		setLoading(false);
	}, []);

	return (
		<div className={styles.search} >
			<div className={styles.searchWrapper}>
				{
					!loading && (
						<div className={styles.searchBook}>
							<span className={styles.label}>
								검색 : {props.keyword}
							</span>

							<div className={styles.list}>
								{searchBookItems.map((book => (
									<div className={styles.bookItem}>
										<div className={styles.bookImage}>
											<Image src={book.cover} alt="book image" height={300} width={225} />
										</div>

										<div className={styles.title}>
											{book.title}
										</div>

										<div className={styles.author}>
											{book.author}
										</div>

										<div className={styles.score}>
											<Image src={starYellowImage} alt="star yellow image" height={20} width={20} />
											<Image src={starYellowImage} alt="star yellow image" height={20} width={20} />
											<Image src={starYellowImage} alt="star yellow image" height={20} width={20} />
											<Image src={starYellowImage} alt="star yellow image" height={20} width={20} />
											<Image src={starEmptyImage} alt="star empty image" height={20} width={20} />
										</div>
									</div>

								)))}
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}
