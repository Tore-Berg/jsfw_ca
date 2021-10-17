import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import ProductDetail from "./pages/Detail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
