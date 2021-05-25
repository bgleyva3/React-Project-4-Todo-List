

const TodoItem = ({task, student, handleDelete, isCompleted, handleUpdate}) => {
    
    return(
        <div className="row margins ">
            <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
            <div className="col-10 col-sm-10 col-md-8 col-lg-6">
                <div className="row">
                    <div className="col-12 col-sm d-flex align-items-center justify-content-center task-box no-overflow fix-center">
                        <p className="mb-0"><span className="task-text">"{task}"</span> <span className="student-text">by {student}</span></p>
                    </div>
                    <div className="col-12 col-sm-auto separate align-self-center no-padding margin-buttons">
                        {
                            isCompleted ? 
                                <button className="btn btn-success" onClick={handleUpdate} >Completed</button>
                                :
                                <button className="btn btn-warning" onClick={handleUpdate} >Pending</button>
                        }
                        <button className="btn btn-danger" onClick={handleDelete} ><i className="fas fa-trash"></i></button>
                    </div>
                </div>
                
            </div>
            <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
        </div>
        
    )
}

export default TodoItem