import './App.css'
import Experience from './components/Experience';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ReachOut from './components/ReachOut';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
 
  return (
    <div className='font-rubik'> 
      <Header/>
      <HomePage/>
      {/* <HomeFooter/> */}
      <Services/>
      <Skills/>
      <Experience/>
      <ReachOut/>
    </div>
  )
}

export default App;
