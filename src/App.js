import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from './components/main/main'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
