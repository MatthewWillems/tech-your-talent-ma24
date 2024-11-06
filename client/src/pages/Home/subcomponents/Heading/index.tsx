import styles from './index.module.scss';

const Heading = () => {
	return (
		<div
			className={ styles.Heading }
			style={ {
				backgroundImage: `url("img/HomePageBackground.webp")`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
			} }
		>
			<div className={ styles.Heading }>
				<h1>
					Leer, experimenteer, <br></br>
					en verander de toekomst.
				</h1>
				<a href="/workshops">
					<button type="button">
						Ontdek de 7 werelden hier!
					</button>
				</a>
			</div>
		</div> );
};

export default Heading;
