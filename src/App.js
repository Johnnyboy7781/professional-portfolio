import './assets/css/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
