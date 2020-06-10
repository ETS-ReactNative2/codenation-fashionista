import React from "react";
import "./Sacola.scss";
import Item from "../Item/Item";
import "../Sidebar.scss";
import { parseFloatToPrice } from "../../../utils/productFunctions";

const Sacola = ({ bag }) => {
	const { myBag, totalPrice } = bag;

	return (
		<div className="sacola">
			{myBag.length ? (
				<ul className="sidebar__items">
					{myBag.map((item) => (
						<Item data={item} key={item.id} />
					))}
				</ul>
			) : (
				<div className="sidebar__error">
					<span>Sua sacola está vazia</span>
				</div>
			)}
			<footer className="sacola__footer">
				<span>Subtotal - {parseFloatToPrice(totalPrice)}</span>
			</footer>
		</div>
	);
};

export default Sacola;
