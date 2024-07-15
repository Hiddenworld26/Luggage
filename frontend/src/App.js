import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MenuScreen from './screens/MenuScreen/MenuScreen';
import MenuScreen2 from './screens/MenuScreen2/MenuScreen2';
import ShopScreens from './screens/ShopScreens/ShopScreens';
import UserInfo from './screens/UserInfo/UserInfo';
import ProductPage from './screens/ProductPage/ProductPage';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import About from './screens/AboutScreen/About';
import CommonMenuShopScreen from './screens/CommonMenuShopScreen/CommonMenuShopScreen';
import ShopPage2 from './screens/ShopPage/Shoppage2';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import NoScroll from './Components/NoScroll/NoScroll'; // Import NoScroll

function App() {
  return (
    // <div style={{ overflowX: 'hidden' }}> 
    <BrowserRouter>
       {/* Render NoScroll component */}
      <ScrollToTop />
      <MainContent />
    </BrowserRouter>
    // </div>
  );
}

function MainContent() {
  const location = useLocation();
  const noFooterRoutes = ['/menu2'];

  const shouldRenderFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<UserInfo />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/mens" element={<CommonMenuShopScreen component={<ShopPage2 />} />} />
          <Route path="/menu2" element={<CommonMenuShopScreen component={<MenuScreen2 />} />} />
          <Route path="/womens" element={<CommonMenuShopScreen component={<ShopPage2 />} />} />
          <Route path="/footwear" element={<CommonMenuShopScreen component={<ShopPage2 />} />} />
        </Routes>
      </main>
      {shouldRenderFooter && <Footer />}
    </>
  );
}

export default App;
