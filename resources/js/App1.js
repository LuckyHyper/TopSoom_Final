import React, { Component , useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import './App1.css';


/*class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
          codeB : null,
    };
  }
  setCodeB(codeB){
    console.log(codeB);
    this.setState({
      codeB : codeB
    })
  
      }

  render(){  */
    function App(){
      const [codeB, setCodeB] = useState();
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home codeB={codeB}/>} />
            <Route exact path="/scanner" element={<Scanner Codetransfer={ codeB =>setCodeB(codeB)}/>} />

        </Routes>
    </Router>
  );
}
//}
export default App;
