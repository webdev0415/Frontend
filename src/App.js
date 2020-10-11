import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./pages/mainpage"
import ProductPage from "./pages/productpage"
import ProductDetailPage from "./pages/productdetailpage"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/product/:detail" component={ProductDetailPage} />
        <Route path="/product" component={ProductPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
