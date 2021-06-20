import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Art from './pages/Art'
import Contact from './pages/Contact'
import Universe from './pages/Universe'
import News from './pages/News'
import aboutUs from './pages/AboutUs'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/games' component={Games}/>
          <Route path='/universe' component={Universe}/>
          <Route path='/art' component={Art}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/news' component={News}/>
          <Route path='/aboutUs' component={aboutUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
