import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./features/mailSlice";
function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/" element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
