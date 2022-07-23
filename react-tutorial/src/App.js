import './App.css';
import FunctionalEx from './components/FunctionalEx';
import ClassEx from './components/ClassEx';
import JSXEx from './components/JSXEx';
import FunctionalProps from './components/FunctionalProps';
import ClassState from './components/ClassState';
import CallbackFunction from './components/CallbackFunction';

function App() {
  return (
    <div className="App">
      <CallbackFunction/>

      <ClassState/>
      <FunctionalProps name = "mani"/>
      <FunctionalProps name = "Mahith">
        
      </FunctionalProps>
      <FunctionalProps name = "Mohith"/>
      <FunctionalEx/>
      <ClassEx/>
      <JSXEx/>
    </div>
  );
}

export default App;
