import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home_Page from "./Components/Home_Page/Home_Page";
import Demo_Page from "./Components/Demo_Page/Demo_Page";
import Shoes from "./Components/Shoes/Shoes";
import Stores from "./Components/Stores/Stores";
import Not_Found from "./Components/Not_Found/Not_Found";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home_Page} />
        <Route exact path="/demo" component={Demo_Page} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/stores" component={Stores} />
        <Route component={Not_Found} />
      </Switch>
    </Router>
  );
}

export default App;
