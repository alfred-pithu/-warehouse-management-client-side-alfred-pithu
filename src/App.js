import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddItems from './components/AddItems/AddItems';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyItems from './components/MyItems/MyItems';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
