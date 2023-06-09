import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

const initialState = (context) => {
	const { config: { cardDetails }} = context;

	return {
		burgerMenu: true,
		videoDetails: cardDetails,
		filters: 'All',
		history: [],
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<BrowserRouter>
				<Router { ...extendedContext }/>
			</BrowserRouter>
		</div>
	);
};

export default App;
