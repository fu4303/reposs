import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import _404Page_ from "../pages/404.page";
import MainPage from "../pages/Main.page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route exact path={"*"} component={_404Page_} />
      </Switch>
    </Router>
  );
};

export default Routes;
