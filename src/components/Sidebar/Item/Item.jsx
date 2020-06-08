import React from "react";
import "./Item.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromBag, incrementAmount, decrementAmount } from "../../../store/actions/bagActions";
import { deactivateSidebar } from "../../../store/actions/sidebarActions";

const Item = (props) => {
	const product = props.data;
	const hasPromotion = product.on_sale;
	const { showBagOptions, removeFromBag, incrementAmount, decrementAmount, deactivateSidebar } = props;
	const amount = showBagOptions ? props.amount : null;

	return (
		<li className="item">
			<figure className="item__image">
				<img src={product.image} alt={"Foto " + product.name.toLowerCase} />
			</figure>
			<div className="item__infos">
				<h5 className="item__name">
					<Link to={"/produto/" + product.url} replace onClick={deactivateSidebar}>
						{product.name}
					</Link>
				</h5>
				<span className="item__price item__price--installments">{"em até " + product.installments}</span>
				{showBagOptions ? (
					<div className="item__basket">
						<span className="item__length">{"Tam.: " + product.choosen_size}</span>
						<div className="item__amount">
							<button onClick={() => decrementAmount(product)}>-</button>
							<span>{amount}</span>
							<button onClick={() => incrementAmount(product)}>+</button>
						</div>
					</div>
				) : null}
			</div>
			<p className="item__pricing">
				<span className="item__price">{product.actual_price}</span>
				{hasPromotion ? <span className="item__price item__price--striked">{product.regular_price}</span> : null}
			</p>
			{showBagOptions ? (
				<button className="item__remove" onClick={() => removeFromBag(product)}>
					<span className="material-icons text-alert">delete</span>
				</button>
			) : null}
		</li>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		decrementAmount: (product) => dispatch(decrementAmount(product)),
		incrementAmount: (product) => dispatch(incrementAmount(product)),
		removeFromBag: (product) => dispatch(removeFromBag(product)),
		deactivateSidebar: () => dispatch(deactivateSidebar()),
	};
};

const mapStateToProps = (state) => {
	return {
		showBagOptions: state.sidebar.content === "myBag",
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
