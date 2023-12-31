import "./App.css";
// import Navbar from "./components/Navbar";
// import Footers from "./components/Footers";
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./screens/Login";
// import '/node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '/node_modules/bootstrap-dark-5/dist/js/bootstrap.bundle';
// import '/node_modules/bootstrap-dark-5/dist/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import {CartProvider} from './components/ContextReducer'


function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element= {<Home/>}/>
          <Route exact path = "/login" element= {<Login/>}/>
          <Route exact path = "/creatuser" element= {<Signup/>}/>
          <Route exact path = "/myOrder" element= {<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
