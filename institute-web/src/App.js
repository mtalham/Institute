import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import ApolloProvider from "react-apollo/ApolloProvider";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Student from "./student/Student";
import AddStudent from "./student/AddStudent";
import Header from "./header/Header";

import "./App.css";

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/students" component={Student} />
          <Route exact path="/addStudent" component={AddStudent} />
        </div>
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8080/api/graphql" }),
  cache: new InMemoryCache()
});

export default App;
