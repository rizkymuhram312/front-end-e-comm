import Header from './components/header';
import Footer from './components/footer/index'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'
import Shop from './pages/home/Dashboard'
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
import EditAddress from './pages/address/EditAddress'
import Wallet from './pages/payment/MyWallet'
import MyOrders from './pages/orders/myOrders'
import Advertising from './pages/advertising'
import TambahProduct from './pages/product/tambahProduct';
import Product from './pages/product/product';
import ProductSaya from './pages/product/productSaya';
import EditProduct from './pages/product/editProduct'
import billTopup from './pages/billTopup'
import vendor from './pages/vendor'
import ExpeditionRoutesIndex from './pages/Expeditions/ExpeditionRoutesIndex'
import ExpeditionIndex from './pages/Expeditions/ExpeditionIndex'
import OrderShippingIndex from './pages/OrderShipping/OrderShippingIndex'
import OrderShippingArrivalIndex from './pages/OrderShipping/OrderShippingArrivalIndex'
import MyAdv from './pages/advertising/myAdv'
import AddAdv from './pages/advertising/addAdv'
import BankAccount from './pages/payment/BankAccount'
import Transaction from './pages/payment/Transactions'
import OrdersKw from './pages/payment/Orders'
import productMaster from './components/sideBarMenu/productMaster';
import WalletAndBank from './pages/payment/WalletAndBank'
import Brand from './pages/brand/brand';
import AddBrand from './pages/brand/addBrand';
import {EditBrand} from './pages/brand/editBrand';
import Condition from './pages/condition/condition';
import addCond from './pages/condition/addCond';
import {EditCond} from './pages/condition/editCond';
import Category from './pages/category/category';
import addCate from './pages/category/addCate';
import CateUpload from './pages/category/cateUpload';

import FilesUpload from "./components/FilesUpload";


function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto ">
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/shop" component={Dashboard} exact />
          <Route path="/" component={Home} exact/>
          {/* brand */}
          <Route path="/brand" component={Brand} exact />
          <Route path="/addBrand" component={AddBrand} exact />
          <Route path="/editBrand" component={EditBrand} exact />
          {/* end Brand */}
          {/* start Condition */}
          <Route path="/condition" component={Condition} exact />
          <Route path="/addCond" component={addCond} exact />
          <Route path="/editCond" component={EditCond} exact />
          {/* end Condition */}
          {/* start category */}
          <Route path="/category" component={Category} exact />
          <Route path="/addCate" component={addCate} exact />
          <Route path="/upload" component={CateUpload} exact />
          {/* end Category */}
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
          <Route path="/editAddress" component={EditAddress} exact />s
          <Route path="/myorders" component={MyOrders}/>
          <Route path="/advertising/my-pkg" component={Advertising}/>
          <Route path="/product/:prod_id" component={Product} />
          <Route path="/productsaya" component={ProductSaya}/>
          <Route path="/tambahproduct" component={TambahProduct} />
          <Route path="/editproduct" component={EditProduct}/>
          <Route path="/billTopup" component={billTopup}/>
          <Route path="/vendor" component={vendor}/>
          <Route path="/expeditionsroutes" component={ExpeditionRoutesIndex}/>
          <Route path="/expeditions" component={ExpeditionIndex}/>
          <Route path="/ordershipping" component={OrderShippingIndex}/>
          <Route path="/ordershippingarrival" component={OrderShippingArrivalIndex}/>
          <Route path="/advertising/my-adv" component={MyAdv}/>
          <Route path="/advertising/add-adv" component={AddAdv}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/bank-account/" component={BankAccount}/>
          <Route path="/transactions/:acco_id" component={Transaction}/>
          <Route path="/order-kw" component={OrdersKw}/>
          <Route path="/wallet-bank" component={WalletAndBank}/>
          <Route component={ <div>Page Not Found</div>}/>
        </Switch>
      </div>
      <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;