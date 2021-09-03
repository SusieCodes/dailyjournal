export const getPosts = () => {
    return fetch("http://localhost:3333/posts")
    .then(response => response.json())
    // .then(parsedResponse => {
    //     // do something with response here
    //     return parsedResponse;
    // })
}