export const getPosts = () => {
    return fetch("http://localhost:3333/posts")
    .then(response => response.json())
}