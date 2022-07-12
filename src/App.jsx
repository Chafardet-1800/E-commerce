
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import PurchasesScreen from './components/Purchases/PurchasesScreen'
import CartScreen from './components/Cart/CartScreen'
import './App.css'
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Product/ProductScreen'

function App() {

  return (
    <div className="App">

      <HeaderScreen/>

      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<PurchasesScreen/>}/>
          <Route path='/cart' element={<CartScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
