import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Orders from './pages/orders'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Dashboard from './pages/home/Dashboard'
import Province from './pages/province/province'
import City from './pages/city/city'
import Users from './pages/users/users'
import Kecamatan from './pages/kecamatan/kecamatan'
import Kodepos from './pages/kodepos/kodepos'





function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20 pb-10">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/province" component={Province} exact />
          <Route path="/city" component={City} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/kecamatan" component={Kecamatan} exact />
          <Route path="/kodepos" component={Kodepos} exact />









        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
