import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Orders from './pages/orders'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Dashboard from './pages/home/Dashboard'
import Order_Shipping from './pages/order_shipping/index'
import Expedition from './pages/expedition/index'
import ExpeditionRoute from './pages/expedition_routes/index'
import ExpeRoute from './pages/expedition_routes/hook/ExpeRoute'
import JNT from './pages/expedition_routes/JNT/JNT'
import JNE from './pages/expedition_routes/JNE/JNE'
import SICEPAT from './pages/expedition_routes/SICEPAT/SICEPAT'




function App() {
  return (
    <BrowserRouter>
      <div className="bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ordershipping" component={Order_Shipping} />
          <Route path="/expedition" component={Expedition} />
          <Route path="/expedition_route" component={ExpeditionRoute} />
          <Route path="/expe_route" component={ExpeRoute} />
          <Route path="/jnt" component={JNT} />
          <Route path="/jne" component={JNE} />
          <Route path="/sicepat" component={SICEPAT} />





        </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
