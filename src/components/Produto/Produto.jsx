import React, { Component } from "react";
import { connect } from "react-redux";
import { addToBag } from "../../store/actions/bagActions";
import { getProductByUrl } from "../../utils/productFunctions";
import Error404 from "../Errors/Error404";
import "./Produto.scss";

class Produto extends Component {
	state = {
		selectedSize: null,
		showAlert: null,
	};

	selectSize = (index) => {
		this.setState({
			selectedSize: index,
			showAlert: false,
		});
	};

	addToBag = () => {
		const { selectedSize } = this.state;
		const choosenSize = this.props.data.sizes[selectedSize];
		const productId = this.props.data.id;
		const price = this.props.data.actual_price;
		const addProduct = this.props.addToBag;

		if (selectedSize !== null) {
			addProduct({
				product_id: productId,
				size: choosenSize,
				unit_price: price,
			});
		} else {
			this.setState({
				...this.state,
				showAlert: true,
			});
		}
	};

	renderSizes = (sizes) => {
		return sizes.map((size, index) => {
			return (
				<li className={"produto__size " + (index === this.state.selectedSize && "produto__size--selected")} key={index}>
					<button onClick={() => this.selectSize(index)}>{size}</button>
				</li>
			);
		});
	};

	render() {
		const { data, loading } = this.props;

		if (data) {
			const hasPromotion = data.on_sale;
			return (
				<div className="produto__container container">
					<div className="produto">
						<figure className="produto__image">
							<img src={data.image} alt={"Foto " + data.name.toLowerCase()} />
						</figure>
						<div className="produto__panel">
							<div className="produto__infos">
								<h2 className="produto__name">
									{data.name}
									{hasPromotion ? <span className="produto__promotion">{"-" + data.discount_percentage}</span> : null}
								</h2>
								<p className="produto__pricing">
									{hasPromotion ? (
										<span className="produto__price produto__price--striked">{data.regular_price}</span>
									) : null}
									<span className="produto__price">{data.actual_price}</span>
									<span className="produto__price produto__price--installments">{"em até " + data.installments}</span>
								</p>
							</div>
							<div className="produto__models">
								<span>Escolha o tamanho</span>
								{this.state.showAlert ? <span className="text-alert">É necessário escolher um tamanho</span> : null}
								<ul className="produto__sizes">{this.renderSizes(data.sizes)}</ul>
							</div>
							<div className="produto__cta">
								<button onClick={this.addToBag}>Adicionar à Sacola</button>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (!loading) {
			return <Error404 />;
		} else return null;
	}
}

const mapStateToProps = (state, ownProps) => {
	const { products, loading } = state.catalog;
	const { name, color } = ownProps.match.params;
	const url = name + (color === undefined ? "" : "/" + color);

	return {
		data: getProductByUrl(products, url),
		loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToBag: (item) => dispatch(addToBag(item)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Produto);
