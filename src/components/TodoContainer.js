import {useEffect, useState} from "react"
import CreateTodo from "./CreateTodo"
import TodoItem from "./TodoItem"
import create from "../services/create"
import read from "../services/read"
import deleteTask from "../services/deleteTask"
import updateTask from "../services/updateTask"


const TodoContainer = () => {

    const [data, setData] = useState([]);
    const [task, setTask] = useState([])
    const [updateDeleted, setUpdateDeleted] = useState(null)
    const [update, setUpdate] = useState(null)

    useEffect(() => {
        read().then(res => setData(res.todos.reverse()));
    }, [task, updateDeleted, update]) 


    const handleCreate = (e, reset) =>{
        reset()
        create(e).then(res => {
            setTask(e)
        })
    }

    const handleDelete = (id) => {
        deleteTask(id).then(res => (
            setUpdateDeleted(prev => !prev),
            console.log(res)
        ))
    }

    const handleUpdate = (task) => {
        task.isCompleted = !task.isCompleted
        updateTask(task).then(res => (
            setUpdate(prev => !prev),
            console.log(res)
        ))
    }

    const list = data.map(elem => (
        <TodoItem id={elem.id} handleUpdate={() => handleUpdate(elem)} handleDelete={() => handleDelete(elem.id)} key={elem.id} task={elem.task} student={elem.student} isCompleted={elem.isCompleted} />
    ))

    return(
        <div>
            <CreateTodo handleCreate={handleCreate} />
            {list}
        </div>
    )
}

export default TodoContainer