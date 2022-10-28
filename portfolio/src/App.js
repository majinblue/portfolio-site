import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigation />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
