import React from "react"
import Create from "./pages/create/create"
import Edit from "./pages/edit/edit"
import Feed from "./pages/feed/feed"
import ReadMore from "./pages/readMore"

//aqui vamos chamar nossas rotas
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Feed}></Route>
        <Route path="/create" Component={Create}></Route>
        <Route path="/edit/:id" Component={Edit}></Route>
        <Route path="/readMore" Component={ReadMore}></Route>
      </Routes>
    </Router>
  );
}

export default App;
