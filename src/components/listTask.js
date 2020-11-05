import React, { useState } from 'react';
import { connect } from 'react-redux';
const x = (state) => {
    return { List: state.task }
}
const y = (dispatch) => {
    return {
        Change: (id) => {
            dispatch({ type: "Edit_Task", value: id})
        },
        delete: (id) => {
            dispatch({ type: 'Delete_Input', id: id })
        },
        blockOut: (id) => {
            dispatch({ type: 'blockOut_Task', id: id })
        }
    }
}
const ListTask = (props) => {
        let [edit, setEdit] = useState(false)
        let [description, setdescription] = useState("")

        // const Filter =({filtred,children})=>{
        //     return (<p onClick={e=>e.preventDefault(), filtred}> {children}</p>)
        //     }
      
        //     const Work=(List,filter)=>{
        //         switch (filter)
        //       {case 'All': return List
        //        case 'Completed' :return (List.filter(el=>el.completed))
        //        case 'Uncompleted': return (List.filter(el=>!el.completed))
        //       }
        //     }
        return ( < div >
        {/* <div className = "select" >
      <p> {''}
        <Filter filtred = "All" > All </Filter> {''} 
        < Filter filtred = "Completed" > Completed </Filter> {''}
         <Filter filtred = "Uncompleted" > Uncompleted </Filter>  </p> 
          </div> */}
        
         {props.List.map(el => < div className = "list color" key = {el.id} > {
                            edit ? < input
                            type = "text"
                            placeholder = "Update your plans"
                            onChange = {(e) => setdescription(e.target.value) }
                            />:<h4 className={`text ${el.completed ? "completed":""}`}>{el.description }</h4 >}
                        <div>
                        <button onClick = {() => {
                                props.Change({ ...el, description : description});
                                setEdit(!edit);}} > { edit ? < i className = "fas fa-edit" > </i>:<i className="fas fa-edit"></i > } </button> 
                        
                        <button onClick = {() => props.blockOut(el.id) } > < i className = "fas fa-check" >
                        </i></button >
                        <button onClick = {
                            () => props.delete(el.id) } > < i className = "fas fa-trash" > </i></button > </div>
                            </div>)} 
                            </div> )   
                    }

                    export default connect(x, y)(ListTask);