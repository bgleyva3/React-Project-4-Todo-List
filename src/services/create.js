const baseUrl = "https://todos-go.herokuapp.com/api/todos"

const create = newTask => {
    const promise = fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: new Headers().set("content-type", "application/json")
    })
    return promise.then(res => res.json())
}

export default create

