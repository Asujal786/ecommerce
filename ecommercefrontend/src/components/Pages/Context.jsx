import React, { useState } from 'react';
import { createContext } from 'react';
import { Provider } from 'react-redux';

function Context(props) {

 const [ number, SetNumber]=useState(0);
    const context=createContext();
    return (
        <div>
            <Context>
                <Provider value={number}>

            <p>{number} </p>
         
            <button onClick={(number)=>{number+1}}> + </button> 
            <button onClick={(number)=>{number-1}}> - </button>     
            </Provider>     
            </Context>

         
        </div>
    );
}

export default Context;