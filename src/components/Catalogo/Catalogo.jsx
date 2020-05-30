import React from "react";
import "./Catalogo.scss";
import { connect } from "react-redux";

import Card from "./Card/Card";
import ErrorAPI from "../Errors/ErrorAPI";

const renderProducts = (products) => {
	return products.map((product) => {
		return <Card data={product} key={product.name} />;
	});
};

const Catalogo = ({ error, loading, products }) => {
	return (
		<div className="catalogo">
			{loading ? null : error ? (
				<ErrorAPI />
			) : (
				<div className="container">
					<span className="catalogo__qntd">{products.length + " itens"}</span>
					<div className="catalogo__grid">{renderProducts(products)}</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		...state.catalog,
	};
};

export default connect(mapStateToProps)(Catalogo);
