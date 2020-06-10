import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCatalog } from "./store/actions/apiActions";

import Topbar from "./components/Topbar/Topbar";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import Produto from "./components/Produto/Produto";
import Sidebar from "./components/Sidebar/Sidebar";
import Error404 from "./components/Errors/Error404";

class App extends Component {
	componentDidMount() {
		this.props.fetchCatalog();
	}

	render() {
		const { showSidebar } = this.props;
		return (
			<div className={"App" + (showSidebar ? " sidebar-is-active" : "")}>
				<Router>
					<Topbar />
					<Switch>
						<Route exact path="/" component={Catalogo} />
						<Route path="/produto/:name/:color?" component={Produto} />
						<Route path="*" component={Error404} />
					</Switch>
					{showSidebar ? <Sidebar /> : null}
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.active,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCatalog: () => dispatch(fetchCatalog()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
