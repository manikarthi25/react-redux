import './App.css';
import FunctionalEx from './components/FunctionalEx';
import ClassEx from './components/ClassEx';
import JSXEx from './components/JSXEx';
import FunctionalProps from './components/FunctionalProps';
import ClassState from './components/ClassState';
import CallbackFunction from './components/CallbackFunction';
import ParentComponent from './components/ParentComponent';
import UserList from './components/UserList';
import Stylesheet from './components/Stylesheet';
import ConditionalRendering from './components/ConditionalRendering';
import FormHandling from './components/FormHandling';
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      <h1>Java Script XML</h1>
      <JSXEx/>

      <hr/>
      <h1>Class Component</h1>
      <ClassEx/>

      <hr/>
      <h1>Functional Component</h1>
      <FunctionalEx/>

      <hr/>
      <h1>Functional Component with Props</h1>
      <FunctionalProps name = "mani"/>
      <FunctionalProps name = "Mahith">        
      </FunctionalProps>
      <FunctionalProps name = "Mohith"/>
      
      <hr/>
      <h1>Class Component with State</h1>
      <ClassState/>

      <hr/>
      <h1>Callback Function in setState Method</h1>
      <CallbackFunction/>

      <hr/>
      <h1>Parent and Child Component</h1>
      <ParentComponent colorName={true} />

      <hr/>
      <h1>User List - Map</h1>
      <UserList/>

      <hr/>
      <h1>Stylesheet</h1>
      <Stylesheet/>

      <hr/>
      <h1>Conditional Rendering</h1>
      <ConditionalRendering/>

      <hr/>
      <h1>Form Handling</h1>
      <FormHandling/>

      <hr/>
      <h1>Life cycle Methods</h1>
      <LifeCycleA/>

    </div>
  );
}

export default App;
