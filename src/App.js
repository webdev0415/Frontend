import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./pages/mainpage"
import ProductPage from "./pages/productpage"
import ProductDetailPage from "./pages/productdetailpage"
import SignUpPage from "./pages/signup"
import SignInPage from "./pages/signin"


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/product/detail" component={ProductDetailPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
