// //import logo from './logo.svg';
// import './App.css';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import MainScreen from './screens/MainScreen';
// import StartingScreen from './screens/StartingScreen/StartingScreen';
// import MenScreen from './screens/MensScreen/MenScreen';
// import LookBook from './screens/LookBook/LookBook';
// import ShopPage from './screens/ShopPage/ShopPage';
// import ProductPage from './screens/ProductPage/ProductPage';


// function App() {
//   return (
//     <div className="App">
     
//       {/* <LookBook/> */}
      
//       {/* <MainScreen/>  */}
//       {/* <Footer/> */}

//       {/* <MenScreen/> */}
//        {/* <MainScreen/>
//       <Footer/> */}
//       {/* <Header/> */}
//       {/* <MainScreen/> */}
//       {/* <Footer/> */}

//       {/* <ShopPage/> */}

//       {/* <ProductPage/> */}

      
//       {/* <Header/>
//       <MainScreen/>
//       <Footer/> */}

//        {/* <Header/> */}
//        {/* <MainScreen/> */}

//        <Header/>
//        <MainScreen/>
//        <Footer/>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainScreen from './screens/MainScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MenuScreen from './screens/MenuScreen/MenuScreen';
import ShopPage from './screens/ShopPage/ShopPage';
import About from './screens/AboutScreen/About'
import ShopPage2 from './screens/ShopPage/Shoppage2';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/mens" element={<ShopPage2 />} />
          <Route path="/womens" element={<ShopPage />} />
          <Route path="/footwear" element={<ShopPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
