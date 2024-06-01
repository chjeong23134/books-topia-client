import styles from "./page.module.scss";
//

import Image from "next/image";

import Avata from "@/components/avata";
import bookIamge from "../images/book1.jpg";

interface Comment {
	userName: string;
	comment: string;
}

export default function Home() {
	const commentItems: Comment[] = [
		{
			userName: '책사랑',
			comment: '이 책 정말 좋아요!'
		},
		{
			userName: '독서광',
			comment: '정말 재미있게 읽었어요.'
		},
		{
			userName: '책벌레',
			comment: '모두에게 강력 추천해요.'
		},
		{
			userName: '책린이',
			comment: '내 취향은 아니지만 그래도 좋아요.'
		},
		{
			userName: '책중독',
			comment: '내 취향에는 조금 길었어요.'
		},
		{
			userName: '독서매니아',
			comment: '놀라운 이야기와 캐릭터들.'
		},
		{
			userName: '책사냥꾼',
			comment: '이 책을 놓을 수가 없었어요.'
		},
		{
			userName: '책감상',
			comment: '결말이 좀 예측 가능했어요.'
		},
	];

	return (
		<div className={styles.main}>
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
				베스트 셀러 순위

				<div className={styles.list}>

				</div>
			</div>

			<div className={styles.userMostScore}>
				북스토피아 유저 픽 순위

				<div className={styles.list}>

				</div>
			</div>

			<div className={styles.newBook}>
				신간 도서

				<div className={styles.list}>

				</div>
			</div>

			<div className={styles.latestCommunity}>
				커뮤니티

				<div className={styles.list}>

				</div>
			</div>
		</div>
	)
}
