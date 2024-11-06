import styles from './index.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className={styles.Footer}>
				<p>Copyright © {year} Techcampus Amsterdam</p>
			</footer>
		</>
	);
};

export default Footer;
