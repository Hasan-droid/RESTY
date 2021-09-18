import React from 'react'

import { App, ACTIONS } from '../../app'



export default function History({ data, dispatch, handleApiCall }) {
    let handleCall = async (item, idx) => {

        const info = {
            url: item.url,
            method: item.method,
            idx: idx
        }
        await handleApiCall(info)

    }
    return (
        <div>
     <h2 style={{color:'blue' , textDecoration:'underline'}}>{data.length >=1 ? <p>history</p> : null}</h2>
            {data.length >= 1 && (
               
                data.map((items, idx) => {
                    console.log("history items ````````````````", items)
                    if (items.url == "") { items.url = "fake " }
                  
                    return (
                        
                        <>

                            {/* send this data back to app.js OR get 
                            dispach function here to get the data and call
                            it on app.js*/}

                            <br /><br />

                            url {items.url} method {items.method} {idx}
                            <button onClick={() => handleCall(items, idx)}> request</button>
                            {/* props.dispatch({type: REQUEST_HISTORY , payload:items.url}) */}
                        </>
                    )
                }


                )
            )

            }

        </div>
    )
}
