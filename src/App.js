import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./components/Browse";
import ArtistPage from "./components/ArtistPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row m-0">
          <div className="col-md-4 offset-md-4">
            <Header />

            <Switch>
              <Route path="/" exact component={Browse} />
              <Route path="/artistPage/:id" component={ArtistPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
