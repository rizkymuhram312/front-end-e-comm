import Header from './components/header';
import Footer from './components/footer/index'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'
import Shop from './pages/home/Dashboard'
// import CategoryProd from './pages/home/productCate'
import Category from './pages/category/category'
import Condition from './pages/condition/condition'
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
import EditProduct from './pages/product/editProduct'
import billTopup from './pages/billTopup';
import vendor from './pages/vendor';
import SummaryPulsa from './pages/billTopup/summaryPulsa';
import SummaryInternet from './pages/billTopup/summaryInternet'
import SummaryGame from './pages/billTopup/summaryGame';
import SummaryPLN from './pages/billTopup/summaryPLN';
import SummaryPDAM from './pages/billTopup/summaryPDAM';
function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto ">
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/shop" component={Dashboard} exact />
          {/* <Route path="/productCate/:cate_id" component={CategoryProd} /> */}
          <Route path="/" component={Home} exact/>
          {/* <Route path="/productMaster" component={productMaster} exact/> */}
          {/* brand */}
          {/* <Route path="/brand" component={Brand} exact />
          <Route path="/addBrand" component={AddBrand} exact />
          <Route path="/editBrand" component={EditBrand} exact /> */}
          {/* end Brand */}
          <Route path="/category" component={Category} exact />
          <Route path="/condition" component={Condition} exact />
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
          <Route path="/product/:prod_id" component={Product} />
          <Route path="/productsaya" component={ProductSaya}/>
          <Route path="/tambahproduct" component={TambahProduct} />
          <Route path="/editproduct" component={EditProduct}/>
          <Route path="/billTopup" component={billTopup}/>
          <Route path="/vendor" component={vendor}/>
          <Route path="/summaryPulsa" component={SummaryPulsa}/>
          <Route path="/summaryInternet" component={SummaryInternet}/>
          <Route path="/summaryGame" component={SummaryGame}/>
          <Route path="/summaryPLN" component={SummaryPLN}/>
          <Route path="/summaryPDAM" component={SummaryPDAM}/>
        </Switch>
      </div>
      <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;