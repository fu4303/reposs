import { Route, StaticRouter as Router, Switch } from "react-router";

import MainPage from "./pages/Main.page";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
