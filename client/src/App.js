import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navy from "./Components/Navbar/Navy";
import Home_Page from "./Components/Home_Page/Home_Page";
import Demo_Page from "./Components/Demo_Page/Demo_Page";
import Shoes from "./Components/Shoes/Shoes";
import Stores from "./Components/Stores/Stores";
import Not_Found from "./Components/Not_Found/Not_Found";
import "bootstrap/dist/css/bootstrap.min.css";
import Shoe from "./Components/Shoe/Shoe";
function App() {
  return (
    <Router>
      <Navy />
      <Switch>
        <Route
          exact
          path="/"
          component={Home_Page}
          activeClassName="is-active"
        />
        <Route
          exact
          path="/demo"
          component={Demo_Page}
          activeClassName="is-active"
        />
        <Route
          exact
          path="/shoes"
          component={Shoes}
          activeClassName="is-active"
        />
        <Route
          exact
          path="/shoes/:id"
          component={Shoe}
          activeClassName="is-active"
        />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/stores/:id" component={Stores} />
        <Route component={Not_Found} />
      </Switch>
    </Router>
  );
}

export default App;
