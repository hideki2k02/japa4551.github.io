import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Donate from './pages/Donate'

const App = () => {
  return (
    <Router>
      <div className="App h-screen bg-[rgb(7,12,16)]">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
