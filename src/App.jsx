import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Productos from "./pages/productos";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import NotFound from "./pages/NotFound/NotFound";
import Category from './pages/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactanos from './pages/Contactanos';
import './app.css'
import Nosotros from './pages/Nosotros';
import { CartProvider } from './state/Cart.context';
import Cart from './pages/Cart/Cart';
import Loader from './components/loader/loader';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
          <Routes>
            <Route element={<NavBar />}>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/detalle/:id" element={<DetalleProducto />} />
              <Route path='/category/:id' element={<Category />} />
              <Route path='/contactanos' element={<Contactanos />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
