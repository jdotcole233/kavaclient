import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './layout/Admin';
import Auth from './layout/Auth';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" render={props => <Admin {...props} />} />
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Redirect from="/" to="/auth" />
        <Route render={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
