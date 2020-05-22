import React from "react";
import "./Item.scss";

const Item = () => {
	return (
		<li className="item">
			<figure className="item__image">
				<img
					src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg"
					alt="Foto produto"
				/>
			</figure>
			<div className="item__infos">
				<h5 className="item__name">CAMISA SUEDE SPAN</h5>
				<span className="item__price item__price--installments">em até 3x R$ 53,30</span>
				<div className="item__basket">
					<span className="item__length">Tam.: U</span>
					<div className="item__amount">
						<button>-</button>
						<span>1</span>
						<button>+</button>
					</div>
				</div>
			</div>
			<p className="item__pricing">
				<span className="item__price">R$ 159,90</span>
				<span className="item__price item__price--striked">R$ 199,90</span>
			</p>
			<button className="item__remove">
				<span class="material-icons text-alert">delete</span>
			</button>
		</li>
	);
};
export default Item;
