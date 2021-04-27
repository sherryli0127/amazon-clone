import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Orders from "./Orders";

//load stripe and store in a promise
const promise = loadStripe(
  "pk_test_51IkILwJ4BY6WTeZyvShrfvbvyOmFXuxNiOPu3GVO0PZPqjklNWzVuWnU8VjcMIuRkIwAu831KsAZQhffVOkQSNrs00mLHCWyRx"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app compoent loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* default route(always at the bottom) */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
