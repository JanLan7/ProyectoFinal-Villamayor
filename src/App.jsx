import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeContainer from './components/HomeContainer'
import ContactContainer from './components/ContactContainer'
import ProductDetail from './components/ProductDetail'
import ErrorBoundary from './components/ErrorBoundary'
import CartProvider from './context/CartContext'
// Importa la configuración de Firebase
import './firebaseConfig'

function App() {
      return (
        <CartProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <NavBar/>
            </ErrorBoundary>
            <Routes>
              <Route exact path="/"element={<HomeContainer/>}/>
              <Route exact path="/category/:catId"element={<HomeContainer/>}/>
              <Route exact path="/contact"element={<ContactContainer/>}/>
              <Route exact path="/product/:id"element={<ProductDetail/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
  )
};

export default App;
