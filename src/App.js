import { createGlobalStyle } from "styled-components";
import "./App.css";
import { IndexPage } from "./pages";

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: "Poppins", sans-serif;
	}
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<IndexPage />
		</>
	);
};

export default App;
