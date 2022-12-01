import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import NavBarTop from "./components/NavBarTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import FishCreateForm from "./components/FishCreate/FishCreateForm";
import FishCatalog from "./components/FishCatalog/FishCatalog";
import Home from "./components/Home/Home.js"

const App = () => {

  let component;

  switch (window.location.pathname) {
    default:
      component = <Home />
      break;
    case "/":
      component = <Home />;
      break;
    case "/all-fish":
      component = <FishCatalog />;
      break;
    case "/add-fish":
      component = <FishCreateForm />;
      break;
  }

  return (

    <View className="App">
      <NavBarTop/>
      <div className="container">{component}</div>
    </View>
  );
};

export default withAuthenticator(App);