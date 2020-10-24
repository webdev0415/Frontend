import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./pages/mainpage"
import ProductPage from "./pages/productpage"
import ProductDetailPage from "./pages/productdetailpage"
import SignUpPage from "./pages/signup"
import SignInPage from "./pages/signin"
import AccountPage from "./pages/account"
import EmailConfirmation from "./pages/emailconfirmation"
import CheckEmailView from "./pages/checkemailview"
import NotFoundPage from './components/notfoundpage';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/product/detail" component={ProductDetailPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/auth/email-confirmation/:code" component={EmailConfirmation} />
        <Route exact path="/auth/check-email" component={CheckEmailView} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
