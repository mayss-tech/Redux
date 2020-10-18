import React,{useState} from 'react';
import {connect} from 'react-redux';
const x=(state)=>{
    return{List:state.task}
}
const y=(dispatch)=>{
    return{
        Change:(newTask)=>{
            dispatch({type:"Edit_Task",value:newTask})
        },
        delete:(id)=>{
            dispatch({type:'Delete_Input',id:id})
        },
        blockOut:(id)=>{
            dispatch({type:'blockOut_Task',id:id })
        }
    }
}
const ListTask=(props)=>{
    const[edit,setEdit]=useState(false)
    const[description,setdescription]=useState("")
    
    return (<div > 
        {props.List.map(el=><div className="list color" key={el.id}> 
        {edit? < input className="input2" type="text" placeholder="Update your plans" 
        value={description}
        onChange={(e)=>setdescription(e.target.value)} 
        />:<h4 className={`text ${el.completed ? "completed":""}`}>{el.description }</h4>  }
        <div>
        <button  onClick={()=> { props.Change({...el,description:description});
        setEdit(!edit); }}> {edit? "Update":"Edit"}</button>
        <button  onClick={ ()=> props.blockOut(el.id)}><i className="fas fa-check">
            </i></button> 
        <button  onClick={()=>props.delete(el.id)}><i className="fas fa-trash"></i></button></div>
        </div>)}
        </div> )   
}

export default connect(x,y) (ListTask);