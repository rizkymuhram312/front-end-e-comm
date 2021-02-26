import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Orders from './pages/orders'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto px-4 mt-40 lg:mt-20">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
