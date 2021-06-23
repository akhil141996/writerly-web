import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Description from "./Components/Description";
import Plans from "./Components/Plans";
import Footer2 from "./Components/Footer2";
import Signupdetails from "./Components/Signupdetails";
import Features from "./Components/Features";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/home" component={(Description, Features, Details)} />
          <Route path="/Signupdetails" component={Signupdetails} />
          <Route path="/plans" component={Plans} />
        </Switch>

        <Footer2 />
      </BrowserRouter>
    );
  }
}

export default App;
