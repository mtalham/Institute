import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ApolloProvider from "react-apollo/ApolloProvider";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import store from "./Store";

import Student from "./components/student/Student";
import AddStudent from "./components/student/AddStudent";
import Header from "./components/header/Header";
import "./App.css";

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/students" component={Student} />
            <Route exact path="/addStudent" component={AddStudent} />
          </div>
        </Router>
      </Provider>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8080/api/graphql" }),
  cache: new InMemoryCache()
});

export default App;
