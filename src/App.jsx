import "./App.css";
import Homepage from "./pages";
import Maincategories from "./components/maincategories";
import Bestseller from "./components/bestselling";
import Review from "./components/review";
import Socialmedia from "./components/socialmedia";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Homepage />
			<Maincategories />
			<Bestseller />
			<Review />
			<Socialmedia />
			<Footer />
		</>
	);
}

export default App;
