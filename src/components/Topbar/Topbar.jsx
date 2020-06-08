import React from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { activateSidebar } from "../../store/actions/sidebarActions";
import Logo from "../../assets/logo.svg";
import { getBagLength } from "../../utils/bagFunctions";

const Topbar = ({ qntdSacola, renderSearch, renderMyBag }) => (
	<header className="topbar">
		<div className="container">
			<div className="flex-box">
				<Link to="/" className="topbar__logo">
					<img src={Logo} alt="Logo" />
				</Link>

				<div className="topbar__icons">
					<button className="topbar__icon" onClick={renderSearch}>
						<i className="material-icons">search</i>
					</button>

					<button className="topbar__icon" onClick={renderMyBag}>
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
		qntdSacola: getBagLength(myBag),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		renderSearch: () => dispatch(activateSidebar("search")),
		renderMyBag: () => dispatch(activateSidebar("myBag")),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
