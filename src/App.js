import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <Intro/>
      <Home/>
      <Experiences/>
      <Contact/>
    </div>
  );
}

export default App;
