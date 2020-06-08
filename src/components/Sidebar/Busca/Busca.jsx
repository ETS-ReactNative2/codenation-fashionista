import React, { Component } from "react";
import "./Busca.scss";
import Item from "../Item/Item";
import { connect } from "react-redux";
import { serachProducts } from "../../../utils/productFunctions";

class Busca extends Component {
	state = {
		inputText: "",
	};

	handleSearch = (e) => {
		this.setState({
			inputText: e.target.value,
		});
	};

	render() {
		const { catalog } = this.props;
		const filteredCatalog = serachProducts(catalog, this.state.inputText);
		return (
			<div className="busca">
				<header className="busca__input">
					<input
						type="text"
						placeholder="Buscar produto ..."
						value={this.state.inputText}
						onChange={this.handleSearch}
					/>
				</header>
				<div className="busca__content">
					{filteredCatalog.length ? (
						<ul className="sidebar__items">
							{filteredCatalog.map((item) => (
								<Item data={item} showBagOptions={false} />
							))}
						</ul>
					) : (
						<div className="sidebar__error">
							<span>Nenhum item encontrado</span>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state.catalog.products,
	};
};

export default connect(mapStateToProps)(Busca);
