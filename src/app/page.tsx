import styles from "./page.module.scss";
//

import Image from "next/image";

import Avata from "@/components/avata";
import bookIamge from "../images/book1.jpg";

interface Comment {
	userName: string;
	comment: string;
}

interface Book {
	name: string;
	writer: string;
}

export default function Home() {
	const commentItems: Comment[] = [
		{
			"userName": "책사랑",
			"comment": "이 책 정말 좋아요! 처음부터 끝까지 한순간도 눈을 뗄 수 없었어요. 작가의 문체와 스토리 전개가 정말 흥미로웠고, 등장인물들도 매우 매력적이었습니다. 이 책을 읽으면서 많은 감정을 느낄 수 있었고, 마지막 페이지를 넘길 때는 아쉬움이 남을 정도였어요. 다른 사람들에게도 꼭 추천하고 싶은 책입니다. "
		},
		{
			"userName": "독서광",
			"comment": "정말 재미있게 읽었어요. 특히 중반부에 들어서면서 이야기가 점점 더 흥미진진해지고, 클라이맥스 부분에서는 손에서 책을 놓을 수 없을 정도였어요. 작가가 세밀하게 그린 배경과 인물들의 심리가 잘 묘사되어 있어서 몰입감이 대단했습니다. 다음 작품도 기대가 되네요."
		},
		{
			"userName": "책벌레",
			"comment": "모두에게 강력 추천해요. 이 책은 단순히 재미있는 소설이 아니라, 여러 가지 교훈과 생각할 거리를 제공해줍니다. 이야기가 진행될수록 주인공의 성장과 변화가 뚜렷하게 나타나고, 그 과정을 통해 독자도 많은 것을 느끼고 배울 수 있습니다. 정말 훌륭한 작품이에요."
		},
		{
			"userName": "책린이",
			"comment": "내 취향은 아니지만 그래도 좋아요. 평소에 읽는 장르와는 조금 다르지만, 새로운 시도를 해보자는 마음으로 읽기 시작했어요. 초반에는 조금 지루했지만, 중반부터는 점점 흥미로워졌어요. 이야기의 흐름이 다소 느리게 느껴질 수 있지만, 그만큼 깊이 있는 내용이 인상적이었습니다."
		},
		{
			"userName": "책중독",
			"comment": "내 취향에는 조금 길었어요. 책의 길이가 길어서 다 읽는데 시간이 꽤 걸렸지만, 그만큼 세밀한 묘사와 깊이 있는 스토리가 인상적이었어요. 특히 캐릭터들의 심리 변화와 관계들이 매우 잘 그려져 있어서 읽는 내내 즐거웠습니다. 좀 더 짧았더라면 좋았을 것 같지만, 여전히 좋은 책이었습니다."
		},
		{
			"userName": "독서매니아",
			"comment": "놀라운 이야기와 캐릭터들. 이 책은 정말 독특하고 창의적인 스토리를 가지고 있습니다. 각 장마다 새로운 전개와 반전이 있어서 지루할 틈이 없었어요. 특히 주인공의 여정이 매우 감동적이었고, 끝까지 읽고 나서도 여운이 오래 남았습니다. 훌륭한 작품입니다."
		},
		{
			"userName": "책사냥꾼",
			"comment": "이 책을 놓을 수가 없었어요. 처음부터 끝까지 긴장감이 넘치고, 한 장 한 장이 매우 흥미로웠습니다. 주인공의 모험과 그 과정에서 겪는 여러 어려움들이 매우 현실적이고 감동적으로 그려져 있어서 읽는 내내 몰입할 수 있었어요. 정말 강력 추천합니다."
		},
		{
			"userName": "책감상",
			"comment": "결말이 좀 예측 가능했어요. 책의 전반적인 흐름과 전개는 매우 좋았지만, 결말이 다소 예상 가능해서 조금 아쉬웠습니다. 하지만 그 과정에서의 이야기 전개와 캐릭터들의 감정 표현은 매우 뛰어났어요. 전체적으로는 만족스러운 책이었고, 다음 작품도 기대됩니다."
		},
	];

	const bookItems: Book[] = [
		{
			"name": "해리 포터와 마법사의 돌 해리 포터와 마법사의 돌",
			"writer": "J.K. 롤링"
		},
		{
			"name": "죄와 벌",
			"writer": "표도르 도스토옙스키"
		},
		{
			"name": "태백산맥",
			"writer": "조정래"
		},
		{
			"name": "1984",
			"writer": "조지 오웰"
		},
		{
			"name": "삼국지",
			"writer": "나관중"
		},
		{
			"name": "무정",
			"writer": "이광수"
		},
		{
			"name": "토지",
			"writer": "박경리"
		},
		{
			"name": "대망",
			"writer": "야마오카 소하치"
		},
		{
			"name": "어린 왕자",
			"writer": "앙투안 드 생텍쥐페리"
		},
		{
			"name": "위대한 개츠비",
			"writer": "F. 스콧 피츠제럴드"
		},
		{
			"name": "나미야 잡화점의 기적",
			"writer": "히가시노 게이고"
		},
		{
			"name": "모모",
			"writer": "미하엘 엔데"
		},
		{
			"name": "작은 아씨들",
			"writer": "루이자 메이 올컷"
		},
		{
			"name": "데미안",
			"writer": "헤르만 헤세"
		},
		{
			"name": "백설 공주",
			"writer": "그림 형제"
		},
		{
			"name": "브레이브 뉴 월드",
			"writer": "올더스 헉슬리"
		}
	]

	return (
		<div className={styles.main}>
			<div className={styles.mainWrapper}>
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
										{comment.comment}
									</div>
								</div>

								<div className={styles.footer}>
									좋아요
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
						{bookItems.map((book => (
							<div className={styles.bookItem}>
								<div className={styles.bookImage}>
									<Image src={bookIamge} alt="book image" height={300} width={225} />
								</div>

								<div className={styles.name}>
									{book.name}
								</div>

								<div className={styles.writer}>
									{book.writer}
								</div>

								<div className={styles.score}>
									별점
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
						{bookItems.map((book => (
							<div className={styles.bookItem}>
								<div className={styles.bookImage}>
									<Image src={bookIamge} alt="book image" height={300} width={225} />
								</div>

								<div className={styles.name}>
									{book.name}
								</div>

								<div className={styles.writer}>
									{book.writer}
								</div>

								<div className={styles.score}>
									별점
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
						{bookItems.map((book => (
							<div className={styles.bookItem}>
								<div className={styles.bookImage}>
									<Image src={bookIamge} alt="book image" height={300} width={225} />
								</div>

								<div className={styles.name}>
									{book.name}
								</div>

								<div className={styles.writer}>
									{book.writer}
								</div>

								<div className={styles.score}>
									별점
								</div>
							</div>

						)))}
					</div>
				</div>

				<div className={styles.latestCommunity}>
					커뮤니티

					<div className={styles.list}>

					</div>
				</div>
			</div>
		</div>
	)
}
