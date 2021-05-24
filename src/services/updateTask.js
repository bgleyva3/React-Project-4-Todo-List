const baseUrl = "https://todos-go.herokuapp.com/api/todos"

const updateTask = (task) => {
    const promise = fetch(baseUrl+"/"+task.id, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: new Headers().set("content-type", "application/json")
    })
    return promise.then(res => res.json())
}

export default updateTask