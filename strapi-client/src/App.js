import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Business from "./components/Business/Business";
import SignIn from "./components/Authentication/Signin";
import SignUp from "./components/Authentication/Signup";
import BusinessDetails from "./components/Business/BusinessDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState();
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(`http://localhost:1337/businesses?isApproved=${true}`);
      setBusiness(response.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setActiveUser={setActiveUser}/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/business" exact>
          <Business isLoggedIn={isLoggedIn} business={business} />
        </Route>
        <Route path="/business/:id">
          <BusinessDetails business={business} activeUser={activeUser} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route path="/signin">
          <SignIn setActiveUser={setActiveUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/signup">
          <SignUp setActiveUser={setActiveUser} setLoggedIn={setLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
