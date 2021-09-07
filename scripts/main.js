// import { EntryListComponent } from "./journalEntryList.js"

// EntryListComponent();

import { postList } from "./postList.js" 
import { getPosts } from "./dataManager.js"


const showPostList = () => {
	const postElement = document.querySelector(".post-list");
	getPosts().then((allPosts) => {
		postElement.innerHTML = postList(allPosts);
	})
}

const startJournal = () => {
    showPostList();
}

startJournal();


// const postClick = () => {
//     console.log("You clicked on a journal entry ");
// }

const applicationElement = document.getElementById("entry--${entryObj.id}");

console.log("appElement value is: ", applicationElement);

applicationElement.addEventListener("click", (event) => {
    console.log("event is: ", event);
    console.log("event target id is: ", event.target.id)
    console.log("event current target id is: ", event.currentTarget.id)
	if (event.target.id.startsWith("entry")){
		console.log("post id is: ", event.target.id.split("--")[1])
	} else if (event.target.id.startsWith("my")) {
        console.log("post id is: ", event.currentTarget.id.split("-")[1])
    }
})


// if (event.target.id.startsWith("edit")){
//     console.log("post clicked to edit", event.target.id.split("--"))
//     console.log("the id is", event.target.id.split("--")[1])

/* <button id="1" onClick="reply_click(this.id)">B1</button> */
/* <button id="2" onClick="reply_click(this.id)">B2</button> */
/* <button id="3" onClick="reply_click(this.id)">B3</button> */

/* <script type="text/javascript">
function reply_click(clicked_id)
{
    alert(clicked_id);
} */