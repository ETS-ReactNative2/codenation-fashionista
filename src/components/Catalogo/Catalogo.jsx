import React from "react";
import "./Catalogo.scss";

import Card from "./Card/Card";

const Catalogo = () => {
	return (
		<div className="catalogo">
			<div className="container">
				<span className="catalogo__qntd">2 itens</span>
				<div className="catalogo__grid">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Catalogo;
