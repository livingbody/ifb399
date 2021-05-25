import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/error/404";
import Signup from "./pages/user/Signup/Signup";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/user/Login/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/" exact>
                    <Explore />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
