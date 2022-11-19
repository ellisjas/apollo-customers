import React from "react";
import { Amplify } from "aws-amplify";
import { createRoot } from "react-dom/client";
import Customers from "./pages/Customers";
import awsExports from "./aws-exports";
import ApolloWrapper from "./ApolloWrapper";

Amplify.configure(awsExports);

const App: React.FC = () => {
  return (
    <ApolloWrapper>
      <Customers />
    </ApolloWrapper>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
