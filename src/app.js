import React, { useState , useEffect, useReducer } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footers from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { render } from '@testing-library/react';
import axios from 'axios';
import History from './components/history/index';
import reducer from './components/history/reducer';

const intialState={
  historyData:[]
}

 export const ACTIONS={
  ADD_HISTORY:'add-history',
  REQUEST_HISTORY:'request-history'
}



function  App(props) {


  let [dataRes , setData]=useState('');
  let [requestParams , setRequestParams]=useState({});
  let [Render , setRender]=useState("");
  let [history , dispatch]=useReducer(reducer , [])



  useEffect(()=>{
    if(requestParams.url){
      console.log("[[[[[[[[[[[[[requestParams]]]]]]]]]]]" , requestParams)
     const getData=async()=>{
       const revicedData=await axios({
         method:requestParams.method,
         url:requestParams.url,
         body:requestParams.body
         
       })
       console.log("recivedData" , revicedData.method)
       setData(revicedData)
       if(!requestParams.idx)
         dispatch({type:ACTIONS.ADD_HISTORY , payload:requestParams})
     }
     getData();
    
    
   
    }
    console.log("++++++++++ data" , dataRes)
  
  },[requestParams])

  const callApi = (requestParams) => {
    // mock output
 
      const data = {
        url:'fake url',
        count: 2,
        data: [
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
      };
       setData(data);
      setRequestParams(requestParams);
      if(requestParams.url =="")
      dispatch({type:ACTIONS.ADD_HISTORY , payload:requestParams})
     
  
  



  }

  // useEffect(() => {
  //   setRender(`method : ${requestParams.method}, URL : ${requestParams.url}`);
  // },[requestParams] );
  console.log("rrrrrrrr",{dataRes})

    return (
     
      <React.Fragment>
        <Header />
        {Render &&(
  <div>useEffect Render {Render}</div>
        )

        }
      
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <History data={history} dispatch={dispatch} handleApiCall={callApi} />
        <Results data={dataRes} />
       
         
        
           
         
        <Footers />
      </React.Fragment>
    );
  
}

export default App;