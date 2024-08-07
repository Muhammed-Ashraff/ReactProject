import './App.css';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import HandlingEvent from './Components/HandlingEvent';
import HandlingEventOnChange from './Components/HandlingEventOnChange';
import HandlingSubmitEvent from './Components/HandlingSubmitEvent';
import JavascriptsCondition from './Components/JavascriptsCondition';
import TernaryOperator from './Components/TernaryOperator';
import LogicalOperator from './Components/LogicalOperator';
import ToggleMessage from './Components/ToggleMessage';
import Form from './Components/Form';


//app.js is the root component that wrap other component and they must be imported into the app.js
function App() {
  return (
    <div className="App">
      <p>Hello </p>
      <Header/>
      <AboutUs/>
      <ParentComponent/>
      <Counter/>
      <Footer/>
      <HandlingEvent/>
      <HandlingEventOnChange/>
      <HandlingSubmitEvent/>
      <JavascriptsCondition/>
      <TernaryOperator/>
      <LogicalOperator/>
      <ToggleMessage/>
      <Form/>
      
            
    </div>
  );
}

export default App;
