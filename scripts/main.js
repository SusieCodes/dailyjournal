import { postList } from "./postList.js";
import { getPosts } from "./dataManager.js";
import { notFilledInsert } from "./modal.js";
import { createPost } from "./dataManager.js";


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

// Get the modal location
const savedLocOfModalId = document.getElementById("modalId");
savedLocOfModalId.innerHTML = notFilledInsert();
// const postClick = () => {
//     console.log("You clicked on a journal entry ");
// }

// const applicationElement = document.getElementById("entryLog");

// console.log("appElement value is: ", applicationElement);

// applicationElement.addEventListener("click", (event) => {
//         const splitId = parseInt(event.target.id.split("--")[1]);
//         const strSplitId = splitId.toString();
//         if (splitId) {
//             console.log(splitId)
//             alert("You clicked on post number " + strSplitId)
//         } else {
//             console.log("failed, splitId is - " + splitId)
//         }
// })


// Get the modal location
// const savedLocOfModalId = document.getElementById("modalId");
// savedLocOfModalId.innerHTML = notFilledInsert();
// console.log("savedLocOfModalId is saved as: " + savedLocOfModalId);

// Get the button that opens modal
const bothBtns = document.getElementById("btnId");

const span = document.getElementById("close-modal");

const formNotFilledPopUp = () => {
    console.log("formNotFilledPopUp is executing");
    savedLocOfModalId.style.display = "block";
};

const validateForm = () => {
    var a = document.forms["form"]["journalDate"].value;
    console.log("journalDate variable a is: " + a);
    var b = document.forms["form"]["concepts"].value;
    console.log("Title variable b is: " + b);
    var c = document.forms["form"]["journalEntry"].value;
    console.log("journalEntry variable c is: " + c);
    if (a == "" || b == "" || c == "") {
        // console.log("abc evaluated as at least one empty string and were saved as: " + a + " and " + b + " and " + c)
        return false;
    } else {
        // console.log("abc evaluated as no empty strings and was saved as: " + a + " and " + b + " and " + c)
        return true;
      }
}

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     savedLocOfModalId.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    savedLocOfModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == savedLocOfModalId) {
        savedLocOfModalId.style.display = "none";
    }
}

// const btnElements = document.getElementById("new-entry-btns");
  
bothBtns.addEventListener("click", event => {
event.preventDefault();
if (event.target.id === "btnId") {
    console.log("you clicked btnId")
    const returnedValOfValidateForm = validateForm();
    if(returnedValOfValidateForm) {
        console.log("AddEventListener worked and validateForm returned true");
    const theDate = document.querySelector("input[name='journalDate']").value
    const title = document.querySelector("input[name='concepts']").value
    const myEntry = document.querySelector("textarea[name='journalEntry']").value
    const myMood = document.querySelector("select[name='mood']").value
    //we haven't created a user yet - for now, I'll hard code `333`.
    const postObject = {
        // timestamp: Date.now(), we are using date picker
        timestamp: theDate,
        concept: title,
        entry: myEntry,
        mood: myMood,
        userId: 333,
    }
    createPost(postObject).then(dbResponse => {
        showPostList();
    })
    }
    else {
        console.log("AddEventListener worked and evaluated as false... the value of returnedValOfValidatedForm is: " + returnedValOfValidateForm);
        formNotFilledPopUp();
    }   
} if (event.target.id === "cancelBtnId") {
    console.log("you clicked cancelBtnId")
    // showPostEntry(); write this function so journal entry form is added with function and not hard coded as it is currently
    }
});
