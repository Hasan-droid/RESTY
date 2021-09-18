'use strict'
import React, { useState } from 'react';

import './form.scss';



function Form(props){
  let [TextArea , setTextArea]=useState(false);
  let [methodType , setMethodType]=useState("get")
  let [URL , setUrl]=useState("")
  let [body , setBody]=("")

  let  handleSubmit = e => {
        e.preventDefault();
        
        const formData = {
          method:methodType,
          url:URL,
          body
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
        setMethodType( e.target.id);
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
        console.log("e.target.value" , e.target.value)
        if(e.target.value )
          return setUrl(e.target.value)
          return setUrl("")
      }

      const handleBody=(e)=>{
         setBody(e.target.value)
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
              <span id="post" onClick={handlePost} onChange={handleBody}>POST</span>
              <span id="put" onClick={handlePut}  onChange={handleBody}>PUT</span>
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