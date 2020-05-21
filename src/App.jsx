import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import Produto from "./components/Produto/Produto";
// import Error404 from "./components/Error404";

function App() {
	return (
		<div className="App">
			<Router>
				<Topbar />
				<Switch>
					<Route exact path="/" component={Catalogo} />
					<Route path="/produto/:name" component={Produto} />
					{/* <Route path="*" component={Error404} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
