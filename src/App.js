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


const App = () => {

  return (

    <View className="App">
      <NavBarTop/>
      <FishCreateForm/>
    </View>
  );
};

export default withAuthenticator(App);