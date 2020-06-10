import React from "react";
import "./Errors.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div className="error">
			<div className="error__message">
				<h1>Página não encontrada</h1>
			</div>
			<div className="error__cta">
				<span>Continue vendo nossos produtos</span>
				<button>
					<Link to={"/"} replace>
						Voltar ao Catálogo
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Error404;
