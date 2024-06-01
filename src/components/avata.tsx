import styles from "./avata.module.scss";

interface Props {
	name: string;
}

export default function Avata(props: Props) {
	return (
		<div className={styles.avata}>
			<span className={styles.userName}>{props.name}</span>
		</div>
	);
}