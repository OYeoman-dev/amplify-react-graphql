import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";

const SignOut = ({ signOut }) => {
  return <Button onClick={signOut} variation="primary">Sign Out</Button>;
};

export default withAuthenticator(SignOut);
