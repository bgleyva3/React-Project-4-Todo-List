import {useForm} from "react-hook-form"

const CreateTodo = ({handleCreate}) => {

    const {handleSubmit, register} = useForm()

    return (
        <div className="row">
            <div className="col-1 col-sm-1"></div>
            <div className="col-10 col-sm-10 no-padding">
                <form className="row form-margins" onSubmit={handleSubmit(handleCreate)} >
                    <input className="col col-sm no-border" placeholder="Task" {...register("task", { required: true })} ></input>
                    <input className="col col-sm-2 no-border margin-left" placeholder="Student" {...register("student", { required: true })} ></input>
                    <button className="col-12 col-sm-auto btn btn-success more-size separate" type="submit" ><i className="fas fa-plus"></i></button>
                </form>
            </div>
            <div className="col-1 col-sm-1"></div>
        </div>
    )
}

export default CreateTodo




