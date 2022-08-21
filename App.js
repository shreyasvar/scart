// import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
// import Nav1 from './component/Nav1';
// import Mid from './component/Mid';
// import Mid1 from './component/Mid1';
// import Mid2 from './component/Mid2';
import Ajio from './component/Ajio';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Grocery from './component/Grocery';
import Furniture from './component/Furniture';
import BuyNow from './component/BuyNow';
// import Grocery from './component/Grocery';



function App() {
  return (
       <>
       <Router>
       <Nav></Nav>
       <Routes>
       <Route path='/'element={<Ajio/>}/>
       <Route path='/grocery'element={<Grocery/>}/>
       <Route path='/furniture'element={<Furniture/>}/>
       <Route path='/buynow'element={<BuyNow/>}/>
       </Routes>
       </Router>
  
       </>
  );
}

export default App;


// rendering
// 1.element variable
// 2.if else
// 3.double and operator(shortcircuit)
// 4.conditional operator