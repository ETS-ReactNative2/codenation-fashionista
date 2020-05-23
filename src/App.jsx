import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import Produto from "./components/Produto/Produto";
import Sidebar from "./components/Sidebar/Sidebar";
import Error404 from "./components/RouterError/Error404";

function App() {
	return (
		<div className="App sidebar-is-active">
			{/* <div className="App"> */}
			<Router>
				<Topbar />
				<Switch>
					<Route exact path="/" component={Catalogo} />
					<Route path="/produto/:name" component={Produto} />
					<Route path="*" component={Error404} />
				</Switch>
				<Sidebar />
			</Router>
		</div>
	);
}

export default App;
