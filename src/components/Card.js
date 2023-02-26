function Card() {
	return (
		<div className="card">
			<div className="faforite">
				<img src="/img/heart-unliked.svg" alt="Unliked" />
			</div>
			<img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>399 руб.</b>
				</div>
				<button className="button">
					<img width={11} height={11} src="/img/plus.svg" alt="plus" />
				</button>
			</div>
		</div>
	);
}

export default Card;