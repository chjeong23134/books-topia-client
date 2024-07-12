"use client"

import styles from "./page.module.scss";
//

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import Avata from "@/components/avata";

import bookIamge from "../images/book1.jpg";
import likeEmptyImage from "../images/like_empty.png";
import likeBlueImage from "../images/like_blue.png";
import starEmptyImage from "../images/star_empty.png";
import starYellowImage from "../images/star_yellow.png";
import { BookType, bestList, newList } from "@/apis/aladinApi";
import { jwtState } from "@/consts/atom";
//
//

interface Comment {
	userName: string;
	content: string;
}

interface Topic {
	userName: string;
	title: string;
	imageYN: boolean;
}
//
//
//

export default function Home() {
	const jwt = useRecoilValue(jwtState);

	const [bestBookItems, setBestBookItems] = useState<BookType[]>([])

	const [newBookItems, setNewBookItems] = useState<BookType[]>([])

	const [loading, setLoading] = useState<boolean>(true);

	const commentItems: Comment[] = [
		{
			"userName": "책사랑",
			"content": "이 책 정말 좋아요! 처음부터 끝까지 한순간도 눈을 뗄 수 없었어요. 작가의 문체와 스토리 전개가 정말 흥미로웠고, 등장인물들도 매우 매력적이었습니다. 이 책을 읽으면서 많은 감정을 느낄 수 있었고, 마지막 페이지를 넘길 때는 아쉬움이 남을 정도였어요. 다른 사람들에게도 꼭 추천하고 싶은 책입니다. "
		},
		{
			"userName": "독서광",
			"content": "정말 재미있게 읽었어요. 특히 중반부에 들어서면서 이야기가 점점 더 흥미진진해지고, 클라이맥스 부분에서는 손에서 책을 놓을 수 없을 정도였어요. 작가가 세밀하게 그린 배경과 인물들의 심리가 잘 묘사되어 있어서 몰입감이 대단했습니다. 다음 작품도 기대가 되네요."
		},
		{
			"userName": "책벌레",
			"content": "모두에게 강력 추천해요. 이 책은 단순히 재미있는 소설이 아니라, 여러 가지 교훈과 생각할 거리를 제공해줍니다. 이야기가 진행될수록 주인공의 성장과 변화가 뚜렷하게 나타나고, 그 과정을 통해 독자도 많은 것을 느끼고 배울 수 있습니다. 정말 훌륭한 작품이에요."
		},
		{
			"userName": "책린이",
			"content": "내 취향은 아니지만 그래도 좋아요. 평소에 읽는 장르와는 조금 다르지만, 새로운 시도를 해보자는 마음으로 읽기 시작했어요. 초반에는 조금 지루했지만, 중반부터는 점점 흥미로워졌어요. 이야기의 흐름이 다소 느리게 느껴질 수 있지만, 그만큼 깊이 있는 내용이 인상적이었습니다."
		},
		{
			"userName": "책중독",
			"content": "내 취향에는 조금 길었어요. 책의 길이가 길어서 다 읽는데 시간이 꽤 걸렸지만, 그만큼 세밀한 묘사와 깊이 있는 스토리가 인상적이었어요. 특히 캐릭터들의 심리 변화와 관계들이 매우 잘 그려져 있어서 읽는 내내 즐거웠습니다. 좀 더 짧았더라면 좋았을 것 같지만, 여전히 좋은 책이었습니다."
		},
		{
			"userName": "독서매니아",
			"content": "놀라운 이야기와 캐릭터들. 이 책은 정말 독특하고 창의적인 스토리를 가지고 있습니다. 각 장마다 새로운 전개와 반전이 있어서 지루할 틈이 없었어요. 특히 주인공의 여정이 매우 감동적이었고, 끝까지 읽고 나서도 여운이 오래 남았습니다. 훌륭한 작품입니다."
		},
		{
			"userName": "책사냥꾼",
			"content": "이 책을 놓을 수가 없었어요. 처음부터 끝까지 긴장감이 넘치고, 한 장 한 장이 매우 흥미로웠습니다. 주인공의 모험과 그 과정에서 겪는 여러 어려움들이 매우 현실적이고 감동적으로 그려져 있어서 읽는 내내 몰입할 수 있었어요. 정말 강력 추천합니다."
		},
		{
			"userName": "책감상",
			"content": "결말이 좀 예측 가능했어요. 책의 전반적인 흐름과 전개는 매우 좋았지만, 결말이 다소 예상 가능해서 조금 아쉬웠습니다. 하지만 그 과정에서의 이야기 전개와 캐릭터들의 감정 표현은 매우 뛰어났어요. 전체적으로는 만족스러운 책이었고, 다음 작품도 기대됩니다."
		},
	];

	const topicItems: Topic[] = [
		{
			userName: "책사랑",
			title: "요즘 읽고 있는 책, 다들 읽어보셨나요?",
			imageYN: true
		},
		{
			userName: "독서광",
			title: "새로 나온 소설, 읽어볼만 한가요?",
			imageYN: false
		},
		{
			userName: "책벌레",
			title: "도서관 추천 도서, 다른 추천도 있으신가요?",
			imageYN: true
		},
		{
			userName: "책린이",
			title: "책 읽는 시간 어떻게 내시나요?",
			imageYN: false
		},
		{
			userName: "책중독",
			title: "밤새 책 읽었어요, 정말 끝내주는 책!",
			imageYN: true
		},
		{
			userName: "독서매니아",
			title: "표지가 파란색인 책, 제목 아시는 분?",
			imageYN: false
		},
		{
			userName: "책사냥꾼",
			title: "중고서점에서 득템! 다들 중고서점 자주 가시나요?",
			imageYN: true
		},
		{
			userName: "책감상",
			title: "책 다 읽고 난 후의 여운, 다들 비슷한 느낌 받으셨나요?",
			imageYN: false
		}
	];
	//
	//
	//
	//

	useEffect(() => {
		bestList(jwt).then(res => {
			if (res.item) {
				setBestBookItems(res.item);
			}
		});

		newList(jwt).then(res => {
			if (res.item) {
				setNewBookItems(res.item);
			}
		});

		setLoading(false)
	}, [])

	return (
		<div className={styles.home}>
			<div className={styles.homeWrapper}>
				{!loading && (
					<>
						<div className={styles.latestComment}>
							<span className={styles.label}>
								가장 최근 코멘트
							</span>

							<div className={styles.list}>
								{commentItems.map((comment => (
									<div className={styles.latestCommentItem}>
										<div className={styles.header}>
											<Avata name={comment.userName} />
										</div>

										<div className={styles.body}>
											<div className={styles.bookImage}>
												<Image src={bookIamge} alt="book image" height={100} width={75} />
											</div>

											<div className={styles.comment}>
												{comment.content}
											</div>
										</div>

										<div className={styles.footer}>
											<Image src={likeEmptyImage} alt="like empty image" height={20} width={20} />
											<Image src={likeBlueImage} alt="like blue image" height={20} width={20} />
											댓글
										</div>
									</div>
								)))}
							</div>
						</div>

						<div className={styles.bestSeller}>
							<span className={styles.label}>
								베스트 셀러 순위
							</span>

							<div className={styles.list}>
								{bestBookItems.map((book => (
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

						<div className={styles.userMostScore}>
							<span className={styles.label}>
								북스토피아 유저 픽 순위
							</span>

							<div className={styles.list}>
								{bestBookItems.map((book => (
									<div className={styles.bookItem}>
										<div className={styles.bookImage}>
											<Image src={bookIamge} alt="book image" height={300} width={225} />
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

						<div className={styles.newBook}>
							<span className={styles.label}>
								신간 발매 도서
							</span>

							<div className={styles.list}>
								{newBookItems.map((book => (
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

						<div className={styles.latestTopic}>
							<span className={styles.label}>
								커뮤니티
							</span>

							<div className={styles.list}>
								<div className={styles.header}>
									<div>말머리</div>
									<div>제목</div>
									<div>좋아요</div>
									<div>작성자</div>
									<div>작성일</div>
								</div>

								<div className={styles.body}>
									{topicItems.map((topic => (
										<div className={styles.latestTopicItem}>
											<div className={styles.category}>
												일반
											</div>

											<div className={styles.title}>
												{topic.title}
											</div>

											<div className={styles.like}>
												<Image src={likeBlueImage} alt="like blue image" height={10} width={10} /> 10
											</div>

											<div className={styles.userName}>
												{topic.userName}
											</div>

											<div className={styles.createDate}>
												2024-06-25
											</div>
										</div>
									)))}
								</div>

							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
