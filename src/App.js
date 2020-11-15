import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import CartProvider from './contexts/CartProvider'
import Homes from "./pages/Homes";
function App() {
  return (
    <div className="App">
    <CartProvider>
      <Router>
      <div>
      <TopMenu/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products" component={Products}>
          </Route>
          <Route path="/" exact component ={Homes}>
          </Route>
          <Route path="/carts" component ={House}>
          </Route>
        </Switch>
      </div>
    </Router>
    </CartProvider>
    </div>
  );
}
function House() {
  return <h2>Home</h2>;
}


export default App;
