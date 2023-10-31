import {Switch, Redirect, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)
export default App
