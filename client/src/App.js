import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './components/about/About';
import Header from './components/home/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
const  App = () => {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/education' component={Education}/>
      <Route exact path='/portfolio' component={Portfolio}/>
    </Router>
  );
}

export default App;
