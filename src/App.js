import Header from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-40 lg:pt-20">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
