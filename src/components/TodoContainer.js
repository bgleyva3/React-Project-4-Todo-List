import {useEffect, useState} from "react"
import CreateTodo from "./CreateTodo"
import TodoItem from "./TodoItem"
import create from "../services/create"
import read from "../services/read"
import deleteTask from "../services/deleteTask"
import updateTask from "../services/updateTask"
import Loading from "./Loading"


const TodoContainer = () => {

    const [data, setData] = useState([]);
    const [task, setTask] = useState([])
    const [updateDeleted, setUpdateDeleted] = useState(null)
    const [update, setUpdate] = useState(null)
    const [loading, setLoading] = useState(false)
    const [fetchDone, setFetchDone] = useState(false)

    useEffect(() => {
        setLoading(true)
        read().then(res => setData(res.todos.reverse()))
              .then(() => setLoading(false))
              .then(() => setFetchDone(true))
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
            {loading && <Loading/>}
            <CreateTodo handleCreate={handleCreate} />
            {data[0] ? list : fetchDone && <h2 className="no-tasks-color">Start adding any task</h2>}
        </div>
    )
}

export default TodoContainer