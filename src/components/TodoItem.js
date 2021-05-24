

const TodoItem = ({task, student, handleDelete, isCompleted, handleUpdate}) => {
    
    return(
        <div>
            <h2>Task: "{task}"</h2>
            <h3>Student: {student}</h3>
            {task ? 
                <h3>isCompleted?: {isCompleted.toString()}</h3>
                :
                <div></div>
            }
            <button onClick={handleUpdate} >isCompleted?</button>
            <button onClick={handleDelete} >X</button>
        </div>
    )
}

export default TodoItem