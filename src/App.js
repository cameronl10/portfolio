import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Contact from './components/contact';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Intro/>
      <Home/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
