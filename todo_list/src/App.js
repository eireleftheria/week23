import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import LoginPage from "./components/LoginPage";

function App() {
  let userLoggedIn = true;
  return (
    <div className="App">
      <Header></Header>
      {userLoggedIn ? <Content /> : <LoginPage />}
    </div>
  );
}

export default App;
