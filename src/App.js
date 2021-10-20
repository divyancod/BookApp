import "bootstrap/dist/css/bootstrap.min.css";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import store from "./reducer/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleBook from "./components/SingleBook";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={BooksContainer} />
        <Route exact path="/book/:id" component={SingleBook} />
      </Router>
    </Provider>
  );
}

export default App;
