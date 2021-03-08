import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Orders from './pages/orders/Orders'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Dashboard from './pages/home/Dashboard'
import CheckoutOrders from './pages/orders/CheckoutOrders'
import CartOrders from './pages/orders/CartOrders'
import AfterOrders from './pages/orders/AfterOrders'




function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20 pb-10">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/cart-orders" component={CartOrders} />
          <Route path="/orders" component={Orders}/>
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/checkout-orders" component={CheckoutOrders} />
          <Route path="/after-orders" component={AfterOrders}/>


        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
