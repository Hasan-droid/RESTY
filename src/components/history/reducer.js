
 export const ACTIONS={
    ADD_HISTORY:'add-history',
    REQUEST_HISTORY:'request-history'
  }

function addNewHistory(data){
    console.log("data>>>>>>>>>",data)
    //add to the array a new payload
    
    return {url : data.url , method : data.method}
  
  }
  
  function reducer(state , action){
  
    switch(action.type)
    {
  
     case ACTIONS.ADD_HISTORY :
     return [...state , addNewHistory(action.payload) ]
  
     case ACTIONS.REQUEST_HISTORY:
      console.log("historyData" , action.payload)
     
  
       
  
    }
    console.log("------------------->",state.historyData)
  
  
  }

  export default reducer;