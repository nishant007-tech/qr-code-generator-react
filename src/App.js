import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inputurl from './inputurl';
import ShowQrcode from './showQrcode';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Inputurl} />
      <Route exact path="/qr-code" component={ShowQrcode} />
    </Router>
  );
}

export default App;
