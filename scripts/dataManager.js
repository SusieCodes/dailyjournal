export const getPosts = () => {
    return fetch("http://localhost:3333/posts")
    .then(response => response.json())
}

export const createPost = postObj => {
    console.log("createPost has been initiated");
    return fetch("http://localhost:3333/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)})
        .then(response => response.json())
}