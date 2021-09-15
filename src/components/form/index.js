'use strict'
import React, { useState } from 'react';

import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

function Form(props){
  let [TextArea , setTextArea]=useState(false);
  let [methodType , setMethodType]=useState("get")
  let [URL , setUrl]=useState("")

  let  handleSubmit = e => {
        e.preventDefault();
        const formData = {
          method:methodType,
          url:URL,
        };
        props.handleApiCall(formData);
      }

      const handlePost =(e)=>
      {
       setMethodType(e.target.id)
        console.log(e.target.id)
        setTextArea(true);
      }
      
      const handleGet=(e)=>{
        e.preventDefault();
        methodType=e.target.id;
        setTextArea(false);
      }

      const handlePut=(e)=>{
        setMethodType( e.target.id);
        setTextArea(true);
      }

      const handleDelete=(e)=>{
       setMethodType(e.target.id)
        setTextArea(false);
      }

      const handleURL=(e)=>{
           setUrl(e.target.value)
      }

      return (
        <>
          <form onSubmit={handleSubmit}>
            <label  >
           
              <span>URL: </span>
              <input name='url'id="url" type='text' onChange={handleURL} />
              <button   type="submit">GO!</button>
            </label>
            <label className="methods">
              <span id="get" onClick={handleGet}>GET</span>
              <span id="post" onClick={handlePost}>POST</span>
              <span id="put" onClick={handlePut}>PUT</span>
              <span id="delete" onClick={handleDelete}>DELETE</span>
            </label>
            {
              TextArea && (
                 <textArea rows="15" cols="35"></textArea>
              
              )
            }
          </form>
        </>
      );

}

export default Form;