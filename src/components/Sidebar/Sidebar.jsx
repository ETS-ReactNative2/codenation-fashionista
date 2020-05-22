import React from "react";
import "./Sidebar.scss";
import Item from "./Item/Item";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<header className="sidebar__header">
				<button className="sidebar__icon">
					<i className="material-icons">arrow_back</i>
				</button>
				<h4 className="sidebar__title">Buscar Produtos</h4>
			</header>
			<div className="sidebar__content">
				<header className="sidebar__busca">
					<input type="text" placeholder="Buscar produto ..." />
				</header>
				<ul className="sidebar__items">
					<Item />
					<Item />
					<Item />
					<Item />
				</ul>
			</div>
			<footer className="sidebar__footer">
				<span>Subtotal - R$ 789,50</span>
			</footer>
		</div>
	);
};
export default Sidebar;
