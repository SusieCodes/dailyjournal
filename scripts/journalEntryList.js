/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
// import { getJournalEntries } from "./journalData.js"
// import { JournalEntryComponent } from "./journalEntry.js"

// const entryLog = document.querySelector("#entryLog");

// export const EntryListComponent = () => {

//     const allEntries = getJournalEntries();
//     addEntriesToDom(allEntries);

// }

// const addEntriesToDom = (arrayOfEntries) => {

//     let entryHTMLRep = "";
//     for (const singleEntry of arrayOfEntries) {
//         entryHTMLRep += JournalEntryComponent(singleEntry);
//     }
    
//     entryLog.innerHTML += entryHTMLRep
// }


import { Post } from "./post.js";

export const postList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += Post(postObject)
		}
		return postHTML;
	
}