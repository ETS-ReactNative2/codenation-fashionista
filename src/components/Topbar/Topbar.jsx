import React from "react";
import "./Topbar.scss";
import Logo from "../../assets/logo.svg";

const Topbar = ({ basketLength }) => (
	<header className="topbar">
		<a href="/" className="topbar__logo">
			<img src={Logo} alt="Logo" />
		</a>
		<div className="topbar__icons">
			<button className="topbar__icon">
				<i className="material-icons">search</i>
			</button>
			<button className="topbar__icon">
				<i className="material-icons">shopping_basket</i>
				<div className="topbar__notification">2</div>
			</button>
		</div>
	</header>
);

export default Topbar;
