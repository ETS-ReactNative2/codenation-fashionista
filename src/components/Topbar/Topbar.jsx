import React from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/logo.svg";

// const Topbar = ({ qntdSacola }) => (
const Topbar = ({ qntdSacola }) => (
	<header className="topbar">
		<div className="container">
			<div className="flex-box">
				<Link to="/" className="topbar__logo">
					<img src={Logo} alt="Logo" />
				</Link>

				<div className="topbar__icons">
					<button className="topbar__icon">
						<i className="material-icons">search</i>
					</button>

					<button className="topbar__icon">
						<i className="material-icons">shopping_basket</i>
						{qntdSacola ? <div className="topbar__notification">{qntdSacola}</div> : null}
					</button>
				</div>
			</div>
		</div>
	</header>
);

const mapStateToProps = (state) => {
	const { myBag } = state.bag;
	return {
		qntdSacola: myBag.length ? myBag.reduce((qntd, { amount }) => qntd + amount, 0) : 0,
	};
};

export default connect(mapStateToProps)(Topbar);
