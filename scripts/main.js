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

// console.log("appElement value is: ", applicationElement);

applicationElement.addEventListener("click", (event) => {
        const splitId = parseInt(event.target.id.split("--")[1]);
        const strSplitId = splitId.toString();
        if (splitId) {
            console.log(splitId)
            alert("You clicked on post number " + strSplitId)
        } else {
            console.log("failed, splitId is - " + splitId)
        }
})

const formNotFilledPopUp = () => {
    console.log("formNotFilledPopUp is executing");
    const formModalPopup = document.getElementById("modal");
    formModalPopup.innerHTML = `
    <div class="modal__content">
        <span id="close-modal" class="close-modal">&times;</span>
        <h2>Please Fill Out All Fields In Form To Submit</h2>

        <div class="modal__content--not-filled">
            <img src="./images/fillform.jpg" alt="Please Fill Out All Fields"/>
        </div> <!-- closes modal__content--not-filled -->
    </div> <!-- closes modal__content -->
    `;
    modal.style.display = "block";
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

const formButton = document.getElementById("button");
// console.log("formButton is: " + formButton);

formButton.addEventListener("click", (event) => {
    console.log("You clicked button and event is: " + event);
	const returnedValOfValidateForm = validateForm();
    console.log("the saved value of returnedValOfValidateForm inside event listener is: " + returnedValOfValidateForm);
    if(returnedValOfValidateForm) {
        console.log("Add Event Listener worked and validateForm returned true");
        // run a function here
    } else {
        console.log("Add Event Listener worked and evaluated as false... the value of returnedValOfValidatedForm is: " + returnedValOfValidateForm);
        formNotFilledPopUp();
    }
});