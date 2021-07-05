import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './layout/Admin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
