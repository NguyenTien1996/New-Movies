import React,{useState} from 'react';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';

const AppTodo = (props) => {
    let [nameTodo,setNameTodo] = useState('');
    let [idTodo,setIdTodo] = useState(1);
    let [listTodo,setListTodo] = useState([]);

    const changeInput = (event) =>{
        let val = event.target.value;
        setNameTodo(val);
    }
    const addTodo = (nameWork = '') =>{
        if(nameWork.length > 0){
            setIdTodo(idTodo + 1);
            setNameTodo('');
            setListTodo([...listTodo,{
                id:idTodo,
                name:nameWork,
                done:false
            }]);
            setNameTodo('');
        }
    }
   return (
     <>
        <AddTodo 
            type="text"
            typeButton="button"
            change={changeInput}
            add={addTodo}
            value={nameTodo}
        >
            Add
        </AddTodo>
        <ListTodo todo={listTodo}/>
     </>
   );
}
export default AppTodo;