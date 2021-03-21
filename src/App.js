import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'
import Cart from './pages/cart'
import Orders from './pages/orders/Orders'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Dashboard from './pages/home/Dashboard'
import CheckoutOrders from './pages/orders/CheckoutOrders'
import CartOrders from './pages/orders/CartOrders'
import AfterOrders from './pages/orders/AfterOrders'
import Province from './pages/province/province'
import City from './pages/city/city'
import Users from './pages/users/users'
import Kecamatan from './pages/kecamatan/kecamatan'
import Kodepos from './pages/kodepos/kodepos'
// import MyOrders from './pages/orders/myOrders'
import Advertising from './pages/advertising'
import TambahProduct from './pages/product/tambahProduct';
import Product from './pages/product/product';
import ProductSaya from './pages/product/productSaya';
import billTopup from './pages/billTopup'
import MyAdv from './pages/advertising/myAdv'
import AddAdv from './pages/advertising/addAdv'
import BankAccount from './pages/payment/BankAccount'
import Transaction from './pages/payment/Transactions'
import Wallet from './pages/payment/MyWallet'

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
          <Route path="/cart-orders" component={CartOrders} />
          <Route path="/orders" component={Orders}/>
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/checkout-orders" component={CheckoutOrders} />
          <Route path="/after-orders" component={AfterOrders}/> 
          <Route path="/province" component={Province} exact />
          <Route path="/city" component={City} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/kecamatan" component={Kecamatan} exact />
          <Route path="/kodepos" component={Kodepos} exact />
          {/* <Route path="/myorders" component={MyOrders}/> */}
          <Route path="/advertising" component={Advertising}/>
          <Route path="/product" component={Product} />
          <Route path="/productsaya" component={ProductSaya}/>
          <Route path="/tambahproduct" component={TambahProduct} />
          <Route path="/billTopup" component={billTopup}/>
          <Route path="/advertising/my-adv" component={MyAdv}/>
          <Route path="/advertising/add-adv" component={AddAdv}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/bank-account/:acco_id" component={BankAccount}/>
          <Route path="/transactions/:acco_id" component={Transaction}/>
          {/* <Route path="/order-kw" component={OrdersKw}/> */}
        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
