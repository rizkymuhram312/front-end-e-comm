import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import prodCate from './pages/category';
import formBrand from './pages/Master_prod/brand/brand';
import listcate from './pages/Master_prod/Category/category';
import listcond from './pages/Master_prod/condition/condition';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container bg-background mx-auto px-4 mt-40 lg:mt-20">
        
        <Switch>
          {/* <Route path="/sidebarmenu" component={data} /> */}
          <Route path="/" component={Home} exact />
          <Route path="/productCate" component={prodCate} exact />
          <Route path="/brand" component={formBrand} exact />
          <Route path="/category" component={listcate} exact />
          <Route path="/conditon" component={listcond} exact />
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
