import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import notFoundPage from "./components/notFoundPage";
import Articles from "./components/articles";
import Contacts from "./components/contacts";
import ArticlesDetails from "./components/articleDetails";




function App() {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<notFoundPage/>}/>
          <Route path="/articles/:name" element={<ArticlesDetails users={users}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
