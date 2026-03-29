import { useState } from "react";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
