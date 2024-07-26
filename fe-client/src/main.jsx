import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./components/context/AuthContext/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
