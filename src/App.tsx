import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import CoinsTable from './components/coins/CoinsTable';
import Exchanges from './components/exchanges/Exchanges';
import LineChart from './components/charts/linechart/Linechart';
import Navbar from './components/navbar/navbar';
function App() {
	return (
		<div >
			<Router>
				<Navbar />
				<div >
					<Switch>
						<Route path="/coins" component={CoinsTable} />
						<Route path="/exchanges" component={Exchanges} />
						<Route path="/charts" component={LineChart} />
						<Route path="/">
							{/* <Home /> */}
							<div>home</div>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
