import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import NetAmount from "./components/NetAmount";
import { AddTransaction } from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <GlobalProvider>
        <Header />
      <div className="container">
        <NetAmount />
        <div className="row mb-5">
          <div className="col-12 col-md-6 my-2">
            <AddTransaction />
          </div>
          <div className="col-12 col-md-6 my-2">
            <TransactionList />
          </div>
        </div>
      </div>
        
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
