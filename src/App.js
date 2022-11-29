import './css/style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Main/Sidebar';
import Footer from './components/Footer/Footer';

const site = {
  site_name: "react test",
  site_title: "my first site with react",
  nav: [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}
function App() {

  return (
    <>
      <Header data={site} />
      <Main />
      <Sidebar />
      <Footer data={site} />
    </>
  );
}


export default App;
