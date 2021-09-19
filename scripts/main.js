// import { EntryListComponent } from "./journalEntryList.js"

// EntryListComponent();

import { postList } from "./postList.js" 
import { getPosts } from "./dataManager.js"


const showPostList = () => {
	const postElement = document.querySelector(".post__list");
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

const applicationElement = document.getElementById("entryLog");

console.log("appElement value is: ", applicationElement);

applicationElement.addEventListener("click", (event) => {
        const splitId = parseInt(event.target.id.split("--")[1]);
        const strSplitId = splitId.toString();
        if (splitId) {
            console.log(splitId)
            alert("You clicked on post number " + strSplitId)
        } else {
            console.log("failed, splitId is - " + splitId)
        }


	// if (event.target.id.startsWith("entry--")){
        
    //     let postBg = event.target.id.split("--")[1];
    //     postBg = postBg.toString();
    //     console.log("your clicked on post number ", event.target.id.split("--")[1])
	// 	alert("You clicked on post number " + postBg)
    // } else if (event.target.id === "date") {
    //     let postDate = event.path[1].id.split("--")[1];
    //     postDate = postDate.toString();
    //     console.log("You clicked on post number ", event.path[1].id.split("--")[1])
    //     alert("You clicked on post number " + postDate)
	// } else if (event.target.id === "concept") {
    //     let postConcept = event.path[1].id.split("--")[1];
    //     postConcept = postConcept.toString();
    //     console.log("You clicked on post number ", event.path[1].id.split("--")[1])
    //     alert("You clicked on post number " + postConcept)
	// } else if (event.target.id === "entry") {
    //     let postEntry = event.path[1].id.split("--")[1];
    //     postEntry = postEntry.toString();
    //     console.log("You clicked on post number ", event.path[1].id.split("--")[1])
    //     alert("You clicked on post number " + postEntry)
	// } else if (event.target.id === "mood1" || event.target.id === "mood2") {
    //     let postMood = event.path[2].id.split("--")[1];
    //     postMood = postMood.toString();
    //     console.log("You clicked on post number ", event.path[2].id.split("--")[1])
    //     alert("You clicked on post number " + postMood)
    //  } // else if (event.target.id === "mood2") {
    // //     let postMood2 = event.path[2].id.split("--")[1];
    // //     postMood2 = postMood2.toString();
    // //     console.log("You clicked on post number ", event.path[2].id.split("--")[1])
    // //     alert("You clicked on post number " + postMood2)
    // // } 
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