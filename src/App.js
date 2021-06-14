import './App.css';
import Nav from './components/navBar.js';
import Pages from './components/Pages.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Pages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
