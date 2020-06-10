import React from "react";
import "./Item.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromBag, incrementAmount, decrementAmount } from "../../../store/actions/bagActions";
import getById from "../../../utils/getById";
import { deactivateSidebar } from "../../../store/actions/sidebarActions";

const Item = (props) => {
	const { isBag, data } = props;
	const product = isBag ? getById(props.products, data.product_id) : data;
	const hasPromotion = product.on_sale;
	const { removeFromBag, incrementAmount, decrementAmount, deactivateSidebar } = props;

	return (
		<li className="item">
			<figure className="item__image">
				<Link to={"/produto/" + product.url} replace onClick={deactivateSidebar}>
					<img src={product.image} alt={"Foto " + product.name.toLowerCase} />
				</Link>
			</figure>
			<div className="item__infos">
				<h5 className="item__name">
					<Link to={"/produto/" + product.url} replace onClick={deactivateSidebar}>
						{product.name}
					</Link>
				</h5>
				<span className="item__price item__price--installments">{"em até " + product.installments}</span>
				{isBag ? (
					<div className="item__basket">
						<span className="item__length">{"Tam.: " + data.size}</span>
						<div className="item__amount">
							<button onClick={() => decrementAmount(data.id)}>-</button>
							<span>{data.amount}</span>
							<button onClick={() => incrementAmount(data.id)}>+</button>
						</div>
					</div>
				) : null}
			</div>
			<p className="item__pricing">
				<span className="item__price">{product.actual_price}</span>
				{hasPromotion ? <span className="item__price item__price--striked">{product.regular_price}</span> : null}
			</p>
			{isBag ? (
				<button className="item__remove" onClick={() => removeFromBag(data.id)}>
					<span className="material-icons text-alert">delete</span>
				</button>
			) : null}
		</li>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		decrementAmount: (itemId) => dispatch(decrementAmount(itemId)),
		incrementAmount: (itemId) => dispatch(incrementAmount(itemId)),
		removeFromBag: (itemId) => dispatch(removeFromBag(itemId)),
		deactivateSidebar: () => dispatch(deactivateSidebar()),
	};
};

const mapStateToProps = (state) => {
	return {
		isBag: state.sidebar.content === "myBag",
		products: state.catalog.products,
		bag: state.bag.myBag,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
