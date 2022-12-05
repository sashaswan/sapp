import './css/style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Categories from './components/Categories/Categories';
import CategoriesId from './components/Categories/CategoriesId';
import About from './components/About/About';
import Error from './components/Error';
import goods from './goods.json';
import Goods  from './components/Goods/Goods';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const site = {
  site_name: "Header",
  site_title: "Title",
  nav: [
    { "link": "/", "text": "Home" },
    { "link": "/about", "text": "About" },
    { "link": "/categories", "text": "Categories" },
    { "link": "/goods", "text": "Goods" },
  ]
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Header data={site} />
        <Routes>
          <Route exact path="/" element={<Main dataP1={88}/>} />
          <Route path="/about" element={<About />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName" element={<CategoriesId />} />
          <Route path="/goods" element={<Goods goods={goods}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
