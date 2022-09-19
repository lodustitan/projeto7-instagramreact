import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import MenuNavegar from "./NavBar";

function Corpo(props) {
	return(
		<div class="corpo">
			{props.children}
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<MenuNavegar />

			<Corpo>
				<Feed />
				<Sidebar />
			</Corpo>

			<div class="fundo-mobile">
				<ion-icon name="home"></ion-icon>
				<ion-icon name="search-outline"></ion-icon>
				<ion-icon name="add-circle-outline"></ion-icon>
				<ion-icon name="heart-outline"></ion-icon>
				<ion-icon name="person-outline"></ion-icon>
			</div>
		</div>

	);
}

export default App;
