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

function App() {
  return (
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalle/:id" element={<DetalleProducto />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/contactanos' element={<Contactanos />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
