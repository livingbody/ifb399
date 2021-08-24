import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/error/404'
import Signup from './pages/user/Signup/Signup'
import Explore from './pages/Explore/Explore'
import Login from './pages/user/Login/Login'
import Upload from './pages/Upload/Upload'
import Detail from './pages/Explore/Detail'
import Subscription from './pages/Explore/Subscription'
import Digest from './pages/Explore/Digest'
import AdminLogin from './pages/admin/AdminLogin'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/' exact>
          <Explore />
        </Route>
        <Route path='/explore/detail' exact>
          <Detail />
        </Route>
        <Route path='/explore/subscription' exact>
          <Subscription />
        </Route>
        <Route path='/explore/digest' exact>
          <Digest />
        </Route>
        <Route path='/upload' exact>
          <Upload />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/admin/login' exact>
          <AdminLogin />
        </Route>
        <Route path='/admin' exact>
          <Admin />
        </Route>
        <Route path='/*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
