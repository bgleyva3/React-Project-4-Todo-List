

const TodoItem = ({task, student, handleDelete, isCompleted, handleUpdate}) => {
    
    return(
        <div className="row margins ">
            <div className="col-sm"></div>
            <div className="col col-sm-10">
                <div className="row">
                    <div className="col col-sm task-box no-overflow">
                        <p><span className="task-text no-overflow">"{task}"</span> <span className="student-text">by {student}</span></p>
                    </div>
                    <div className="col col-sm-auto align-self-center no-padding">
                        {
                            isCompleted ? 
                                <button className="btn btn-success" onClick={handleUpdate} >Completed</button>
                                :
                                <button className="btn btn-warning" onClick={handleUpdate} >Pending</button>
                        }
                        <button className="btn btn-danger" onClick={handleDelete} ><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                
            </div>
            <div className="col-sm"></div>
        </div>
        
    )
}

export default TodoItem