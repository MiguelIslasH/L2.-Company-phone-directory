import "./App.css";

import Login from "./components/login/login";
import Main from "./components/main/main";

function App() {
  const isLoggedIn = localStorage.getItem(
    "near-api-js:keystore:miguelislas.testnet:testnet"
  );
  return <div className="App">{isLoggedIn ? <Main /> : <Login />}</div>;
}

export default App;
