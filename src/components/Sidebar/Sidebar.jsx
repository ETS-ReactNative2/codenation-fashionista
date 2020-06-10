import React from "react";
import "./Sidebar.scss";
import { connect } from "react-redux";
import { getBagLength } from "../../utils/bagFunctions";
import { deactivateSidebar } from "../../store/actions/sidebarActions";

import Busca from "./Busca/Busca";
import Sacola from "./Sacola/Sacola";
import { useRef } from "react";
import { useEffect } from "react";

const Sidebar = ({ hideSidebar, content, bag }) => {
	const isBag = content === "myBag";
	const sidebarRef = useRef();

	const handleClick = (e) => {
		if (sidebarRef.current.contains(e.target)) return;
		hideSidebar();
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});

	return (
		<div className="sidebar" ref={sidebarRef}>
			<header className="sidebar__header">
				<button className="sidebar__icon" onClick={hideSidebar}>
					<i className="material-icons">arrow_back</i>
				</button>
				<h4 className="sidebar__title">{isBag ? `Sacola (${getBagLength(bag.myBag)})` : "Buscar Produtos"}</h4>
			</header>
			<div className="sidebar__content">{isBag ? <Sacola bag={bag} /> : <Busca />}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		content: state.sidebar.content,
		bag: state.bag,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		hideSidebar: () => dispatch(deactivateSidebar()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
