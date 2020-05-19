import React from "react";
import "./Card.scss";

const Card = () => {
	return (
		<div className="card">
			<figure className="card__image">
				<img
					src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg"
					alt="Foto modelo"
				/>
			</figure>

			<div className="card__infos">
				<h3 className="card__title">REGATA ALCINHA FOLK</h3>
				<span className="card__price">R$ 99,90</span>
			</div>

			{/* <div className="card__promotion">
        <span></span>
      </div> */}
		</div>
	);
};

export default Card;
