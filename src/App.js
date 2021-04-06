import "./App.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-brand">Shopping cart</div>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "white" }}
                  className="mx-5"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/shop"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route exact path="/products">
            <HomePage />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
