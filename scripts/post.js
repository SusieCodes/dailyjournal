import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div class="entry-date">${pageDate}</div>
            <h2 class="entry-concept">${entryObj.concept}</h2>
            <div class="entry-entry">${entryObj.entry}</div>
            <div class="entry-entry">${entryObj.mood}</div>

        </section>`
  }

//   export const JournalEntryComponent = (entryObj) => {
//     let pageDate = formatDate(entryObj.date);
//     return `
//         <section id="entry--${entryObj.id}" class="journalEntry">

//             <div class="entry-date">${pageDate}</div>
//             <h2 class="entry-concept">${entryObj.concept}</h2>
//             <div class="entry-entry">${entryObj.entry}</div>

//         </section>`
// }