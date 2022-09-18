import './App.css';
import Feed from './Feed/Feed';
import Sidebar from './Sidebar/Sidebar';
import MenuNavegar from "./MenuNavegar/MenuNavegar";



function App() {
	return (
		<div className="App">
			<MenuNavegar />

			<div class="corpo">
				<Feed />
				<Sidebar />
			</div>

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
