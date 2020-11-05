import React, { useState } from 'react';
import { connect } from 'react-redux';

const InputTask = (props) => {
    let [description, setDescription] = useState("")
 
      
    return ( < div className = "block1" >
        <input className = "input"
        type = "text"
        placeholder = "What are your plans for today?"
        onChange = {
            (e) => setDescription(e.target.value)
        }
        />    
        < button className = "btn"
        onClick = {
            () => props.Add({ id: Math.floor(Math.random() * 1000), description: description })
        } > <i className="fas fa-plus-square"></i></button >
<div >
<select className="select">
    <option>All</option>
    <option>Completed</option>
    <option>Uncompleted</option>
</select></div>


          </div > 
          
          
          );
}
const y = (dispatch) => {
    return {
        Add: (newTask) => {
            dispatch({ type: 'Add_Input', value: newTask })
        }
    }
}

export default connect(null, y)(InputTask);