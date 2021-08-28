import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import ClientLayout from 'layouts/ClientLayout';
import { adminRoutes, clientRoutes } from 'routes';

function App() {
  const renderRoutes = (routes, Layout) => {
    return routes.map((route, index) => {
      const { path, component, exact } = route;
      return (
        <Layout
          key={index}
          path={path}
          component={component}
          exact={exact}
        />
      );
    })
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {renderRoutes(clientRoutes, ClientLayout)}
          {/* {renderRoutes(adminRoutes, AdminLayout)} */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
