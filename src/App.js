import React  , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Card1 from './Components/card1';
import Card2 from './Components/card2';
import Card3 from './Components/card3';
import Card4 from './Components/card4';
import 'bootstrap/dist/css/bootstrap.min.css';


class  App extends Component {
  constructor(){
    super()
  }
  render() { 
    return ( 
       <div className='App'>
         <h1>CARD 1</h1>
         <Card1/>
         <h1> CARD 2</h1>
         <Card2/>
         <h1>CARD 3</h1>
         <Card3/>
         <h1>CARD 4</h1>
         <Card4/>
       </div>
     );
  }
}
 
export default App;
