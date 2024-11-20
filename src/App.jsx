import "./App.css";
import Homepage from "./pages";
import Maincategories from "./components/maincategories";
import Bestseller from "./components/bestselling";
import Review from "./components/review";

function App() {
	return (
		<>
			<Homepage />
			<Maincategories />
			<Bestseller />
			<Review />
		</>
	);
}

export default App;
