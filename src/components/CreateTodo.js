import {useForm} from "react-hook-form"

const CreateTodo = ({handleCreate}) => {

    const {handleSubmit, register} = useForm()

    return (
        <form className="row form-margins" onSubmit={handleSubmit(handleCreate)} >
            <div className="col-sm-1"></div>
            <input className="col col-sm no-border" placeholder="Task" {...register("task", { required: true })} ></input>
            <input className="col col-sm-2 no-border separate" placeholder="Student" {...register("student", { required: true })} ></input>
            <button className="col-sm-auto btn btn-success more-size" type="submit" ><i class="fas fa-plus"></i></button>
            <div className="col-sm-1"></div>
        </form>
    )
}

export default CreateTodo




