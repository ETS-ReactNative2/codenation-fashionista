import React from "react";
import "./Error404.scss";

const Error404 = () => {
	return (
		<div className="error">
			<div className="error__message">
				<h1>Página não encontrada</h1>
			</div>
			<div className="error__cta">
				<span>Continue vendo nossos produtos</span>
				<button>Voltar ao Catálogo</button>
			</div>
		</div>
	);
};

export default Error404;
