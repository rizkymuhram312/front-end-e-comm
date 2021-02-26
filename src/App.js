import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
// import Dashboard from './pages/home/Dashboard'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto px-4 mt-40 lg:mt-20">
      
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}



        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;