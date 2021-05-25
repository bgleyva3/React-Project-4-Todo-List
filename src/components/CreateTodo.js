import {useForm} from "react-hook-form"

const CreateTodo = ({handleCreate}) => {

    const {handleSubmit, register, reset} = useForm()

    return (
        <div className="row">
            <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
            <div className="col-10 col-sm-10 col-md-8 col-lg-6 no-padding">
                <form className="row form-margins" onSubmit={handleSubmit((e) => handleCreate(e,reset))} >
                    <input className="col col-sm no-border border-radius" placeholder="Task" {...register("task", { required: true })} ></input>
                    <input className="col col-sm-2 no-border margin-left border-radius" placeholder="Student" {...register("student", { required: true })} ></input>
                    <button className="col-12 col-sm-auto btn btn-success more-size separate" type="submit" ><i className="fas fa-plus"></i></button>
                </form>
            </div>
            <div className="col-1 col-sm-1 col-md-2 col-lg-3"></div>
        </div>
    )
}

export default CreateTodo




