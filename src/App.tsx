import React from "react";

import Routes from "./routes/Routes";

// import { configureFakeBackend } from "./helpers";

// Themes
// For Default import Theme.scss
import "./assets/scss/Theme.scss";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// For Dark import Theme-Dark.scss
// import './assets/scss/Theme-Dark.scss';

// configure fake backend

// configureFakeBackend();

const App = () => {
	return (
		<>
			<Routes></Routes>
			<ToastContainer />
		</>
	);
};

export default App;
