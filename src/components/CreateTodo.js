import {useForm} from "react-hook-form"

const CreateTodo = ({handleCreate}) => {

    const {handleSubmit, register} = useForm()

    return (
        <form onSubmit={handleSubmit(handleCreate)} >
            <input placeholder="Task" {...register("task", { required: true })} ></input>
            <input placeholder="Student" {...register("student", { required: true })} ></input>
            <button type="submit" >Create</button>
        </form>
    )
}

export default CreateTodo




