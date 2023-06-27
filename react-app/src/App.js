//import axios from 'axios';
//import {useState,useEffect} from 'react';
import './App.css';
import Tasks from './components/todos/Tasks';
import Store from './context.js/Store';
// import Parent from './components/test2/Parent';
 import Form from './forms/Form';
//import FormTask from './forms/FormTask';
//import Test1  from './components/test1/Test1';
// import FormDemo from './forms/FormDemo'
//import {useState} from 'react';
// import UncontrolledFormDemo from './forms/UncontrolledFormDemo';
function App() { 
    //function to receive data from child
    return (
      
        <div>
          {/* provide stor to tasks */}
          {/* <Store>
          <Tasks/>
          </Store> */}
          {/* <UncontrolledFormDemo/> */}
          {/* <FormDemo/> */}
          <Form/>
          {/* <FormTask/> */}
          {/* <Parent/> */}
      </div>
    )


}

export default App;
