
import React from 'react';
import './results.scss'

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

function Results(props){
    return(
        <>
        <section>
         <h2 style={{color:'red' , textDecoration:'underline'}}>{props.data ? "results" : null}</h2>   
         <pre>{props.data ? JSON.stringify(props.data.data, undefined, 2) : null}</pre>
      </section>
      </>
    )
}

export default Results;