import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'
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
import RegisterAccount from './pages/users/RegisterAccount'
import DashboardUserAccount from './pages/home/DashboardUserAccount'
import Address from './pages/address/address'
import Wallet from './pages/payment/MyWallet'
import MyOrders from './pages/orders/myOrders'
import Advertising from './pages/advertising'
import TambahProduct from './pages/product/tambahProduct';
import Product from './pages/product/product';
import ProductSaya from './pages/product/productSaya';
import billTopup from './pages/billTopup'
import ExpeditionRoutesIndex from './pages/Expeditions/ExpeditionRoutesIndex'
import ExpeditionIndex from './pages/Expeditions/ExpeditionIndex'
import OrderShippingIndex from './pages/OrderShipping/OrderShippingIndex'
import OrderShippingArrivalIndex from './pages/OrderShipping/OrderShippingArrivalIndex'
import MyAdv from './pages/advertising/myAdv'
import AddAdv from './pages/advertising/addAdv'
import BankAccount from './pages/payment/BankAccount'
import Transaction from './pages/payment/Transactions'
import OrdersKw from './pages/payment/Orders'

function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto sm:px-4 pt-40 lg:pt-20 pb-10">
        <Switch>
          <Route path="/home" component={Home} exact />
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
          <Route path="/registerAccount" component={RegisterAccount} exact />
          <Route path="/dashboarduser" component={DashboardUserAccount} exact />
          <Route path="/address" component={Address} exact />
          <Route path="/myorders" component={MyOrders}/>
          <Route path="/advertising/my-pkg" component={Advertising}/>
          <Route path="/product" component={Product} />
          <Route path="/productsaya" component={ProductSaya}/>
          <Route path="/tambahproduct" component={TambahProduct} />
          <Route path="/billTopup" component={billTopup}/>
          <Route path="/expeditionsroutes" component={ExpeditionRoutesIndex}/>
          <Route path="/expeditions" component={ExpeditionIndex}/>
          <Route path="/ordershipping" component={OrderShippingIndex}/>
          <Route path="/ordershippingarrival" component={OrderShippingArrivalIndex}/>
          <Route path="/advertising/my-adv" component={MyAdv}/>
          <Route path="/advertising/add-adv" component={AddAdv}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/bank-account/:acco_id" component={BankAccount}/>
          <Route path="/transactions/:acco_id" component={Transaction}/>
          <Route path="/order-kw" component={OrdersKw}/>
        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;