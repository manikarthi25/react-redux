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

function App() {
  return (
    <div className="App">
      <JSXEx/>
      <ClassEx/>
      <FunctionalEx/>
      <hr/>
      <FunctionalProps name = "mani"/>
      <FunctionalProps name = "Mahith">
        
      </FunctionalProps>
      <FunctionalProps name = "Mohith"/>
      <FunctionalEx/>
      <ClassState/>
      <CallbackFunction/>

      <hr/>
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


    </div>
  );
}

export default App;
