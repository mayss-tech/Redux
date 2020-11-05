import {List} from './listReducer.js';
const TaskReducer=(state=List,action)=>{
if (action.type =='Add_Input'){
return [...state,action.value]
}
if (action.type =='Delete_Input'){
    return state.filter(el => el.id != action.id)
    }
    if (action.type=="Edit_Task") {
        let newList=[...state]
        let index=-1
          for(let i=0;i<newList.length;i++){
          index++;
          if(newList[i].id==action.value.id){ break;}
          }
          if (index != -1 ) {   newList[index] =action.value
          return newList;
          }
          }
if (action.type == 'blockOut_Task'){
  return state.map((el)=>{
    if(el.id===action.id){
      return {...el, completed: !el.completed}
    };
    return el;
  })
}
return state;
}
export default TaskReducer;

