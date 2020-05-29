import React from "react";
import "./Errors.scss";

const ErrorAPI = () => {
	return (
		<div className="error">
			<div className="error__message">
				<h1>Problemas no servidor</h1>
			</div>
			<div className="error__cta">
				<span>Tente novamente mais tarde</span>
			</div>
		</div>
	);
};

export default ErrorAPI;
