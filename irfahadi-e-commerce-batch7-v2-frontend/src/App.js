import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './pages/home'
import Cart from './pages/cart'
import Orders from './pages/orders'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Home from './pages/home/index'
import Province from './pages/province/province'
import City from './pages/city/city'
import Users from './pages/users/users'
import Kecamatan from './pages/kecamatan/kecamatan'
import Kodepos from './pages/kodepos/kodepos'
import MyOrders from './pages/orders/myOrders'
import Advertising from './pages/advertising'
import TambahProduct from './pages/product/tambahProduct';
import Product from './pages/product/product';
import ProductSaya from './pages/product/productSaya';
import ProductCate from './pages/category/index';
import Brand from './pages/Master_prod/brand/brand';
import Category from './pages/Master_prod/Category/category';
import Condition from './pages/Master_prod/condition/condition';
import Footer from './components/footer/index';

function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <div className="container mx-auto sm:px-4 pt-40 lg:pt-20 pb-10">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/prodcate" component={ProductCate} exact />
          <Route path="/brand" component={Brand} exact />
          <Route path="/condition" component={Condition} exact />
          <Route path="/category" component={Category} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/province" component={Province} exact />
          <Route path="/city" component={City} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/kecamatan" component={Kecamatan} exact />
          <Route path="/kodepos" component={Kodepos} exact />
          <Route path="/myorders" component={MyOrders}/>
          <Route path="/advertising" component={Advertising}/>
          <Route path="/product" component={Product} />
          <Route path="/productsaya" component={ProductSaya}/>
          <Route path="/tambahproduct" component={TambahProduct} />
        </Switch>
      </div>
      <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;
