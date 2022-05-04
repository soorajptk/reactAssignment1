import './App.css';
import Home from './pages/Home';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header'
import Links from './components/links/Links';

function App() {
  return (
    <main>
    <Header/>
    <Links/>
    <Home/>
    <Footer/>
    </main>
    );
}

export default App;
