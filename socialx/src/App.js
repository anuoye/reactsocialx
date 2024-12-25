import './App.css';
// import Download from './download/Download';
// import Faq from './faq/Faq';
// import Features from './features/Features';
// import Footer from './footer/Footer';
// import Header from './header/Header';
// import Navbar from './navbar/Navbar';
// import Subscribe from './subscribe/Subscribe ';

import { Download, Faq , Features, Footer, Header, Navbar, Subscribe } from "./components"

function App() {
  return (
    <main>
      <header className="header-bg">
      <Navbar/>
      <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>

      
    </main>
  );
}

export default App;
