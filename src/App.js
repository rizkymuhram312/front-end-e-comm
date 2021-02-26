import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Dashboard from './pages/home/Dashboard'




function App() {
  return (
    <BrowserRouter>
      <div className="bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/dashboard" component={Dashboard} />



        </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
