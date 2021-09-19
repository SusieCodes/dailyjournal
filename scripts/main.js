import { postList } from "./postList.js" 
import { getPosts } from "./dataManager.js"
import { notFilledInsert } from "./modal.js"


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

// const formModalPopUp = document.querySelector(".modal"); 
// console.log("formModalPopup is saved as: " + formModalPopUp);

// const formNotFilledPopUp = () => {
//     console.log("formNotFilledPopUp is executing");
//     formModalPopUp.innerHTML = notFilledInsert();
//     modal.style.display = "block";
// };

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

// const btn = document.getElementById("btnId");

// btn.addEventListener("click", (event) => {
//     console.log("You clicked button and event is: " + event);
// 	const returnedValOfValidateForm = validateForm();
//     console.log("the saved value of returnedValOfValidateForm inside event listener is: " + returnedValOfValidateForm);
//     if(returnedValOfValidateForm) {
//         console.log("Add Event Listener worked and validateForm returned true");
//         // run a function here
//     } else {
//         console.log("Add Event Listener worked and evaluated as false... the value of returnedValOfValidatedForm is: " + returnedValOfValidateForm);
//         // formNotFilledPopUp();
//     }
// });

// Get the modal location
const savedLocOfModalId = document.getElementById("modalId");

// Get the button that opens modal
const btn = document.getElementById("btnId");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    savedLocOfModalId.style.display = "block";
}

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


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }