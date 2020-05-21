import React from "react";
import "./Produto.scss";

const Produto = (props) => {
	return (
		<div className="container">
			<div className="produto">
				<figure className="produto__image">
					<img
						src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg"
						alt="Foto modelo"
					/>
				</figure>
				<div className="produto__panel">
					<div className="produto__infos">
						<h3 className="produto__name">
							CAMISA SUEDE SPAN
							<div className="produto__promotion">
								<span>-12%</span>
							</div>
						</h3>
						<p className="produto__pricing">
							<span className="produto__price produto__price--striked">R$ 199,90</span>
							<span className="produto__price">R$ 159,90</span>
							<span className="produto__price produto__price--installments">em até 3x R$ 53,30</span>
						</p>
					</div>
					<div className="produto__models">
						<span>Escolha o tamanho</span>
						<span className="text-alert">É necessário escolher um tamanho</span>
						<ul className="produto__sizes">
							<li className="produto__size">
								<button>U</button>
							</li>
							<li className="produto__size produto__size--selected">
								<button>B</button>
							</li>
						</ul>
					</div>
					<div className="produto__cta">
						<button>Adicionar à Sacola</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Produto;
