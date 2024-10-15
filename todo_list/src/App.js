import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Missing from "./components/Missing";
import NewsPage from "./components/NewsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const news = [
    { id: 1, text: "Метод pomodoro" },
    { id: 2, text: "Основы тайм-менеджмента" },
    { id: 3, text: "Как успевать больше" },
  ];

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/news/:id" element={<NewsPage news={news} />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
