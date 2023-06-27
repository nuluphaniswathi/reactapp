
import { todoContext } from "./todoContext";
import { useState } from 'react';

//create function and export 
function Store({ children }) {
    //state
    let [todos, setTodos] = useState([]);
    //provide the context to root comp app
    return (
        <todoContext.Provider value={[todos, setTodos]}>
            {children}
        </todoContext.Provider>)



}
export default Store;