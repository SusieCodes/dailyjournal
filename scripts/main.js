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