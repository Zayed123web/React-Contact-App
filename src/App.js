import { Component } from "react";
import ContactApp from "./Contacts";
import Navbar from "./Navbar";
import ContactDetails from "./ContactDetails";
import AboutUs from "./AboutUs";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<ContactApp />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
      </>
    );
  }
}
