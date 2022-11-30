import './css/style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import CategoriesId from './components/Categories/CategoriesId';
import About from './components/About/About';
import Error from './components/Error';
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
  ]
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Header data={site} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName" element={<CategoriesId />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer data={site} />
      </BrowserRouter>
    </>
  );
}

export default App;
