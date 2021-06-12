import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signupdetails from "./Components/Signupdetails";
import Plans from "./Components/Plans";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route path="/login" component={Signin} />
            <Route path="/home" component={(Signup, Details)} />
            <Route path="/Signupdetails" component={Signupdetails} />
            <Route path="/plans" component={Plans} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
