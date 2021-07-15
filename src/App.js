import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './layout/Admin';
import Auth from './layout/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Admin} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
