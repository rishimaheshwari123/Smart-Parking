import React, { useState } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./app.css"
import Table from "./components/Table";
import Home from "./components/home";
import Main from "./components/main";
import Book from "./components/book";
import ThankYou from "./components/thankYou";

// import Navbar from "./components/navbar";

export default _ => {
   const [page, setPage] = useState(0);

  return (
    <div>

      <Navbar setPage={setPage} />
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/table" element={<Table/>}></Route>
          <Route exact path="/book" element={<Book/>}></Route>
          <Route exact path="/thankyou" element={<ThankYou/>}></Route>

        </Routes>

      </Router>
      <Footer/>



    </div>
  );
};
