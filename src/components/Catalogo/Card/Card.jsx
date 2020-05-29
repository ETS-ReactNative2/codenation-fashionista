import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ data }) => {
	const hasPromotion = data.on_sale;
	return (
		<Link to={"/produto/" + data.url}>
			<div className="card">
				<figure className="card__image">
					<img src={data.image} alt={"Foto " + data.name.toLowerCase()} />
				</figure>

				<div className="card__infos">
					<h3 className="card__title">{data.name}</h3>
					{hasPromotion ? <span className="card__price card__price--striked">{data.regular_price}</span> : null}
					<span className="card__price">{data.actual_price}</span>
				</div>

				{hasPromotion ? (
					<div className="card__promotion">
						<span>{"-" + data.discount_percentage}</span>
					</div>
				) : null}
			</div>
		</Link>
	);
};

export default Card;
