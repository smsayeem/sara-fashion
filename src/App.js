import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./utilities/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInSignUp from "./pages/singInSignUp";

function App({ setCurrentUser, currentUser }) {
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      console.log("will unmount", unsubscribeFromAuth);
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
